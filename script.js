alert("Welcome!");
alert("Enter user details for registration");

const form = document.getElementById("registrationForm");

// FULL NAME FUNCTION
function validateFullName(fullName) {
    let words = fullName.trim().split(" ");
    return fullName !== "" && words.length >= 2;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const age = document.getElementById("age").value;

    // Full Name Validation
    if (!validateFullName(fullName)) {
        alert("Full name must not be empty and contain at least 2 words");
        return;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Email must follow a valid format (e.g. example@domain.com)");
        return;
    }

    // Password Validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters, include uppercase, lowercase, number, and special character.");
        return;
    }

    // Confirm Password
    if (password !== confirmPassword) {
        alert("Must match the Password field.");
        return;
    }

    // Age Validation
    if (isNaN(age) || age < 18 || age > 100) {
        alert("Age Must be 18 or older.");
        return;
    }

    alert("Registration successful!");
});