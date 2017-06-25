
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

### 异常处理

当编译less时出现语法错误或者其他异常，会终止watch事件，通常需要查看命令提示符窗口才能知道，这并不是我们所希望的，所以我们需要处理出现异常并不终止watch事件（gulp-plumber），并提示我们出现了错误（gulp-notify）。

```
var gulp = require('gulp'),
    less = require('gulp-less');
    //当发生异常时提示错误 确保本地安装gulp-notify和gulp-plumber
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');
 
gulp.task('testLess', function () {
    gulp.src('src/less/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(gulp.dest('src/css'));
});
gulp.task('testWatch', function () {
    gulp.watch('src/**/*.less', ['testLess']);
});
```






