$(document).ready(function(){

//fullpage init
	$("#fullpage").fullpage({
		anchors: ['home', 'colour-palette', 'colours', 'cases', 'cables', 'downloads', 'company'],
		menu: '#menu',


		// onLeave: function(index, nextIndex, direction){
		// 	var leavingSection = $(this);
		// 	if(index == 0 && direction == "up") {
		// 		$(".home-led").addClass('green-led');
		// 		$(".colour-palette-led").removeClass('red-led');
		// 		$(".colours-led").removeClass('blue-led');
		// 		$(".cases-led").removeClass('yellow-led');
		// 		$(".cables-led").removeClass('purple-led');
		// 		$(".downloads-led").removeClass('orange-led');
		// 		$(".company-led").removeClass('teal-led');
		// 	}
		// 	else if(index == 1 && direction == "down" || direction == "up"){
		// 		$(".home-led").removeClass('green-led');
		// 		$(".colour-palette-led").addClass('red-led');
		// 		$(".colours-led").removeClass('blue-led');
		// 		$(".cases-led").removeClass('yellow-led');
		// 		$(".cables-led").removeClass('purple-led');
		// 		$(".downloads-led").removeClass('orange-led');
		// 		$(".company-led").removeClass('teal-led');
		// 	}
		// 	else if(index == 2 && direction == "down" || direction == "up"){
		// 		$(".home-led").removeClass('green-led');
		// 		$(".colour-palette-led").removeClass('red-led');
		// 		$(".colours-led").addClass('blue-led');
		// 		$(".cases-led").removeClass('yellow-led');
		// 		$(".cables-led").removeClass('purple-led');
		// 		$(".downloads-led").removeClass('orange-led');
		// 		$(".company-led").removeClass('teal-led');
		// 	}
		// 	else if(index == 3 && direction == "down" || direction == "up"){
		// 		$(".home-led").removeClass('green-led');
		// 		$(".colour-palette-led").removeClass('red-led');
		// 		$(".colours-led").removeClass('blue-led');
		// 		$(".cases-led").addClass('yellow-led');
		// 		$(".cables-led").removeClass('purple-led');
		// 		$(".downloads-led").removeClass('orange-led');
		// 		$(".company-led").removeClass('teal-led');
		// 	}
		// 	else if(index == 4 && direction == "down" || direction == "up"){
		// 		$(".home-led").removeClass('green-led');
		// 		$(".colour-palette-led").removeClass('red-led');
		// 		$(".colours-led").removeClass('blue-led');
		// 		$(".cases-led").removeClass('yellow-led');
		// 		$(".cables-led").addClass('purple-led');
		// 		$(".downloads-led").removeClass('orange-led');
		// 		$(".company-led").removeClass('teal-led');
		// 	}
		// 	else if(index == 5 && direction == "down" || direction == "up"){
		// 		$(".home-led").removeClass('green-led');
		// 		$(".colour-palette-led").removeClass('red-led');
		// 		$(".colours-led").removeClass('blue-led');
		// 		$(".cases-led").removeClass('yellow-led');
		// 		$(".cables-led").removeClass('purple-led');
		// 		$(".downloads-led").addClass('orange-led');
		// 		$(".company-led").removeClass('teal-led');
		// 	}
		// 	else if(index == 6 && direction == "down"){
		// 		$(".home-led").removeClass('green-led');
		// 		$(".colour-palette-led").removeClass('red-led');
		// 		$(".colours-led").removeClass('blue-led');
		// 		$(".cases-led").removeClass('yellow-led');
		// 		$(".cables-led").removeClass('purple-led');
		// 		$(".downloads-led").removeClass('orange-led');
		// 		$(".company-led").addClass('teal-led');
		// 	}
		// }

		afterLoad: function(anchorLink, index){
			var loadedSection = $(this);

			//using index
			if(index == 1){
				$(".home-led").addClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".company-led").removeClass('teal-led');
			}
			else if(index == 2){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").addClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".company-led").removeClass('teal-led');
			}
			else if(index == 3){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").addClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".company-led").removeClass('teal-led');
			}
			else if(index == 4){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").addClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".company-led").removeClass('teal-led');
			}
			else if(index == 5){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").addClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".company-led").removeClass('teal-led');
			}
			else if(index == 6){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").addClass('orange-led');
				$(".company-led").removeClass('teal-led');
			}
			else if(index == 7){
				$(".home-led").removeClass('green-led');
				$(".colour-palette-led").removeClass('red-led');
				$(".colours-led").removeClass('blue-led');
				$(".cases-led").removeClass('yellow-led');
				$(".cables-led").removeClass('purple-led');
				$(".downloads-led").removeClass('orange-led');
				$(".company-led").addClass('teal-led');
			}
		}

	});

});



