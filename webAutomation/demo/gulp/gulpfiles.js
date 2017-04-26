var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync'),
	useref = require('gulp-useref'),
	uglify = require('gulp-uglify'),
	gulpIf = require('gulp-if'),
	cssnano = require('gulp-cssnano'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	del = require('del'),
	runSequence = require('run-sequence'),
	rev = require('gulp-rev'),
	revReplace = require('gulp-rev-replace'),
	minifyCSS = require('gulp-minify-css');

//开启服务
gulp.task('browserSync', function() {
  	browserSync({
	    server: {
	      baseDir: 'src'
	    },
  	})
});

//监听, ['browserSync', 'sass']
gulp.task('watch', function(){
  	gulp.watch('src/scss/**/*.scss', ['sass']);
  	gulp.watch('src/*.html', ['useref']);
  	gulp.watch('src/js/**/*.js', ['useref']);
});

//编译sass文件
gulp.task('sass', function(){
  	return gulp.src('src/scss/**/*.scss')
    	.pipe(sass())
    	.pipe(gulp.dest('src/css'))
    	.pipe(browserSync.reload({
	      	stream: true
	    }));
});

//压缩优化图片
gulp.task('images', function(){
  	return gulp.src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
  		.pipe(cache(imagemin({
      		interlaced: true
    	})))
  		.pipe(gulp.dest('dist/images'));
});

//拷贝字体
gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});

//生成文件
gulp.task('useref', ['clean:dist'], function(){
  return gulp.src('src/*.html')
  	.pipe(useref())
    .pipe(gulpIf('*.css', minifyCSS(), rev()))
    .pipe(gulpIf('*.js', uglify(), rev()))
    .pipe(revReplace())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      	stream: true
    }));
});

//清除dist目录下的所有文件
gulp.task('clean', function(cb) {
  	return del.sync('dist').then(function(cb) {
    	return cache.clearAll(cb);
 	});
});

//除了iamges目录不清理其他全部清理
gulp.task('clean:dist', function(){
  	return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*', '!dist/fonts']);
});

gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync', 'watch'],
    callback
 );
});

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    'sass',
    ['useref', 'images', 'fonts'],
    callback
  )
});

