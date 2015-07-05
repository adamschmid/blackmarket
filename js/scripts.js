$(document).ready(function(){

//fullpage init
	$("#fullpage").fullpage({
		anchors: ['home', 'colour-palette', 'colours', 'cases', 'cables', 'downloads', 'company'],
		menu: '#menu',
		paddingTop: '0px',
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

});



