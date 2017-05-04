
// Modules

/// Overlay
$("#sm-overlay-btn").click(function() {
	$(".overlay-bg.sm").addClass('show');
	$("body").addClass('noscroll');
	$("nav").addClass('hide');	
});

$("#md-overlay-btn").click(function() {
	$(".overlay-bg.md").addClass('show');
	$("body").addClass('noscroll');
	$("nav").addClass('hide');	
});

$("#lg-overlay-btn").click(function() {
	$(".overlay-bg.lg").addClass('show');
	$("body").addClass('noscroll');
	$("nav").addClass('hide');	
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


//// find current slide and disable prev/next button
$(document).ready(function() {

	checkCurrent();
	noTabDots();

});

//// focus first item in current carousel slide
$(".carousel-top .header-btn").click(function() {

	focusFirstEl();

});

//// previous/next [ENTER] key behavior
$(document).ready(function() {
 
  // previous button logic
  $(".fd-carrousel__button__previous button").keyup(function(e) {
   
    var code = e.keyCode || e.which;
       
    if (code === 13) {
      
      //console.log('left Tab pressed');
      setTimeout(function(){ $(".current-slide a:last").focus();}, 500);
 
    }
 
  });
 
  // next button logic
  $(".fd-carrousel__button__next button").keyup(function(e) {
  
    var code = e.keyCode || e.which;  
 
    if (code === 13) {
      
      //console.log('right Tab pressed');
      setTimeout(function(){ $(".current-slide a:first").focus();}, 500);
    
    }
   
  }); 
 
});

