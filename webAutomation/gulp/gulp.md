
http://www.ydcss.com/archives/tag/gulp

https://segmentfault.com/q/1010000004234745

https://github.com/fwon/gulp-webpack-demo


Gulp使用 node-glob 模块，借助 minimatch 库，将glob表达式(glob expressions)转换成JavaScript正则表达式(JavaScript RegExp) ，从而实现文件匹配功能。我们所看到的 ** 和 * 都是其所提供的语法：

* 匹配文件路径中的0个或多个字符，但不会匹配路径分隔符，除非路径分隔符出现在末尾。

** 匹配路径中的0个或多个目录及其子目录，需要单独出现，即它左右不能有其他东西了。如果出现在末尾，也能匹配文件。

? 匹配文件路径中的一个字符(不会匹配路径分隔符)。

[...] 匹配方括号中出现的字符中的任意一个，当方括号中第一个字符为 ^ 或 !时，则表示不匹配方括号中出现的其他字符中的任意一个。

!(pattern|pattern|pattern) 匹配任何与括号中给定的任一参数一致的都不匹配的。

?(pattern|pattern|pattern) 匹配括号中给定的任一参数0次或1次。

+(pattern|pattern|pattern) 匹配括号中给定的任一参数至少1次。

*(a|b|c) 匹配括号中给定的任一参数0次或多次。

@(pattern|pat*|pat?erN) 匹配括号中给定的任一参数1次。

用实例来加深理解：

* 能匹配 a.js , x.y , abc , abc/ ，但不能匹配 a/b.js

*.* 能匹配 a.js , style.css , a.b , x.y 
*/*/*.js 能匹配 a/b/c.js , x/y/z.js ，不能匹配 a/b.js , a/b/c/d.js 
** 能匹配 abc , a/b.js , a/b/c.js , x/y/z , x/y/z/a.b ，能用来匹配所有的目录和文件

**/*.js 能匹配 foo.js , a/foo.js , a/b/foo.js , a/b/c/foo.js 
a/**/z 能匹配 a/z , a/b/z , a/b/c/z , a/d/g/h/j/k/z 
a/**b/z 能匹配 a/b/z , a/sb/z ，但不能匹配 a/x/sb/z ，因为只有单 **单独出现才能匹配多级目录

?.js 能匹配 a.js , b.js , c.js 
a?? 能匹配 a.b , abc ，但不能匹配 ab/ ，因为它不会匹配路径分隔符

[xyz].js 只能匹配 x.js , y.js , z.js ，不会匹配 xy.js , xyz.js 等，整个中括号只代表一个字符

[^xyz].js 能匹配 a.js , b.js , c.js 等，不能匹配 x.js , y.js , z.js


css autoprefixer

gulp-autoprefixer的browsers参数详解
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



gulp sass 插件提供4种输出格式：
    nested：嵌套缩进的css代码，它是默认值。
    expanded：没有缩进的、扩展的css代码。
    compact：简洁格式的css代码。
    compressed：压缩后的css代码。




            asi: false,//值为false时，如果代码末尾省略了分号，则JSHint会给出警告；值为true时，则不会.
            bitwise:true,//禁止位运算符
            latedef: true,//禁止变量没有定义就使用
            noarg: true, //止在javascript代码中使用arguments.caller and arguments.callee.
            newcap: true, //要求将构造函数的名字大写
            noempty: true,//禁止空的代码块 if(a){}
            nonew: true,  //禁止使用构造函数，因为它会带来一些不必要的副作用 new MyConstructor();
            laxcomma: false,//值为true时，允许逗号出现在行首的换行方式；值为false时，会给出警告
            multistr: false,//值为true时，允许多行字符串；值为false时，则会给出警告.
            proto: false,  //作用：值为true时，允许在代码中使用__proto__属性；值为false时，则会给出警告
            supernew:false,//是否允许使用像"new function() {...}"这样怪异的构造器，true -- 允许，false -- 不允许.
            scripturl: true,//值为true时，允许在代码中使用"javascript:..."这样的url；值为false时，则会给出警告.
            validthis:true,//是否允许在严格模式下的非构造函数中使用this，true -- 允许，false -- 不允许.
            globals: { "testGlobal": false },//设定全局变量  指定为true，属性可读写；指定为false：属性只读
            strict: true, //要求所有函数遵循ECMAScript 5的严格模式
            curly: true, //检测代码不使用花括号{
            freeze: true,//扩展原生对象原型 true：禁止； false：允许
            expr: true,   //放开表达式（expressions）的使用
            unused: true, //该选项激活后，对于"已定义却未使用的变量"会给出警告
            sub: true,    //子属性的访问方式是 obj.aa 还是 obj['aa']
//            debug: true  //屏蔽debugger调试语句,
            devel: true,  //该选项定义了用于调试的全局变量（如alert，console），true -- 启用，false -- 关闭
            undef: true,   //值为true时，禁止使用未定义的变量
            eqnull: false  //值为false时，如果代码中使用"=="来比较变量与null，则JSHint会给出警告；值为true时，则不会.












类似FIS的smarty模板、fekit的velocity mock等功能，我还没发现怎么在gulp中来实现。简单的说，就是能在前端环境开发jsp、velocity或者php（我目前的需求是php），数据采用mock方式，不依赖于后端，从而把view的控制权完全拿到前端，实现前后端的分离（非ajax方式）















