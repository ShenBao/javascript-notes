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

## gulp-rename

用来重命名文件流中的文件。用gulp.dest()方法写入文件时，文件名使用的是文件流中的文件名，如果要想改变文件名，那可以在之前用gulp-rename插件来改变文件流中的文件名。

```
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require("gulp-uglify");
 
gulp.task('rename', function () {
    gulp.src('js/jquery.js')
    .pipe(uglify())  //压缩
    .pipe(rename('jquery.min.js')) //会将jquery.js重命名为jquery.min.js
    .pipe(gulp.dest('js'));
    //关于gulp-rename的更多强大的用法请参考https://www.npmjs.com/package/gulp-rename
});
```


## gulp 之 gulp-sourcemaps

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

## gulp-util

让命令行输出的文字带颜色

```
var gulp = require('gulp')
var gutil = require('gulp-util')

gulp.task('default', function () {
    gutil.log('message')
    gutil.log(gutil.colors.red('error'))
    gutil.log(gutil.colors.green('message:') + "some")
})
```

## gulp-shell

```
var gulp = require('gulp');
var shell = require('gulp-shell');


gulp.task('del', function () {
  return gulp.src('dist')
    .pipe(shell(['rm -rf ' + 'dist']))
});
```

## gulp 之 gulp-load-plugins

自动加载插件


要使用gulp的插件，首先得用require来把插件加载进来，如果我们要使用的插件非常多，那我们的gulpfile.js文件开头可能就会是这个样子的：

```
var gulp = require('gulp'),
    //一些gulp插件,abcd这些命名只是用来举个例子
    a = require('gulp-a'), 
    b = require('gulp-b'),
    c = require('gulp-c'),
    d = require('gulp-d'),
    e = require('gulp-e'),
    f = require('gulp-f'),
    g = require('gulp-g'),
    //更多的插件...
    z = require('gulp-z');  
```

虽然这没什么问题，但会使我们的gulpfile.js文件变得很冗长，看上去不那么舒服。gulp-load-plugins插件正是用来解决这个问题。
gulp-load-plugins这个插件能自动帮你加载package.json文件里的gulp插件。例如假设你的package.json文件里的依赖是这样的:

```
{
  "devDependencies": {
    "gulp": "~3.6.0",
    "gulp-rename": "~1.2.0",
    "gulp-ruby-sass": "~0.4.3",
    "gulp-load-plugins": "~0.5.1"
  }
}
```
然后我们可以在gulpfile.js中使用gulp-load-plugins来帮我们加载插件：

```
var gulp = require('gulp');
//加载gulp-load-plugins插件，并马上运行它
var plugins = require('gulp-load-plugins')();
```

然后我们要使用gulp-rename和gulp-ruby-sass这两个插件的时候，就可以使用plugins.rename和plugins.rubySass来代替了,也就是原始插件名去掉gulp-前缀，之后再转换为驼峰命名。
实质上gulp-load-plugins是为我们做了如下的转换
```
plugins.rename = require('gulp-rename');
plugins.rubySass = require('gulp-ruby-sass');
```
gulp-load-plugins并不会一开始就加载所有package.json里的gulp插件，而是在我们需要用到某个插件的时候，才去加载那个插件。
最后要提醒的一点是，因为gulp-load-plugins是通过你的package.json文件来加载插件的，所以必须要保证你需要自动加载的插件已经写入到了package.json文件里，并且这些插件都是已经安装好了的。


## gulp 之 gulp-watch-path stream-combiner2

###  gulp-watch-path

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


### stream-combiner2

如果文件中有 js 语法错误时，gulp 会终止运行并报错。

应对这种情况，我们可以使用 [Combining streams to handle errors](https://github.com/gulpjs/gulp/blob/master/docs/recipes/combining-streams-to-handle-errors.md) 文档中推荐的 [stream-combiner2](https://github.com/substack/stream-combiner2)  捕获错误信息。

```
var handleError = function (err) {
    var colors = gutil.colors;
    console.log('\n')
    gutil.log(colors.red('Error!'))
    gutil.log('fileName: ' + colors.red(err.fileName))
    gutil.log('lineNumber: ' + colors.red(err.lineNumber))
    gutil.log('message: ' + err.message)
    gutil.log('plugin: ' + colors.yellow(err.plugin))
}
var combiner = require('stream-combiner2')

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

        var combined = combiner.obj([
            gulp.src(paths.srcPath),
            uglify(),
            gulp.dest(paths.distDir)
        ])

        combined.on('error', handleError)
    })
})
```






