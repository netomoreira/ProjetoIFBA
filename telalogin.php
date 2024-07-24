<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Faça seu login</title>
    <link rel="stylesheet" href="css/telalogin.css">
    <link rel="icon" type="image/png" sizes="32x32" href="imagens/favicon-32x32.png">
</head>
<body>
    <section>
        <div class="form-box">
            <div class="form-value">
                <form id="login-form" action="exibir.php" method="GET">
                    <h2>AeroGIN</h2>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" name="email" required>
                        <label for="">E-mail</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" name="senha" required>
                        <label for="">Senha</label>
                    </div>
                    <div class="lembrar">
                        <label for=""><input type="checkbox">Lembre-se de mim <a href="#">Esqueci a senha</a></label>
                        <div class="transition"></div>
                    </div>
                    <button type="submit">Entrar</button>
                    <div class="registrar">
                        <p>Não tenho uma conta <a href="telaregistro.html">Registrar</a></p>
                    </div>
                </form>           
            </div>
        </div>
        <div class="admin-login">
            <a href="admin_login.php">Login de Administrador</a>
        </div>
    </section>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</html>
