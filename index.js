import signup from "./controllers/signup.js";
import home from "./controllers/login.js";

// Get URL parameters
function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        email: params.get("email"),
        name: params.get("name"),
    };
}

// Populate form fields from URL params
document.addEventListener("DOMContentLoaded", () => {
    const { email, name } = getURLParams();
    const emailField = document.getElementById("floatingInput");
    const nameField = document.getElementById("floatingName");

    if (email) {
        emailField.value = email;
        emailField.disabled = true;
    }

    if (name) {
        nameField.value = name;
        nameField.disabled = true;
    }
});

// Validate form
function validateForm() {
    let isValid = true;

    // Name validation
    const name = document.getElementById("floatingName");
    const nameError = document.getElementById("nameError");
    if (name.value.trim() === "") {
        nameError.textContent = "Name should not be empty!";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    const email = document.getElementById("floatingInput");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value.trim() === "") {
        emailError.textContent = "Email should not be empty!";
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    const password = document.getElementById("floatingPassword");
    const passwordError = document.getElementById("passwordError");
    if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Confirm password validation
    const confirmPassword = document.getElementById("floatingConfirmPassword");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    return isValid;
}

// Signup button click event
document.getElementById("signup").addEventListener("click", async () => {
    const spinner = document.getElementById("loadingSpinner");

    if (validateForm()) {
        spinner.style.display = "block";

        const name = document.getElementById("floatingName").value;
        const email = document.getElementById("floatingInput").value;
        const password = document.getElementById("floatingConfirmPassword").value;

        const response = await signup(name, email, password);
console.log(response);

        spinner.style.display = "none";

        const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
        if (response.message==="Allow") {
            alertPlaceholder.innerHTML = `<div class="alert alert-success">Password setup completed <a href="./index.html">Sign In</a></div>`;
        } else {
            document.getElementById("emailError").textContent = response.message;
        }
    }
});

// Redirect if token exists
const token = localStorage.getItem("token");
if (token) {
    home(token).then(() => {
        window.location.href = "./app.html";
    });
}
