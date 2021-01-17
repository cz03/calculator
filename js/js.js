

$(document).on('input', $('input'), function() {
	console.log('+');
	$('input')[3].value = $('input')[0].value * $('input')[1].value * $('input')[2].value;
});
