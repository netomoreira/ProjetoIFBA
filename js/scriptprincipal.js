// Função para exibir alerta ao clicar no botão Pesquisar
function exibirAlerta() {
  // Verificar se há conteúdo nos campos de entrada
  var origem = document.getElementById("ori").value;
  var destino = document.getElementById("des").value;
  var dataIda = document.getElementById("dataida").value;
  var dataVolta = document.getElementById("datavol").value;
  var passagem = document.getElementById("passagem").value;

  // Se algum dos campos estiver vazio, exibir alerta
  if (origem === "" || destino === "" || dataIda === "" || dataVolta === "" || passagem === "") {
      alert("Por favor, preencha todos os campos antes de pesquisar.");
  } else {
      // Se todos os campos estiverem preenchidos, prosseguir com a pesquisa
      alert("Pesquisa realizada com sucesso!");
  }
}


// Função para manipular o conteúdo da página
function alterarConteudo() {
  // Exemplo de alteração de conteúdo
  document.getElementById("verofertas").textContent = "Confira as ofertas imperdíveis!";
}

// Função para manipular eventos
function manipularEventos() {
  // Exemplo de manipulação de eventos
  document.getElementById("botao").addEventListener("click", exibirAlerta);
  document.getElementById("verofertas").addEventListener("mouseover", alterarConteudo);
}

// Função para ser chamada ao carregar a página
function inicializar() {
  manipularEventos();
}

// Chamando a função inicializar ao carregar a página
window.onload = inicializar;