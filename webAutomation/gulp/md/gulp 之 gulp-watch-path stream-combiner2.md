
# gulp-watch-path


利用 gulp-watch-path 配合 event 获取编译路径和输出路径。



```
var watchPath = require('gulp-watch-path')

gulp.task('watchjs', function () {
    gulp.watch('src/js/**/*.js', function (event) {
        var paths = watchPath(event, 'src/', 'dist/')
        /*
        paths
            { srcPath: 'src/js/log.js',
              srcDir: 'src/js/',
              distPath: 'dist/js/log.js',
              distDir: 'dist/js/',
              srcFilename: 'log.js',
              distFilename: 'log.js' }
        */
		gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('Dist ' + paths.distPath)

        gulp.src(paths.srcPath)
            .pipe(uglify())
            .pipe(gulp.dest(paths.distDir))
    })
})
```

**`watchPath(event, search, replace, distExt)`**

| 参数 | 说明 |
|--------|--------|
|    event    |`gulp.watch` 回调函数的 `event`|
|    search   |需要被替换的起始字符串|
|    replace  |第三个参数是新的的字符串|
|   distExt   |扩展名(非必填)|




# stream-combiner2

如果文件中有 js 语法错误时，gulp 会终止运行并报错。

应对这种情况，我们可以使用 [Combining streams to handle errors](https://github.com/gulpjs/gulp/blob/master/docs/recipes/combining-streams-to-handle-errors.md) 文档中推荐的 [stream-combiner2](https://github.com/substack/stream-combiner2)  捕获错误信息。


```
var gulp = require('gulp')
var watchPath = require('gulp-watch-path')
var uglify = require('gulp-uglify')
var combiner = require('stream-combiner2')
 
gulp.task('default', function () {
    gulp.watch('src/**/*.js', function (event) {
        var paths = watchPath(event,'src/', 'dist/');
        /*
        paths
            srcPath: 'src/file.js',
            distDir: 'dist/'
        */
        var combined = combiner.obj([
            gulp.src(paths.srcPath), // src/file.js 
            uglify(),
            gulp.dest(paths.distDir) // dist/ 
        ]);
        combined.on('error', function (err) {
            console.log('--------------')
            console.log('Error')
            console.log('fileName: ' + err.fileName)
            console.log('lineNumber: ' + err.lineNumber)
            console.log('message: ' + err.message)
            console.log('plugin: ' + err.plugin)
        })
 
        console.log('\n')
        console.log(event.type + ': ' + paths.srcPath)
        console.log('dist: ' + paths.distPath)
        /*
        changed: src/file.js
        dist: dist/file.js
        */
    })
})
```






