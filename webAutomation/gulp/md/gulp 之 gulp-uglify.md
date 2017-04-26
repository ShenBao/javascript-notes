
# 使用 gulp 压缩 JS


压缩 js 代码可降低 js 文件大小，提高页面打开速度。在不利用 gulp 时我们需要通过各种工具手动完成压缩工作。


```
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('script', function() {
    var options = {
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true,//类型：Boolean 默认：true 是否完全压缩
            preserveComments: 'all' //保留所有注释
        };
    gulp.src('js/*.js')
        .pipe(uglify(options))
        .pipe(gulp.dest('dist/js'))
});
```

Options

    mangle
    output
    compress
    preserveComments:all/license/function/some (deprecated)


Errors

    fileName: The full file path for the file being minified.
    cause: The original UglifyJS error, if available.
    message (or msg)
    filename
    line


