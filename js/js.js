$(document).ready(function() {
	$("ul").hide();
	$(".hamburger").click(function() {
		$("ul").slideToggle("fast", function() {
		});
	});
});