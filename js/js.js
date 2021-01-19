

$('.calc').on('input', $('input'), function() {
	$('input')[3].value = $('input')[0].value * ($('input')[1].value * $('select option:selected').val() + Number($('input')[2].value));
});

$('.calc').on('change', $('select'), function() {
	if ($('select option:selected').text() == 'Полимочевина') {
		$('.thick').text('Толщина в ММ');
	} else {
		$('.thick').text('Толщина в СМ');
	}

})
