function validateForm() {
// Clear previous error messages document.getElementById('nameError').innerText = ''; document.getElementById('emailError').innerText = ''; document.getElementById('passwordError').innerText = '';

let isValid = true;

// Get form values
const name = document.getElementById('name').value.trim(); const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();
// Name validation if (name === '') {
document.getElementById('nameError').innerText = 'Name is required.'; isValid = false;
}
// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; if (!emailRegex.test(email)) {
document.getElementById('emailError').innerText = 'Enter a valid email address.'; isValid = false;
}
// Password validation
if (password.length < 6) {
document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long.';
isValid = false;
 
}
// Final result if (isValid) {
alert('Form submitted successfully!');
// Here you can add code to submit the form to a server
} else {
alert('Please correct the errors in the form.');
}
}
