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
  console.log
  var length = parseInt(
    prompt("How many characters would you like you password?")
  );

  if (isNaN(length) == true) {
    alert("Password length must be answered with a number");
    return;
  }
  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters")
    return;
  }
  var upperCasedCharacters = confirm("Do you want uppercase letters");

  var lowerCasedCharacters = confirm("Do you want lowercase letters?");
  
  var numericCharacters= confirm("Do you want numbers?");
  
  var specialCharacters = confirm("Do you want special characters?");

  var passwordchoices = {
    length: length,
    specialCharacters: specialCharacters,
    numericCharacters: numericCharacters,
    lowerCasedCharacters: lowerCasedCharacters,
    upperCasedCharacters: upperCasedCharacters
  };
}
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() = arr.length);
  var randElement = arr[randIndex]

  return randElement;
}
function generatePassword() {
  var options = getPasswordChoices();
  var result = [];
  var possibleCharacters = [];
  var guaranteedPassword = [];

  if(options.specialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedPassword.push(getRandom(specialCharacters));
  }
  if (options.numericCharacters) {
    possibleCharacter = possibleCharacters.concat(numericCharacters)
    guaranteedPassword.push(getRandom(numericCharacters));
  }
  if (options.lowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
    guaranteedPassword.push(getRandom(lowerCasedCharacters));
  }
  if (options.upperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
    guaranteedPassword.push(getRandom(upperCasedCharacters));
  }
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacter);
    result.push(possibleCharacters);
  }
  for (var i = 0; i < guaranteedPassword.length; i++) {
    result[i] = guaranteedPassword[i];
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


getPassword();
writePassword();