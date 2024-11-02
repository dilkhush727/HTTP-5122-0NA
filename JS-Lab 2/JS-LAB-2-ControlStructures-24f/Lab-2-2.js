//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
// alert("hey 2.2");
//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		// Correct password
		// user name input
		// password input


var userName = "dart";
var password = "vader";


//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE

//5. CREATE POPUP BOX FOR PASSWORD

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD

//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE



//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE

var userNameOut = prompt("What is your username?");
console.log("Hello " +userNameOut);


var passwordOut = prompt("What is your password?");
console.log("Your password is " +passwordOut);



if (userNameOut === userName && passwordOut === password) {
	alert("Welcome back " +userNameOut);

	console.log("Login successful");
}else{
	alert("Invalid username/password");

	console.log("Login Fail");
}