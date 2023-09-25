

var generateBtn = document.querySelector("#generate");


// Declaring a Function called generatePassword //

function generatePassword() {
  alert("A successful password should include uppercase & lowercase letters, number(s) and a special character.");

  // Setting a variable to what the user is prompted to put in. Including parseInt to conver it to an integer. //
  // If user puts in a numeric value that is less than 8 or more than 128, it will be prompted with an alert error message //

  var passwordlength = parseInt(prompt("Please choose a password length (between 8 and 128)"));
if (passwordlength < 8 || passwordlength > 128) {
  alert("Please enter a numbered length for your password between 8 and 128 please.")
  return;
} 


    // Confirming that user would like to use these values and setting them to be true (by default) inside the declared variable//
    // If the user at any point does not uphold criteria, will be prompted with an alert of the below message//
    
var usedLowercase = confirm("Would you like to include lowercase characters?");
var usedUppercase = confirm("Would you like to include uppercase characters?");
var usedNumbers = confirm("Would you like to include numbers?")
var usedSpecialChars = confirm("Would you like to include special characters?");
if (!usedLowercase && !usedUppercase && !usedNumbers  && !usedSpecialChars){
  alert("Please select at least one character type for your password");
  return;
}
  // Gave values to the variables for the prompt we gave the user//

  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numberChars = '0123456789';
  var specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

// This line of code declares the variable 'allChars' to be empty so that we can add all 4 above variables together based on the used criteria//
// If the prompts are boolean true or false, it will then add the set of characters to the allChars set and then run it's next line of code//

    var allChars = ''
  if (usedLowercase) allChars += lowercaseChars;
  if (usedUppercase) allChars += uppercaseChars;
  if (usedNumbers) allChars += numberChars;
  if (usedSpecialChars) allChars += specialChars;

  // This block of code now declares a variable(generatedPassword) with an empty value//
  // We run a for loop algorithm to prompt the computer to run this until 'i' is greater than the passwordLength chosen by the user on line 9//
  // Inside the for loop we declare a variable (randomIndex) to be our indexed number that has a randomized generator using Math.random. //
  // We multiply the randomized numeric value from math.random onto the length of allChars.length (the length of the array of the value allChars) //
  // The randomized number will be at first set to a decimal int. We use the Math.floor method to round the number to its nearest whole integer//
  // Finally we take that randomly generated number assigned to randomIndex and put that as the index that will be chosen within allChars[]//

  var generatedPassword = '';

  for (var i = 0; i < passwordlength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars[randomIndex];

  }

  // Now it returns the value of the variable (generatedPassword) //
  // It will continue to add the randomized variable onto itself until the code ends which is when i < password.length //

return generatedPassword;

}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);

