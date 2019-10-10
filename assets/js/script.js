$(document).ready(function() {
	onHoverProjects();
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
