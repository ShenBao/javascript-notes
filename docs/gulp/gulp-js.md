# gulp js


## gulp-uglify

使用gulp-uglify压缩javascript文件，减小文件大小。

`npm install gulp-uglify --save-dev`

基本使用
```
var gulp = require('gulp'),
    uglify = require('gulp-uglify');
 
gulp.task('jsmin', function () {
    gulp.src('src/js/index.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
```

指定变量名不混淆改变
```
var gulp = require('gulp'),
    uglify= require('gulp-uglify');
 
gulp.task('jsmin', function () {
    gulp.src(['src/js/*.js', '!src/js/**/{test1,test2}.js'])
        .pipe(uglify({
            //mangle: true,//类型：Boolean 默认：true 是否修改变量名
            mangle: {except: ['require' ,'exports' ,'module' ,'$']}//排除混淆关键字
        }))
        .pipe(gulp.dest('dist/js'));
});
```

gulp-uglify其他参数 [具体参看](https://github.com/terinjokes/gulp-uglify#user-content-options)
```
var gulp = require('gulp'),
    uglify= require('gulp-uglify');
 
gulp.task('jsmin', function () {
    gulp.src(['src/js/*.js', '!src/js/**/{test1,test2}.js'])
        .pipe(uglify({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true,//类型：Boolean 默认：true 是否完全压缩
            preserveComments: 'all' //保留所有注释
        }))
        .pipe(gulp.dest('dist/js'));
});
```

Options
- mangle
- output
- compress
- preserveComments:all/license/function/some (deprecated)

Errors
- fileName: The full file path for the file being minified.
- cause: The original UglifyJS error, if available.
- message (or msg)
- filename
- line


## gulp-webpack gulp-uglify vinyl-named imports-loader

基于CommonJs的模块化方式，多页应用

```
var gulp = require('gulp');

var named = require('vinyl-named');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');

// js 模块化
gulp.task('js', function () {
  gulp.src(srcFiles.js)
    // js commonjs规范模块化编译
    .pipe(named())
    .pipe(webpack({
      output: {
        filename: '[name].js'
      },
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'imports?define=>false'
        }]
      },
      devtool: "#eval-source-map"
    }))
    // js 压缩
    .pipe(uglify().on('error', function (e) {
      console.log('\x07', e.lineNumber, e.message);
      // 在控制台上输出
      return this.end();
    }))
    .pipe(gulp.dest(distFiles.js));
});
```

1. 对于有多个入口文件（entry point）的情况，需要使用vinyl-named这个模块，这样就能实现以下打包需求

```
src/scripts/index.js -> prd/scripts/index.js
src/scripts/touch.js -> prd/scripts/touch.js
在output里面可以设置打包后的文件名，如 "[name].min.js"
```

2. 我在项目中使用的是commonjs的模块化方式，但大多数插件（如jquery或zepto插件）都是支持两种模块化方式，并且是先判断 define 再判断 module.export，所以我们需要“屏蔽”amd的模块加载方式。

    首先安装`imports-loader`模块，然后做如下配置：

```
module: {
    loaders: [{
        test: /\.js$/,
        loader: "imports?define=>false"
    }]
}
```

这样我们就能放心地使用各种插件了。

3. 我的项目中使用了HoganJs作为前端模块，在webpack中只要找到相应的加载器就行。

    首先安装[mustache-loader](https://github.com/deepsweet/mustache-loader)模块，然后做如下配置：

```
module: {
    loaders: [{
        test: /\.html$/,
        loader: 'mustache'
    }]
}
```
test就是要处理的文件类型，loader就是处理文件的加载器。


## gulp-browserify

browserify可以为浏览器编译node风格的遵循commonjs的模块。 它搜索文件中的require()调用， 递归的建立模块依赖图。

```
var gulp = require('gulp');
var browserify = require('gulp-browserify');
// Basic usage
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('src/js/app.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./build/js'))
});
```

## gulp-jshint

jshint是一个侦测javascript代码中错误和潜在问题的工具。

```
var jshint = require('gulp-jshint');
var gulp   = require('gulp');
gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});
```

```
jshint({
    asi: false,//值为false时，如果代码末尾省略了分号，则JSHint会给出警告；值为true时，则不会.
    bitwise:true,//禁止位运算符
    latedef: true,//禁止变量没有定义就使用
    noarg: true, //止在javascript代码中使用arguments.caller and arguments.callee.
    newcap: true, //要求将构造函数的名字大写
    noempty: true,//禁止空的代码块 if(a){}
    nonew: true,  //禁止使用构造函数，因为它会带来一些不必要的副作用 new MyConstructor();
    laxcomma: false,//值为true时，允许逗号出现在行首的换行方式；值为false时，会给出警告
    multistr: false,//值为true时，允许多行字符串；值为false时，则会给出警告.
    proto: false,  //作用：值为true时，允许在代码中使用__proto__属性；值为false时，则会给出警告
    supernew:false,//是否允许使用像"new function() {...}"这样怪异的构造器，true -- 允许，false -- 不允许.
    scripturl: true,//值为true时，允许在代码中使用"javascript:..."这样的url；值为false时，则会给出警告.
    validthis:true,//是否允许在严格模式下的非构造函数中使用this，true -- 允许，false -- 不允许.
    globals: { "testGlobal": false },//设定全局变量  指定为true，属性可读写；指定为false：属性只读
    strict: true, //要求所有函数遵循ECMAScript 5的严格模式
    curly: true, //检测代码不使用花括号{
    freeze: true,//扩展原生对象原型 true：禁止； false：允许
    expr: true,   //放开表达式（expressions）的使用
    unused: true, //该选项激活后，对于"已定义却未使用的变量"会给出警告
    sub: true,    //子属性的访问方式是 obj.aa 还是 obj['aa']
//  debug: true  //屏蔽debugger调试语句,
    devel: true,  //该选项定义了用于调试的全局变量（如alert，console），true -- 启用，false -- 关闭
    undef: true,   //值为true时，禁止使用未定义的变量
    eqnull: false  //值为false时，如果代码中使用"=="来比较变量与null，则JSHint会给出警告；值为true时，则不会.
})
```

## gulp-jslint

jslint是一个javascript代码质量检测工具。

```
var gulp = require('gulp');
var jslint = require('gulp-jslint');
// build the main source into the min file
gulp.task('default', function () {
    return gulp.src(['source.js'])
        // pass your directives
        // as an object
        .pipe(jslint({
            // these directives can
            // be found in the official
            // JSLint documentation.
            node: true,
            evil: true,
            nomen: true,
            // you can also set global
            // declarations for all source
            // files like so:
            global: [],
            predef: [],
            // both ways will achieve the
            // same result; predef will be
            // given priority because it is
            // promoted by JSLint
            // pass in your prefered
            // reporter like so:
            reporter: 'default',
            // ^ there's no need to tell gulp-jslint
            // to use the default reporter. If there is
            // no reporter specified, gulp-jslint will use
            // its own.
            // specify whether or not
            // to show 'PASS' messages
            // for built-in reporter
            errorsOnly: false
        }))
        // error handling:
        // to handle on error, simply
        // bind yourself to the error event
        // of the stream, and use the only
        // argument as the error object
        // (error instanceof Error)
        .on('error', function (error) {
            console.error(String(error));
        });
});
```





