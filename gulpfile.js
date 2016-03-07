var gulp = require('gulp'),
	gutil = require('gulp-util'),
	less = require('gulp-less'),
	shell = require('gulp-shell'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('test', function(){
	gutil.log('This is a test.');
});

gulp.task('less', function(){
	return gulp.src('components/less/velour.less')
    .pipe(less({}))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('dist'));
});