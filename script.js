// Assignment Code
var generateBtn = document.querySelector("#generate");


var masterArray = [];
var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var symArray = ['!', '\"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~',];

var passwordLength;
var password = [];


// Write password to the #password input
function writePassword() {
  getPasswordChars();
  console.log("final password: ", password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function getPasswordChars() {
  if (confirm("lowercase?"))
    Array.prototype.push.apply(masterArray, lowerArray);
    console.log("pushed lowercase: ", masterArray);

  if (confirm("UPPERCASE?"))
    Array.prototype.push.apply(masterArray, upperArray);
    console.log("pushed uppercase: ", masterArray);
  
  if (confirm("num3ric?"))
    Array.prototype.push.apply(masterArray, numArray);
    console.log("pushed numbers: ", masterArray);

  if (confirm("symbo!s?"))
    Array.prototype.push.apply(masterArray, symArray);
    console.log("pushed symbols: ", masterArray);
  
  if (masterArray.length == 0)
    alert("You must say yes to at least one prompt!");

  else
    getPasswordLength();
}

function getPasswordLength() {
  passwordLength = prompt("Desired password length?");
  console.log("Password length: ", passwordLength);
  if (typeof passwordLength ==! 'number')
    alert("Please enter a number");

  else if (passwordLength < 8 || passwordLength > 128)
    alert("Please enter a number between 8 and 128");

  else
    generatePassword();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generatePassword() {
  for (var i = 0; i < passwordLength; i++) {
    var char = getRandomInt(masterArray.length - 1);
    password.push(masterArray[char]);
    console.log(password)
  }
  
  //join array into a string
  password = password.join('');
}

// create array for each character type
// confirm each prompt, if true, push every lowercase/uppercase/numeric/symbol array into master array. store password length
// for loop generating each character, repeating password length times
//    math.random(masterarray.length)
