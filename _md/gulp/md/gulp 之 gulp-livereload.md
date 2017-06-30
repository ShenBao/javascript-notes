
# gulp-livereload


当代码变化时，它可以帮我们自动刷新页面


```
var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');

gulp.task('less', function() {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen(); //要在这里调用listen()方法
  gulp.watch('less/*.less', ['less']);
});
```



















