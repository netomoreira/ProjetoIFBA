// Validação de campos
function validaNome(nome) {
    const nomeRegex = /^[a-zA-Zà-úÀ-Ú ]+$/;
    return nomeRegex.test(nome);
}

function validaEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form')
    const nomeInput = document.getElementById('nome')
    const emailInput = document.getElementById('email')
    const celularInput = document.getElementById('celular')
    const senhaInput = document.getElementById('senha')
    const confSenhaInput = document.getElementById('confsenha')

    form.addEventListener('input', function(){
        if (nomeInput.value !== ''){
            if (!validaNome(nomeInput.value)){
                nomeInput.setCustomValidity('Por favor, insira um nome válido.');
            } else{
                nomeInput.setCustomValidity(''); // Limpar a mensagem de erro
            }
        }

        if (emailInput.value !== ''){
            if (!validaEmail(emailInput.value)){
                emailInput.setCustomValidity('Por favor, insira um e-mail válido.');
            } else{
                emailInput.setCustomValidity(''); // Limpar a mensagem de erro
            }
        }
        if (senhaInput.value !== '' && confSenhaInput.value !== ''){
            if (senhaInput.value != confSenhaInput.value) {
                confSenhaInput.setCustomValidity('As senhas não coincidem.');
            } else{
                confSenhaInput.setCustomValidity(''); // Limpar a mensagem de erro
            }
        }
    });
});
