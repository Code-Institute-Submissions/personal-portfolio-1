(function ($) {
	"use strict";

	var $projects = $("#project .project-item"),
		$portrait = $("#hero .portrait"),
		$portraitPos = $portrait.offset().top,
		$menuIcon = $("header .menu-icon"),
		$mobileNav = $(".mobile-nav"),
		$mobileLink = $(".mobile-nav .mobile-link"),
		$window = $(window);

	function onHoverProjects() {
		$(this).toggleClass("active");
	}
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
		// $projects.on("mouseover mouseout", onHoverProjects);

		$menuIcon.on("click", onClickMenuIcon);

		$mobileLink.on("click", onClickMobileLink);

		$window.scroll(function () {
			var yCoor = $(this).scrollTop();

			onScrollPortrait(yCoor);

			$mobileNav.removeClass("active");
		});
	});
})(jQuery);
