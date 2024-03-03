var hospedagens = [
{ cidade: "Rio Branco", checkIn: "2024-02-10", checkOut: "2024-02-15", quartos: 1, preco: 150 },
{ cidade: "Rio Branco", checkIn: "2024-02-10", checkOut: "2024-02-15", quartos: 2, preco: 200 },
{ cidade: "Rio Branco", checkIn: "2024-02-10", checkOut: "2024-02-15", quartos: 3, preco: 300 },
{ cidade: "São Paulo", checkIn: "2024-02-12", checkOut: "2024-02-15", quartos: 1, preco: 150 },
{ cidade: "Euclides da Cunha", checkIn: "2024-03-10", checkOut: "2024-03-24", quartos: 1, preco: 550 },
{ cidade: "Feira de Santana", checkIn: "2024-02-15", checkOut: "2024-02-20", quartos: 2, preco: 450 },
{ cidade: "Feira de Santana", checkIn: "2024-02-12", checkOut: "2024-02-17", quartos: 1, preco: 150 },
{ cidade: "Feira de Santana", checkIn: "2024-02-12", checkOut: "2024-02-17", quartos: 2, preco: 250 },
{ cidade: "Salvador", checkIn: "2024-02-10", checkOut: "2024-03-10", quartos: 2, preco: 350 },
{ cidade: "Joinville", checkIn: "2024-03-20", checkOut: "2024-04-21", quartos: 2, preco: 550 },
{ cidade: "Joinville", checkIn: "2024-02-16", checkOut: "2024-02-21", quartos: 2, preco: 525 },
{ cidade: "Joinville", checkIn: "2024-02-17", checkOut: "2024-03-21", quartos: 3, preco: 540 },
{ cidade: "Joinville", checkIn: "2024-02-18", checkOut: "2024-03-25", quartos: 4, preco: 660 },
{ cidade: "Cruzeiro do Sul", checkIn: "2024-02-15", checkOut: "2024-03-20", quartos: 3, preco: 500 },
{ cidade: "Vitória da Conquista", checkIn: "2024-03-10", checkOut: "2024-03-15", quartos: 1, preco: 180 },
{ cidade: "Vitória da Conquista", checkIn: "2024-03-10", checkOut: "2024-03-15", quartos: 2, preco: 280 },
{ cidade: "Arapiraca", checkIn: "2024-02-15", checkOut: "2024-02-20", quartos: 1, preco: 120 },
{ cidade: "Arapiraca", checkIn: "2024-02-15", checkOut: "2024-02-20", quartos: 2, preco: 200 },
{ cidade: "Chapecó", checkIn: "2024-02-10", checkOut: "2024-02-13", quartos: 1, preco: 220 },
{ cidade: "Chapecó", checkIn: "2024-02-10", checkOut: "2024-02-13", quartos: 2, preco: 350 },
{ cidade: "Florianópolis", checkIn: "2024-02-18", checkOut: "2024-02-22", quartos: 1, preco: 250 },
{ cidade: "Florianópolis", checkIn: "2024-02-18", checkOut: "2024-02-22", quartos: 2, preco: 400 },
{ cidade: "Blumenau", checkIn: "2024-02-10", checkOut: "2024-02-15", quartos: 1, preco: 200 },
{ cidade: "Blumenau", checkIn: "2024-02-10", checkOut: "2024-02-15", quartos: 2, preco: 300 },
];

function pesquisar() {
  //VALIDAÇÃO DE FORMULÁRIO
var cidade = document.getElementById("cidade").value;
if (cidade.length === 0) {
    Swal.fire({
        icon: "error",
        title: "Algo está errado...",
        text: "É necessário pelo menos a escolha de uma cidade.",
        footer: '<a href="#">Por que esse erro?</a>'
    });
    return;
}
var checkIn = document.getElementById("check-in").value;
var checkOut = document.getElementById("check-out").value;
var quartos = parseInt(document.getElementById("quartos").value);

var resultados = hospedagens;

if (cidade) {
    resultados = resultados.filter(function (hospedagem) {
        return hospedagem.cidade === cidade;
    });
}

if (checkIn && checkOut && quartos) {
    resultados = resultados.filter(function (hospedagem) {
        return (
            hospedagem.checkIn <= checkIn &&
            hospedagem.checkOut >= checkOut &&
            hospedagem.quartos >= quartos
        );
    });
}

var resultadosPesquisa = document.getElementById("resultadosPesquisa");
resultadosPesquisa.innerHTML = "";

if (resultados.length === 0) {
    resultadosPesquisa.innerHTML =
        "<div class='textopesquisa'>" + "<p>Não temos hospedagem disponível, tente outro local ou data.</p></div>";
} else {
    resultados.forEach(function (hospedagem, index) {
        var checkInFormatado = moment(hospedagem.checkIn).format("DD/MM/YYYY");
        var checkOutFormatado = moment(hospedagem.checkOut).format("DD/MM/YYYY");


        var resultadoHtml =
            "<div class='result-card' data-hospedagem-id='" + index + "'>" +
            "<p>Cidade: " + hospedagem.cidade + "</p>" +
            "<p>Check-in: " + checkInFormatado + "</p>" +
            "<p>Check-out: " + checkOutFormatado + "</p>" +
            "<p>Quartos: " + hospedagem.quartos + "</p>" +
            "<p>Preço: R$" + hospedagem.preco + "</p>" +
            "</div>";
        resultadosPesquisa.innerHTML += resultadoHtml;
    });

    var cards = document.querySelectorAll('.result-card');
    cards.forEach(function(card) {
        card.addEventListener('click', function(){
            var hospedagemId = this.getAttribute('data-hospedagem-id');
            Swal.fire({
                title: "Você tem certeza?",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sim, tenho!",
                cancelButtonText: "Não, quero outra hospedagem."
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Confirmado.",
                        text: "Hospedagem reservada!",
                        icon: "success"
                    });
                }
            });
        });
    });
}
}

function limparCampos() {
document.getElementById("cidade").value = "";
document.getElementById("check-in").value = "";
document.getElementById("check-out").value = "";
document.getElementById("quartos").value = "";
}
