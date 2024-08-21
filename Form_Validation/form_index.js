document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');


    togglePassword.addEventListener('click', () => {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });


    toggleConfirmPassword.addEventListener('click', () => {
        const type = confirmPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPasswordField.setAttribute('type', type);
        toggleConfirmPassword.classList.toggle('fa-eye');
        toggleConfirmPassword.classList.toggle('fa-eye-slash');
    });

    // Validate the form
    const validateForm = (event) => {
        event.preventDefault(); // Prevent form submission

        //field values
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        //Array to store error messages
        let errorMessages = [];

        // Validate Full Name
        if (fullName.length < 5) {
            errorMessages.push("Full Name must be at least 5 characters.");
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessages.push("Enter a valid email address.");
        }

        // Validate Phone Number
        if (phone.length !== 10 || phone === "123456789" || isNaN(phone)) {
            errorMessages.push("Enter a valid phone number.");
        }

        // Validate Password
        if (password.length < 8 || password.toLowerCase() === "password" || password === fullName) {
            errorMessages.push("Password is not strong.");
        }

        // Validate Confirm Password
        if (password !== confirmPassword) {
            errorMessages.push("Passwords do not match.");
        }

        // Display error messages
        const errorMessagesDiv = document.getElementById('errorMessages');
        errorMessagesDiv.innerHTML = errorMessages.join('<br>');

        // If no errors, proceed with form submission or processing
        if (errorMessages.length === 0) {
            // For demonstration, alert success
            alert('Form submitted successfully!');
        }
    };

    // Add event listener for form submission
    document.getElementById('registrationForm').addEventListener('submit', validateForm);
});
