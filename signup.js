document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const mobileInput = document.getElementById('mobile');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const email = document.getElementById('email').value;

        // Perform form validation
        if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        // You can add additional validation for the mobile number if needed
        // Example validation for mobile number (optional)
        const mobilePattern = /^\d{10}$/;
        const mobileValue = mobileInput.value.trim();

        if (!mobilePattern.test(mobileValue)) {
            alert('Please enter a valid mobile number.');
            return;
        }

        // Perform sign up process (here you would typically send data to a server)
        // For demonstration purposes, we'll simply log the email and password
        console.log('Email:', email);
        console.log('Password:', password);

        // Redirect the user to another page after successful sign up
        // You can change 'index.html' to the desired page
        window.location.href = 'index.html';
    });
});

