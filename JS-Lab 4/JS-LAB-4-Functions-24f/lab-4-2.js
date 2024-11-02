//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.

function getAverage(num1, num2, num3, num4, num5){
	var numSum = (num1 + num2 + num3 + num4 + num5);

	var nymAverage = (numSum/5).toFixed(1);

	return nymAverage;
}

alert(getAverage(5, 10, 15, 20, 25));

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var HTTP5125 = 60;
var HTTP5126 = 70;
var HTTP5122 = 80;
var HTTP5106 = 90;
var HTTP5110 = 100;

function checkAverage(num1, num2, num3, num4, num5){
	var numSum = (num1 + num2 + num3 + num4 + num5);

	var nymAverage = (numSum/5).toFixed(1);

	if (nymAverage >= 70) {
		alert("Success! Average is " + nymAverage);
	}else{
		alert("Review required");
	}
}

checkAverage(HTTP5125, HTTP5126, HTTP5122, HTTP5106, HTTP5110);