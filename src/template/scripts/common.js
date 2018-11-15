$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	var counts = $('.counts');

	if (counts.length>0) {
		var countTop = $('.counts').offset().top;
	}

	$(window).on('load scroll', function() {
		var windowScroll = $(window).scrollTop();

		
		if (counts.length>0) {
			if ($(window).scrollTop() >= countTop - 600) {
				if (!counts.hasClass('loaded')) {
					$('.counts__num span').each(function(index, el) {
						var attr = $(this).attr('data-count');

						$(this).animateNumber({
							number: attr
						}, 5000)

					});
				}
				
				counts.addClass('loaded');
			}
		}
	});


	var galleryList = $('.gallery__list'),
			galleryNav = $('.gallery__control');

	galleryList.slick({
		arrows: false,
		asNavFor: galleryNav,
		responsive: [{
			breakpoint: 1199,
			settings: {
				arrows: true
			}
		}]
	});

	galleryNav.slick({
		arrows: false,
		infinite: false,
		asNavFor: galleryList,
		centerMode: true,
		variableWidth: true,
		focusOnSelect: true
	});


	var reviewsList = $('.reviews__list');
	reviewsList.slick({
		slidesToShow: 3,
		responsive: [{
			breakpoint: 1199,
			settings: {
				slidesToShow: 2
			}}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	new WOW().init();


	var hum = $('.hum'),
			nav = $('.nav-wrap'),
			panel = $('.panel');

	hum.click(function(event) {
		$(this).toggleClass('hum_toggle');
		nav.toggleClass('nav-wrap_toggle');
		// if(hum.hasClass('hum_toggle')){
		// 	$('html, body').css('overflow-y', 'hidden');
		// }else{
		// 	$('html, body').removeAttr('style');
		// }
	});

	$(window).on('load scroll', function(event) {
		var windowScroll = $(window).scrollTop();
		if (windowScroll>1) {
			panel.addClass('panel_scroll');
		} else{
			panel.removeClass('panel_scroll');
		}
	});
});
