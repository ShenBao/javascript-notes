
# gulp plugins list

    gulp-less ：less插件
    gulp-notify：通知
    gulp-clean-css：文件压缩
    gulp-stylus ： Stylus 编译成 CSS.
    vinyl-paths：管道删除 gulp.src先定义一个位置 然后.pipe(vinylPaths(del))不建议写
    gulp-base64：base64
    gulp-typescript - TypeScript 编译成JavaScript.
    gulp-load-plugins 自动加载插件
    gulp-sequence ： 顺序执行  gulp4.0已经解决
    gulp-nodemon 自动启动/重启你的node程序，开发node服务端程序必备
    gulp-livereload 后端控制前端同步刷新，不过需要依赖 chrome 插件 LiveReload
    gulp-minify-html 压缩html
    gulp-ruby-sass : 支持sass 
    gulp-minify-css : 压缩css 
    gulp-jshint : 检查js
    gulp-jslint ： javascript代码质量检测工具。
    gulp-uglify : 压缩js 
    gulp-concat : 合并文件 
    gulp-rename : 重命名文件 
    gulp-htmlmin : 压缩html 
    gulp-clean : 清空文件夹
    gulp-swig: 模版层面的前后端分离
    gulp-rev：版本控制
    gulp-rev-collector：路径修改器
    run-sequence 让gulp任务，可以相互独立，解除任务间的依赖，增强task复用，同步执行 (重要，有些报错就是因为这个没弄好) (注意: 在 Gulp4.0 中, 已经提供了 gulp.series 方法)
    del  删除文件/文件夹
    gulp-coffee ：编译coffee代码为Js代码，使用coffeescript必备
    coffee-script gulpfile默认采用js后缀，如果要使用gulpfile.coffee来编写，那么需要此模块
    yargs 用于获取启动参数，针对不同参数，切换任务执行过程时需要
    gulp-util gulp常用的工具库,提供一些辅助方法。
    gulp-sourcemaps  处理JS时，生成SourceMap
    connect-history-api-fallback 开发angular应用必须，用于支持HTML5 history API.
    gulp-load-plugins 可以加载package.json文件中所有的gulp模块
    gulp-handlebars  模版引擎库， ember.js用它作为前端的模版引擎。gulp-handlebars编译handlebars文件。
    gulp-usemin 
    gulp-inject  可以注入css,javascript和web组件，不需手工更新ndex.html。
    gulp-header  为管道中的文件增加header。
    gulp-footer
    gulp-filter  筛选vinyl stream中的文件。
    gulp-changed 只允许改变的文件通过管道。
    gulp-bower 执行bower安装。
    gulp-if  有条件的执行任务
    gulp-replace 字符串替换插件。
    gulp-shell 可以执行shell命令
    gulp-exec exec插件
    gulp-install 安装npm和bower包， 如果它们的配置文件存在的话。
    gulp-ignore忽略管道中的部分文件。
    gulp-wrap 将一个lodash模版包装成流内容。
    gulp-declare  安全的声明命名空间，设置属性。
    gulp-cached 以及 gulp-remember 增量编译
    browser-sync 保持多浏览器、多设备同步、在前端开发是非常有用，可谓是必备组件。静态文件服务器，同时也支持浏览器自动刷新
    gulp-gzip Gzip 插件
    gulp-markdown markdown 不用多说，这个基本上都要用到。
    gulp-plumber 错误处理插件，如果不希望总是因为错误而中断任务的话，那么它几乎是必备组件
    less-plugin-autoprefix  处理 css3 前缀
    gulp-imagemin集成了 gifsicle 、 jpegtran 、 optipng 、 svgo 这4个插件。而imagemin-pngquant是imagemin插件的一个扩展插件，用于深度压缩图片。
    gulp-css-spriter：雪碧图 现在不流行这个流行base64和
    gulp-tinypng： magemin-pngquant深度压缩后的大小。
    gulp-cache ：缓存代理
    node-glob
    gulp-babel：babel es6->es5
    gulp-tar：
    gulp-cssshrink：
    gulp-browserify
    gulp-gh-pages
    gulp-svgmin ： 压缩 SVG 文件
    merge-stream - Merge multiple streams into one interleaved stream.
    event-stream - 方便操作stream
    gulp-changed - 只通过修改过的文件
    gulp-changed-in-place - 只通过修改过的文件 
        区别? gulp-changed 比较的是生成的文件, gulp-changed-in-place比较的是源文件, 复杂情况用后者. (比如需要babel的时候)
    gulp-order - 重新对文件进行排序 (引入顺序重要的话, 这个插件结合 event-stream 是神器)
    gulp-csslint - 通过CSSLint自动校验CSS.
    gulp-eslint - ECMAScript/JavaScript代码校验.

    Angular相关
    gulp-angular-templatecache - 在$templateCache中联系并注册AngularJS模板
    gulp-ng-html2js - 将html转化为js文件, 感觉和 gulp-angular-templatecache 差不多
    gulp-ng-annotate - 自动添加依赖注入

    其他
    gulp-iife - 将js文件包裹在一个立即执行函数中.
    gulp-size - 输出文件打下
    gulp-util - 一些工具方法
    gulp-replace - 字符串替换 (参考 如何替换掉babel生成的全局’use strict’)
    gulp-rename - 重命名文件
    gulp-rev -给静态文件打版本号 unicorn.css → unicorn-d41d8cd98f.css.
    del - Delete files/folders using globs.
    yargs - 处理 process.argv
    require-dir 分离gulp任务到多个文件

    文档
    jsdoc - 生成js的API文档
    docdash - 一款主题


    gulp-nunjucks-render
    gulp-data
    gulp-iconfont
    ulp-rev-replace
    gulp-rev-napkin
    gulp-svgstore
    gulp-sizereport
    compression
    morgan
    gulp-cssnano
    gulp-clone
    vinyl-source-stream

    gulp-flatten 当拷贝文件时，不想拷贝目录时使用 segmentfault

    gulp-csso 优化CSS


- **AngularJS**
  - [gulp-ng-annotate](https://github.com/Kagami/gulp-ng-annotate) 注明依赖 for angular
  - [gulp-ng-html2js](https://github.com/marklagendijk/gulp-ng-html2js) html2js for angular
  - [gulp-angular-extender](https://libraries.io/npm/gulp-angular-extender) 为angular module添加dependencies
  - [gulp-angular-templatecache](https://github.com/miickel/gulp-angular-templatecache) 将html模板缓存到$templateCache中





