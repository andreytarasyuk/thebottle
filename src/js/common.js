console.log('common');

$(document).ready(function() {
	$('a[href]').click(function (e) {
		e.preventDefault();
	});

	$('.js-slider-preview').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		fade: true,
		dots: true,
		arrows: false
	});

});




