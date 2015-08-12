$(document).ready(function(){

//overlay modal

	$('.modal-open').click(function(){
		$(".overlay").removeClass('hide').velocity({opacity: 1});
	});
	$('.modal-close').click(function(){
		$(".overlay").velocity({
			opacity: 0},
			{complete: function(){$(".overlay").addClass('hide');}}
		);
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



/////// CLOSE MODALS /////

	$("#navigation").click(function(){
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
	});

	$("#logo").click(function(){
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
		$("#dtk-connector-pic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-connector-pic").addClass('hide');}}
		);
		$("#dtk-connectors-pic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-connectors-pic").addClass('hide');}}
		);
		$("#dtk-colouring-pic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-colouring-pic").addClass('hide');}}
		);
	});

	$(".overlay").click(function(){
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
			{complete: function(){$("#dtk-notes").addClass('hide');}}
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
	});

	$(".close").click(function(){
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
	});


});