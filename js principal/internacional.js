document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            Swal.fire({
                title: 'Você clicou em um pacote!',
                text: 'É esse que você deseja?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Chama a função showForm quando o usuário confirmar a seleção do pacote
                    showForm();
                }
            });
        });
    });
});

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos
    if (
        cpf.length != 11 ||
        cpf == '00000000000' ||
        cpf == '11111111111' ||
        cpf == '22222222222' ||
        cpf == '33333333333' ||
        cpf == '44444444444' ||
        cpf == '55555555555' ||
        cpf == '66666666666' ||
        cpf == '77777777777' ||
        cpf == '88888888888' ||
        cpf == '99999999999'
    )
        return false;
    // Valida 1o digito
    add = 0;
    for (i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) return false;
    // Valida 2o digito
    add = 0;
    for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) return false;
    return true;
}

function validarNome(nome) {
    // Validar se o nome contém pelo menos duas palavras
    const palavras = nome.trim().split(/\s+/);
    return palavras.length >= 2;
}


// Função para mostrar o formulário de preenchimento
function showForm() {
    Swal.fire({
        title: 'Por favor, preencha as informações:',
        html: `
            <input id="cpf" class="swal2-input" placeholder="CPF">
            <input id="telefone" class="swal2-input" placeholder="Telefone">
            <input id="nome" class="swal2-input" placeholder="Nome">`,
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            const cpf = document.getElementById('cpf').value;
            const telefone = document.getElementById('telefone').value;
            const nome = document.getElementById('nome').value;
            if (!cpf || !telefone || !nome) {
                Swal.showValidationMessage('Por favor, preencha todos os campos.');
                return false;
            }

            if (!validarCPF(cpf)) {
                Swal.showValidationMessage('CPF inválido');
                return false;
            }

            if (!validarNome(nome)) {
                Swal.showValidationMessage('Por favor, insira um nome válido (com pelo menos duas palavras)');
                return false;
            }

            return { cpf: cpf, telefone: telefone, nome: nome };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const { cpf, telefone, nome } = result.value;
            Swal.fire({
                title: 'Confirme seus dados',
                html: `
                    <div>
                        <p><strong>CPF:</strong> ${cpf}</p>
                        <p><strong>Telefone:</strong> ${telefone}</p>
                        <p><strong>Nome completo:</strong> ${nome}</p>
                    </div>
                `,
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Sim, está correto',
                cancelButtonText: 'Não, editar',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Confirmado.',
                        text: 'Pacote selecionado!',
                        text: 'Entraremos em contato assim que possível!',
                        icon: 'success'
                    });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    // Se o usuário quiser editar os dados, chama novamente a função showForm
                    showForm();
                }
            });
        }
    });
}
