var characterAmount_codes = ["0","1","2", "3","4", "5", "6", "7", "8",
"9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27",
"28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48",
"49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", 
"70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90",
"91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", 
  "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128"];



var charactersLower_codes = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
"p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];


var symbols_codes = ["U+0021", "U+0023", "U+0024", "U+0025", "U+0026", "U+002D", "U+002F", "U+003C", 
"U+003D", "U+003E", "U+003F", "U+0040", "U+005B", "U+005D", "U+005C", "U+007B", "U+007D"]


var charactersUpper_codes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


var numeric_codes = ["0","1","2","3","4","5","6","7","8","9"]


// const password = generate(characterAmount, charactersLower, symbols, charactersUpper, numeric) = password


// Assignment Code - Given Code
var generateBtn = document.querySelector("#generate");


//Source WebDevSimplified on Github
// function generate(characterAmount, symbols, charactersUpper, numeric) {
// let codes = charactersLower
// if (special) codes = special
// if (symbols) codes = symbols
// if (charactersUpper) codes = charactersUpper
// }

// const password = []
// for (let i = 0; i < characterAmount; i++) {
//   const characterCode = codes[Math.floor(Math.random() * codes.length)]
//   password.push(String.fromcodes(codes))
// }
// return password.join('')
// }

// What BCS Told me to put
// function generate() {
var characterAmount = window.prompt("What length would you like for the password");
var charactersUpper = confirm("Do you want to use uppercase letters?");
var charactersLower = confirm("Do you want to use lowercase letters?");
var symbols = confirm("Do you want to use special characters?");
var numeric = confirm("do you want to use numbers?");
// }
console.log(characterAmount, charactersUpper, charactersLower, symbols, numeric)


// const password = []
// for (let i = 0; i < characterAmount; i++) {
//   const characterCode = codes[Math.floor(Math.random() * codes.length)]
//   password.push(String.fromcodes(codes))
// }
// return password.join('');




//function for user to select screen prompts - Me
// function generate() {
// var characterChoice = window.prompt("Enter length of password 8 or 128:");
// }

// //Function to choose capital letters
// function generate() {
// var charactersUpper = window.prompt("Choose characters capital letters");
// }

//Function to choose lowercase letters
// function generate() {
//   var characters = window.prompt("Choose characters lowercase");
//   }

//Function to choose numbers
// function generate() {
//   var numeric = window.prompt("Choose numbers");
//   }

 //Function to choose special characters
// function generate() {
//   var special = window.prompt("Choose special characters");
//   } 


//Noah example - Teacher Ex.
function writePassword(){
  return 'yourpassword';
}

// Write password to the #password input - Given Code
function writePassword() {
  console.log('writing password'); 
  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function characterChoices() {

}



// Add event listener to generate button - Given Code
generateBtn.addEventListener("click", writePassword);
