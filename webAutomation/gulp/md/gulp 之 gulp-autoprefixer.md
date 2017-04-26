
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



css autoprefixer

gulp-autoprefixer的browsers参数详解：

    ●last 2 versions: 主流浏览器的最新两个版本
    ● last 1 Chrome versions: 谷歌浏览器的最新版本
    ● last 2 Explorer versions: IE的最新两个版本
    ● last 3 Safari versions: 苹果浏览器最新三个版本
    ● Firefox >= 20: 火狐浏览器的版本大于或等于20
    ● iOS 7: IOS7版本
    ● Firefox ESR: 最新ESR版本的火狐
    ● > 5%: 全球统计有超过5%的使用率

发现上面规律了吗，相信这不难看出，接下来说说各浏览器的标识：

    Android for Android WebView.
    BlackBerry or bb for Blackberry browser.
    Chrome for Google Chrome.
    Firefox or ff for Mozilla Firefox.
    Explorer or ie for Internet Explorer.
    iOS or ios_saf for iOS Safari.
    Opera for Opera.
    Safari for desktop Safari.
    OperaMobile or op_mob for Opera Mobile.
    OperaMini or op_mini for Opera Mini.
    ChromeAndroid or and_chr
    FirefoxAndroid or and_ff for Firefox for Android.
    ExplorerMobile or ie_mob for Internet Explorer Mobile.








