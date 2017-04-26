
# 使用 gulp 压缩 JS


压缩 js 代码可降低 js 文件大小，提高页面打开速度。在不利用 gulp 时我们需要通过各种工具手动完成压缩工作。


```
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('script', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});
```

- `gulp.task(name, fn)` - 定义任务，第一个参数是任务名，第二个参数是任务内容。
- `gulp.src(path)` - 选择文件，传入参数是文件路径。
- `gulp.dest(path)` - 输出文件
- `gulp.pipe()` - 管道，你可以暂时将 pipe 理解为将操作加入执行队列






