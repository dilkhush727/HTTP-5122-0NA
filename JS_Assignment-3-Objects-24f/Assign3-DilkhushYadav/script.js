// alert('This is script.js');

// Initiate an object
var indianCricketTeam = {
	// Assign object properties
	type: "Men",
	worldRankingOdi: "1",
	CaptainT20: "Suryakumar",
	Coach: "Gauttam",
	CaptainOdi: "Rohit",

	// Assign a method to update the coach
	updateCoach: function(coachName){
		// Update the coach name and return the value
		this.Coach = coachName;

		return "Coach of Indian cricket team is " + indianCricketTeam.Coach;
	}
}

// Output object values to the console
console.log(indianCricketTeam);

// Ask user to update the world ranking of Indian cricket team
var updateRanking = prompt("What is the world ranking of Indian men's cricket team in ODI?", indianCricketTeam.worldRankingOdi);

// Check for null and blank values
if (updateRanking != null && updateRanking != "") {

	// Update the world ranking of Indian cricket team
	this.indianCricketTeam.worldRankingOdi = updateRanking;

	// Popup the updated world ranking
	alert("World ranking in ODI is " + indianCricketTeam.worldRankingOdi);
}

// Ask user to update the ODI captain of Indian cricket team
var updateCaptainT20 = prompt("Who is the captain of Indian men's cricket team in T20?", indianCricketTeam.CaptainT20);

// Check for null and blank values
if (updateCaptainT20 != null && updateCaptainT20 != "") {

	// Update the captain of Indian cricket team
	this.indianCricketTeam.CaptainT20 = updateCaptainT20;

	// Popup the updated ODI captain
	alert("T20 captain is " + indianCricketTeam.CaptainT20)
}

// Call the method to update the coach name
alert(indianCricketTeam.updateCoach('Dravid'));

// Output object with updated values to the console
console.log(indianCricketTeam);