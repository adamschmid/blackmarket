$(document).ready(function(){

//fullpage init
	$("#fullpage").fullpage({
		anchors: ['home', 'colour-palette', 'colours', 'cases', 'cables', 'downloads', 'company'],
		menu: '#menu',
		paddingBottom: '10px',
		paddingTop: '35px',
		//slidesNavigation: false,
		//navigation: true,
		//navigationPosition: "right",
		//scrollBar: true,

		onLeave: function(index, nextIndex, direction){
			if(nextIndex == 1){
				$(".home-led").addClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".company-led").removeClass('teal-led');
				$("#logo").velocity({
					width: "460px",
					height: "316px",
					left: "49.6%",
					top: "25%",
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
					width: "218px",
					height: "150px",
					left: "175px",
					top: "12px",
				}, 700);
			}
		},

		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
			console.log(" nextSlideIndex:" + nextSlideIndex);
			if (nextSlideIndex == 0){
				$(".cp-photos-led").addClass('green-led');
				$(".cp-overview-led").removeClass('red-led');
				$(".cp-features-led").removeClass('blue-led');
				$(".cp-colours-led").removeClass('yellow-led');
				$(".cp-diy-led").removeClass('purple-led');
			}
			if (nextSlideIndex == 1){
				$(".cp-photos-led").removeClass('green-led');
				$(".cp-overview-led").addClass('red-led');
				$(".cp-features-led").removeClass('blue-led');
				$(".cp-colours-led").removeClass('yellow-led');
				$(".cp-diy-led").removeClass('purple-led');
			}
			if (nextSlideIndex == 2){
				$(".cp-photos-led").removeClass('green-led');
				$(".cp-overview-led").removeClass('red-led');
				$(".cp-features-led").addClass('blue-led');
				$(".cp-colours-led").removeClass('yellow-led');
				$(".cp-diy-led").removeClass('purple-led');
			}
			if (nextSlideIndex == 3){
				$(".cp-photos-led").removeClass('green-led');
				$(".cp-overview-led").removeClass('red-led');
				$(".cp-features-led").removeClass('blue-led');
				$(".cp-colours-led").addClass('yellow-led');
				$(".cp-diy-led").removeClass('purple-led');
			}
			if (nextSlideIndex == 4){
				$(".cp-photos-led").removeClass('green-led');
				$(".cp-overview-led").removeClass('red-led');
				$(".cp-features-led").removeClass('blue-led');
				$(".cp-colours-led").removeClass('yellow-led');
				$(".cp-diy-led").addClass('purple-led');
			}
		}
	});

//colour palette sub navigation
	$('#cp-photos-link').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(2,0);
	});
	$('#cp-overview-link').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(2,1);
	});
	$('#cp-features-link').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(2,2);
	});
	$('#cp-colours-link').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(2,3);
	});
	$('#cp-diy-link').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(2,4);
	});

//photo galery init
	var options = {
		ovalWidth: 300,
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

});



