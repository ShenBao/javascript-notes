
## 模块热替换


全称是Hot Module ReplaceMent(HMR)，理解成热模块替换或者模块热替换都可以吧，和.net中的热插拔一个意思，就是在运行中对程序的模块进行更新。这个功能主要是用于开发过程中，对生产环境没有任何帮助(这一点区别.net热插拔)。效果上就是界面的无刷新更新。

HMR基于WDS，style-loader可以通过它来实现无刷新更新样式。但是对于JavaScript模块就需要做一点额外的处理，怎么处理继续往下看。因为HMR是用于开发环境的，所以我们修改下配置，做两份准备。一个用于生产，一个用于开发。

```webpack
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const commonConfig={
 entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
    }),
  ],
}
 
function developmentConfig(){
  const config ={
    devServer:{
      //使能历史记录api
      historyApiFallback:true,
       hotOnly:true,//关闭热替换 注释掉这行就行
       stats:'errors-only',
      host:process.env.Host,
      port:process.env.PORT,
      overlay:{
        errors:true,
        warnings:true,
      }
    },
     plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
   return Object.assign(
    {},
    commonConfig,
    config,
    {
      plugins: commonConfig.plugins.concat(config.plugins),
    }
  );
}

module.exports = function(env){
  console.log("env",env);
  if(env=='development'){
    return developmentConfig();
  }
   return commonConfig;
};
```
这个webpack.config.js建立了两个配置，一个是commonConfig，一个是developmentConfig 两者通过env参数来区分，但这个env参数是怎么来的呢？

看看之前的
```
 "scripts": {
   "start": "nodemon --watch webpack.config.js --exec \"webpack-dev-server --env development\"",
    "build": "webpack --env production"
  },
```

通过npm start 启动的话，进入的就是开发环境配置，如果是直接build，那么就是生产环境的方式



## webpack-dev-server

webpack是通过webpack-dev-server(WDS)来实现自动刷新。WDS是一个运行在内存中的开发服务器(一个express)。启动之后，它会检测文件是否发生改变并再自动编译一次。

设置
```
 "scripts": {
    "start": "webpack-dev-server --env development",
    "build": "webpack --env production"
  }
```
现在就可以通过npm run start 或者 npm start来启动了


## nodemon 自动启动

 WDS是监视开发文件的，webpack.config.js改变不会引起自动启动。所以我们需要nodemon去做这件事情。

```
npm install nodemon --save-dev
```
先安装在开发目录，然后修改package.json:
```
 "scripts": {
   "start": "nodemon --watch webpack.config.js --exec \"webpack-dev-server --env development\"",
    "build": "webpack --env production"
  },
```
等于让nodemon去监视webpack.config.js，变化了就去启动它。


## 代理

不过有一点疑问，就是WDS这个站点的替代性，因为我们自己部署的nginx有一些api的代理。如果挂在WDS的这个默认站点上自然是无法访问的。换句话说可否给WDS配置一个刷新路径。如果文件改变去刷新指定的地址，或者让我去配个代理。既然它本身是一个http服务器，肯定也有代理的功能。搜了下果然有：https://github.com/webpack/webpack-dev-server/tree/master/examples/proxy-advanced

```
module.exports = {
    context: __dirname,
    entry: "./app.js",
    devServer: {
        proxy: {
            "/api": {
                target: "http://jsonplaceholder.typicode.com/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                },
                bypass: function(req) {
                    if(req.url === "/api/nope") {
                        return "/bypass.html";
                    }
                }
            }
        }
    }
}
```
即将api这个字段替换成http://jsonplaceholder.typicode.com/，并将其从原地址中删掉，这样就可以自己实现代理了。皆大欢喜！WDS是通过 http-proxy-middleware 来实现代理。更多参考：http://webpack.github.io/docs/webpack-dev-server.html#bypass-the-proxy;https://github.com/chimurai/http-proxy-middleware#options

but，这种刷新是怎么实现的呢？因为页面上没有嵌入什么别的js，去翻原码 web-dev-server/server.js中有这么一段：
```
Server.prototype._watch = function(path) {
    const watcher = chokidar.watch(path).on("change", function() {
        this.sockWrite(this.sockets, "content-changed");
    }.bind(this))

    this.contentBaseWatchers.push(watcher);
}
```
用chokidar来监视文件变化,server的内部维护的有一个socket集合：
```
Server.prototype.sockWrite = function(sockets, type, data) {
    sockets.forEach(function(sock) {
        sock.write(JSON.stringify({
            type: type,
            data: data
        }));
    });
}
```
sock是一个sockjs对象。https://github.com/sockjs/sockjs-client，从http://localhost:8080/webpack-dev-server/页面来看，sockjs是用来通信记录日志的。  
```
var onSocketMsg = {
    hot: function() {
        hot = true;
        log("info", "[WDS] Hot Module Replacement enabled.");
    },
    invalid: function() {
        log("info", "[WDS] App updated. Recompiling...");
        sendMsg("Invalid");
    },
    hash: function(hash) {
        currentHash = hash;
    },
...
}
```
我们在看app.js,其中有一个OnSocketMsg 对象。

ok的时候触发一个reloadApp
```
function reloadApp() {
    if(hot) {
        log("info", "[WDS] App hot update...");
        var hotEmitter = __webpack_require__("./node_modules/webpack/hot/emitter.js");
        hotEmitter.emit("webpackHotUpdate", currentHash);
        if(typeof self !== "undefined") {
            // broadcast update to window
            self.postMessage("webpackHotUpdate" + currentHash, "*");
        }
    } else {
        log("info", "[WDS] App updated. Reloading...");
        self.location.reload();
    }
}
```
也就是说WDS先检测文件是否变化，然后通过sockjs通知到客户端，这样就实现了刷新。之前WebSocket的第三方只用过socket.io,看起来sockjs也蛮好用的。不必外带一个js，在主js里面就可以写了。



## 输出样式文件

ss嵌在页面里面不是我们想要的，我们希望能够分离，公共的部分能够分开。extracttextplugin 可以将多个css合成一个文件，但是它不支持HMR(直接注释掉hotOnly:true)。用在生产环境挺好的
```
npm install extract-text-webpack-plugin --save-dev
```
先安装extracttextplugin这个插件，然后再webpack.config.js中进行配置：
```
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractTxtplugin = new ExtractTextPlugin({
    filename: '[name].[contenthash:8].css',
});

const commonConfig={
 entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
   module:{
       rules:[{
           test:/\.css$/,
            use:extractTxtplugin.extract({
            use:'css-loader',
            fallback: 'style-loader',
          })
     }]},
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
    }),
    extractTxtplugin
  ],
}
```
一开始看到这个配置，让人有点懵。首先看fileName，表示最后输出的文件按照这个格式'[name].[contenthash:8].css'，name默认是对应的文件夹名称(这里是app)，contenthash会返回特定内容的hash值，而:8表示取前8位。当然你也可以按照其他的格式写，比如直接命名：

new ExtractTextPlugin('style.css')
而ExtractTextPlugin.extract本身是一个loader。fallback:'style-loader'的意思但有css没有被提取(外部的css)的时候就用style-loader来处理。注意到现在我们的index.js如下：






































































