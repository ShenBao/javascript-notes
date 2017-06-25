
# gulp 编译 Sass

Sass 是一种 CSS 的开发工具，提供了许多便利的写法，大大节省了开发者的时间，使得 CSS 的开发，变得简单和可维护。



```
// 获取 gulp
var gulp = require('gulp');
// 获取 gulp-sass 模块
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
```



### 源文件
less/a.sass

```css
.less{
	a{
        color:pink;
    }
}
```
less/import.sass

```css
@import "a.less";
.import{
	a{
		color:red;
    }
}
```

### 编译之后

less/a.css

```css
.less a {
  color: pink;
}
```
less/import.css

```css
.less a {
  color: pink;
}
.import a{
  color: red;
}
```

gulp sass 插件提供4种输出格式：

    nested：嵌套缩进的css代码，它是默认值。
    expanded：没有缩进的、扩展的css代码。
    compact：简洁格式的css代码。
    compressed：压缩后的css代码。






