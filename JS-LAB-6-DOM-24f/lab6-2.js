//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageReady;
function pageReady(){

	document.getElementById("mysteryBox").onmouseover = function() {mouseOver()};

	function mouseOver() {

	  if (confirm("“Do you want to see something?")) {

	  	document.getElementById("mysteryBox").style.display = "none";
	  	document.getElementById("buttonBox").style.display = "block";

	  }

	}

	document.getElementById("buttonBox").onclick = function() {mouseOverBtn()};

	function mouseOverBtn(){
		document.getElementById("buttonBox").style.width = "600px";
		document.getElementById("buttonBox").style.background = "orange";
		document.getElementById("buttonBox").innerHTML = "<h2>SURPRISE!!</h2>";
	}

	//'WRAPPER' FUNCTION FOR DOM LOGIC

		//GET DOM ELEMENTS WE'LL NEED


		//====CREATE THE FUNCTIONS WE'LL NEED====
		//FUNCTION TO ASK USER


		//FUNCTION TO CHANGE buttonBox


		//SETUP LISTENERS


	//END onload FUNCTION
}