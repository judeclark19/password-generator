// Assignment Code
var generateBtn = document.querySelector("#generate");

//Functions to generate random characters from the arrays
// Used Character Codes https://www.w3schools.com/jsref/jsref_fromcharcode.asp
function getRandomLowercase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); //There are 26 lowercase letters and they start and number 97 in the UTF-8 decimal system http://www.net-comber.com/charset.html
}

function getRandomUppercase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
  const availableSymbols = "~`!@#$%^&*()-_=+[{]},<.>?" //I'm using an array of my own choices since they are all spread out from each other in CharCode
  return availableSymbols[Math.floor(Math.random()*availableSymbols.length)];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// When user clicks the button, run function "writePassword"
generateBtn.addEventListener("click", writePassword);