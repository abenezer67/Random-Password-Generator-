const passwordBox = document.getElementById("RandPassword");
const lengthInput = document.getElementById("length");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = `!@#$%^&*()_+-=[]{}|;:'",.<>/?~`;
const randChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  const length = parseInt(lengthInput.value, 10);
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += randChars[Math.floor(Math.random() * randChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  if (!passwordBox.value) return;
  navigator.clipboard.writeText(passwordBox.value);
}
