

// FILTRAGEM DE CLASSIFICAÇÃO PARA OS RESULTADOS DA PESQUISA
var hospedagens = [
    { cidade: "Rio Branco", checkIn: "2024-02-10", checkOut: "2024-02-15", quartos: 1, preco: 150 },
    { cidade: "Rio Branco", checkIn: "2024-02-10", checkOut: "2024-02-15", quartos: 2, preco: 200 },
    { cidade: "Rio Branco", checkIn: "2024-02-10", checkOut: "2024-02-15", quartos: 3, preco: 300 },
    { cidade: "São Paulo", checkIn: "2024-02-12", checkOut: "2024-02-15", quartos: 1, preco: 150 },
    { cidade: "Euclides da Cunha", checkIn: "2024-03-10", checkOut: "2024-03-24", quartos: 1, preco: 550 },
    { cidade: "Feira de Santana", checkIn: "2024-02-15", checkOut: "2024-02-20", quartos: 2, preco: 450 },
    { cidade: "Salvador", checkIn: "2024-02-10", checkOut: "2024-03-10", quartos: 2, preco: 350 },
    { cidade: "Joinville", checkIn: "2024-03-20", checkOut: "2024-04-21", quartos: 2, preco: 550 },
    { cidade: "Joinville", checkIn: "2024-02-16", checkOut: "2024-02-21", quartos: 2, preco: 525 },
    { cidade: "Joinville", checkIn: "2024-02-17", checkOut: "2024-03-21", quartos: 3, preco: 540 },
    { cidade: "Joinville", checkIn: "2024-02-18", checkOut: "2024-03-25", quartos: 4, preco: 660 },
    { cidade: "Cruzeiro do Sul", checkIn: "2024-02-15", checkOut: "2024-03-20", quartos: 3, preco: 500 },
  ];
  
  function pesquisar() {
    
    var cidade = document.getElementById("cidade").value;
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
        "<p='no-results'>Não temos hospedagem disponível. Tente outro local ou data</p=>";
    } else {
      resultados.forEach(function (hospedagem) {
        var resultadoHtml =
          "<div class='card'>" +
          "<p>Cidade: " +
          hospedagem.cidade +
          "</p>" +
          "<p>Check-in: " +
          hospedagem.checkIn +
          "</p>" +
          "<p>Check-out: " +
          hospedagem.checkOut +
          "</p>" +
          "<p>Quartos: " +
          hospedagem.quartos +
          "</p>" +
          "<p>Preço: R$" +
          hospedagem.preco +
          "</p>" +
          "</div>";
        resultadosPesquisa.innerHTML += resultadoHtml;
      });
  
      var anterior = document.getElementById("anterior");
      var proximo = document.getElementById("proximo");
  
      if (currentPage === 1) {
        anterior.disabled = true;
      } else {
        anterior.disabled = false;
      }
  
      if (
        Math.ceil(resultados.length / resultsPerPage) === currentPage ||
        resultados.length === 0
      ) {
        proximo.disabled = true;
      } else {
        proximo.disabled = false;
      }
    }
  }
  //*

 // VALIDAÇÃO DE FORMULÁRIO

 function pesquisar(){
   // Get the form fields
   var cidade = document.getElementById("cidade");
   var checkIn = document.getElementById("check-in");
   var checkOut = document.getElementById("check-out");
   var quartos = document.getElementById("quartos");
 
   // Validate the form fields
   if (cidade.value === "") {
     alert("É preciso que selecione pelo menos uma cidade.");
     cidade.classList.add("is-invalid");
     return;
   } else {
     cidade.classList.remove("is-invalid");
   }

 };

