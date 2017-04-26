/**
 * Created by kevin on 2016/10/22.
 */

var gulp = require('gulp');/*把gulp模块包含进来，使用require()方法 方法返回一个对象，对象自己起名字，需声明*/
var scss = require('gulp-sass');
var sourcemap = require('gulp-sourcemaps');
var connect = require('gulp-connect');/*开发时把项目放到本地服务器上运行*/
var concat = require('gulp-concat');//合并文件
var uglify = require('gulp-uglify');//压缩JS代码
var rename = require('gulp-rename');//重命名文件
var cleancss = require('gulp-clean-css');//压缩css代码
var imagemin = require('gulp-imagemin');//压缩图片
var jshint = require('gulp-jshint');//JS语法检查
var autoprefixer = require('gulp-autoprefixer');//自动添加css前缀
var clean = require('gulp-clean');//清除文件
var notify = require('gulp-notify');//更改提醒
var cache = require('gulp-cache'); //图片缓存，只有图片替换了才压缩
var watch = require('gulp-watch'); //同步添加、修改、删除
var babel = require('gulp-babel'); //ES6语法编译
var browserSync = require('browser-sync').create(); //create()方法创建对象,开发时创建本地服务器，并实时编译，且可以创建内网IP，达到多终端均可访问目的，甚至可以创建共享IP，达到让别人也能浏览的目的
var path = require('path');
var fs = require('fs');

/*添加一个任务 用task()方法，此方法有两个参数，第一个参数是这个任务的名字，第二个参数是这个任务要做的事儿*/
gulp.task('copy-index', function () {/*使用匿名函数，在函数内执行任务*/

    return gulp.src('./src/index.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
    /*先用 return 返回一些东西 返回的就是：通过gulp.src()方法找到的index.html文件，通过.pipe()方法把文件复制到指定的dist位置。*/
    /*然后在命令行中输入 gulp copy-index 即可执行该任务*/
});

gulp.task('jsconcat',function () {
   return gulp.src('./src/js/*.js')
       .pipe(jshint('.jshintrc'))
       .pipe(jshint.reporter('default'))
       .pipe(babel())
       .pipe(concat('main.js'))/*在此管道中使用concat方法指定合并后的JS名字*/
       .pipe(gulp.dest('dist/js'))/*此管道输出一个合并未压缩的JS文件*/
       .pipe(uglify())/*在此管道中使用 uglify() 方法将合并的JS压缩*/
       .pipe(uglify().on('error', function(error){
           console.error(error.message + '\n出错行号:' + error.lineNumber);
       }))/*此管道能发现JS语法错误，并报错及相关行号*/
       .pipe(rename({ extname: '.min.js' }))/*此管道重命名上一步压缩的文件*/
       .pipe(gulp.dest('dist/js'));/*此管道输出重命名的压缩文件*/
});


/*将图片复制到dist目录*/

gulp.task('image-copy', function () {/*使用匿名函数，在函数内执行任务*/

    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        .pipe(connect.reload());
    /*这里是找到images文件夹下所有后缀是 .jpg的文件，写法：'images/*.jpg'

    也可指定找到多个后缀名的文件，写法：'images/*.{png,jpg,gif,jpeg}' 此处多后缀逗号之间不能有空格

    当然直接去掉后面的，直接写 'images/*' 可以将 images文件夹下所有文件都包含在内，也可将icon包含进去，但icon文件夹内的文件不会包含进去

    还可以写：'images/*\/*' 这样就是两级目录下的所有文件。此处反斜杠实际书写中去掉，这里是防止关闭注释

    当然，当有不止两级目录的时候 还可以这样写：'images/**\/*',这样不管有多少级目录，都可以复制过去。这也是最终写法~

    并将这些文件复制到 dist/images 文件夹下*/
    /*然后在命令行中输入 gulp image-copy 即可执行该任务*/
});


/*将不同文件夹内的文件，复制到dist文件夹下的同一个文件夹内*/

gulp.task('data', function () {
   return gulp.src(['./src/xml/*.xml','./src/json/*.json','!./src/json/index-*.json'])
       .pipe(gulp.dest('dist/data'))
       .pipe(connect.reload());

    /*一些不想被处理的文件包含在了处理文件的列表里面，要排除这些不想被处理的文件，需要单独写一个找到该文件的路径，并在前面加上 ! 如：'!json/index-*.json' 即为json文件夹下所有index-开头的，以 .json 结尾的文件，都不会被处理*/
});


/*创建gulp任务，还可以给它指定其它的他所依赖的任务*/
gulp.task('build',['copy-index','image-copy','data'],function () {
    /*在这里将此任务所依赖的三个任务写成数组，并继续执行该任务的操作*/
    console.log('编译成功！');
    /*该任务的操作是打印一个字符串，编译成功！*/
});


/*编译SCSS文件任务*/
gulp.task('sass',function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemap.init())
        .pipe(scss())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(sourcemap.write('./maps'))
        .pipe(gulp.dest('dist/css'))
        .pipe(cleancss())/*此管道压缩编译的CSS文件*/
        .pipe(rename('base.min.css'))/*此管道重命名上一步压缩的文件*/
        .pipe(sourcemap.write('./maps'))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
});

