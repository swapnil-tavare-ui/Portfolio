const gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	csscomb = require('gulp-csscomb'),
	postcss = require('gulp-postcss'),
	uglifycss = require('gulp-uglifycss'),
	concat = require('gulp-concat'),
	cssnano = require('cssnano')({
		preset: ['default', {
			discardComments: {
				removeAll: true,
			},
			normalizeWhitespace: false
		}]
	}),
	uglify = require('gulp-uglify');
	
gulp.task('compileCss', function () {
	return   gulp.src(['src/scss/style.scss'])
			.pipe(sass()) // Converts Sass to CSS with gulp-sass
			.pipe(autoprefixer())
			.pipe(csscomb())
			.pipe(postcss([cssnano]))
			.pipe(uglifycss({
				"maxLineLen": 80,
				"uglyComments": true
			}))
			.pipe(concat('template.min.css'))
			.pipe(gulp.dest('dist'))
});

gulp.task('compileScripts', function() {
	return	 gulp.src('src/js/*.js')
			.pipe(uglify())
			.pipe(concat('template.min.js'))
			.pipe(gulp.dest('dist'))
});
  

gulp.task('watch:updates', function () {
	gulp.watch(['src/scss/*.scss','src/scss/*.css'], gulp.series('compileCss'));
	gulp.watch(['src/js/*.js'], gulp.series('compileScripts'));
	
});

gulp.task('default', gulp.series(gulp.parallel('compileCss','compileScripts'), 'watch:updates'));


  