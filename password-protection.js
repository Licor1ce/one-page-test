// auth.js
const username = 'demo';
const password = 'demo';

const enteredUsername = prompt("Enter username:");
const enteredPassword = prompt("Enter password:");

if (enteredUsername !== username || enteredPassword !== password) {
  document.body.innerHTML = "<h1>Access Denied</h1><p>Invalid credentials.</p>";
  document.body.style.textAlign = "center";
  document.body.style.marginTop = "50px";
}

