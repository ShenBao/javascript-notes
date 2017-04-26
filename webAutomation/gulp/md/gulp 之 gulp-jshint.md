
# gulp-jshint

js代码检查

用来检查js代码

```
var gulp = require('gulp'),
    jshint = require("gulp-jshint");
 
gulp.task('jsLint', function () {
    gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter()); // 输出检查结果
});
```

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
    debug: true  //屏蔽debugger调试语句,
    devel: true,  //该选项定义了用于调试的全局变量（如alert，console），true -- 启用，false -- 关闭
    undef: true,   //值为true时，禁止使用未定义的变量
    eqnull: false  //值为false时，如果代码中使用"=="来比较变量与null，则JSHint会给出警告；值为true时，则不会.












