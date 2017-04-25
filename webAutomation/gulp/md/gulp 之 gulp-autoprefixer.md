
# gulp 之 gulp-autoprefixer


autoprefixer 解析 CSS 文件并且添加浏览器前缀到CSS规则里。

autoprefixer 处理前：
```
.demo {
    display:flex;
}
```
autoprefixer 处理后：
```
.demo {
    display:-webkit-flex;
    display:-ms-flexbox;
    display:flex;
}
```

```
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', () =>
    gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);
```












