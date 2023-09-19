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
  var usedLowercase = confirm("Would you like to include lowercase characters?");
  var usedUppercase = confirm("Would you like to include uppercase characters?");
  var usedNumbers = confirm("Would you like to include numbers?")
  var usedSpecialChars = confirm("Would you like to include special characters?");
    if (!usedLowercase && !usedUppercase && !usedNumbers && !usedSpecialChars){
  alert("Please select at least one character type for your password");
  return;
}
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numberChars = '0123456789';
  var specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
  var allChars = ''
  
  if (usedLowercase) allChars += lowercaseChars;
  if (usedUppercase) allChars += uppercaseChars;
  if (usedNumbers) allChars += numberChars;
  if (usedSpecialChars) allChars += specialChars;

  var generatedPassword = '';

  for (var i = 0; i < passwordlength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars[randomIndex];

  }
  return generatedPassword;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

