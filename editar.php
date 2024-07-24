<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Registro</title>
    <link rel="stylesheet" href="css/admin.css">
    <link rel="icon" type="image/png" sizes="32x32" href="imagens/favicon-32x32.png">
</head>
<body>
    <div class="container">
        <h1>Editar Registro</h1>
        <?php
        include 'conexao.php';
        $id = $_GET['id'];
        $conta = selectIdConta($id);
        ?>
        <form action="conexao.php" method="POST">
            <input type="hidden" name="acao" value="atualizar">
            <input type="hidden" name="id" value="<?php echo $conta['id']; ?>">
            <div class="input-group">
                <label for="nome">Nome: </label>
                <input type="text" id="nome" name="nome" value="<?php echo $conta['nome']; ?>" required>
            </div>
            <div class="input-group">
                <label for="email">E-mail: </label>
                <input type="email" id="email" name="email" value="<?php echo $conta['email']; ?>" required>
            </div>
            <div class="input-group">
                <label for="celular">Celular: </label>
                <input type="tel" id="celular" name="celular" value="<?php echo $conta['celular']; ?>" required>
            </div>
            <div class="input-group">
                <label for="senha">Senha: </label>
                <input type="password" id="senha" name="senha">
            </div>
            <div class="input-group">
                <label for="confsenha">Confirme a Senha: </label>
                <input type="password" id="confsenha" name="confsenha">
            </div>
            <div class="input-group">
                <button type="submit">Atualizar</button>
            </div>
        </form>
    </div>
</body>
</html>
