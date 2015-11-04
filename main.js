$(document).ready(function() {

	var $prompt = $('#prompt');
	var $log = $('#log');

	var addPrompt = function(event){
		console.log(event);
		var $promptList = $('<li>');
		// $('li').addClass('listItems');
		// var $listItems = $('.listItems');
		$promptList.text($prompt.val());
		$log.append($promptList);
		$('#prompt').val('');

		};


	$prompt.on('keypress', function(event){
		if (event.keyCode === 13){
			addPrompt(event);
		}
	});
});


	