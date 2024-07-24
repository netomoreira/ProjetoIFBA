<?php
session_start();

// Verifica se o usuário está logado
if (!isset($_SESSION['logged_in']) || !$_SESSION['logged_in']) {
    header('Location: login.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administração</title>
    <link rel="stylesheet" href="css/admin.css">
    <link rel="icon" type="image/png" sizes="32x32" href="imagens/favicon-32x32.png">
</head>
<body>
    <section>
        <div class="admin-container">
            <div class="admin-header">
                <h1>Administração</h1>
                <a href="telalogin.php" class="back-button">Voltar para o Login</a>
            </div>
            <!-- Formulário para adicionar um novo registro -->
            <div class="admin-form">
                <form id="admin-form" action="conexao.php" method="POST">
                    <input type="hidden" name="acao" value="inserir">
                    <h2>Adicionar Novo Registro</h2>
                    <div class="input-group">
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required>
                    </div>
                    <div class="input-group">
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="input-group">
                        <label for="celular">Celular:</label>
                        <input type="tel" id="celular" name="celular" required>
                    </div>
                    <div class="input-group">
                        <label for="senha">Senha:</label>
                        <input type="password" id="senha" name="senha" required>
                    </div>
                    <div class="input-group">
                        <label for="confsenha">Confirme a Senha:</label>
                        <input type="password" id="confsenha" name="confsenha" required>
                    </div>
                    <div class="input-group">
                        <button type="submit">Adicionar</button>
                    </div>
                </form>
            </div>
            <!-- Lista de registros existentes com opções de atualizar e excluir -->
            <div class="admin-table">
                <h2>Registros Existentes</h2>
                <?php
                include 'conexao.php';
                $contas = selectAllConta();
                ?>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Celular</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($contas as $conta): ?>
                        <tr>
                            <td><?php echo htmlspecialchars($conta['id']); ?></td>
                            <td><?php echo htmlspecialchars($conta['nome']); ?></td>
                            <td><?php echo htmlspecialchars($conta['email']); ?></td>
                            <td><?php echo htmlspecialchars($conta['celular']); ?></td>
                            <td>
                                <a href="editar.php?id=<?php echo htmlspecialchars($conta['id']); ?>" class="btn-edit">Editar</a>
                                <form action="conexao.php" method="POST" style="display:inline;">
                                    <input type="hidden" name="acao" value="excluir">
                                    <input type="hidden" name="id" value="<?php echo htmlspecialchars($conta['id']); ?>">
                                    <button type="submit" class="btn-delete">Excluir</button>
                                </form>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
            <!-- Logout Button -->
            <form action="logout.php" method="POST" class="logout-form">
                <button type="submit">Sair</button>
            </form>
        </div>
    </section>
</body>
</html>
