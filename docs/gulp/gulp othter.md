# gulp other

## gulp 之 copy

copy文件

```
gulp.task('copy', function () {
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'))
})
```

## gulp 之 del

这也是一个非常简单但是很常用的功能, 一般在构建一个项目的时候需要把构建目录先删除掉

```

var gulp = require('gulp');
var del = require('del');

gulp.task('del', function () {
    return del('dist'
        // ,  {force: true}
    )
});
```

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