$(document).ready(function() {
	// hide the ul
	$("ul").hide();
	
	// if the button is clicked
	$(".hamburger").click(function() {
		// open/close fast
		$("ul").slideToggle("fast", function() {});
	});
	
	// if a link is clicked
	$("ul.nav li a").click(function() {
		// most likely it will close
		$("ul").slideToggle("fast", function() {});
	});
});