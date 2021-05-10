// Assignment code here

//TODO
//add choosable criteria (lowercase, uppercase, num, spec chars)
//make buttons?
//either as alert or written to page
//length of PW: 8-128
//above should also be choosable

//Pass-Generator-Method 1
function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {   
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Lowercase generator 
function generateLowercasePassword() {
  
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }

  return retVal.toLowerCase();
}

//Lowercase button
var generateLowercaseBtn = document.querySelector("#generateLowerCase");
console.log(generateLowercaseBtn);

//Lowercase listener
generateLowercaseBtn.addEventListener("click", function(){
  var lowerCasePassword = generateLowercasePassword();
  var passwordTest = document.querySelector("#password");
  passwordTest.value = lowerCasePassword;
})

//Num generator
// #generateNum
function generateNumPassword() {
  var length = 8,
      charset = "0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {   
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

//Num button
var generateNumBtn = document.querySelector("#generateNum");
console.log(generateNumBtn);

//Num listener
generateNumBtn.addEventListener("click", function(){
  var numPassword = generateNumPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = numPassword
}



//Spec-char generator
// #generateSpec



