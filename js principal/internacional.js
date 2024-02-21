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
