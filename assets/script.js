// Assignment Code
var generateBtn = document.querySelector("#generate");

//Randomizers
function getRandomLc() { //random lowercase 
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLc()); //Test pass

function getRandomUc() { //random uppercase
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUc()); //test pass

function getRandomNum() { //random number 
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNum()); // Test pass

function getRandomSpecChar() { //random special
  const specialCharacters = "!@#$%^&*()-+=:;<=>?";
  return specialCharacters[
    Math.floor(Math.random() * specialCharacters.length)
  ];
}
console.log(getRandomSpecChar()); // Test pass

// When the button is clicked, trigger alerts
function getParameters() {
  //Prompt for length
  let pwLength = prompt(
    "How many characters long would you like your password to be?"
  );
  if (parseInt(pwLength) >= 8 && parseInt(pwLength) <= 128) {
    console.log(pwLength + ", length ok"); //Test pass
  } else {
    console.log("length not ok"); //Test pass
  }

  //Prompt for lower case
  let lowerCaseAllowed = confirm(
    "Use lower case characters in your new password?"
  );
  console.log("Lower Case " + lowerCaseAllowed); //Test pass

  //Prompt for upper case
  let upperCaseAllowed = confirm(
    "Use upper case characters in your new password?"
  );
  console.log("Upper Case " + upperCaseAllowed); //Test pass

  //Prompt for upper case
  let numbersAllowed = confirm(
    "Use numbers in your new password?"
  );
  console.log("Numbers " + upperCaseAllowed); //Test pass

  //Prompt for special characters
  let specialCharAllowed = confirm(
    "Use special characters in your new password?"
  );
  console.log("Special Characters " + specialCharAllowed); //Test pass
}

//Generate a new pw based on parameters given
function generatePassword() {
  return "password will appear here"
}

//Print generated pw in the box
function printPassword() {
  var password = generatePassword(); //assigns the generated string to 'password'
  var passwordTextArea = document.querySelector("#password"); //ID text area
  passwordTextArea.value = password; //puts the new pw in th text area
}

// Add event listener to generate button
generateBtn.addEventListener("click", printPassword); // upon click, start the code
