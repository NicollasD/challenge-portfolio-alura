document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact__form");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const subjectField = document.getElementById("subject");
    const messageField = document.getElementById("message");
    const submitButton = document.querySelector(".contact__button");

    // Spans para mensagens de erro
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    // Funções de validação
    function validateName() {
        if (nameField.value.trim() === "") {
            nameError.textContent = "O campo 'Nome' não pode ficar vazio.";
            return false;
        } else if (nameField.value.length > 50) {
            nameError.textContent = "O campo 'Nome' deve conter no máximo 50 caracteres.";
            return false;
        } else {
            nameError.textContent = "";
            return true;
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailField.value.trim() === "") {
            emailError.textContent = "O campo 'E-mail' não pode ficar vazio.";
            return false;
        } else if (!emailPattern.test(emailField.value)) {
            emailError.textContent = "O e-mail deve estar em um formato válido.";
            return false;
        } else {
            emailError.textContent = "";
            return true;
        }
    }

    function validateSubject() {
        if (subjectField.value.trim() === "") {
            subjectError.textContent = "O campo 'Assunto' não pode ficar vazio.";
            return false;
        } else if (subjectField.value.length > 50) {
            subjectError.textContent = "O campo 'Assunto' deve conter no máximo 50 caracteres.";
            return false;
        } else {
            subjectError.textContent = "";
            return true;
        }
    }

    function validateMessage() {
        if (messageField.value.trim() === "") {
            messageError.textContent = "O campo 'Mensagem' não pode ficar vazio.";
            return false;
        } else if (messageField.value.length > 300) {
            messageError.textContent = "O campo 'Mensagem' deve conter no máximo 300 caracteres.";
            return false;
        } else {
            messageError.textContent = "";
            return true;
        }
    }

    // Função para habilitar ou desabilitar o botão de envio
    function enableSubmitButton() {
        if (validateName() && validateEmail() && validateSubject() && validateMessage()) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    // Adicionando listeners nos campos
    nameField.addEventListener("input", enableSubmitButton);
    emailField.addEventListener("input", enableSubmitButton);
    subjectField.addEventListener("input", enableSubmitButton);
    messageField.addEventListener("input", enableSubmitButton);

    // Validação ao submeter o formulário
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio real do formulário, já que é uma simulação

        if (validateName() && validateEmail() && validateSubject() && validateMessage()) {
            alert("Formulário enviado com sucesso! (Simulação)");
            form.reset(); // Reseta o formulário
            enableSubmitButton(); // Revalida e desabilita o botão de envio
        }
    });
});

