$(document).ready(function() {
	globalListener();

	onHoverProjects();
	onScrollPortrait();
	onClickMenuIcon();
	onClickMobileLinks();
});

function onHoverProjects() {
	var projects = $("#project .project-item");

	projects.hover(
		function() {
			$(this).addClass("active");
		},
		function() {
			$(this).removeClass("active");
		}
	);
}

function onScrollPortrait() {
	var target = $("#hero .portrait");
	var initPos = target.offset().top;
	$(window).scroll(function(event) {
		var yCoor = $(this).scrollTop();
		target.css("transform", `translateY(${yCoor * 0.3 + initPos}px)`);
	});
}

function onClickMenuIcon() {
	var trigger = $("header .menu-icon");
	var target = $(".mobile-nav");
	trigger.click(function() {
		$(this).toggleClass("active");
		target.toggleClass("active");
	});
}

function onClickMobileLinks() {
	var trigger = $(".mobile-nav .mobile-link");
	var target = $(".mobile-nav");

	trigger.click(function() {
		target.removeClass("active");
	});
}

function globalListener() {
	var target = $(".mobile-nav");
	$(window).scroll(function() {
		target.removeClass("active");
	});
}
