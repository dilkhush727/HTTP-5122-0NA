//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//This function will check the temperature and will return True if temp is/or between 30 and -10 degree
//It expects to receive temperature in number with currentTemp parmeter
//It will return boolean True and False to check whether the weather is suitable for dog walking 

function checkTemp(currentTemp){
	if (currentTemp > 30 || currentTemp < -10) {
		return false;
	}else {
		return true;
	}
}

var TempInput = prompt("What is the current temperature?", "Temperature here...");

if (checkTemp(TempInput) == false) {
	alert("Yikes! This is no weather for dog walking!");
}else{
	alert("You’re good, have a nice walk!");
}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
