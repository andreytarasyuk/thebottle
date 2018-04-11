var config = require('../config'),
	gulp = require('gulp'),
	browserSync = require('browser-sync').create();

gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: config.appServer
		},
		files: [config.build.root + '*.html', config.build.css + '*.css', config.build.js + '*.js'],
		port: 8081,
		notify: false
	})
});
