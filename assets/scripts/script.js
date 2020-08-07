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
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


 // Add event listener to generate button
 //generateBtn.addEventListener("click", writePassword,)

 var inputPasswordCharcaters = document.querySelector('#generate').addEventListener('click', function () {
   characterLength = prompt('How many character do u want in your password? Must be between 8 and 128');
   lowercase = confirm('Do you want lowercase?')
   uppercase = confirm('Do you want uppercase?')
   numeric = confirm('Do you want numeric?')
   specialCharacters = confirm('And or special characters?')
   console.log(characterLength);
   
   //random characters
   function makeid(characterLength) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
  // random number
 /*for (var characterLength, i = 0; i < 10; i++) {
  // Generate a random decimal number between 0 and 1
  var num = Math.random();

  // Display in console
  console.log(num);
}*/
 
 console.log(makeid(length));

   if (lowercase) {
    console.log(lowercase)
   } else {
    console.log(lowercase)
   }

   if (uppercase) {
    console.log(uppercase)
   } else {
    console.log(uppercase)
   }

   if (numeric) {
    console.log(numeric)
   } else {
    console.log(numeric)
   }

   if (specialCharacters) {
    console.log(specialCharacters)
   } else {
    console.log(specialCharacters)
   }
    
   
 })

 // random number
 /*for (var characterLength, i = 0; i < 10; i++) {
  // Generate a random decimal number between 0 and 1
  var num = Math.random();

  // Display in console
  console.log(num);
}*/