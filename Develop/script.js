// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function start() {
  window.alert("Welcome to Password Generator, please click OK to continue!");
  window.alert("Please answer the following questions to generate a password. Click OK to continue.")
}

start();
