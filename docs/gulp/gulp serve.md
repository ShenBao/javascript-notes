











## gulp-livereload

gulp-livereload拯救F5！当监听文件发生变化时，浏览器自动刷新页面。【事实上也不全是完全刷新，例如修改css的时候，不是整个页面刷新，而是将修改的样式植入浏览器，非常方便。】特别是引用外部资源时，刷新整个页面真是费时费力。

有更好的方案，浏览器无需安装插件，且可以同时在PC、平板、手机等设备下进项调试，详细请参考[这里](http://www.browsersync.cn/)

`npm install gulp-livereload --save-dev`

基本使用(当less发生变化的时候，自动更新页面)
```
var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');
 
gulp.task('less', function() {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(livereload());
});
 
//特别注意：若编译less的时候，同时执行其他操作，有可能引起页面刷新，而不是将样式植入页面
//例如下面任务同时生成sourcemap：
//var sourcemaps = require('gulp-sourcemaps');
//gulp.task('less', function () {
//    gulp.src(['src/less/*.less'])
//        .pipe(sourcemaps.init())
//        .pipe(less())
//        .pipe(sourcemaps.write('./'))
//        .pipe(gulp.dest('src/css'))
//        .pipe(livereload());
//});
 
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/less/**/*.less', ['less']);
});
```