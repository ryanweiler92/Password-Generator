var bothCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var bothCaseNumList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var bothCaseSpecialList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var bothCaseNumSpecialList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


var lengthQuestion = function() {

var promptLength = window.prompt("How many characters would you like your password to be? Passwords can be between 8 and 128 characters.");

  promptLength = parseInt(promptLength);

  if (promptLength < 8 ) {
    window.alert("Your password is too short! Please choose a length of at least 8 characters!");
    return lengthQuestion();
  } else if (promptLength > 128 ) {
    window.alert("Your password is too long! Please choose a length of less than 129 characters!");
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
      passwordInfo.case = casePrompt;
      break;
    case 2: 
      window.alert("You have chosen uppercase characters.");
      console.log(casePrompt);
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
};

var numericQuestion = function() {

  var confirmNumeric = window.confirm("Would you like your password to include numeric characters?");

  if (confirmNumeric) {
    window.alert("You have chosen to include numeric characters in your password.")
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

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function generateString(length) {

  let result = " ";

  if (passwordInfo.case === 3 && passwordInfo.numeric === false && passwordInfo.special === false) {
  const bothCaseListLength = bothCaseList.length;
  for (let i = 0; i < length; i ++) {
    result +=bothCaseList.charAt(Math.floor(Math.random() * bothCaseListLength));
  }
  return result;
} else if (passwordInfo.case === 2 && passwordInfo.numeric === false && passwordInfo.special === false) {
  const bothCaseListLength = bothCaseList.length;
  for (let i = 0; i < length; i ++) {
    result +=bothCaseList.charAt(Math.floor(Math.random() * bothCaseListLength));
  }
  return result.toUpperCase();
} else if (passwordInfo.case === 1 && passwordInfo.numeric === false && passwordInfo.special === false) {
  const bothCaseListLength = bothCaseList.length;
  for (let i = 0; i < length; i ++) {
    result +=bothCaseList.charAt(Math.floor(Math.random() * bothCaseListLength));
  }
  return result.toLowerCase();
} else if (passwordInfo.case === 3 && passwordInfo.numeric === true && passwordInfo.special === false) {
  const bothCaseNumListLength = bothCaseNumList.length;
  for (let i = 0; i < length; i ++) {
    result +=bothCaseNumList.charAt(Math.floor(Math.random() * bothCaseNumListLength));
  }
  return result;
} else if (passwordInfo.case === 2 && passwordInfo.numeric === true && passwordInfo.special === false) {
  const bothCaseNumListLength = bothCaseNumList.length;
  for (let i = 0; i < length; i ++) {
    result +=bothCaseNumList.charAt(Math.floor(Math.random() * bothCaseNumListLength));
  }
  return result.toUpperCase();
} else if (passwordInfo.case === 1 && passwordInfo.numeric === true && passwordInfo.special === false) {
  const bothCaseNumListLength = bothCaseNumList.length;
  for (let i = 0; i < length; i ++) {
    result +=bothCaseNumList.charAt(Math.floor(Math.random() * bothCaseNumListLength));
  }
  return result.toLowerCase();
} else if (passwordInfo.case === 3 && passwordInfo.numeric === false && passwordInfo.special === true) {
  const bothCaseSpecialListLength = bothCaseSpecialList.length;
  for (let i = 0; i < length; i ++) {
    result +=bothCaseSpecialList.charAt(Math.floor(Math.random() * bothCaseSpecialListLength));
  }
  return result;
} else if (passwordInfo.case === 2 && passwordInfo.numeric === false && passwordInfo.special === true) {
  const bothCaseSpecialListLength = bothCaseSpecialList.length;
  for (let i = 0; i < length; i ++) {
    result +=bothCaseSpecialList.charAt(Math.floor(Math.random() * bothCaseSpecialListLength));
  }
  return result.toUpperCase();
} else if (passwordInfo.case === 1 && passwordInfo.numeric === false && passwordInfo.special === true) {
  const bothCaseSpecialListLength = bothCaseSpecialList.length;
  for (let i = 0; i < length; i ++) {
    result +=bothCaseSpecialList.charAt(Math.floor(Math.random() * bothCaseSpecialListLength));
  }
  return result.toLowerCase();
} else if (passwordInfo.case === 3 && passwordInfo.numeric === true && passwordInfo.special === true) {
  const bothCaseNumSpecialListLength = bothCaseNumSpecialList.length;
  for (let i = 0; i < length; i ++) {
    result +=bothCaseNumSpecialList.charAt(Math.floor(Math.random() * bothCaseNumSpecialListLength));
  }
  return result;
} else if (passwordInfo.case === 2 && passwordInfo.numeric === true && passwordInfo.special === true) {
  const bothCaseNumSpecialListLength = bothCaseNumSpecialList.length;
  for (let i = 0; i < length; i ++) {
    result +=bothCaseNumSpecialList.charAt(Math.floor(Math.random() * bothCaseNumSpecialListLength));
  }
  return result.toUpperCase();
} else if (passwordInfo.case === 1 && passwordInfo.numeric === true && passwordInfo.special === true) {
  const bothCaseNumSpecialListLength = bothCaseNumSpecialList.length;
  for (let i = 0; i < length; i ++) {
    result +=bothCaseNumSpecialList.charAt(Math.floor(Math.random() * bothCaseNumSpecialListLength));
  }
  return result.toLowercase();
}
};

function writePassword() {
 
    window.alert("Welcome to Password Generator, please click OK to continue!");
    window.alert("Please answer the following questions to generate a password. Click OK to continue.");
    
    lengthQuestion();
    caseQuestion();
    numericQuestion();
    specialCharactersQuestion();
    console.log(passwordInfo);

 var passwordText = document.querySelector("#password");
 passwordText.innerHTML = generateString(passwordInfo.length);
 
};

var passwordInfo = {
  length: 0,
  case: 0,
  numeric: false,
  special: false
};

