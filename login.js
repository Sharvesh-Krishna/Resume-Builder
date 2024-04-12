document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.querySelector('.login-form');
    var registerForm = document.querySelector('.register-form');
    var loginLink = document.getElementById('login-link');
    var registerLink = document.getElementById('register-link');

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Authentication logic
    });

    document.getElementById('register-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Registration logic
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.querySelector('.login-form');
    var registerForm = document.querySelector('.register-form');
    var loginLink = document.getElementById('login-link');
    var registerLink = document.getElementById('register-link');
    var registerSuccessMessage = document.getElementById('register-success');
    var loginErrorMessage = document.getElementById('login-error');

    var users = []; // Array to store registered users

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        registerSuccessMessage.style.display = 'none'; // Hide register success message if shown
        loginErrorMessage.style.display = 'none'; // Hide login error message if shown
    });

    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
        // Find the user in the array of registered users
        var user = users.find(function(user) {
            return user.username === username && user.password === password;
        });

        if (user) {
            // Login successful
            alert('Login successful!');
            // You can redirect the user to another page or perform any other action here
            window.location.href = 'Home.html';

        } else {
            // Login failed
            loginErrorMessage.style.display = 'block';
        }
    });

    document.getElementById('register-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        var name = document.getElementById('new-name').value;
        var username = document.getElementById('new-username').value;
        var phone = document.getElementById('new-phone').value;
        var email = document.getElementById('new-email').value;
        var password = document.getElementById('new-password').value;

        // Add the new user to the array of registered users
        users.push({ name: name, username: username, phone: phone, email: email, password: password });

        // Display success message
        registerSuccessMessage.style.display = 'block';

        // Clear the registration form fields
        document.getElementById('new-name').value = '';
        document.getElementById('new-username').value = '';
        document.getElementById('new-phone').value = '';
        document.getElementById('new-email').value = '';
        document.getElementById('new-password').value = '';
    });
});
