//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var itemCart = [];
var userTotal = 0;
var thresHoldPrice = 35

// console.log(itemPrice);

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.

	//GET ITEM COST FROM USER

	while(userTotal < thresHoldPrice){


	//CONVERT USER INPUT TO A NUMBER
		var itemPrice = parseInt(prompt('Input price'));

	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
		userTotal += itemPrice;

	//PUSH ITEM COST TO CART ARRAY
		itemCart.push(itemPrice);
	}
	

//SEND POPUP MESSAGE TO USER

	alert("Your shipping for this order will be free!");


//SEND OUTPUT TO CONSOLE

var priceMessage = "Item prices: ";

for (var i = 0; i < itemCart.length; i++) {
	priceMessage += itemCart[i] + " | ";
}
console.log(priceMessage);