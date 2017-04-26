
# gulp-rev gulp-rev-collector

在实际生产环境中，我们页面引用的css和js文件的文件名都是带版本号的，这样方便回滚和防止缓存。通常我们使用文件的md5编码作为版本号。


```
var rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector');

var cssDistFiles = [
    'app/prd/styles/index.css'
];

var jsDistFiles = [
    'app/prd/scripts/index.js'
];

// prd文件加md5后缀，并生成替换map
gulp.task('ver', function() {
    gulp.src(cssDistFiles)
        .pipe(rev())
        .pipe(gulp.dest('app/prd/styles'))  // 生成 name-md5.css
        .pipe(rev.manifest()) 
        .pipe(gulp.dest('app/ver/styles')); // 生成 rev-manifest.json(映射)

    gulp.src(jsDistFiles)
        .pipe(rev())
        .pipe(gulp.dest('app/prd/scripts'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('app/ver/scripts'));
});

// html文件添加md5引用
gulp.task('html', function() {
    gulp.src(['app/ver/**/*.json', 'app/*.html'])   
        .pipe(revCollector())
        .pipe(gulp.dest('app/'));
});
```

结果如下：

```
index.html
<script src="prd/scripts/index.js"></script>
=>
<script src="prd/scripts/index-0884a4f91b.js"></script>
```























