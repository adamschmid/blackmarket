$(document).ready(function(){

//test data-anchors...  'downloads', 'company',

//fullpage init
	$("#fullpage").fullpage({
		anchors: ['home', 'colour-palette', 'colours', 'cases', 'cables','dealers'],
		menu: '#menu',
		paddingTop: '12px',
		// s
		responsiveHeight: 600,
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
				$(".dealers-led").removeClass('orange-led');
				$(".company-led").removeClass('teal-led');
				$("#logo-lg").velocity({
					opacity: 1
				}, 700);
				$("#logo-sm").velocity({
					opacity: 0,
					duration: 700 }, {
						complete: function() {
							$("#logo-sm").addClass('hide');
						}
				});
				$("#logo-clip").velocity({
					opacity: 0
				}, 700);
			}
			if(nextIndex > 1){
				$("#logo-lg").velocity({
					opacity: 0
				}, 700);
				$("#logo-sm").removeClass("hide").velocity({
					opacity: 1
				}, 700);
				$("#logo-clip").velocity({
					opacity: .5
				}, 700);
			}
			if(nextIndex == 2){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").addClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".dealers-led").removeClass('orange-led');
				$(".company-led").removeClass('teal-led');
			}
			if(nextIndex == 3){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").addClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".dealers-led").removeClass('orange-led');
				$(".company-led").removeClass('teal-led');
			}
			if(nextIndex == 4){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").addClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".dealers-led").removeClass('orange-led');
				$(".company-led").removeClass('teal-led');
			}
			if(nextIndex == 5){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").addClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".dealers-led").removeClass('orange-led');
				$(".company-led").removeClass('teal-led');
			}
			if(nextIndex == 6){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").addClass('orange-led');
				$(".dealers-led").addClass('orange-led');
				$(".company-led").removeClass('teal-led');
			}
			if(nextIndex == 7){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".dealers-led").removeClass('orange-led');
				$(".company-led").addClass('teal-led');
			}
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
				$("#toolkit-dl-btn").velocity({
					opacity: 0,
					duration: 1400},
						{ complete: function() {
							$("#toolkit-dl-btn").addClass('hide');
						}
				});
				$(".colours-tp-led").removeClass('blue-led');
			}
			if ( index == 3 && nextSlideIndex == 1 ){
				$(".colours-bm-led").removeClass('green-led');
				$(".colours-dtk-led").addClass('red-led');
				$("#toolkit-dl-btn").removeClass('hide').velocity({
					opacity: 1,
					duration: 700
				});
				$(".colours-tp-led").removeClass('blue-led');
			}
			if ( index == 3 && nextSlideIndex == 2 ){
				$(".colours-bm-led").removeClass('green-led');
				$(".colours-dtk-led").removeClass('red-led');
				$("#toolkit-dl-btn").velocity({
					opacity: 0,
					duration: 1400},
						{ complete: function() {
							$("#toolkit-dl-btn").addClass('hide');
						}
				});
				$(".colours-tp-led").addClass('blue-led');
			}
			if ( index == 4 && nextSlideIndex == 0 ){
				$(".cases-overview-led").addClass('green-led');
				$(".cases-photos-led").removeClass('blue-led');
			}
			if ( index == 4 && nextSlideIndex == 1 ){
				$(".cases-overview-led").removeClass('green-led');
				$(".cases-photos-led").addClass('blue-led');
			}
			if ( index == 5 && nextSlideIndex == 0 ){
				$(".cables-overview-led").addClass('teal-led');
				$(".cables-photos-led").removeClass('purple-led');
			}
			if ( index == 5 && nextSlideIndex == 1 ){
				$(".cables-overview-led").removeClass('teal-led');
				$(".cables-photos-led").addClass('purple-led');
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

//cases sub navigation
	$('#cases-overview-link').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(4,0);
	});
	$('#cases-photos-link').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(4,1);
	});

//cables sub navigation
	$('#cables-overview-link').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(5,0);
	});
	$('#cables-photos-link').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(5,1);
	});


//designers toolkit tabbed sections
	$( "#tabs" ).tabs({
		show: { effect: "fadeIn", duration: 700 },
		hide: { effect: "fadeOut", duration: 100 }
	});


});