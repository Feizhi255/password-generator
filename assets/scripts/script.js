// Assignment Code
// gen button
var generateBtn = document.querySelector("#generate"); 
//text area
var passwordInput = document.getElementById('password'); 



// Write password to the #password input
//will put final password onto the 'your secure password text area
function writePassword(passwordInput) { 
  var password = generatePassword();
  var passwordReturn = document.getElementById('password').value;
  var passwordText = document.querySelector("#password");  // text area

  passwordText.value = password;
}

// Add event listener to generate button
 //generateBtn.addEventListener("click", writePassword,)

 document.querySelector('#generate').addEventListener('click', function () {
   var specialChar1 = confirm('Do you want this special character in your password?   "!"');
   var specialChar2 = confirm('Do you want this special character in your password?   "@"');
   var specialChar3 = confirm('Do you want this special character in your password?   "#"');
   var specialChar4 = confirm('Do you want this special character in your password?   "$"');
   console.log(specialChar1, specialChar2, specialChar3, specialChar3, specialChar4);
 })



