const passwordBox = document.getElementById("RandPassword");
const lengthInput = document.getElementById("length");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = `!@#$%^&*()_+-=[]{}|;:'",.<>/?~`;
const includeUpperCase = document.getElementById("option1");
const includeLowerCase = document.getElementById("option2");
const includeSymbols = document.getElementById("option3");
const includenumbers = document.getElementById("option4");



function createPassword() {
  let password = ""
  let chars = " ";

  const length = parseInt(lengthInput.value, 10);
 
   chars += includeUpperCase.checked ?upperCase : "";
   chars += includeLowerCase.checked ? lowerCase : "";
   chars += includeSymbols.checked ? symbol : "";
   chars += includenumbers.checked ?  number: "";

   
if(length <= 0){
    alert( `password length must be atleast 1`); 
    return;
}
if(chars.length === 0){
    alert( `At least one set of Chars needs to be selected`);
    return;
}
  
    for(let i = 0 ; i < length ; i++){
        const randomIndex = Math.floor(Math.random()* chars.length);
        password += chars[randomIndex];
    }
      
  passwordBox.value = password;
}



function copyPassword() {
  if (!passwordBox.value) return;
  navigator.clipboard.writeText(passwordBox.value);
  alert("linked copied"); 
}
