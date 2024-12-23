const passwordBox = document.getElementById("password");
const length = 20;
let eyeicon = document.getElementById("eyeicon");
// let password = document.getElementById("password");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}=~/<>";
const allChars = lowerCase + upperCase + numbers +  symbols ;

document.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem('savedPassword')) {
    passwordBox.value = localStorage.getItem('savedPassword');
  }
});

function createPassword(){
  let password = "";

  password += lowerCase[Math.floor(Math.random() * (lowerCase.length))];
  password += upperCase[Math.floor(Math.random() * (upperCase.length))];
  password += numbers[Math.floor(Math.random() * (numbers.length))];
  password += symbols[Math.floor(Math.random() * (symbols.length))];
  
  
  while(length > password.length){
    password += allChars[Math.floor(Math.random() * (allChars.length))];
  }

  passwordBox.value = password;
  localStorage.setItem('savedPassword', password);
}

function copyPassword(){
  passwordBox.select();
  document.exeCommand("copy");
}

function clearPassword(){
  passwordBox.value = "";
  localStorage.removeItem('savedPassword');
}

eyeicon.addEventListener('click', function(){
  if(passwordBox.type === "password"){
    passwordBox.type = "text";
    eyeicon.src = "./Images/show.png";
  } else {
    passwordBox.type = "password";
    eyeicon.src = "./Images/hide.png";
  }
});
