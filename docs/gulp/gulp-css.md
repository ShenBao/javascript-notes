# gulp css


## gulp-less

`npm install gulp-less --save-dev`

基本使用
```
var gulp = require('gulp'),
    less = require('gulp-less');
 
gulp.task('testLess', function () {
    gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'));
});
```

编译多个less文件
```
var gulp = require('gulp'),
    less = require('gulp-less');
 
gulp.task('testLess', function () {
    gulp.src(['src/less/index.less','src/less/detail.less']) //多个文件以数组形式传入
        .pipe(less())
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css以及detail.css 
});
```

匹配符“!”，“*”，“**”，“{}”
```
var gulp = require('gulp'),
    less = require('gulp-less');
 
gulp.task('testLess', function () {
    //编译src目录下的所有less文件
    //除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
    gulp.src(['src/less/*.less', '!src/less/**/{reset,test}.less']) 
        .pipe(less())
        .pipe(gulp.dest('src/css'));
});
```

调用多模块（编译less后压缩css）
```
var gulp = require('gulp'),
    less = require('gulp-less'),
     //确保本地已安装gulp-minify-css [npm install gulp-minify-css --save-dev]
    cssmin = require('gulp-minify-css');
 
gulp.task('testLess', function () {
    gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(cssmin()) //兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'}))
        .pipe(gulp.dest('src/css'));
});
```

当less有各种引入关系时，编译后不容易找到对应less文件，所以需要生成sourcemap文件，方便修改
```
var gulp = require('gulp'),
    less = require('gulp-less'),
     //确保本地已安装gulp-sourcemaps [npm install gulp-sourcemaps --save-dev]
    sourcemaps = require('gulp-sourcemaps');
 
gulp.task('testLess', function () {
    gulp.src('src/less/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/css'));
});
```

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

## gulp sass

sass 是一种 CSS 的开发工具，提供了许多便利的写法，大大节省了开发者的时间，使得 CSS 的开发，变得简单和可维护。

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
gulp sass 插件提供4种输出格式：
- nested：嵌套缩进的css代码，它是默认值。
- expanded：没有缩进的、扩展的css代码。
- compact：简洁格式的css代码。
- compressed：压缩后的css代码。

## gulp-ruby-sass

gulp-ruby-sass是另外一款sass的gulp插件， 比glup-sass慢，但是更稳定，功能更多。 它使用compass预处理sass文件，所以你需要安装ruby和compass。
```
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
gulp.task('default', function () {
    return gulp.src('src/scss/app.scss')
        .pipe(sass({sourcemap: true, sourcemapPath: '../scss'}))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('dist/css'));
});
```



## gulp-autoprefixer

使用gulp-autoprefixer根据设置浏览器版本自动处理浏览器前缀。使用她我们可以很潇洒地写代码，不必考虑各浏览器兼容前缀。【特别是开发移动端页面时，就能充分体现它的优势。例如兼容性不太好的flex布局。】

`npm install gulp-autoprefixer --save-dev`

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

基本使用
```
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');
 
gulp.task('testAutoFx', function () {
    gulp.src('src/css/index.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(gulp.dest('dist/css'));
});
```

gulp-autoprefixer的browsers参数[详解](https://github.com/ai/browserslist#queries)

- last 2 versions: 主流浏览器的最新两个版本
- last 1 Chrome versions: 谷歌浏览器的最新版本
- last 2 Explorer versions: IE的最新两个版本
- last 3 Safari versions: 苹果浏览器最新三个版本
- Firefox >= 20: 火狐浏览器的版本大于或等于20
- iOS 7: IOS7版本
- Firefox ESR: 最新ESR版本的火狐
- > 5%: 全球统计有超过5%的使用率

发现上面规律了吗，相信这不难看出，接下来说说各浏览器的标识：

- Android for Android WebView.
- BlackBerry or bb for Blackberry browser.
- Chrome for Google Chrome.
- Firefox or ff for Mozilla Firefox.
- Explorer or ie for Internet Explorer.
- iOS or ios_saf for iOS Safari.
- Opera for Opera.
- Safari for desktop Safari.
- OperaMobile or op_mob for Opera Mobile.
- OperaMini or op_mini for Opera Mini.
- ChromeAndroid or and_chr
- FirefoxAndroid or and_ff for Firefox for Android.
- ExplorerMobile or ie_mob for Internet Explorer Mobile.


## gulp-minify-css [gulp-clean-css]

使用gulp-minify-css压缩css文件，减小文件大小，并给引用url添加版本号避免缓存。重要：gulp-minify-css已经被废弃，请使用gulp-clean-css，用法一致

`npm install gulp-minify-css --save-dev`

基本使用
```
var gulp = require('gulp'),
    cssmin = require('gulp-minify-css');
 
gulp.task('testCssmin', function () {
    gulp.src('src/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});
```

gulp-minify-css 最终是调用clean-css，其他参数[链接](https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api)
```
var gulp = require('gulp'),
    cssmin = require('gulp-minify-css');
 
gulp.task('testCssmin', function () {
    gulp.src('src/css/*.css')
        .pipe(cssmin({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest('dist/css'));
});
```

`给css文件里引用url加版本号（根据引用文件的md5生产版本号）`
```
var gulp = require('gulp'),
    cssmin = require('gulp-minify-css');
    //确保已本地安装gulp-make-css-url-version [npm install gulp-make-css-url-version --save-dev]
    cssver = require('gulp-make-css-url-version'); 
 
gulp.task('testCssmin', function () {
    gulp.src('src/css/*.css')
        .pipe(cssver()) //给css文件里引用文件加版本号（文件MD5）
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});
```

若想保留注释，这样注释即可：
```
/*!
   Important comments included in minified output.
*/
```






