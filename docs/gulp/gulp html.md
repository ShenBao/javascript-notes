# gulp html


## gulp-htmlmin

使用gulp-htmlmin压缩html，可以压缩页面javascript、css，去除页面空格、注释，删除多余属性等操作。

`npm install gulp-htmlmin --save-dev`

基本使用（更多参数至[链接](https://github.com/kangax/html-minifier#user-content-options-quick-reference)）
```
var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin');
 
gulp.task('testHtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('src/html/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/html'));
});
```





















## gulp-inline-source

一些touch上的活动页，样式和脚本都不多，与其增加额外的请求数，不如把样式和脚本都以内联的方式嵌到html文件中。


```
var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');

// 把css、js以inline的形式插入html
gulp.task('inlinesource', function () {
    var options = {
        compress: false 是否压缩
    };
    return gulp.src('app/index.html')
        .pipe(inlinesource(options))
        .pipe(gulp.dest('dist'));
});


```

HTML
```
<!-- located at src/html/index.html -->
<html>
  <head>
    <!-- inline src/js/inlineScript.js -->
    <script src="../js/inlineScript.js" inline></script> 
  </head>
  <body>
  </body>
</html>
```
js
```
// located at src/js/inlineScript.js 
 
function test() {
  var foo = 'lorem ipsum';
  return foo;
}
```
Output:
```
<html>
  <head>
    <script>function test(){var a="lorem ipsum";return a}</script> 
  </head>
  <body>
  </body>
</html>
```