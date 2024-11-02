// Define seven variables for seven movie tirles
var movie1 = 'One Fine Day';
var movie2 = 'The Two Jakes';
var movie3 = 'The Three Musketeers';
var movie4 = 'Fantastic Four';
var movie5 = 'Five Minutes of Heaven';
var movie6 = 'The Sixth Sense';
var movie7 = 'Seven Pounds';

// Assign a variable to hold all seven movies in an array
var allMovies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

// Assign initial value of user input as zero
var userinput = 0;

// Check if user provides less than 1 or greater than 7 or not a valid number
while (userinput < 1 || userinput > 7 || isNaN(parseFloat(userinput))) {

	// Ask user untill s/he provides a valid movie number between 1 and 7
	userinput = prompt("Which top 7 movie would you like?", "Pick a number: 1-7");

	// Check if user provides valid movie number
	if (userinput >= 1 && userinput <= 7) {
		// Alert with a message if a correct movie number
		alert("Number " + userinput + " on the list is: " + allMovies[userinput-1]);

		for (var i = 1; i <= allMovies.length; i++) {
			// Print all the movies titles with their number in console
			console.log("Movie " + i + ": " + allMovies[i-1]);
		}
	}else{
		// Alert if user do not provide a valid movie number
		alert("Please enter a number between 1 and 7!");
	}
}