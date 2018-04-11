var config = require('../config'),
	gulp = require('gulp'),
	browserSync = require("browser-sync").create(),
	include = require('gulp-include'),
	plumber = require('gulp-plumber');

gulp.task('js', function() {
	gulp.src(config.src.js + 'app.js')
	.pipe(plumber())
	.pipe(include())
		.on('error', console.log)
	.pipe(gulp.dest(config.build.js))
	.pipe(browserSync.reload({stream: true}));
});
