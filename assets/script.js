// Assignment Code
var generateBtn = document.querySelector("#generate");

//Functions to generate random characters from the arrays
// Used Character Codes https://www.w3schools.com/jsref/jsref_fromcharcode.asp

//build lowercase array
function buildLcArray() {
  const lowerCaseArray = []
    for (let i=97; i<=127; i++){
      lowerCaseArray.push(i);
    }

    console.log(lowercaseArray);
}
// function getRandomLowercase() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97); //There are 26 lowercase letters and they start and number 97 in the UTF-8 decimal system http://www.net-comber.com/charset.html
// }

function getRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const availableSymbols = "~`!@#$%^&*()-_=+[{]},<.>?"; //I'm using an array of my own choices since they are all spread out from each other in CharCode
  return availableSymbols[Math.floor(Math.random() * availableSymbols.length)];
}

//this object groups all the randomizers together
const randomizerFuncs = {
  randLow: getRandomLowercase(),
    randUp: getRandomUppercase(),
    randNum: getRandomNumber(),
    randSym: getRandomSymbol() }

//When button is clicked,
function writePassword() {
  //ask for desired length
  var desiredPwLength = prompt(
    "How many characters long would you like your password to be (between 8 and 128)?"
  );
  //check that it is within constraints
  if (desiredPwLength > 8 && desiredPwLength < 128) {
    console.log("Password length: " + desiredPwLength);
  } else {
    alert("Enter a number between 8 and 128 please.");
    prompt(
      "How many characters long would you like your password to be (between 8 and 128)?");
  }

  //next, ask if lowercase allowed.
  const lowercaseAllowed = confirm("Use lowercase letters in your new password?");
  console.log("Use lowercase: " + lowercaseAllowed);

  //next, ask if uppercase allowed.
  const uppercaseAllowed = confirm("Use upper case letters in your new password?");
  console.log("Use uppercase: " + uppercaseAllowed);

  //next, ask if numbers allowed.
  const numbersAllowed = confirm("Use numbers in your new password?");
  console.log("Use numbers: " + numbersAllowed);s
  //next, ask if special characters allowed.
  const symbolsAllowed = confirm("Use special characters in your new password?");
  console.log("Use special characters: " + symbolsAllowed);

  //use generatePassword(); and then print it to the passwordTextArea
  var password = generatePassword();
  var passwordTextArea = document.querySelector("#password");

  //(print)
  passwordTextArea.value = password;
}

//Generate Password function
function generatePassword (desiredPwLength, lowercaseAllowed, uppercaseAllowed, numbersAllowed, symbolsAllowed) {
  let availableCharactersArray



}

// When user clicks the button, run function "writePassword"
generateBtn.addEventListener("click", writePassword);
