# gulp other


## gulp-inject

可以注入css,javascript和web组件，不需手工更新ndex.html。
```
<!DOCTYPE html>
<html>
<head>
  <title>My index</title>
  <!-- inject:css -->
  <!-- endinject -->
</head>
<body>
  <!-- inject:js -->
  <!-- endinject -->
</body>
</html>
```
```
var gulp = require('gulp');
var inject = require("gulp-inject");
gulp.task('index', function () {
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./src/**/*.js', './src/**/*.css'], {read: false});
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./src'));
});
```

## gulp-header

为管道中的文件增加header。
```
var header = require('gulp-header');
gulp.src('./foo/*.js')
  .pipe(header('Hello'))
  .pipe(gulp.dest('./dist/')
gulp.src('./foo/*.js')
  .pipe(header('Hello <%= name %>\n', { name : 'World'} ))
  .pipe(gulp.dest('./dist/')
gulp.src('./foo/*.js')
  .pipe(header('Hello ${name}\n', { name : 'World'} ))
  .pipe(gulp.dest('./dist/')
//
var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');
gulp.src('./foo/*.js')
  .pipe(header(banner, { pkg : pkg } ))
  .pipe(gulp.dest('./dist/')
相应的还有一个gulp-footer插件。
```

## gulp-filter

筛选vinyl stream中的文件。
```
var gulp = require('gulp');
var jscs = require('gulp-jscs');
var gulpFilter = require('gulp-filter');
gulp.task('default', function () {
    // create filter instance inside task function
    var filter = gulpFilter(['*', '!src/vendor']);
    return gulp.src('src/*.js')
        // filter a subset of the files
        .pipe(filter)
        // run them through a plugin
        .pipe(jscs())
        // bring back the previously filtered out files (optional)
        .pipe(filter.restore())
        .pipe(gulp.dest('dist'));
});
```

## gulp-changed

只允许改变的文件通过管道。
```
var gulp = require('gulp');
var changed = require('gulp-changed');
var ngmin = require('gulp-ngmin'); // just as an example
var SRC = 'src/*.js';
var DEST = 'dist';
gulp.task('default', function () {
    return gulp.src(SRC)
        .pipe(changed(DEST))
        // ngmin will only get the files that
        // changed since the last time it was run
        .pipe(ngmin())
        .pipe(gulp.dest(DEST));
});
```

## gulp-bower

执行bower安装。
```
var gulp = require('gulp');
var bower = require('gulp-bower');
gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('lib/'))
});
```

## gulp-if

有条件的执行任务

## gulp-replace

字符串替换插件。
```
var replace = require('gulp-replace');
gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace(/foo(.{3})/g, '$1foo'))
    .pipe(gulp.dest('build/file.txt'));
});
```

## gulp-shell

可以执行shell命令

## gulp-exec

exec插件

gulp-install

安装npm和bower包， 如果它们的配置文件存在的话。
```
var install = require("gulp-install");
gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install());
```

## gulp-rename

改变管道中的文件名。
```
var rename = require("gulp-rename");
// rename via string
gulp.src("./src/main/text/hello.txt")
    .pipe(rename("main/text/ciao/goodbye.md"))
    .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/goodbye.md
// rename via function
gulp.src("./src/**/hello.txt")
    .pipe(rename(function (path) {
        path.dirname += "/ciao";
        path.basename += "-goodbye";
        path.extname = ".md"
    }))
    .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/hello-goodbye.md
// rename via hash
gulp.src("./src/main/text/hello.txt", { base: process.cwd() })
    .pipe(rename({
        dirname: "main/text/ciao",
        basename: "aloha",
        prefix: "bonjour-",
        suffix: "-hola",
        extname: ".md"
    }))
    .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/bonjour-aloha-hola.md
```

## gulp-ignore

忽略管道中的部分文件。

## gulp-util

提供一些辅助方法。

## gulp-clean

提供clean功能。
```
var gulp = require('gulp');  
var clean = require('gulp-clean');
gulp.task('clean', function () {  
  return gulp.src('build', {read: false})
    .pipe(clean());
});
```

## gulp-concat

连接合并文件。
```
var concat = require('gulp-concat');
gulp.task('scripts', function() {
  gulp.src('./lib/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'))
});
```

## gulp-wrap

将一个lodash模版包装成流内容。

## gulp-declare

安全的声明命名空间，设置属性。

```
var declare = require('gulp-declare');
var concat = require('gulp-concat');
gulp.task('models', function() {
  // Define each model as a property of a namespace according to its filename
  gulp.src(['client/models/*.js'])
    .pipe(declare({
      namespace: 'MyApp.models',
      noRedeclare: true // Avoid duplicate declarations
    }))
    .pipe(concat('models.js')) // Combine into a single file
    .pipe(gulp.dest('build/js/'));
});
```






