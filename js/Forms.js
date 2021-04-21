
/*      Contact form      */

var helpMessages = [ /* array */
	"Please enter first and last names!", 
	"Your EMAIL must have at least 9 characters.", 
	"Your PASSWORD must have at least 9 characters, including at least 1 uppercase letter, at least 2 numbers and 1 character from '@', '#' or '_'", 
	"Both Passwords must match exactly. Confirm Password field available only when valid password has been entered", 
	"You must pick a country before the phone number field is enabled", 
	"you Must click on a Radio Button to select Credit Cart type", 
	"You must type a valid number for your Credit Card Type"
];



function showRest(choice){
	if (choice == 1){
	var wholeName = document.getElementById("wholeName").value;
	
	if (wholeName.length == 0){
			document.getElementById("error1").innerHTML = "Nothing was typed";
			document.getElementById("error1").style.backgroundColor = "orange";
		
} else if (wholeName.indexOf(" ") == -1){
			document.getElementById("error1").innerHTML = "Please enter fist and last names";
			document.getElementById("error1").style.backgroundColor = "orange";
			document.getElementById("wholeName").focus();
			document.getElementById("fieldDOB").style.display = "none";
	}else {
			document.getElementById("error1").innerHTML = "Okay";
			document.getElementById("error1").style.backgroundColor = "lightgreen";
			document.getElementById("fieldDOB").style.display = "block";
	}	
} else if (choice == 2){
		var userDOB = document.getElementById("theDate").value;
	
	if  (userDOB.length == 0) {
			document.getElementById("error2").innerHTML = "No date was input";
			document.getElementById("error2").style.backgroundColor = "orange";
			document.getElementById("theDate").focus();
			document.getElementById("fieldAddress").style.display = "none";
	} else{
			document.getElementById("error2").innerHTML = "Okay";
			document.getElementById("error2").style.backgroundColor = "pink";
			document.getElementById("fieldAddress").style.display = "block";
	}
}else if (choice == 3){
		var userAddress = document.getElementById("town").value;
		
		if (userAddress.length == 0){
			document.getElementById("error3").innerHTML = "Please enter address";
			document.getElementById("error3").style.backgroundColor = "orange";
			document.getElementById("theDate").focus();
			document.getElementById("fieldTerms").style.display = "none";
	} else {
			document.getElementById("error3").innerHTML = "Okay";
			document.getElementById("error3").style.backgroundColor = "yellow";
			document.getElementById("fieldTerms").style.display = "block";
	}
	
}else if (choice == 4){
	
	if (terms.checked == false){
			document.getElementById("error4").innerHTML = "Please accept terms to complete form";
			document.getElementById("error4").style.backgroundColor = "orange";
	} else {
			document.getElementById("error4").innerHTML = "Okay";
			document.getElementById("error4").style.backgroundColor = "lightgreen";
			document.getElementById("theSubmit").disabled = false;
	}
}
}	

/*   Close of contact form   */
