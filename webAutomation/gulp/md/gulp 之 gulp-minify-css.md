
# gulp 压缩 css

压缩 css 代码可降低 css 文件大小，提高页面打开速度。在不利用 gulp 时我们需要通过各种工具手动完成压缩工作。


```
var gulp = require('gulp')

var minifyCSS = require('gulp-minify-css')

gulp.task('css', function () {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
})
```
