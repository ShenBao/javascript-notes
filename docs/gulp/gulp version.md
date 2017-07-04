# gulp version

## gulp-rev-append

使用gulp-rev-append给页面的引用添加版本号，清除页面引用缓存。


`npm install gulp-rev-append --save-dev`

```
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style/style-one.css?rev=d65aaba987e9c1eefeb4be9cfd34e0de">
    <script src="script/script-one.js?rev=17a5da6c8a2d875cf48aefb722eefa07"></script>
    <script src="script/script-two.js"></script>
  </head>
  <body>
    <div><p>hello, world!</p></div>
    <script src="script/script-three.js?rev=5cadf43edba6a97980d42331f9fffd17"></script>
  </body>
</html>
```

配置html页面引用 : gulp-rev-append 插件将通过正则(?:href|src)=”(.*)[?]rev=(.*)[“]查找并给指定链接填加版本号（默认根据文件MD5生成，因此文件未发生改变，此版本号将不会变）

```
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="css/style.css?rev=@@hash">
    <script src="js/js-one.js?rev=@@hash"></script>
    <script src="js/js-two.js"></script>
  </head>
  <body>
    <div>hello, world!</div>
    <img src="img/test.jpg?rev=@@hash" alt="" />
    <script src="js/js-three.js?rev=@@hash"></script>
  </body>
</html>
```

基本使用（给页面引用url添加版本号，以清除页面缓存）
```
var gulp = require('gulp'),
    rev = require('gulp-rev-append');
 
gulp.task('testRev', function () {
    gulp.src('src/html/index.html')
        .pipe(rev())
        .pipe(gulp.dest('dist/html'));
});
```











