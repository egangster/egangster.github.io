$(document).ready(function() {
	"use strict"
	
	$("ul").hide();
	$(".hamburger").click(function() {
		$("ul").slideToggle("fast", function() {
			
			var trigger = $("#nav"),
			container = $("#container");
	
			console.log(trigger);
			console.log(container);
	
			trigger.on("click", function() {
				var $this = $(this),
				target = $this.data("target");
		
				container.load(target + ".html");
		
				return false;
			});
		});
	});
});
