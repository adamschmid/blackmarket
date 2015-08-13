$(document).ready(function(){

//fullpage init
	$("#fullpage").fullpage({
		anchors: ['home', 'colour-palette', 'colours', 'cases', 'cables', 'downloads', 'company', 'black-market', 'designers-toolkit', 'third-party'],
		menu: '#menu',
		paddingTop: '12px',
		// s
		responsiveHeight: 654,
		responsiveWidth: 768,
		//slidesNavigation: false,
		//navigation: true,
		//navigationPosition: "right",
		// scrollBar: true,

		onLeave: function(index, nextIndex, direction){
			if(nextIndex == 1){
				$(".home-led").addClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".company-led").removeClass('teal-led');
				$("#logo-sm").velocity({
					opacity: 0
				}, 700);
				// $("#logo").velocity({
				// 	// width: "460px",
				// 	// height: "316px",
				// 	width: "460px",
				// 	height: "316px",
				// 	left: "49.6%",
				// 	top: "25%",
				// }, 700);
			}
			if(nextIndex > 1){
				$("#logo-sm").velocity({
					opacity: 1
				}, 700);
			}
			if(nextIndex == 2){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").addClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".company-led").removeClass('teal-led');
			}
			if(nextIndex == 3){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").addClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".company-led").removeClass('teal-led');
			}
			if(nextIndex == 4){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").addClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".company-led").removeClass('teal-led');
			}
			if(nextIndex == 5){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").addClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".company-led").removeClass('teal-led');
			}
			if(nextIndex == 6){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").addClass('orange-led');
				$(".company-led").removeClass('teal-led');
			}
			if(nextIndex == 7){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".company-led").addClass('teal-led');
			}
			if (nextIndex == 2 || nextIndex == 3 || nextIndex == 4 || nextIndex ==5 || nextIndex == 6 || nextIndex == 7){
				$("#logo").velocity({

				}, 700);
			}
			// if (nextIndex == 2 || nextIndex == 3 || nextIndex == 4 || nextIndex ==5 || nextIndex == 6 || nextIndex == 7){
			// 	$("#logo").velocity({
			// 		// width: "218px",
			// 		// height: "150px",
			// 		width: "190px",
			// 		height: "130px",
			// 		left: "155px",
			// 		top: "12px",
			// 	}, 700);
			// }
		},

		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
			if ( index == 2 && nextSlideIndex == 0 ){
				$(".cp-overview-led").addClass('green-led');
				$(".cp-photos-led").removeClass('red-led');
				$(".cp-features-led").removeClass('blue-led');
				$(".cp-diy-led").removeClass('yellow-led');
			}
			if ( index == 2 && nextSlideIndex == 1 ){
				$(".cp-overview-led").removeClass('green-led');
				$(".cp-photos-led").addClass('red-led');
				$(".cp-features-led").removeClass('blue-led');
				$(".cp-diy-led").removeClass('yellow-led');
			}
			if ( index == 2 && nextSlideIndex == 2 ){
				$(".cp-overview-led").removeClass('green-led');
				$(".cp-photos-led").removeClass('red-led');
				$(".cp-features-led").addClass('blue-led');
				$(".cp-diy-led").removeClass('yellow-led');
			}
			if ( index == 2 && nextSlideIndex == 3 ){
				$(".cp-overview-led").removeClass('green-led');
				$(".cp-photos-led").removeClass('red-led');
				$(".cp-features-led").removeClass('blue-led');
				$(".cp-diy-led").addClass('yellow-led');
			}
			if ( index == 3 && nextSlideIndex == 0 ){
				$(".colours-bm-led").addClass('green-led');
				$(".colours-dtk-led").removeClass('red-led');
				$(".colours-tp-led").removeClass('blue-led');
			}
			if ( index == 3 && nextSlideIndex == 1 ){
				$(".colours-bm-led").removeClass('green-led');
				$(".colours-dtk-led").addClass('red-led');
				$(".colours-tp-led").removeClass('blue-led');
			}
			if ( index == 3 && nextSlideIndex == 2 ){
				$(".colours-bm-led").removeClass('green-led');
				$(".colours-dtk-led").removeClass('red-led');
				$(".colours-tp-led").addClass('blue-led');
			}
		}

	});

//colour palette sub navigation
	$('#cp-overview-link').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(2,0);
	});
		$('#cp-photos-link').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(2,1);
	});
	$('#cp-features-link').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(2,2);
	});
	$('#cp-diy-link').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(2,3);
	});

//colours sub navigation
	$('#colours-bm-link').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(3,0);
	});
	$('#colours-dtk-link').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(3,1);
	});
	$('#colours-tp-link').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(3,2);
	});

//photo galery init
	var options = {
		ovalWidth: 250,
		ovalHeight: 0,
		offsetX: 0,
		offsetY: 150,
		angle: 0,
		activeItem: 0,
		duration: 700,
		className: 'item'
	}
	var carousel = $('.carousel').CircularCarousel(options);

	$('.controls .previous').click(function(e) {
		carousel.cycleActive('previous');
		//e.preventDefault();
	});

	$('.controls .next').click(function(e) {
		carousel.cycleActive('next');
		//e.preventDefault();
	});

	// $('.carousel .item').click(function(e) {
	// 	var index = $(this).index('li');
	// 	carousel.cycleActiveTo(index);
	// 	e.preventDefault();
	// });

//designers toolkit tabbed sections
	$( "#tabs" ).tabs({
		show: { effect: "fadeIn", duration: 700 },
		hide: { effect: "fadeOut", duration: 100 }
	});


});