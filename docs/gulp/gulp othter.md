# gulp other




## gulp-concat

使用gulp-concat合并javascript文件，减少网络请求。

`npm install gulp-concat --save-dev`

基本使用
```

var gulp = require('gulp'),
    concat = require('gulp-concat');
 
gulp.task('testConcat', function () {
    gulp.src('src/js/*.js')
        .pipe(concat('all.js'))//合并后的文件名
        .pipe(gulp.dest('dist/js'));
});
```