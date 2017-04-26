
# gulp 压缩 img

压缩 img 可降低 img 文件大小，提高页面打开速度。在不利用 gulp 时我们需要通过各种工具手动完成压缩工作。

```
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant'); //png图片压缩插件

gulp.task('default', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()] //使用pngquant来压缩png图片
        }))
        .pipe(gulp.dest('dist'));
});
```


