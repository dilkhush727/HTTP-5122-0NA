//######## LAB 2-3 EMAIL SIGNUP ########
// alert("hey 2.3");
//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========



//==== LOGIC =============


var userDecision = confirm("Would you like to join mailing system?");

if (userDecision === true) {
	var userOut = prompt("Please input your email", "me@example.com");

	if (userOut !== null &&userOut !== "" && userOut !== "me@example.com") {
		alert("Thank you, our next newsletter will be sent to " + userOut);
	}else{
		alert("Thank you, but your email was not valid.");
	}
}else{
	alert("Thank you, we will not bother you again");
}