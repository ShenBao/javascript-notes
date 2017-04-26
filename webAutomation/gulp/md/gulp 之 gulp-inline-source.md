
# gulp-inline-source

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









