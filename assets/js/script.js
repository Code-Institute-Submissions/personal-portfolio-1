(function($) {
	"use strict";

	var $portrait = $("#hero .portrait"),
		$portraitPos = $portrait.offset().top,
		$menuIcon = $("header .menu-icon"),
		$mobileNav = $(".mobile-nav"),
		$mobileLink = $(".mobile-nav .mobile-link"),
		$window = $(window);

	// fire this function to gradually move the portrait up and down
	// depends on the scrolling direction of the user ( up and down)
	function onScrollPortrait(yCoor) {
		$portrait.css("top", `${yCoor * 0.3 + $portraitPos}px`);
	}

	// open and close the mobile navigation window whenever a user clicks on the hamburger
	function onClickMenuIcon() {
		$(this).toggleClass("active");
		$mobileNav.toggleClass("active");
	}
	// Closes the mobile nav container if the user clicks one of the link
	function onClickMobileLink() {
		$mobileNav.removeClass("active");
	}
	// when the document is fully loaded run the functions below

	//----------------------------------------------------------

	$(document).ready(function() {
		$menuIcon.on("click", onClickMenuIcon);

		$mobileLink.on("click", onClickMobileLink);

		// closes the mobile navigation window whenever a user scrolls
		$window.scroll(function() {
			var yCoor = $(this).scrollTop();

			onScrollPortrait(yCoor);

			$mobileNav.removeClass("active");
		});
	});
})(jQuery);
