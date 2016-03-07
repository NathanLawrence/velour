var gulp = require('gulp'),
	gutil = require('gulp-util'),
	less = require('gulp-less'),
	shell = require('gulp-shell'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename');

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

gulp.task('minify', function(){
	return gulp.src('dist/velour.css')
	.pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
	.pipe(rename({
		suffix:'.min'
	}))
    .pipe(gulp.dest('dist'));
});