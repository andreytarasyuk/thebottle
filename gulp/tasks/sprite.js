var config = require('../config'),
	gulp = require('gulp'),
	spritesmith = require('gulp.spritesmith'),
	imagemin = require('gulp-imagemin');

gulp.task('sprite', function () {
	var spriteData = gulp.src(config.src.icons + '*.png')
		.pipe(imagemin())
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: '_sprite.sass',
			imgPath: '../img/sprite.png',
			cssFormat: 'sass',
			padding: 5,
			cssVarMap: function(sprite) {
				sprite.name = 's-' + sprite.name
			}
		}));

	var imgStream = spriteData.img
		.pipe(gulp.dest(config.build.img));

	var cssStream = spriteData.css
		.pipe(gulp.dest(config.src.sass + 'helpers/'));
});
