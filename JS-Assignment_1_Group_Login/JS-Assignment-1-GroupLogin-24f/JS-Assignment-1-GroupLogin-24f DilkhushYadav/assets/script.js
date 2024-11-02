// Assign a team number (Can create more teams and can create array of teams)
var teamNumber = 1;
// Encapsulate greeting message in a variable
var greetingMsg = "you are in!";

// Ask user about their team number(there is only 1 team is created)
var userTeamIn = prompt("What is your team number?", "Your team numbere here...");

// Check and validate if provided team number is a currect team number
if(userTeamIn !== null && userTeamIn !== "" && userTeamIn == teamNumber){

	// If provided team number is a correct team number then ask user for their first name
	switch (prompt("What is your first name?", "Your first name here...")) {
		// If user provides correct first name then match the case and break(stop) the switch code and greet user by popup
	case "Marlon":
		alert('Welcome Marlon Brando, ' + greetingMsg);
		break;
	case "Megan":
		alert('Welcome Megan Fox, ' + greetingMsg);
		break;
	case "Tom":
		alert('Welcome Tom Hardy, ' + greetingMsg);
		break;
	case "Peter":
		alert('Welcome Peter Parker, ' + greetingMsg);
		break;
	case "Steve":
		alert('Welcome Steve Rogers, ' + greetingMsg);
		break;
		// in case the user do not provide correct first name, show them a pop with error message
	default:
		alert("Access denied!");
	}

}else{
	// If user do not provide correct team number, show them a pop with error message
	alert('Access denied!');
}


// Note: We can make more than one team but here one tema is enough to understand the logic and flow.
//       For more than one team, we can use array for data management otherwise custom code will become huge