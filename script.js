// Assignment Code
var generateBtn = document.querySelector("#generate");


//Noah example
function generatePassword (){
  return 'yourpassword';
}

// Write password to the #password input
function writePassword() {
  console.log('writing password'); //Noah example
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
