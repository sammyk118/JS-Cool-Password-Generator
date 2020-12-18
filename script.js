// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var masterArray;
var lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
console.log(numArray);
var symArray = ['!', '\"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@ [ \ ] ^ _ ` { | } ~'];

newArray = lowerArray.concat(numArray);
console.log(newArray);
function generatePassword(){
  if(confirm("lowercase?"));
  confirm("uppercase?");
  confirm("numeric?");
  confirm("symbols?");
}


// create array for each character type
// confirm each prompt, if true, push every lowercase/uppercase/numeric/symbol array into master array. store password length
// for loop generating each character repeating password length times
//    math.random(masterarray.length)
