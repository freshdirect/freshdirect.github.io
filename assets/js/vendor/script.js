
// Modules

/// Overlay

var viewportHeight = $(window).height() -50;
var vHeightPixels = viewportHeight + "px";


noScroll = function(){

	$("body").addClass('noscroll');
	$("header").addClass('hide');
	$(".container-box").addClass('down');
	$(".sidenav").addClass('hideZ');

}

okScroll = function(){

	$("header").removeClass('hide');
	$("body").removeClass('noscroll');
	$(".sidenav").removeClass('hideZ');

}

applyHeight = function(){

	if ($(window).width() < 480) {

		$(".md .container-box, .lg .container-box").css("min-height", vHeightPixels);

	} else if ($(window).width() > 481) {

		$(".container-box").removeAttr("style");

	}

}

//// show overlays
$("#sm-overlay-btn").click(function() {

	$(".overlay-bg.sm").addClass('showOp showZ');
	noScroll();

});

$("#md-overlay-btn").click(function() {

	$(".overlay-bg.md").addClass('showOp showZ');
	noScroll();

});

$("#lg-overlay-btn").click(function() {

	$(".overlay-bg.lg").addClass('showOp showZ');
	noScroll();	

});

$("#fs-overlay-btn").click(function() {

	$(".overlay-bg.fs").addClass('showOp showZ');
	noScroll();	

});

//// hide overlays
$(".close-btn").click(function() {

	$(".overlay-bg").removeClass('showOp');
    $(".container-box").removeClass('down');

	setTimeout(function() {

    	$(".overlay-bg").removeClass('showZ');
		okScroll();  

	}, 200);

});

$(document).keyup(function(e) {

 	if (e.keyCode == 27) { // ESC key maps to keycode `27`

    	$(".overlay-bg").removeClass('showOp');
    	$(".container-box").removeClass('down');

		setTimeout(function() {

    		$(".overlay-bg").removeClass('showZ');
			okScroll();    

		}, 200);

	}

});


/// Carousel

//// functions
checkCurrent = function(){

	if ($("#t-carousel-1 .fd-carousel li:first").hasClass("current-slide")){

		$(".fd-carrousel__button__previous button").attr("disabled", true);
		$(".fd-carrousel__button__next button").attr("disabled", false);

	} else if ($("#t-carousel-1 .fd-carousel li:last").hasClass("current-slide")) {

		$(".fd-carrousel__button__next button").attr("disabled", true);
		$(".fd-carrousel__button__previous button").attr("disabled", false);

	} else {

		$(".fd-carrousel__button-container button").attr("disabled", false);

	}

}

focusFirstEl = function(){

	$("#t-carousel-1 .current-slide .fd-pcard:first a").focus();

}

noTabDots = function(){

	$(".multi-product .fd-carrousel__control__list a, .multi-product .fd-carrousel__button__button").attr("tabindex", -1);

}


//// focus first item in current carousel slide
$(".carousel-top .header-btn").click(function() {

	focusFirstEl();

});

//// all functions that need to fire on initial page load
$(document).ready(function() {

	// apply viewport height to md/lg overlays within a narrow width screen
	applyHeight();
 
 	// set current slide, disable appropiate button, 
	// make pagination buttons/dots inaccessible with keyboard
	checkCurrent();
	noTabDots();

  	// carousel previous button logic
  	$(".fd-carrousel__button__previous button").keyup(function(e) {
   
    	var code = e.keyCode || e.which;
       
    	if (code === 13) {
      
      		//console.log('left Tab pressed');
      		setTimeout(function(){ $(".current-slide a:last").focus();}, 500);
 
    	}
 
  	});
 
  	// carousel next button logic
  	$(".fd-carrousel__button__next button").keyup(function(e) {
  
    	var code = e.keyCode || e.which;  
 
    	if (code === 13) {
      
      	//console.log('right Tab pressed');
      	setTimeout(function(){ $(".current-slide a:first").focus();}, 500);
    
    	}
   
  	}); 
 
});

//console.log("all good");

