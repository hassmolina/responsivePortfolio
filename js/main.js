$(document).ready(function() {
    $('#navbar').affix({
        offset: {
			top: $('header').height()
		}
	});

$('.box').click( function() {
    $(this).toggleClass('clicked');
});
});
