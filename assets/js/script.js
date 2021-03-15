// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// pop up window code
function getPassword() {
  var tempLength = parseInt(
    prompt("How many characters would you like you password?")
  );

  if (isNaN(tempLength) == true) {
    alert("Password length must be answered with a number");
    return;
  }
  if (tempLength < 8 || tempLength > 128) {
    alert("Password must be between 8 and 128 characters")
    return;
  }
  var uChars = confirm("Do you want uppercase letters?");

  var lChars = confirm("Do you want lowercase letters?");
  
  var nChars= confirm("Do you want numbers?");
  
  var sChars = confirm("Do you want special characters?");
    

  if (sChars == false && nChars == false && lChars == false && uChars == false) {
    alert("You must choose at least one type of character");
    return;
  }
  var passwordChoices = {
    pLength: tempLength,
    hasSpecialCharacters: sChars,
    hasNumericCharacters: nChars,
    hasLowerCasedCharacters: lChars,
    hasUpperCasedCharacters: uChars
  };

  console.log(passwordChoices);
  return passwordChoices
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex]

  return randElement;
}

function generatePassword() {
  var options = getPassword();
  var result = [];
  var possibleCharacters = [];
  var guaranteedPassword = [];
  
  if(options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedPassword.push(getRandom(specialCharacters));
    console.log("hi")
  }
  console.log("kill me")
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters)
    guaranteedPassword.push(getRandom(numericCharacters));
  }
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
    guaranteedPassword.push(getRandom(lowerCasedCharacters));
  }
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
    guaranteedPassword.push(getRandom(upperCasedCharacters));
  }
  for (var i = 0; i < options.pLength; i++) {
    var randCharacter = getRandom(possibleCharacters);
    result.push(randCharacter);
  }
  for (var i = 0; i < guaranteedPassword.length; i++) {
    result[i] = guaranteedPassword[i];
  }
  return result.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



writePassword();