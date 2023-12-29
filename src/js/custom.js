$(document).ready(function () {
    // masks
    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');

    // Form submission with validation
    $('#submitBtn').click(function () {
        if (validateForm()) {
            alertDialog('Contato cadastrado com sucesso!');

            $('#formsModalCenter').modal('hide');
        }
    });

    // Custom form validation function
    function validateForm() {
        var isValid = true;

        // Add your custom validation logic here
        // For example, check if the email is valid
        var email = $('#email').val();
        if (!isValidEmail(email)) {
            $('#email').addClass('is-invalid');
            isValid = false;
        } else {
            $('#email').removeClass('is-invalid');
        }

        // Check other required fields
        $('.form-control[required]').each(function () {
            if ($(this).val().trim() === '') {
                $(this).addClass('is-invalid');
                isValid = false;
            } else {
                $(this).removeClass('is-invalid');
            }
        });

        return isValid;
    }

    // Function to validate email format
    function isValidEmail(email) {
        // Use a regular expression to check the email format
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Add click event listener to the "Excluir" button
    $('#formsBinModalCenter').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var modal = $(this);

        // Add a click event listener to the "Excluir" button inside the modal
        modal.find('.btn-primary').click(function () {
            // Perform the deletion here (e.g., send an AJAX request)
            // After successful deletion, show an alert
            alertDialog('Contato excluído com sucesso!');

            // Close the modal
            modal.modal('hide');
        });
    });
});