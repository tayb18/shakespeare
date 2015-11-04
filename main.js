$(document).ready(function() {

	var $prompt = $('#prompt');
	var $log = $('#log');

	var addPrompt = function(){
		console.log(event.target);
		var promptList = document.createElement('li');
		$('li').addClass('listItems');
		var $listItems = $('.listItems');
		promptList = $prompt.val();
		$listItems.append(promptList);
		$('#prompt').val('');

		};


	$prompt.on('keypress', function(event){
		if (event.keyCode === 13){
			addPrompt();
		}
	});
});