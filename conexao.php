<?php
if (isset($_POST["acao"])) {
    if ($_POST["acao"] == "inserir") {
        inserirConta();
    }
    if ($_POST["acao"] == "atualizar") {
        atualizarConta();
    }
    if ($_POST["acao"] == "excluir") {
        excluirConta();
    }
}

function abrirBanco() {
    $conexao = new mysqli("localhost", "root", "", "cadastro");
    if ($conexao->connect_error) {
        die("Connection failed: " . $conexao->connect_error);
    }
    return $conexao;
}

function inserirConta() {
    $banco = abrirBanco();
    
    if ($_POST["senha"] !== $_POST["confsenha"]) {
        echo "Senhas não coincidem!";
        $banco->close();
        return;
    }

    $nome = $banco->real_escape_string($_POST["nome"]);
    $email = $banco->real_escape_string($_POST["email"]);
    $senha = password_hash($_POST["senha"], PASSWORD_BCRYPT);
    $celular = $banco->real_escape_string($_POST["celular"]);
    $sql = "INSERT INTO contas (nome, email, senha, celular) VALUES ('$nome', '$email', '$senha', '$celular')";

    if ($banco->query($sql) === TRUE) {
        echo "Cadastro realizado com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $banco->error;
    }
    
    $banco->close();
    voltarIndex();
}

function atualizarConta() {
    $banco = abrirBanco();
    
    // Verifique se as senhas coincidem, se fornecidas
    $senha = !empty($_POST["senha"]) ? password_hash($_POST["senha"], PASSWORD_BCRYPT) : null;
    $senhaSql = $senha ? ", senha='$senha'" : '';

    $nome = $banco->real_escape_string($_POST["nome"]);
    $email = $banco->real_escape_string($_POST["email"]);
    $celular = $banco->real_escape_string($_POST["celular"]);
    $id = $banco->real_escape_string($_POST["id"]);
    $sql = "UPDATE contas SET nome='$nome', email='$email', celular='$celular'$senhaSql WHERE id='$id'";

    if ($banco->query($sql) === TRUE) {
        echo "Registro atualizado com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $banco->error;
    }
    
    $banco->close();
    voltarIndex();
}

function excluirConta() {
    $banco = abrirBanco();
    $id = $banco->real_escape_string($_POST["id"]);
    $sql = "DELETE FROM contas WHERE id='$id'";

    if ($banco->query($sql) === TRUE) {
        echo "Registro excluído com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $banco->error;
    }
    
    $banco->close();
    voltarIndex();
}

function selectAllConta() {
    $banco = abrirBanco();
    $sql = "SELECT * FROM contas ORDER BY nome";
    $resultado = $banco->query($sql);
    $banco->close();
    
    $dados = [];
    while ($row = mysqli_fetch_array($resultado)) {
        $dados[] = $row;
    }
    return $dados;
}

function selectIdConta($id) {
    $banco = abrirBanco();
    $sql = "SELECT * FROM contas WHERE id=$id";
    $resultado = $banco->query($sql);
    $banco->close();

    return mysqli_fetch_assoc($resultado);
}

function voltarIndex() {
    header("Location: admin.php");
    exit();
}
?>
