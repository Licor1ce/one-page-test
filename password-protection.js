// password-protection.js
const password = 'yourpassword'; // Replace 'yourpassword' with your desired password

const enteredPassword = prompt("Enter the password:");

if (enteredPassword !== password) {
    document.body.innerHTML = "<h1>Access Denied</h1>";
    document.body.style.textAlign = "center";
} else {
    // Continue loading the page if password is correct
    // Optionally, you could hide this script tag or do nothing here
}
