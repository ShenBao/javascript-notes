# gulp + webpack + react 相关配置文档

```

project                              // 项目文件夹　　　　
├──  .babelrc                        // 将 es6 代码转换成浏览器可支持的 es5 代码所涉及到的相关配置　　　　
├──  .eslintrc                       // eslint 相关配置，使 ES6 和 jsx 格式的 js 可以基于 Eslint 来实现　　　　
├──  .gitignore                      // 配置可忽略文件，这些文件不用上传到 github 上　　　　
├──  package.json                    // 项目配置　　　　
├──  README.md                       // 项目须知　　　　
├──  gulpfile.js                     // gulp 配置文件　　　　
├──  webpack.config.js               // webpack 配置文件　　　　
├──  doc　　　　　　　　　　　　　　　　// doc 目录：放置应用文档　　　　
├──  test                            // test 目录：测试文件　　　　
├──  dist                            // dist 目录：放置开发时候的临时打包文件　　　　
├──  bin　　　　　　　　　　　　　　　　// bin 目录：放置 prodcution 打包文件　　　　
├──  mocks                           // 数据 mock 相关　　　　
├──  src                             // 源文件目录　　　　
│    ├──  assets                     // 图片等应用资源目录　　　　
│    │    ├──  images                // 图片资源　　　　
│    │    └──  fonts                 // 字体图标文件资源　　　　
│    ├──  html                       // html 目录　　　　
│    │    ├──  index.html            //
│    │    └──  page1.html            //　　　　
│    ├──  js                         // js 目录　　　　
│    │    ├──  common                // 所有页面的共享区域，可能包含共享组件，共享工具类　　　　
│    │    ├──  home                  // home 页面 js 目录　　　　
│    │    │    ├──  components       // 组件　　　　
│    │    │    │    └──  App.js      //　
│    │    │    └──  index.js         // 每个页面会有一个入口，统一为 index.js　　　　
│    │    └──  page1                 // page1 页面 js 目录　　　　
│    │         ├──  components       // 　
│    │         │    └──  App.js      //　
│    │         └──  index.js         //
│    └──  style                      // style 目录　　　　
│         ├──　common                // 公共样式区域　　　　
│         │    ├──　varables.scss    // 公共共享变量　　　　
│         │    └──　index.scss       // 公共样式入口　　　　
│         ├──　home                  // home 页面样式目录　　　　
│         │   ├──  components        // home 页面组件样式目录　　　　
│         │    │    └──  App.scss    //　　　　
│         │    └──  index.scss       // home 页面样式入口　　　　
│         └──　page1                 // page1 页面样式目录　　　　
│              ├──  components       // 　　　　
│              │　　└──  App.scss    //  　　　　
│              └──  index.scss      //  　　　　
└──  vendor                         // 项目依赖插件　　　　
     ├── bootstrap　　　　
     └── jquery　　　　

```


> tips: 1. Eslint 配置 .eslintrc 时相关依赖： `eslint` , `eslint-loader` , `eslint-plugin-react` .
