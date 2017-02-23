
// Modules

/// Overlay
$( "#sm-overlay-btn" ).click(function() {
	$( ".overlay-bg.sm" ).addClass('show');
});

$( "#md-overlay-btn" ).click(function() {
	$( ".overlay-bg.md" ).addClass('show');
});

$( "#lg-overlay-btn" ).click(function() {
	$( ".overlay-bg.lg" ).addClass('show');
});

$( ".close-btn" ).click(function() {
	$( ".overlay-bg" ).removeClass('show');
});

$(document).keyup(function(e) {
 	if (e.keyCode == 27) { // escape key maps to keycode `27`
    	$( ".overlay-bg" ).removeClass('show');
	}
});