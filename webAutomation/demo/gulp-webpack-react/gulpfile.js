/**
 * Created by junkai.wang on 2016/11/2.
 */

/**
 * [gulp description]
 * @type {[type]}
 * 载入外挂
 */

var gulp = require('gulp'); // 把gulp模块包含进来，使用require()方法 方法返回一个对象，对象自己起名字，需声明
var gutil = require('gulp-util');
var del = require('del'); // 删除
var rename = require('gulp-rename'); // 重命名文件
var scss = require('gulp-sass'); // sass 编译
var autoprefixer = require('gulp-autoprefixer'); // 自动添加css前缀

var cached = require('gulp-cached'); // 增量编译所需package  只传递更改过的文件
var remember = require('gulp-remember'); // 增量编译所需package 把所有文件放回stream

var webpack = require('webpack'); // webpack 模块
var WebpackDevServer = require('webpack-dev-server');  // 本地服务器挂载
var webpackConfig = require('./webpack.config.js');

var connect = require('gulp-connect'); // 开发时把项目放到本地服务器上运行
var rest = require('connect-rest');
var mocks = require('./mocks'); // 数据mock相关 以及代理功能

/**
 * ----------------------------------------------------
 * source configuration
 * 声明 src (源文件)、 dist (开发文件)、bin (发布文件)的路径
 * ----------------------------------------------------
 */

var src = {
    html: 'src/html/*.html',                          // html 文件
    vendor: ['vendor/**/*', 'bower_components/**/*'], // vendor 目录和 bower_components
    style: 'src/style/index.scss',                  // style 目录下index.scss,因为index.scss为所有scss的出口文件，所以只需编译这一个文件即可
    assets: 'assets/**/*'                             // 图片等应用资源
};

var dist = {
    root: 'dist/',
    html: 'dist/',
    style: 'dist/style',
    vendor: 'dist/vendor',
    assets: 'dist/assets'
};

var bin = {
    root: 'bin/',
    html: 'bin/',
    style: 'bin/style',
    vendor: 'bin/vendor',
    assets: 'bin/assets'
};

/**
 * ----------------------------------------------------
 *  tasks
 * ----------------------------------------------------
 */

/**
 * clean build dir
 * 每次启动发布到 dist 的命令时，先删除所有 dist 根目录中的所有文件
 */
function clean(done) {
    del.sync(dist.root);
    done();
}

/**
 * [cleanBin description]
 * @return {[type]} [description]
 * 每次启动发布到 bin 的命令时，先删除所有 bin 根目录中的所有文件
 */
function cleanBin(done) {
    del.sync(bin.root);
    done();
}

/**
 * [copyVendor description]
 * @return {[type]} [description]
 * 将 src/vendor 文件夹内第三方库的文件拷贝到 dist/vendor 文件夹内
 */
function copyVendor() {
    return gulp.src(src.vendor)
        .pipe(gulp.dest(dist.vendor));
}

/**
 * [copyAssets description]
 * @return {[type]} [description]
 * 将 src -> assets 文件夹内的所有资源拷贝到 dist -> assets 文件夹内
 */
function copyAssets() {
    return gulp.src(src.assets)
        .pipe(gulp.dest(dist.assets));
}

/**
 * [copyDist description]
 * @return {[type]} [description]
 * 将 dist 根目录文件夹内的所有资源 拷贝到 bin 根目录文件夹内
 */
function copyDist() {
    return gulp.src(dist.root + '**/*')
        .pipe(gulp.dest(bin.root));
}

/**
 * [html description]
 * @return {[type]} [description]
 * 将 src -> html 文件夹内的所有的 html 文件，拷贝到 dist -> html 文件夹内
 */
function html() {
    return gulp.src(src.html)
        .pipe(gulp.dest(dist.html));
}

/**
 * [style description]
 * @param  {Function} done [description]
 * @return {[type]}        [description]
 */
function style() {
    return gulp.src(src.style)
        .pipe(cached('style')) //只传递更改的过的文件
        .pipe(scss())  // 此管道对scss进行编译
        .on('error', handleError) //文件如果出错可能会将整个 build 进程结束，需要添加 error 时候的处理函数，同时也能自定义的输出 error 相关的信息
        .pipe(autoprefixer({
            browsers: ['last 3 version'] //给 css 元素自动添加浏览器兼容前缀
        }))
        .pipe(gulp.dest(dist.style)); //将编译后的 css 文件发布到 dist/style 文件夹内
}

exports.style = style;

/**
 * [webpackProduction description]
 * @param  {Function} done [description]
 * @return {[type]}        [description]
 * webpack 的生产环境配置
 */
function webpackProduction(done) {
    var config = Object.create(webpackConfig);
    config.plugins = config.plugins.concat(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': 'production'
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError('webpack:build', err);
        gutil.log('[webpack:production]', stats.toString({
            colors: true
        }));
        done();
    });
}


/**
 * [webpackDevelopment description]
 * @param  {Function} done [description]
 * @return {[type]}        [description]
 * webpack 的开发环境配置
 */
var devConfig, devCompiler;

devConfig = Object.create(webpackConfig);
devConfig.devtool = 'sourcemap';
devConfig.debug = true;
devCompiler = webpack(devConfig);

function webpackDevelopment(done) {
    devCompiler.run(function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack:build-dev', err);
            return;
        }

        gutil.log('[webpack:build-dev]', stats.toString({
            colors: true
        }));
        done();
    });
}

/**
 * webpack develop server
 */
// devConfig.plugins = devConfig.plugins || []
// devConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
// function webpackDevelopmentServer(done) {
//   new WebpackDevServer(devCompiler, {
//    contentBase: dist.root,
//     lazy: false,
//     hot: true
//   }).listen(8080, 'localhost', function (err) {
//     if (err) throw new gutil.PluginError('webpack-dev-server', err)
//     gutil.log('[webpack-dev-server]', 'http://localhost:8080/')
//  reload();
//  done();
//   });
// }

/**
 * [connectServer description]
 * @return {[type]} [description]
 */
function connectServer(done) {
    connect.server({
        root: dist.root,
        port: 8080,
        livereload: true,
        middleware: function(connect, opt) {
            return [rest.rester({
                context: '/'
            })];
        }
    });
    mocks(rest);
    done();
}

/**
 * [watch description]
 * @return {[type]} [description]
 */
function watch() {
    gulp.watch(src.html, html);
    gulp.watch('src/**/*.js', webpackDevelopment);
    gulp.watch('src/**/*.less', style);
    gulp.watch('dist/**/*').on('change', function(file) {
        gulp.src('dist/')
            .pipe(connect.reload());
    });
}

/**
 * default task
 */
gulp.task('default', gulp.series(
    clean,
    gulp.parallel(copyAssets, copyVendor, html, style, webpackDevelopment),
    connectServer,
    watch
));

/**
 * production build task
 */
gulp.task('build', gulp.series(
    clean,
    gulp.parallel(copyAssets, copyVendor, html, style, webpackProduction),
    cleanBin,
    copyDist,
    function(done) {
        console.log('build success');
        done();
    }
));

/**
 * [handleError description]
 * @param  {[type]} err [description]
 * @return {[type]}     [description]
 */
function handleError(err) {
    if (err.message) {
        console.log(err.message);
    } else {
        console.log(err);
    }
    this.emit('end');
}

/**
 * [reload description]
 * @return {[type]} [description]
 */
function reload() {
    connect.reload();
}
