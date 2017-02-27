
// Modules

/// Overlay

var noscrollhide = $(this).click(function() {
  	$("body").addClass('noscroll');
	$("nav").addClass('hide');	
});


$("#sm-overlay-btn").click(function() {
	$(".overlay-bg.sm").addClass('show');
	noscrollhide;
});

$("#md-overlay-btn").click(function() {
	$(".overlay-bg.md").addClass('show');
	noscrollhide;
});

$("#lg-overlay-btn").click(function() {
	$(".overlay-bg.lg").addClass('show');
	noscrollhide;
});

$(".close-btn").click(function() {
	$(".overlay-bg").removeClass('show');
	$("body").removeClass('noscroll');
	$("nav").removeClass('hide');	
});

$(document).keyup(function(e) {
 	if (e.keyCode == 27) { // escape key maps to keycode `27`
    	$(".overlay-bg").removeClass('show');
    	$("body").removeClass('noscroll');
		$("nav").removeClass('hide');	
	}
});

