// Assignment Code
var generateBtn = document.querySelector("#generate");

//four sets of character strings
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersString = "0123456789";
var symbolsString = "`~!@#$%^&*()-_=+[{]};:,<.>?";

//Password Generator Function
function generatePassword() {
  //ask the user for desired length
  var desiredPwLength = Math.round(
    prompt(
      "How many characters long would you like your password to be (between 8 and 128)?"
    )
  );
  //check that the input is within constrains
  if (desiredPwLength >= 8 && desiredPwLength <= 128) {
    var confirmedPwLength = desiredPwLength;
    console.log("Password length: " + confirmedPwLength);
  } else {
    alert("Only enter a number between 8 and 128 please.");
    throw new Error("User did not chose a length between 8 and 128 characters");
  }

  //next, ask if lowercase allowed.
  const lowercaseAllowed = confirm(
    "Use lowercase letters in your new password?"
  );
  console.log("Use lowercase: " + lowercaseAllowed);

  //next, ask if uppercase allowed.
  const uppercaseAllowed = confirm(
    "Use upper case letters in your new password?"
  );
  console.log("Use uppercase: " + uppercaseAllowed);

  //next, ask if numbers allowed.
  const numbersAllowed = confirm("Use numbers in your new password?");
  console.log("Use numbers: " + numbersAllowed);

  //next, ask if special characters allowed.
  const symbolsAllowed = confirm(
    "Use special characters in your new password?"
  );
  console.log("Use special characters: " + symbolsAllowed);
}

// When button is clicked
function writePassword() {
  //call the generatePassword function and print it
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
