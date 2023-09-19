// Assignment code here


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  alert("A successful password should include uppercase & lowercase letters, number(s) and a special character");

  var passwordlength = parseInt(prompt("Please choose a password length (between 8 and 128"));
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Please enter a numbered length for your password between 8 and 128 please.")
    return;
  } 

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

