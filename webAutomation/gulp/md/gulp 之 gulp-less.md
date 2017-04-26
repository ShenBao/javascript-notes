
# gulp less


Less 是一门 CSS 预处理语言，它扩充了 CSS 语言，增加了诸如变量、混合（mixin）、函数等功能，让 CSS 更易维护。


```
// 获取 gulp
var gulp = require('gulp')
// 获取 gulp-less 模块
var less = require('gulp-less')

// 编译less
// 在命令行输入 gulp less 启动此任务
gulp.task('less', function () {
    // 1. 找到 less 文件
    gulp.src('less/**.less')
    // 2. 编译为css
        .pipe(less())
    // 3. 另存文件
        .pipe(gulp.dest('dist/css'))
});
```

### 源文件
less/a.less

```css
.less{
	a{
        color:pink;
    }
}
```
less/import.less

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










