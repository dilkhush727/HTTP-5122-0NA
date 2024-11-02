//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
var myBankCus = {};
//2. Add the required properties to your object.
myBankCus = {
	lastName: "Yadav",
	branchNumber: "RBC727",
	accountBalance: 500.25,
	interestRate: 1.03,
	// multipleAccounts: true,
	multipleAccounts: false,

//3. Add your first method and test it. Remember, the methods will change the properties of the object.
	makeDeposit: function (depositAmount) {
		myBankCus.accountBalance = (depositAmount + myBankCus.accountBalance);
		return "Thank you, your current balance is now " + myBankCus.accountBalance.toFixed(2);
	},

//4. Add your second method and test it.
	makeWithdrawal: function (withdrawalAmount) {
		myBankCus.accountBalance = (myBankCus.accountBalance - withdrawalAmount);
		return "Thank you, your current balance is now " + myBankCus.accountBalance.toFixed(2);
	},

	addInterest: function (){
		newInterestRate = myBankCus.interestRate;

		if (myBankCus.multipleAccounts == true) {
			newInterestRate = .005;
		}
		myBankCus.accountBalance = (myBankCus.accountBalance * newInterestRate);
		return "Thank you, your current balance is now " + myBankCus.accountBalance.toFixed(2);
	}
}

//5. Create the required output to complete steps 6-10 of the lab.
console.log(myBankCus.accountBalance);
console.log(myBankCus.makeDeposit(200));
console.log(myBankCus.makeWithdrawal(75));

//6. Once everything is working, tackle the Stretch Goal!

console.log(myBankCus.addInterest());
console.log(myBankCus.accountBalance.toFixed(2));