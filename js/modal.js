$(document).ready(function(){

//overlay modal

	$('.modal-open').click(function(){
		$(".overlay").removeClass('hide').velocity({opacity: 1});
	});


/////// OPEN MODALS ///////

//designers toolkit notes
	$('#dtk-notes-link').click(function(){
		$("#dtk-notes").removeClass('hide').velocity({opacity: 1});
	});

//designers toolkit dimensions pic
	$('#dtk-dimensions-pic-link').click(function(){
		$("#dtk-dimensions-pic").removeClass('hide').velocity({opacity: 1});
	});

//designers toolkit pinout pic
	$('#dtk-pinouts-pic-link').click(function(){
		$("#dtk-pinouts-pic").removeClass('hide').velocity({opacity: 1});
	});

//designers toolkit connectors pic
	$('#dtk-connectors-pic-link').click(function(){
		$("#dtk-connectors-pic").removeClass('hide').velocity({opacity: 1});
	});

//designers toolkit colouring pic
	$('#dtk-colouring-pic-link').click(function(){
		$("#dtk-colouring-pic").removeClass('hide').velocity({opacity: 1});
	});

//woof modal pics
	$('#woof-pic-link').click(function(){
		$("#woof-modal-pics").removeClass('hide').velocity({opacity: 1});
	});

//tweet modal pics
	$('#tweet-pic-link').click(function(){
		$("#tweet-modal-pics").removeClass('hide').velocity({opacity: 1});
	});

//adptr modal pics
	$('#adptr-pic-link').click(function(){
		$("#adptr-modal-pics").removeClass('hide').velocity({opacity: 1});
	});

//pcb modal pics
	$('#pcb-pic-link').click(function(){
		$("#pcb-modal-pics").removeClass('hide').velocity({opacity: 1});
	});


/////// CLOSE MODALS /////

//close with UI click events
	$("#navigation, #logo, .overlay, .close").click(function(){
		$(".overlay").velocity({
			opacity: 0},
			{complete: function(){$(".overlay").addClass('hide');}}
		);
		$("#dtk-notes").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-notes").addClass('hide');}}
		);
		$("#dtk-dimensions-pic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-dimensions-pic").addClass('hide');}}
		);
		$("#dtk-pinouts-pic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-pinouts-pic").addClass('hide');}}
		);
		$("#dtk-connectors-pic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-connectors-pic").addClass('hide');}}
		);
		$("#dtk-colouring-pic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-colouring-pic").addClass('hide');}}
		);
		$("#woof-modal-pics").velocity({
			opacity: 0},
			{complete: function(){$("#woof-modal-pics").addClass('hide');}}
		);
		$("#tweet-modal-pics").velocity({
			opacity: 0},
			{complete: function(){$("#tweet-modal-pics").addClass('hide');}}
		);
		$("#adptr-modal-pics").velocity({
			opacity: 0},
			{complete: function(){$("#adptr-modal-pics").addClass('hide');}}
		);
		$("#pcb-modal-pics").velocity({
			opacity: 0},
			{complete: function(){$("#pcb-modal-pics").addClass('hide');}}
		);
	});

//close with escape key
	document.onkeydown = function(evt) {
		evt = evt || window.event;
		if (evt.keyCode == 27) {
			$(".overlay").velocity({
				opacity: 0},
				{complete: function(){$(".overlay").addClass('hide');}}
			);
			$("#dtk-notes").velocity({
				opacity: 0},
				{complete: function(){$("#dtk-notes").addClass('hide');}}
			);
			$("#dtk-dimensions-pic").velocity({
				opacity: 0},
				{complete: function(){$("#dtk-dimensions-pic").addClass('hide');}}
			);
			$("#dtk-pinouts-pic").velocity({
				opacity: 0},
				{complete: function(){$("#dtk-pinouts-pic").addClass('hide');}}
			);
			$("#dtk-connectors-pic").velocity({
				opacity: 0},
				{complete: function(){$("#dtk-connectors-pic").addClass('hide');}}
			);
			$("#dtk-colouring-pic").velocity({
				opacity: 0},
				{complete: function(){$("#dtk-colouring-pic").addClass('hide');}}
			);
			$("#woof-modal-pics").velocity({
				opacity: 0},
				{complete: function(){$("#woof-modal-pics").addClass('hide');}}
			);
			$("#tweet-modal-pics").velocity({
				opacity: 0},
				{complete: function(){$("#tweet-modal-pics").addClass('hide');}}
			);
			$("#adptr-modal-pics").velocity({
				opacity: 0},
				{complete: function(){$("#adptr-modal-pics").addClass('hide');}}
			);
			$("#pcb-modal-pics").velocity({
				opacity: 0},
				{complete: function(){$("#pcb-modal-pics").addClass('hide');}}
			);
		}
	};
});