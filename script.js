// Assignment code here


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  alert("A successful password should include uppercase & lowercase letters, number(s) and a special character");

  

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

