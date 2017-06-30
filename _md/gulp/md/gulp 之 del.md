
# gulp 之 del


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