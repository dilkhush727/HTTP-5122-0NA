//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
var ourTeam = ["Abhiraj", "Jinal", "Nitesh", "Sumit"];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourTeam);

//REMOVE LAST MEMBER
ourTeam.pop();
console.log(ourTeam);


//ADD SEAN TO FRONT OF ARRAY
ourTeam.unshift("Sean");
console.log(ourTeam);


//REARRANGE THE ARRAY ALPHABETICALLY
ourTeam.sort();
console.log(ourTeam);


//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("We have " + ourTeam.length +" people in our group.");


//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE

for (var i = 1; i <= ourTeam.length; i++) {

	console.log(ourTeam[i] + " is # " + i);

}