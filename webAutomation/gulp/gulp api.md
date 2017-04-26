
# gulp API
    gulp.src(globs[, options])
    gulp.dest(path[, options])
    gulp.task(name[, deps], fn)
    gulp.watch(glob [, opts], tasks), gulp.watch(glob [, opts, cb])



## gulp.src(globs[, options])

说明：src方法是指定需要处理的源文件的路径，gulp借鉴了Unix操作系统的管道（pipe）思想，前一级的输出，直接变成后一级的输入，gulp.src返回当前文件流至可用插件；


globs：  需要处理的源文件匹配符路径。类型(必填)：String or StringArray；

通配符路径匹配示例：

    “src/a.js”：指定具体文件；
    “*”：匹配所有文件    例：src/*.js(包含src下的所有js文件)；
    “**”：匹配0个或多个子文件夹    例：src/**/*.js(包含src的0个或多个子文件夹下的js文件)；
    “{}”：匹配多个属性    例：src/{a,b}.js(包含a.js和b.js文件)  src/*.{jpg,png,gif}(src下的所有jpg/png/gif文件)；
    “!”：排除文件    例：!src/a.js(不包含src下的a.js文件)；

```
var gulp = require('gulp'),
    less = require('gulp-less');
 
gulp.task('testLess', function () {
    //gulp.src('less/test/style.less')
    gulp.src(['less/**/*.less','!less/{extend,page}/*.less'])
        .pipe(less())
        .pipe(gulp.dest('./css'));
});
```

options：  类型(可选)：Object，有3个属性buffer、read、base；

    options.buffer：  类型：Boolean  默认：true 设置为false，将返回file.content的流并且不缓冲文件，处理大文件时非常有用；
    options.read：  类型：Boolean  默认：true 设置false，将不执行读取文件操作，返回null；
    options.base：  类型：String  设置输出路径以某个路径的某个组成部分为基础向后拼接，具体看下面示例：

```
gulp.src('client/js/**/*.js') 
  .pipe(minify())
  .pipe(gulp.dest('build'));  // Writes 'build/somedir/somefile.js'
 
gulp.src('client/js/**/*.js', { base: 'client' })
  .pipe(minify())
  .pipe(gulp.dest('build'));  // Writes 'build/js/somedir/somefile.js
```




















