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





// Assignment Code - Given Code
var generateBtn = document.querySelector("#generate");



















function writePassword() {
  console.log('writing password'); 
  // var password = generate(characterAmount, charactersLower, symbols, numeric);
  

  var characterAmount = window.prompt("What length would you like for the password");
  var charactersUpper = confirm("Do you want to use uppercase letters?");
  var charactersLower = confirm("Do you want to use lowercase letters?");
  var symbols = confirm("Do you want to use special characters?");
  var numeric = confirm("Do you want to use numbers?");
  var password =[];
  var currentlenghtofpassword = 0;
  var totalpassword_codes = [];
// }
  console.log(characterAmount, charactersUpper, charactersLower, symbols, numeric)

  if (charactersUpper) {
    var index = Math.floor(Math.random() * charactersUpper_codes.length);
    const characterCode = charactersUpper_codes[index]
    console.log("password1",password)
    password.push(characterCode)
    console.log("password2",password)
    currentlenghtofpassword += 1;
    totalpassword_codes = totalpassword_codes.concat(charactersUpper_codes)
  }
  if (charactersLower) {
    var index = Math.floor(Math.random() * charactersLower_codes.length);
    const characterCode = charactersLower_codes[index]
    password.push(characterCode)
    currentlenghtofpassword += 1;
    totalpassword_codes = totalpassword_codes.concat(charactersLower_codes)
  }
  if (symbols) {
    var index = Math.floor(Math.random() * symbols_codes.length);
    const characterCode = symbols_codes[index]
    password.push(characterCode)
    currentlenghtofpassword += 1;
    totalpassword_codes = totalpassword_codes.concat(symbols_codes)
  }
  if (numeric) {
    var index = Math.floor(Math.random() * numeric_codes.length);
    const characterCode = numeric_codes[index]
    password.push(characterCode)
    currentlenghtofpassword += 1;
    totalpassword_codes = totalpassword_codes.concat(numeric_codes)
  }

  // const password = []
  for (let i = 0; i < (characterAmount - currentlenghtofpassword); i++) {
    const characterCode = totalpassword_codes[Math.floor(Math.random() * totalpassword_codes.length)]
    password.push(characterCode)
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password.join("");
}






// Add event listener to generate button - Given Code
generateBtn.addEventListener("click", writePassword);
