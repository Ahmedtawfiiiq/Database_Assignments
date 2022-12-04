//Inputs
const email = document.getElementById("email");
const password = document.getElementById("password");

//Errors
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

//Buttons
document.getElementById("check").addEventListener("click", validate);

//Arrays
var inputs=[email,password];
var errors=[emailError,passwordError];

//Email expression
var emailpattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validate() {
	// Blank input validation
	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].value==='') {
			errors[i].innerHTML='Cannot be blank';
		}
		else
			errors[i].innerHTML='';
	}
	
	// Email validation
	if (email.value!=='') {
		if (emailpattern.test(email.value)) { 
		}
		else
			emailError.innerHTML="Invalid email";
	}
}
