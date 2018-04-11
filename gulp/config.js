var srcFolder = 'src/',
appFolder = 'build/';

module.exports = {
	appServer: 'build',
	src: {
		root    : srcFolder,
		sass    : srcFolder + 'sass/',
		css     : srcFolder + 'css/',
		js      : srcFolder + 'js/',
		img     : srcFolder + 'img/',
		icons   : srcFolder + 'img/icons/',
		svg     : srcFolder + 'img/svg/',
		fonts   : srcFolder + 'fonts/',
		video   : srcFolder + 'video/'
	},
	build: {
		root    : appFolder,
		css     : appFolder + 'css/',
		js      : appFolder + 'js/',
		img     : appFolder + 'img/',
		svg     : appFolder + 'img/svg/',
		fonts   : appFolder + 'fonts/',
		video   : appFolder + 'video/'
	}
};
