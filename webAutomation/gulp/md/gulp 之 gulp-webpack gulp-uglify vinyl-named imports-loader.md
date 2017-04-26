
# gulp-webpack gulp-uglify vinyl-named imports-loader

http://www.cnblogs.com/chris-oil/p/5277700.html

基于CommonJs的模块化方式，多页应用


```
var gulp = require('gulp');

var named = require('vinyl-named');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');

// js 模块化
gulp.task('js', function () {
  gulp.src(srcFiles.js)
    // js commonjs规范模块化编译
    .pipe(named())
    .pipe(webpack({
      output: {
        filename: '[name].js'
      },
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'imports?define=>false'
        }]
      }
    }))
    // js 压缩
    .pipe(uglify().on('error', function (e) {
      console.log('\x07', e.lineNumber, e.message);
      // 在控制台上输出
      return this.end();
    }))
    .pipe(gulp.dest(distFiles.js));
});
```














