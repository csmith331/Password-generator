var characters = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
"p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];

var special = ["U+0021", "U+0023", "U+0024", "U+0025", "U+0026", "U+002D", "U+002F", "U+003C", 
"U+003D", "U+003E", "U+003F", "U+0040", "U+005B", "U+005D", "U+005C", "U+007B", "U+007D"]

var charactersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var numeric = ["0","1","2","3","4","5","6","7","8","9"]

// Assignment Code - Given Code
var generateBtn = document.querySelector("#generate");

//function for selected

//Noah example - Teacher Ex.
function generatePassword (){
  return 'yourpassword';
}

// Write password to the #password input - Given Code
function writePassword() {
  console.log('writing password'); //Noah example
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button - Given Code
generateBtn.addEventListener("click", writePassword);
