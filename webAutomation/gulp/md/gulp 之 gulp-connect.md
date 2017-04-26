
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













