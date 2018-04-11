var config = require('../config'),
gulp = require('gulp'),
browserSync = require('browser-sync').create();

// watch
gulp.task('watch', function() {
	gulp.watch([config.src.sass + '**/*.sass', config.src.sass + '**/*.scss'], ['sass']); //find *.sass and use css
	gulp.watch(config.src.img + '**/*.*', ['copy']); // src folders
	gulp.watch(config.src.fonts + '*.*', ['copy']); //copy from "src"
	gulp.watch(config.src.js + '**/*.js', ['js']); //to "build" with minify
	gulp.watch(config.src.icons + '*.png', ['sprite']);

	gulp.watch([
		config.src.root + 'templates/**/_*.html',
		config.src.root + 'templates/**/[^_]*.html'
		], ['nunjucks']);
});

// default
gulp.task('default', ['sass', 'js', 'nunjucks', 'sprite', 'server', 'copy', 'watch']);