// 清理
gulp.task('clean', function() {
    return gulp.src(['dist/css', 'dist/js', 'dist/images'], {read: false})
        .pipe(clean());
});

/*创建本地服务器*/
gulp.task('server',function () {
    /*任务名字叫server,然后用匿名函数指定该任务要做的事儿*/
    connect.server({
        /*可以使用connect的server()方法去创建服务器 方法里面可以做一些配置，比如：服务器主机名，端口号，根目录等，这些都是对象，用花括号包含 */
        root: 'dist',/*该值为 服务器 的根目录*/
        port: '1020',/*端口号*/
        livereload: true/*启用实时刷新页面功能*/
        /**/
    });
});
gulp.task('browser-sync',function () {
    /*任务名字叫server,然后用匿名函数指定该任务要做的事儿*/
    connect.server({
        /*可以使用connect的server()方法去创建服务器 方法里面可以做一些配置，比如：服务器主机名，端口号，根目录等，这些都是对象，用花括号包含 */
        root: 'dist',/*该值为 服务器 的根目录*/
        port: '1020',/*端口号*/
        livereload: true/*启用实时刷新页面功能*/
        /**/
    });
    browserSync.init({
        server:{
            baseDir: "./dist"/*设置服务监听文件目录*/
        },
        files:['src/index.html','src/css/*.css']/*设置监听的文件*/
    });
});


/*gulp.watch()方法可以监视一些文件，当这些文件有改动时，就会立即执行一些指定的任务*/
gulp.task('watch',function () {
    gulp.watch('./src/index.html',['copy-index'],function (event) {
        console.log('监听到 ' + event.type + ' 事件，相关文件是 ' + event.path);
    });
    /*这里是指定监视index.html文件，再把要执行的任务的列表放到数组里面，意思就是当我们执行watch这个任务的时候，他会监视index.html文件的变化，当这个文件发生了变化的时候，就会自动执行任务列表里的任务*/
    gulp.watch('./src/images/**/*',['image-copy'],function (event) {
        console.log('监听到 ' + event.type + ' 事件，相关文件是 ' + event.path);
    });
    gulp.watch(['./src/xml/*.xml','./src/json/*.json','!./src/json/index-*.json'],['data'],function (event) {
        console.log('监听到 ' + event.type + ' 事件，相关文件是 ' + event.path);
    });
    gulp.watch('./src/scss/**/*.scss',['sass'],function (event) {
        console.log('监听到 ' + event.type + ' 事件，相关文件是 ' + event.path);
    });

});

gulp.task('default',['server','watch']);