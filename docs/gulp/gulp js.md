# gulp js





























## gulp-uglify

使用gulp-uglify压缩javascript文件，减小文件大小。

`npm install gulp-uglify --save-dev`

基本使用
```
var gulp = require('gulp'),
    uglify = require('gulp-uglify');
 
gulp.task('jsmin', function () {
    gulp.src('src/js/index.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
```

指定变量名不混淆改变
```
var gulp = require('gulp'),
    uglify= require('gulp-uglify');
 
gulp.task('jsmin', function () {
    gulp.src(['src/js/*.js', '!src/js/**/{test1,test2}.js'])
        .pipe(uglify({
            //mangle: true,//类型：Boolean 默认：true 是否修改变量名
            mangle: {except: ['require' ,'exports' ,'module' ,'$']}//排除混淆关键字
        }))
        .pipe(gulp.dest('dist/js'));
});
```

gulp-uglify其他参数 [具体参看](https://github.com/terinjokes/gulp-uglify#user-content-options)
```
12
var gulp = require('gulp'),
    uglify= require('gulp-uglify');
 
gulp.task('jsmin', function () {
    gulp.src(['src/js/*.js', '!src/js/**/{test1,test2}.js'])
        .pipe(uglify({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true,//类型：Boolean 默认：true 是否完全压缩
            preserveComments: 'all' //保留所有注释
        }))
        .pipe(gulp.dest('dist/js'));
});
```

Options
- mangle
- output
- compress
- preserveComments:all/license/function/some (deprecated)

Errors
- fileName: The full file path for the file being minified.
- cause: The original UglifyJS error, if available.
- message (or msg)
- filename
- line
















