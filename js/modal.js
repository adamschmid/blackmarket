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

	$("#navigation").click(function(){
		$(".overlay").velocity({
			opacity: 0},
			{complete: function(){$(".overlay").addClass('hide');}}
		);
		$("#dtk-notes").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-notes").addClass('hide');}}
		);
		$("#dtk-dimpic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-dimpic").addClass('hide');}}
		);
		$("#dtk-pinoutpic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-pinoutpic").addClass('hide');}}
		);
		$("#dtk-con-pic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-con-pic").addClass('hide');}}
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
		$("#dtk-dimpic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-dimpic").addClass('hide');}}
		);
		$("#dtk-pinoutpic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-pinoutpic").addClass('hide');}}
		);
		$("#dtk-con-pic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-con-pic").addClass('hide');}}
		);
		$("#dtk-con-pic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-con-pic").addClass('hide');}}
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
		$("#dtk-dimpic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-notes").addClass('hide');}}
		);
		$("#dtk-pinoutpic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-pinoutpic").addClass('hide');}}
		);
		$("#dtk-con-pic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-con-pic").addClass('hide');}}
		);
	});


//designers toolkit notes
	$('#dtk-notes-link').click(function(){
		$("#dtk-notes").removeClass('hide').velocity({opacity: 1});
	});

//designers toolkit dimensions pic
	$('#dtk-dimpic-link').click(function(){
		$("#dtk-dimpic").removeClass('hide').velocity({opacity: 1});
	});

//designers toolkit pinout pic
	$('#dtk-pinout-link').click(function(){
		$("#dtk-pinoutpic").removeClass('hide').velocity({opacity: 1});
	});

//designers toolkit connectors pic
	$('#dtk-connectors-link').click(function(){
		$("#dtk-con-pic").removeClass('hide').velocity({opacity: 1});
	});



//modal close
	$(".close").click(function(){
		$("#dtk-notes").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-notes").addClass('hide');}}
		);
		$("#dtk-dimpic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-dimpic").addClass('hide');}}
		);
		$("#dtk-pinoutpic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-pinoutpic").addClass('hide');}}
		);
		$("#dtk-con-pic").velocity({
			opacity: 0},
			{complete: function(){$("#dtk-con-pic").addClass('hide');}}
		);
	});


});