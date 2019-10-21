(function ($) {
	"use strict";

	var $portrait = $("#hero .portrait"),
		$portraitPos = $portrait.offset().top,
		$menuIcon = $("header .menu-icon"),
		$mobileNav = $(".mobile-nav"),
		$mobileLink = $(".mobile-nav .mobile-link"),
		$window = $(window);


	function onScrollPortrait(yCoor) {
		$portrait.css("top", `${yCoor * 0.3 + $portraitPos}px`);
	}
	function onClickMenuIcon() {
		$(this).toggleClass("active");
		$mobileNav.toggleClass("active");
	}

	function onClickMobileLink() {
		$mobileNav.removeClass("active");
	}
	// when the document is fully loaded run the functions below

	//----------------------------------------------------------

	$(document).ready(function () {

		$menuIcon.on("click", onClickMenuIcon);

		$mobileLink.on("click", onClickMobileLink);

		$window.scroll(function () {
			var yCoor = $(this).scrollTop();

			onScrollPortrait(yCoor);

			$mobileNav.removeClass("active");
		});
	});
})(jQuery);




var multiDimensionalArray = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12, [13, 14, [15]]]]]];