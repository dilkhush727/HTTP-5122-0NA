# Files from HTTP-5122
## Front-End Web Development
## Course Code: HTTP 5122

### Academic Year: 2025-2026

This course covers the basics of computer programming and introduces the tools needed to create interactive web pages using JavaScript.


# Links
https://www.w3schools.com/js/default.asp

# Image
![image](https://github.com/user-attachments/assets/9f8b0045-0448-4479-958f-292d01405273)


***Notice:*** This repository includes my weekly work for this course. Regular practice with JavaScript is recommended to improve your coding skills and build confidence.

# Example Codes

Here is an example of a simple JavaScript function for confirmation box:

//######## LAB 2-1 FILE DELETE CONFIRMATION ########
// alert("hey 2.1");
//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES ========
var userChoice;
var messageOut = "Thank you, your file has ";
var yesMessage = "been successfully deleted.";
var noMessage = "not been altered.";

//==== LOGIC ========



//1. CREATE POPUP TO ASK FOR PERMISSION TO PROCEED WITH DELETION OF FILE.
userChoice = confirm("Are you sure you like to delete the file?");

if (userChoice == 1) {
	//2. IF USER CLICKS OKAY, POPUP messageOut WITH yesMessage.
	alert(messageOut + yesMessage);
}else{
	//3. IF USER CLICKS ANYTHING BUT OKAY, POPUP messageOut WITH noMessage.
	alert(messageOut + noMessage);
}
