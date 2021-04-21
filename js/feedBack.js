/*Contact form script */

/*First and last name and terms validation */
function valCheck(choice) 
{
	if (choice == 1){ /* first name */ 
	var firstName = document.getElementById("firstName").value;
	
	if (firstName.length == 0){
			document.getElementById("error1").innerHTML = "Nothing was typed";
			document.getElementById("error1").style.backgroundColor = "orange";
			document.getElementById("firstName").focus();
			
	}else {
			document.getElementById("error1").innerHTML = " &#10003; ";
			document.getElementById("error1").style.backgroundColor = "lightgreen";
	}
	

} else if (choice == 2){ /* last name */
	var lastName = document.getElementById("lastName").value;
	
	if (lastName.length == 0){
			document.getElementById("error2").innerHTML = "Nothing was typed";
			document.getElementById("error2").style.backgroundColor = "orange";
			document.getElementById("lastName").focus();
			
	}else {
			document.getElementById("error2").innerHTML = " &#10003; ";
			document.getElementById("error2").style.backgroundColor = "lightgreen";
			return true;
	}


} else if (choice == 3) {
	var userDOB = document.getElementById("theDate").value;
	
	if  (userDOB.length == 0) {
			document.getElementById("error3").innerHTML = "No date was entered";
			document.getElementById("error3").style.backgroundColor = "orange";
			document.getElementById("theDate").focus();
			
	} else{
			document.getElementById("error3").innerHTML = "&#10003;";
			document.getElementById("error3").style.backgroundColor = "lightgreen";
	}
	
}else if (choice == 4) { /* comment */
	var comment = document.getElementById("comment").value;
	
	if (comment.length == 0){
			document.getElementById("error5").innerHTML = "Please enter a comment";
			document.getElementById("error5").style.backgroundColor = "orange";
			document.getElementById("comment").focus();
			
	} else{
			document.getElementById("error5").innerHTML = " &#10003; ";
			document.getElementById("error5").style.backgroundColor = "lightgreen";
			return true;
	}
		
		
	} else if (choice == 5){ /*terms*/
	
	if (terms.checked == false){ 
			document.getElementById("error6").innerHTML = "Please accept terms.";
			document.getElementById("error6").style.backgroundColor = "orange";
			document.getElementById("submitBtn").disabled = true;
			
	} else {
			document.getElementById("error6").innerHTML = " &#10003; ";
			document.getElementById("error6").style.backgroundColor = "lightgreen";
			document.getElementById("submitBtn").disabled = false;
			return true;
	}
}
}		

/*Email*/
function emailValidation()
{
  /*  
	if @ is at beginning email invalid
	if char position between "@" and "." is less than 2 email invalid
	if difference between index of last char and "." i greater than 3 or less than 2 email invalid
	if input empty email invalid
  */
  
  value = document.getElementById('email_field').value;
  apos=value.indexOf("@"); 
  dotpos=value.lastIndexOf(".");
  lastpos=value.length-1;
  
  if (apos < 1 || dotpos-apos < 2 || lastpos-dotpos > 3 || lastpos-dotpos < 2 || value.length == 0){
      document.getElementById("email-error").innerHTML = "Invalid Email Address";
	  document.getElementById("email-error").style.backgroundColor = "orange";
      return false;
	  
    } else {
		document.getElementById("email-error").innerHTML = " &#10003; ";
		document.getElementById("email-error").style.backgroundColor = "lightgreen";
      return true;
  }
}

/* local storage */
function checkForm(){
	localStorage.setItem("firstName", document.getElementById("firstName").value); //writes first name to local storage
	localStorage.setItem("lastName", document.getElementById("lastName").value); //writes last name to local storage
	localStorage.setItem("email_field", document.getElementById("email_field").value); //writes email to local storage
	localStorage.setItem("theDate", document.getElementById("theDate").value); //writes DOB to local storage
	localStorage.setItem("comment", document.getElementById("comment").value); //writes comment to local storage
	return true;
}

function readLocalStorage(){
	document.getElementById("firstName_LS").innerHTML = localStorage.getItem("firstName"); //reads first name from LS
	document.getElementById("lastName_LS").innerHTML = localStorage.getItem("lastName"); //reads last name from LS
	document.getElementById("email_LS").innerHTML = localStorage.getItem("email_field"); //reads email from LS
	document.getElementById("theDate_LS").innerHTML = localStorage.getItem("theDate"); //reads dob from LS
	document.getElementById("comment_LS").innerHTML = localStorage.getItem("comment"); //reads comment from LS
}





	
