'use strict';

$(document).ready(function() {
	initializePage();
});

function initializePage() {
	// your code here
	$('.signUpBut').click(function() {
	  alert("signup");
		ga("send", "event", "signup", "clickSignup");
	});
	$('.signInBut').click(function() {
		alert("signin");
		ga("send", "event", "signin", "clickSignin");
	});
	$('.quick').click(function() {
		alert("quick");
		ga("send", "event", "viewEvent", "clickQuick");
	});
}