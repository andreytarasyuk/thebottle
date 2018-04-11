var config = require('../config'),
gulp = require('gulp'),
cache = require('gulp-cache'),
imagemin = require('gulp-imagemin'),
pngquant = require('imagemin-pngquant');

gulp.task('copy', function() {
	gulp.src(config.src.img + '*.*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest(config.build.img));

	gulp.src(config.src.fonts + '*.*')
	.pipe(gulp.dest(config.build.fonts));

	gulp.src(config.src.video + '*.*')
	.pipe(gulp.dest(config.build.video));

	gulp.src(config.src.svg + '*.*')
	.pipe(gulp.dest(config.build.svg));

	gulp.src(config.src.js + 'vendor/*.js')
	.pipe(gulp.dest(config.build.js + 'vendor/'));
});
