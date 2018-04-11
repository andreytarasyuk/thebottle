var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
autoprefixer = require('autoprefixer'),
cleanCSS = require('gulp-clean-css'),
rename = require('gulp-rename'),
postcss = require('gulp-postcss'),
plumber = require('gulp-plumber'),
mqpacker = require('css-mqpacker'),
notify = require('gulp-notify'),
config = require('../config');

gulp.task('sass', function () {
	var processors = [
	autoprefixer({browsers: ['last 7 versions'], cascade: false}),
	mqpacker({
		sort: function (a, b) {
			a = a.replace(/\D/g,'');
			b = b.replace(/\D/g,'');
			return b-a;
		}
	})
	];


	return sass([config.src.sass + '**/*.sass', config.src.sass + '**/*.scss'], {
		noCache: true,
		style: 'compact'
	})
	.pipe(plumber())
	.pipe(postcss(processors))
	.on('error', notify.onError({
		title: 'Sass Error!',
		message: '<%= error.message %>'
	}))

	.pipe(gulp.dest(config.build.css))
	.pipe(cleanCSS())

	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest(config.build.css))
	.pipe(notify({
		message: "<%= file.relative %> ready",
		sound: true
	}))
});

