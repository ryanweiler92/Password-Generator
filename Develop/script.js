var uppercaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var uppercaseNumList ='ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
var uppercaseWithSpecialList ="ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var uppercaseWithNumSpecialList="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
var lowercaseNumList="abcdefghijklmnopqrstuvwxyz0123456789";
var lowercaseSpecialList="abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowercaseNumSpecialList="abcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var bothCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var bothCaseNumList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var bothCaseSpecialList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var bothCaseNumSpecialList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


var password = "tEsTiNg123!!"
//function that asks the user for the length of their password


var lengthQuestion = function() {
var promptLength = window.prompt("How many characters would you like your password to be? Passwords can be between 8 and 128 characters.");
  promptLength = parseInt(promptLength);
  //validate prompt answer
  if (promptLength < 8 ) {
    window.alert("Your password is too short! Please choose a length of at least 8 characters!");
    //returned back to length question
    return lengthQuestion();
  } else if (promptLength > 128 ) {
    window.alert("Your password is too long! Please choose a length of less than 129 characters!");
    //returned back to length question
    return lengthQuestion();
  } else {
    console.log(promptLength);
    passwordInfo.length = promptLength;
    return promptLength;
  }
};

var caseQuestion = function() {

  var casePrompt = window.prompt("Which character case would you like in your password? Enter 1 for lowercase, 2 for uppercase or 3 for both.");

  casePrompt = parseInt(casePrompt);

  switch (casePrompt) {
    case 1:
      window.alert("You have chosen lowercase characters.");
      console.log(casePrompt);
      password = password.toLowerCase();
      passwordInfo.case = casePrompt;
      break;
    case 2: 
      window.alert("You have chosen uppercase characters.");
      console.log(casePrompt);
      password = password.toUpperCase();
      passwordInfo.case = casePrompt;
      break;
    case 3:
      window.alert("You have chosen both upper and lowercase characters.");
      console.log(casePrompt);
      passwordInfo.case = casePrompt;
      break;
    default:
      window.alert("You did not pick a valid option. Please try again.");
      caseQuestion();
      break;
  }
}

var numericQuestion = function() {
  var confirmNumeric = window.confirm("Would you like your password to include numeric characters?");
  if (confirmNumeric) {
    window.confirm("You have chosen to include numeric characters in your password.")
    console.log(confirmNumeric);
    passwordInfo.numeric = confirmNumeric;
    return true;
} else {
  window.alert("You have chosen to not include numeric characters in your password.")
  console.log(confirmNumeric);
  passwordInfo.numeric = confirmNumeric;
  return false;
}
};

var specialCharactersQuestion = function() {
  var confirmSpecialCharacter = window.confirm("Would you like your password to include special characters?");
  if (confirmSpecialCharacter) {
    window.alert("You have chosen to include special characters in your password.")
    console.log(confirmSpecialCharacter);
    passwordInfo.special = confirmSpecialCharacter;
    return true;
  } else {
    window.alert("You have chosen to not include special characters in your password.");
    console.log(confirmSpecialCharacter);
    passwordInfo.special = confirmSpecialCharacter;
    return false;
  }
};




var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};


var generateBtn = document.querySelector("#generate");

// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generateString(length) {
  let result = " ";
  if (passwordInfo.case = 3 && passwordInfo.numeric === false && passwordInfo.special === false) {
  const bothCaseListLength = bothCaseList.length;
  for (let i = 0; i < length; i ++) {
    result +=bothCaseList.charAt(Math.floor(Math.random() * bothCaseListLength));
  }
  return result
} else if (passwordInfo.case = 2 && passwordInfo.numeric === false && passwordInfo.special === false) {
  const bothCaseListLength = bothCaseList.length;
  for (let i = 0; i < length; i ++) {
    result +=bothCaseList.charAt(Math.floor(Math.random() * bothCaseListLength));
  }
  return result.toUpperCase();
} else if (passwordInfo.case = 1 && passwordInfo.numeric === false && passwordInfo.special === false) {
  const bothCaseListLength = bothCaseList.length;
  for (let i = 0; i < length; i ++) {
    result +=bothCaseList.charAt(Math.floor(Math.random() * bothCaseListLength));
  }
  return result.toLowerCase();
}
}

function writePassword() {
 
    window.alert("Welcome to Password Generator, please click OK to continue!");
    window.alert("Please answer the following questions to generate a password. Click OK to continue.");
    
    lengthQuestion();
    caseQuestion();
    numericQuestion();
    specialCharactersQuestion();
    console.log(passwordInfo)


 //var password = generatePassword();
 var passwordText = document.querySelector("#password");
 passwordText.innerHTML = generateString(passwordInfo.length);
 
 //console.log(lengthQuestion.value);
 //console.log(lengthQuestion);
 //console.log(lengthPrompt.value);
 //console.log(lengthPrompt);

}


var passwordInfo = {
  length: 0,
  case: 0,
  numeric: false,
  special: false
}


writePassword();



//else if (promptLength.matches(numbers)) {
  //window.alert("Good test");
//} else {
  //window.alert("Please enter numeric values only");
//}