
# gulp-connect


```
var gulp = require('gulp'),
    connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server();
});
```

LiveReload
```
var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});
 
gulp.task('default', ['connect', 'watch']);
```

Start and stop server
```
gulp.task('jenkins-tests', function() {
  connect.server({
    port: 8888
  });
  // run some headless tests with phantomjs 
  // when process exits: 
  connect.serverClose();
});
```


Multiple server
```
var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  connect = require('gulp-connect');
 
gulp.task('connectDev', function () {
  connect.server({
    name: 'Dev App',
    root: ['app', 'tmp'],
    port: 8000,
    livereload: true
  });
});
 
gulp.task('connectDist', function () {
  connect.server({
    name: 'Dist App',
    root: 'dist',
    port: 8001,
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
 
gulp.task('stylus', function () {
  gulp.src('./app/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./app/css'))
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/stylus/*.styl'], ['stylus']);
});
 
gulp.task('default', ['connectDist', 'connectDev', 'watch']);
```

### API

options.root：根目录

options.port：端口号 Type: Number Default: 8080

options.host：域名 Type: String；Default: localhost

options.name：服务器名称 Type: String Default: Server

options.https：Type: Object；Default: false

options.livereload：Type: Object or Boolean Default: false

options.livereload.port：Type: Number Default: 35729

options.livereload.hostname：Type: String Default: 'undefined'


options.fallback：Type: String Default: undefined

options.middleware：Type: Function Default: []

options.debug：Type: Boolean Default: false

options.index

Type: Boolean or String of a new index pass or Array of new indexes in preferred order Default: true



```
gulp.task('connect', function() {
  connect.server({
    root: "app",
    middleware: function(connect, opt) {
      return [
        // ... 
      ]
    }
  });
});
```

