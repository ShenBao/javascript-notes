
# gulp-shell

```
var gulp = require('gulp');
var shell = require('gulp-shell');


gulp.task('del', function () {
  return gulp.src('dist')
    .pipe(shell(['rm -rf ' + 'dist']))
});
```









