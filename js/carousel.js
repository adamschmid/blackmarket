$(document).ready(function(){

//colour palette photo galery init
	var cpOptions = {
		ovalWidth: 250,
		ovalHeight: 0,
		offsetX: 0,
		offsetY: 150,
		angle: 0,
		activeItem: 0,
		duration: 700,
		className: 'item'
	}
	var carousel1 = $('#cp-carousel').CircularCarousel1(cpOptions);

	$('.controls .cp-previous').click(function(e) {
		carousel1.cycleActive('previous');
		//e.preventDefault();
	});

	$('.controls .cp-next').click(function(e) {
		carousel1.cycleActive('next');
		//e.preventDefault();
	});

//cases photo galery init
	var casesOptions = {
		ovalWidth: 250,
		ovalHeight: 0,
		offsetX: -30,
		offsetY: 90,
		angle: 0,
		activeItem: 0,
		duration: 700,
		className: 'item'
	}
	var carousel2 = $('#cases-carousel').CircularCarousel2(casesOptions);

	$('.controls .cases-previous').click(function(e) {
		carousel2.cycleActive('previous');
		//e.preventDefault();
	});

	$('.controls .cases-next').click(function(e) {
		carousel2.cycleActive('next');
		//e.preventDefault();
	});

//cables photo galery init
	var cablesOptions = {
		ovalWidth: 250,
		ovalHeight: 0,
		offsetX: 0,
		offsetY: 90,
		angle: 0,
		activeItem: 0,
		duration: 700,
		className: 'item'
	}
	var carousel3 = $('#cables-carousel').CircularCarousel3(cablesOptions);

	$('.controls .cables-previous').click(function(e) {
		carousel3.cycleActive('previous');
		//e.preventDefault();
	});

	$('.controls .cables-next').click(function(e) {
		carousel3.cycleActive('next');
		//e.preventDefault();
	});
	// $('.carousel .item').click(function(e) {
	// 	var index = $(this).index('li');
	// 	carousel.cycleActiveTo(index);
	// 	e.preventDefault();
	// });

});