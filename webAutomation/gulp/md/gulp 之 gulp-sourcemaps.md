
# gulp 之 gulp-sourcemaps


压缩前和压缩后比较


压缩后的代码不存在换行符和空白符，导致出错后很难调试，好在我们可以使用 sourcemap 帮助调试


```
var sourcemaps = require('gulp-sourcemaps')
// ...
var combined = combiner.obj([
    gulp.src(paths.srcPath),
    sourcemaps.init(),
    uglify(),
    sourcemaps.write('./'),
    gulp.dest(paths.distDir)
])
// ...
```

此时 dist/js/ 中也会生成对应的 .map 文件，以便使用 Chrome 控制台调试代码 在线文件示例：src/js/

```
gulp.task('uglifyjs', function () {
    var combined = combiner.obj([
        gulp.src('src/js/**/*.js'),
        sourcemaps.init(),
        uglify(),
        sourcemaps.write('./'),
        gulp.dest('dist/js/')
    ])
    combined.on('error', handleError)
})
```









