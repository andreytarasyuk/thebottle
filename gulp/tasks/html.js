var config = require('../config'),
gulp = require('gulp'),
browserSync = require('browser-sync').create(),
nunjucksRender = require('gulp-nunjucks-render'),
frontMatter = require('gulp-front-matter');


gulp.task('nunjucks', function() {
	nunjucksRender.nunjucks.configure([
		config.src.root + 'templates'
	], {
		watch: false,
		trimBlocks: true,
		lstripBlocks: false
	});

	return gulp
		.src([config.src.root + 'templates/**/[^_]*.html'])
		.pipe(frontMatter({ property: 'data' }))
		.pipe(nunjucksRender({
			path: [config.src.root + 'templates/']
		}))
		.pipe(gulp.dest(config.build.root));
});
