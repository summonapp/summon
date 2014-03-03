$(document).ready(function() {
	initializePage();
});

function initializePage() {
	// your code here
	$('.signUpBut').click(function() {
		ga("send", "event", "signup", "click");
	});
	$('.signInBut').click(function() {
		ga("send", "event", "signin", "click");
	});
	$('.quick').click(function() {
		ga("send", "event", "viewEvent", "click");
	});
}