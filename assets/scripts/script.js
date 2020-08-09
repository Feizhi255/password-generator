// Assignment Code
var passwordEl = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var specialCharacters = '!@#$^&%*()+=-[]{}|:<>?,.';
var numeric = '1234567890';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var newPassword = '';

// click btn for prompts
var inputPasswordCharcaters = document.querySelector('#generate').addEventListener('click', function () {
  var passwordLength = prompt('Choose between a number from 8 - 128')
  var passSpecialCharacters = confirm('Do you want a special characters in your password?')
  var passNumeric = confirm('Do you want a numbers in your password?')
  var passLowercase = confirm('Do you want a lowercase in your password?')
  var passUppercase = confirm('Do you want a uppercase in your password?')

  //creat variables and add them together
  var allCharacters = specialCharacters + numeric + lowercase + uppercase;
  var a = specialCharacters + numeric + lowercase;
  var b = specialCharacters + numeric + uppercase;
  var c = specialCharacters + lowercase + uppercase;
  var d = numeric + lowercase + uppercase;
  var e = specialCharacters + numeric;
  var f = specialCharacters + lowercase;
  var g = specialCharacters + uppercase;
  var h = numeric + lowercase;
  var j = numeric + uppercase;
  var k = lowercase + uppercase;


  //password length 
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    if (passwordLength === null) {
      break;
    }
  }
  if ((passSpecialCharacters === true) && (passNumeric === true) && (passLowercase === true) && (passUppercase === true)) {
    for (i = 0; i < passwordLength; i++) {
      let character = Math.floor(Math.random() * allCharacters.length);
      newPassword += allCharacters.charAt(character, character + 1);
    }
  }
  else if ((passSpecialCharacters === true) && (passNumeric === true) && (passLowercase === true) && (passUppercase === false)) {
    for (i = 0; i < passwordLength; i++) {
      let character = Math.floor(Math.random() * a.length);
      newPassword += a.charAt(character, character + 1);
    }
  } 
  else if ((passSpecialCharacters === true) && (passNumeric === true) && (passLowercase === false) && (passUppercase === true)) {
    for (i = 0; i < passwordLength; i++) {
      let character = Math.floor(Math.random() * b.length);
      newPassword += b.charAt(character, character + 1);
    }
  } 
  else if ((passSpecialCharacters === true) && (passNumeric === false) && (passLowercase === true) && (passUppercase === true)) {
    for (i = 0; i < passwordLength; i++) {
      let character = Math.floor(Math.random() * c.length);
      newPassword += c.charAt(character, character + 1);
    }
  } 
  else if ((passSpecialCharacters === false) && (passNumeric === true) && (passLowercase === true) && (passUppercase === true)) {
    for (i = 0; i < passwordLength; i++) {
      let character = Math.floor(Math.random() * d.length);
      newPassword += d.charAt(character, character + 1);
    }
  } 
  else if ((passSpecialCharacters === true) && (passNumeric === true) && (passLowercase === false) && (passUppercase === false)) {
    for (i = 0; i < passwordLength; i++) {
      let character = Math.floor(Math.random() * e.length);
      newPassword += e.charAt(character, character + 1);
    }
  } 
  else if ((passSpecialCharacters === true) && (passNumeric === false) && (passLowercase === true) && (passUppercase === false)) {
    for (i = 0; i < passwordLength; i++) {
      let character = Math.floor(Math.random() * f.length);
      newPassword += f.charAt(character, character + 1);
    }
  } 
  else if ((passSpecialCharacters === true) && (passNumeric === false) && (passLowercase === false) && (passUppercase === true)) {
    for (i = 0; i < passwordLength; i++) {
      let character = Math.floor(Math.random() * g.length);
      newPassword += g.charAt(character, character + 1);
    }
  } 
  else if ((passSpecialCharacters === false) && (passNumeric === true) && (passLowercase === true) && (passUppercase === false)) {
    for (i = 0; i < passwordLength; i++) {
      let character = Math.floor(Math.random() * h.length);
      newPassword += h.charAt(character, character + 1);
    }
  } 
  else if ((passSpecialCharacters === false) && (passNumeric === true) && (passLowercase === false) && (passUppercase === true)) {
    for (i = 0; i < passwordLength; i++) {
      let character = Math.floor(Math.random() * j.length);
      newPassword += j.charAt(character, character + 1);
    }
  } 
  else if ((passSpecialCharacters === false) && (passNumeric === false) && (passLowercase === true) && (passUppercase === true)) {
    for (i = 0; i < passwordLength; i++) {
      let character = Math.floor(Math.random() * k.length);
      newPassword += k.charAt(character, character + 1);
    }
  } 
  else if ((passSpecialCharacters === true) && (passNumeric === false) && (passLowercase === false) && (passUppercase === false)) {
    for (i = 0; i < passwordLength; i++) {
      let character = Math.floor(Math.random() * specialCharacter.length);
      newPassword += specialCharacters.charAt(character, character + 1);
    }
  } 
  else if ((passSpecialCharacters === false) && (passNumeric === true) && (passLowercase === false) && (passUppercase === false)) {
    for (i = 0; i < passwordLength; i++) {
      let character = Math.floor(Math.random() * numeric.length);
      newPassword += numeric.charAt(character, character + 1);
    }
  } 
  else if ((passSpecialCharacters === false) && (passNumeric === false) && (passLowercase === true) && (passUppercase === false)) {
    for (i = 0; i < passwordLength; i++) {
      let character = Math.floor(Math.random() * lowercase.length);
      newPassword += lowercase.charAt(character, character + 1);
    }
  } 
  else if ((passSpecialCharacters === false) && (passNumeric === false) && (passLowercase === false) && (passUppercase === true)) {
    for (i = 0; i < passwordLength; i++) {
      let character = Math.floor(Math.random() * a.length);
      newPassword += a.charAt(character, character + 1);
    }
  } 
    //Generate new password into text area
    passwordEl.textContent = newPassword;

  },)
