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
  var uppercaseConfirm = confirm("Do you want uppercase letters");

  var lowercaseConfirm = confirm("Do you want lowercase letters?");
  
  var numericConfirm = confirm("Do you want numbers?");
  
  var specialConfirm = confirm("Do you want special characters?");

  var passwordchoices = {
    length: length,
    specialCharacters: specialCharacters,
    numericCharacters: numericCharacters,
    lowerCasedCharacters: lowerCasedCharacters,
    upperCasedCharacters: upperCasedCharacters
  };
  return passwordchoices;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  if (uppercaseConfirm) {

  }
  
  var possibleCharacters = []
  var password = []
  
  for (var i = 0; i < passwordLength; i++) {
    var index = math.floor(Math.random() * Option.length);
    var computerChoice = possibleCharacters[index];
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


getPasswordChoices();
writePassword();