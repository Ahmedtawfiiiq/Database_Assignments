//Inputs
const name = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("Cpassword");

//Errors
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("CpasswordError");

//Buttons
document.getElementById("check").addEventListener("click", validate);

//Arrays
var inputs=[name,email,password,confirmPassword];
var errors=[nameError,emailError,passwordError,confirmPasswordError];

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

	// Passwords match check
	if (password.value!==confirmPassword.value && password.value!=='' && confirmPassword.value!=='') {
		confirmPasswordError.innerHTML="Passwords don't match";
	}

	// Email validation
	if (email.value!=='') {
		if (emailpattern.test(email.value)) { 
		}
		else
			emailError.innerHTML="Invalid email";
	}	
}