

$('.calc').on('input', $('input'), function() {
	$('input')[2].value = $('input')[0].value * ($('input')[1].value * $('select option:selected').val());
});

$('.calc').on('change', $('select'), function() {
	if ($('select option:selected').text() === 'Полимочевина') {
		$('.thick').text('Толщина в ММ');
	} else {
		$('.thick').text('Толщина в СМ');
	}

})
