
https://juejin.im/entry/5727f912f38c840059d26002?from=timeline

https://github.com/xiaoyu2er/automating-your-workflow-with-gulp


插件
编译

CSS

gulp-sass - 将 Sass 编译成 CSS
gulp-less - Less 编译成 CSS.
gulp-stylus - Stylus 编译成 CSS.
gulp-autopreﬁxer - 添加厂商前缀
JS

gulp-typescript - TypeScript 编译成JavaScript.
gulp-babel - ES6编译成ES5
合并

gulp-concat - 合并文件.
压缩

gulp-clean-css - 压缩 CSS
gulp-uglify - 压缩 JavaScript
gulp-sourcemaps - 生成 source maps
gulp-htmlmin - 压缩 HTML 通过
gulp-imagemin - 压缩 PNG, JPEG, GIF and SVG 图片
gulp-svgmin - 压缩 SVG 文件
资源注入

gulp-inject - 将指定的css或js文件以标签的形式插入到HTML中的指定标志内。
流程控制

run-sequence - 按照顺序执行task (注意: 在 Gulp4.0 中, 已经提供了 gulp.series 方法)
gulp-if - If-Else-流程控制
gulp-ignore - 选择性过滤文件
gulp-filter - 过滤文件, 和 gulp-ignore感觉类似
merge-stream - Merge multiple streams into one interleaved stream.
event-stream - 方便操作stream
gulp-plumber - Prevent pipe breaking caused by errors.
gulp-notify - 系统通知
gulp-changed - 只通过修改过的文件
gulp-changed-in-place - 只通过修改过的文件 
区别? gulp-changed 比较的是生成的文件, gulp-changed-in-place比较的是源文件, 复杂情况用后者. (比如需要babel的时候)
gulp-order - 重新对文件进行排序 (引入顺序重要的话, 这个插件结合 event-stream 是神器)
代码校验

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
browser-sync -同步多浏览器
文档

jsdoc - 生成js的API文档
docdash - 一款主题
=======================

Recipes
即将添加…
======================