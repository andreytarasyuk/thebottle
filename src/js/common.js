console.log('common');

$(document).ready(function() {


	$('.js-scroll-to').on("click", function(e){
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
	});
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('.js-btn-top').fadeIn();
		} else {
			$('.js-btn-top').fadeOut();
		}

	});
	// transparent input, etx
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');

		$(this).focus(function(){
			$(this).attr('placeholder', '');
		});
		$(this).blur(function(){
			$(this).attr('placeholder', placeholder);
		});
	});
	$('.js-slider-preview').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		fade: true,
		dots: true,
		autoplay: true,
		speed: 1000,
		appendDots:$('.js-slick-dots'),
		arrows: false
	});
	$('.js-slider-reviews').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		arrows: false,
		responsive: [
		{
			breakpoint: 9999,
			settings: 'unslick'
		},
		{
			breakpoint: 769,
			settings: {
				dots: true,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
	$('.js-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-slider-nav',
		responsive: [
		{
			breakpoint: 1120,
			settings: {
				dots: true,
				asNavFor: null
			}
		}
		]
	});
	$('.js-slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		focusOnSelect: true,
		arrows: false,
		asNavFor: '.js-slider-for',
		settings: 'slick',
		responsive: [
		{
			breakpoint: 1120,
			settings: {
				asNavFor: null
			}
		}
		]
	});

	// accordion
	$('.js-accordion').each((i, current) => {
		current = $(current);
		const currentBtn = current.find('.js-accordion-btn');
		const currentItem = current.find('.js-accordion-item');
		const active = 'is-active';

		if(!current.hasClass(active)) {
			currentItem.slideUp();
		}

		currentBtn.click(function(e) {
			e.preventDefault();
			current.toggleClass(active);
			currentBtn.toggleClass(active);
			currentItem.slideToggle();
		});
	});
	// filter
	$('.js-filter-btn').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('is-active')
		$('.js-filter-item').slideToggle();
	});
	// popup
	const OPEN = 'is-open';
	$('.js-modal-control').each((i, control) => {
		control = $(control);
		const modal = $(`.js-modal[data-modal="${control.data('target')}"]`);
		const prevent = modal.find('.js-modal-prevent');

		control.on('click', e => {
			e.preventDefault();
			modal.toggleClass(OPEN);
		});

		modal.on('click', e => {
			if ($(e.target).closest(prevent).length) return;
			modal.removeClass(OPEN);
		});
	});
	// select2
	const select = $('.js-select');
	const selectInModal = select.filter((i, s) => !!$(s).closest('.js-modal').length);
	const selectNotInModal = select.not(selectInModal);

	selectInModal.each((i, s) => {
		s = $(s);
		s.select2({
			minimumResultsForSearch: -1,
			dropdownParent: s.parent()
		});
	});

	selectNotInModal.select2({
		minimumResultsForSearch: -1
	});

	const showCurrentTab = props => {
		const { controls, control, contents, content, i, prev, next } = props;
		const ACTIVE = 'active';
		const HIDDEN = 'hidden';

		controls
		.add(contents)
		.removeClass(ACTIVE);
		control
		.add(content)
		.addClass(ACTIVE);

		if (i <= 0) prev.addClass(HIDDEN);
		else prev.removeClass(HIDDEN);

		if (i >= controls.length - 1) next.addClass(HIDDEN)
			else next.removeClass(HIDDEN);
	};

	$('.js-tabs').each((i, container) => {

		container = $(container);
		const controls = container.find('.js-tabs-control');
		const contents = container.find('.js-tabs-content');
		const prev = container.find('.js-tabs-prev');
		const next = container.find('.js-tabs-next');
		const ACTIVE = 'active';

		controls.each((i, control) => {
			control = $(control);
			const target = control.data('tab');
			const content = contents.filter(`[data-content="${target}"]`);

			if (control.hasClass(ACTIVE)) showCurrentTab({
				controls,
				control,
				contents,
				content,
				i,
				prev,
				next
			});

				control.click(e => {
					e.preventDefault();
					if (control.hasClass(ACTIVE)) return;
					showCurrentTab({
						controls,
						control,
						contents,
						content,
						i,
						prev,
						next
					});
				});
			});

		prev.click(e => {
			e.preventDefault();
			const current = controls.filter(`.${ACTIVE}`);
			const control = current.prev();
			if (!control.length) return;
			const target = control.data('tab');
			const content = contents.filter(`[data-content="${target}"]`);
			let i = 0;
			controls.each((index, c) => {
				if (c === control.get(0)) i = index;
			});

			showCurrentTab({
				controls,
				control,
				contents,
				content,
				i,
				prev,
				next
			});
		});

		next.click(e => {
			e.preventDefault();
			const current = controls.filter(`.${ACTIVE}`);
			const control = current.next();
			if (!control.length) return;
			const target = control.data('tab');
			const content = contents.filter(`[data-content="${target}"]`);
			let i = 0;
			controls.each((index, c) => {
				if (c === control.get(0)) i = index;
			});

			showCurrentTab({
				controls,
				control,
				contents,
				content,
				i,
				prev,
				next
			});
		});

	});

	// autocomplete
	let countries = [
	{ value: 'Andorra', data: 'AD' },
	{ value: 'Zimbabwe', data: 'ZZ' }
	];

	$('.js-autocomplete').autocomplete({
		lookup: countries
	});
	// search
	$('.js-search-open').click(function (e) {
		e.preventDefault();
		$('.js-search-modal').addClass(OPEN);
	});
	$('.js-search-btn').click(function(){
		$('.js-search-input').val('');
	});
	// scrollbar
	jQuery('.scrollbar').scrollbar();
});
$(document).mouseup(function (e) {
	let container = $('.js-search-modal, .autocomplete-suggestions');
	if (container.has(e.target).length === 0){
		container.removeClass('is-open');
	}
});




