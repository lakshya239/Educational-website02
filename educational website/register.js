document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("register-form");
    
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission for validation
        
        // Get input values
        const name = registerForm.querySelector('input[placeholder="Name"]').value;
        const gmail = registerForm.querySelector('input[placeholder="Gmail"]').value;
        const otp = registerForm.querySelector('input[placeholder="OTP"]').value;
        const username = registerForm.querySelector('input[placeholder="Username"]').value;
        const password = registerForm.querySelector('input[placeholder="Password"]').value;

        // Validate inputs
        let valid = true;
        let errorMessage = "";

        // Name validation
        if (name.length < 3) {
            valid = false;
            errorMessage += "Name must be at least 3 characters long.\n";
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(gmail)) {
            valid = false;
               errorMessage += "Please enter a valid Gmail address.\n";    //FOR GMAIL VALIDATION
        }

        if (!/^\d{6}$/.test(otp)) {

            valid = false;
            errorMessage += "OTP must be a 6-digit number.\n";
        }
        if (username.length < 3) {
            valid = false;
            errorMessage += "Username must be at least 3 characters long.\n";
        }

        if (password.length < 6) {
            valid = false;
            errorMessage += "Password must be at least 6 characters long.\n";
        }

        if (!valid) {
            alert(errorMessage);
        } else {
            window.location.href = "main.html"; // as soon the user click the submit or login button then it directly loads the main page/website
        }
    });
});