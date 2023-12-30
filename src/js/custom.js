$(document).ready(function () {
    // masks
    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');
    $('#cpfEdit').mask('000.000.000-00');
    $('#telefoneEdit').mask('(00) 00000-0000');

    // Form submission with validation for "Novo Contato" modal
    $('#submitBtn').click(function () {
        if (validateForm()) {
            customAlertDialog('Contato cadastrado com sucesso!');
            $('#formsModalCenter').modal('hide');
        }
    });

    // Form submission with validation for "Editar Contato" modal
    $('#submitBtnEdit').click(function () {
        if (validateEditForm()) {
            customAlertDialog('Contato editado com sucesso!');
            $('#formsEditModalCenter').modal('hide');
        }
    });

    // Custom form validation function for "Novo Contato" modal
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
        $('.form-control[required]', '#myForm').each(function () {
            if ($(this).val().trim() === '') {
                $(this).addClass('is-invalid');
                isValid = false;
            } else {
                $(this).removeClass('is-invalid');
            }
        });

        return isValid;
    }

    // Custom form validation function for "Editar Contato" modal
    function validateEditForm() {
        var isValid = true;

        // Add your custom validation logic here
        // For example, check if the email is valid
        var emailEdit = $('#emailEdit').val();
        if (!isValidEmail(emailEdit)) {
            $('#emailEdit').addClass('is-invalid');
            isValid = false;
        } else {
            $('#emailEdit').removeClass('is-invalid');
        }

        // Check other required fields
        $('.form-control[required]', '#myFormEdit').each(function () {
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
            // After successful deletion, show a custom alert
            customAlertDialog('Contato excluído com sucesso!');

            // Close the modal
            modal.modal('hide');
        });
    });

    // Function to show a custom alert
    function customAlertDialog(message) {
        // Replace this with your custom alert logic
        alertDialog(message);
    }
});

function displayDateTime() {
    // Elemento onde a data e hora serão exibidos
    var datetimeElement = document.getElementById('datetime');

    // Função para atualizar a data e hora
    function updateDateTime() {
        var now = new Date();
        var date = now.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        var time = now.toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric', second: 'numeric' });

        // Exibir a data e hora atual
        datetimeElement.innerHTML = date + ' | ' + time;
    }

    // Atualiza a data e hora a cada segundo
    setInterval(updateDateTime, 1000);

    // Exibe a data e hora inicial
    updateDateTime();
}
document.addEventListener('DOMContentLoaded', function () {
    displayDateTime();
});


