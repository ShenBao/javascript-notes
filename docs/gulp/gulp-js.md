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



## gulp-webpack gulp-uglify vinyl-named imports-loader

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
      },
      devtool: "#eval-source-map"
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

1. 对于有多个入口文件（entry point）的情况，需要使用vinyl-named这个模块，这样就能实现以下打包需求

```
src/scripts/index.js -> prd/scripts/index.js
src/scripts/touch.js -> prd/scripts/touch.js
在output里面可以设置打包后的文件名，如 "[name].min.js"
```

2. 我在项目中使用的是commonjs的模块化方式，但大多数插件（如jquery或zepto插件）都是支持两种模块化方式，并且是先判断 define 再判断 module.export，所以我们需要“屏蔽”amd的模块加载方式。

    首先安装`imports-loader`模块，然后做如下配置：

```
module: {
    loaders: [{
        test: /\.js$/,
        loader: "imports?define=>false"
    }]
}
```

这样我们就能放心地使用各种插件了。

3. 我的项目中使用了HoganJs作为前端模块，在webpack中只要找到相应的加载器就行。

    首先安装[mustache-loader](https://github.com/deepsweet/mustache-loader)模块，然后做如下配置：

```
module: {
    loaders: [{
        test: /\.html$/,
        loader: 'mustache'
    }]
}
```
test就是要处理的文件类型，loader就是处理文件的加载器。




