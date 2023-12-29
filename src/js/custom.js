$(document).ready(function() {
    // masks
    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');

    // Form submission with validation
    $('#submitBtn').click(function() {
        if (validateForm()) {
            alert('Form submitted successfully!');
        }
    });

    // Custom form validation function
    function validateForm() {
        var isValid = true;

        // Add your custom validation logic here
        // For example, check if the email is valid
        var email = $('#email').val();
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        return isValid;
    }

    // Function to validate email format
    function isValidEmail(email) {
        // Use a regular expression to check the email format
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
