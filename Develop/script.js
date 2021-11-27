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

var numbers = /^[0-9]+$/

//function that asks the user for the length of their password
var lengthQuestion = function() {
var promptLength = window.prompt("How many characters would you like your password to be? Passwords can be between 8 and 128 characters.");
  //validate prompt answer
  if (promptLength < 8 ) {
    window.alert("Your password is too short! Please choose a length of at least 8 characters!");
    //returned back to length question
    return lengthQuestion();
  } else if (promptLength > 128 ) {
    window.alert("Your password is too long! Please choose a length of less than 129 characters!");
    //returned back to length question
    return lengthQuestion();
  } 
};

var lowercaseQuestion = function() {
  var confirmLowercase = window.confirm("Would you like your password to include lowercase characters?");
  if (confirmLowercase) {
    window.alert("You have chosen to include lowercase characters in your password.")
  } else {
    window.alert("You have chosen to not include uppercase characters in your password.")
  }
};

var uppercaseQuestion = function() {
  var confirmUppercase = window.confirm("Would you like your password to include uppcase characters?");
  if (confirmUppercase) {
    window.alert("You have chosen to include uppercase characters in your password.")
  } else {
    window.alert("You have chosen to not include uppercase characters in your password.")
  }
};

var numericQuestion = function() {
  var confirmNumeric = window.confirm("Would you like your password to include numeric characters?");
  if (confirmNumeric) {

    window.confirm("You have chosen to include numeric characters in your password.")
} else {
  window.alert("You have chosen to not include numeric characters in your password.")
}
};

var specialCharactersQuestion = function() {
  var confirmSpecialCharacter = window.confirm("Would you like your password to include special characters?");
  if (confirmSpecialCharacter) {
    window.alert("You have chosen to include special characters in your password.")
  } else {
    window.alert("You have chosen to not include special characters in your password.")
  }
};

var start = function() {
  //welcome and explain process to user
  window.alert("Welcome to Password Generator, please click OK to continue!");
  window.alert("Please answer the following questions to generate a password. Click OK to continue.");
  //ask user how long they would like their password to be
  lengthQuestion();
  lowercaseQuestion();
  uppercaseQuestion();
  numericQuestion();
  specialCharactersQuestion();
}

start();



//else if (promptLength.matches(numbers)) {
  //window.alert("Good test");
//} else {
  //window.alert("Please enter numeric values only");
//}