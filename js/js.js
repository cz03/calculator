

$(document).on('input', $('input'), function() {
	console.log('+');
	$('input')[2].value = $('input')[0].value * $('input')[1].value;
});