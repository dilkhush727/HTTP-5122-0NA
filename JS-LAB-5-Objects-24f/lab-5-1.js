//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

// var meObject = {
// 	name: "Dilkhush",
// 	email: "dilkhush727@gmail.com",
// 	phone: "8003389727",
// 	address: "12 Bonnycastle St",
// }

// console.log(meObject.phone);

// alert("My name is " + meObject.name + " and my email is " + meObject.email);



var meObject = {
	name: "Dilkhush",
	email: "dilkhush727@gmail.com",
	phone: "8003389727",
	address: "12 Bonnycastle St",

	outObject: function() {
		console.log(meObject.phone);
		alert("My name is " + meObject.name + " and my email is " + meObject.email);
	}
}


meObject.outObject();