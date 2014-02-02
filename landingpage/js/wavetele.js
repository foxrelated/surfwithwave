$(document).ready(function(e) {

	// Initialize register modal
	$(".js-get_started").click(function(e) {
		e.preventDefault();
		$("#register").reveal();
	});

	// Initialize login modal
	$(".js-login").click(function(e) {
		e.preventDefault();
		$("#login").reveal();
	});

	// Initialize Chosen
	$("#birthday select, #gender").chosen();

});
