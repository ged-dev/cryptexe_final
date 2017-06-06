// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

// INIT DES VARIABLES
var userData;
//var a = baffle('#testID');
var tab = [];
var nbrIncrementation = 0;
let newVar = "";
let booleen = 0;

// Function which increment the letters
function nextChar(c, nbrIncrementation)
{
	return 	String.fromCharCode(c.charCodeAt(0) + nbrIncrementation);
}

function resetDiv()
{
	document.getElementsByClassName("baffle")[0].innerHTML = "";
 	document.getElementById("animationDiv").innerHTML = "";
}

function flippingText()
{

	$("#animationDiv").flipping_text({
		tickerTime: 30
	});
 	  
};

function revealText()
{
	if(booleen == 0){ // Si texte pas caché
		//$(".theTextisALie").css("display", "none");
		booleen = 1; // Le texte est caché

		$(".theTextisALie").animate({
			opacity: '0.3',
		});

	}else{
		// $(".theTextisALie").css("display", "initial");
		$(".theTextisALie").animate({
			opacity: '1',
		});
		booleen = 0;

	}
}

// Function LAUNCHED when button SUBMIT CLICKED
function getText()
{
	// CLEAR DE LA DIV
	resetDiv();
	console.log("getText");

	userData = document.getElementById("data").value;
	nbrIncrementation = parseInt(document.getElementById("nbrCesar").value);
	
	
	document.getElementsByClassName("baffle")[0].innerHTML += "Cryptage en cours ..." + "<br>";
	document.getElementsByClassName("baffle")[0].innerHTML += "Mot avant cryptage : " + userData + "<br>";
	

	// document.getElementById("testID").innerHTML += userData;

	// a.start();
	// a.stop();
	// a.reveal(5000);

	console.log(userData[0]);
	console.log("nbrIncrement : ", nbrIncrementation);
	let nbrTest = 2;
	for (let i = 0; i < userData.length; i++)
	{
		newVar += nextChar(userData[i], nbrIncrementation);	
	}

	document.getElementsByClassName("baffle")[0].innerHTML += "Mot après cryptage : ";

	
	console.log("variable cryptée : " + newVar);
	document.getElementById("animationDiv").innerHTML += newVar;

	newVar = "";
	
	flippingText();
}







// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■



