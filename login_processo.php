<?php
session_start();

// Credenciais do administrador
$admin_email = 'aerogin@gmail.com';
$admin_senha = '123456'; 

$email = $_POST['email'];
$senha = $_POST['senha'];

// Verifica as credenciais
if ($email === $admin_email && $senha === $admin_senha) {
    $_SESSION['logged_in'] = true;
    header('Location: admin.php'); 
    exit();
} else {
    ?>
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Erro de Login</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                background-color: #f8d7da;
                font-family: 'poppins', sans-serif;
                color: #721c24;
                text-align: center;
            }
            .error-container {
                background-color: #fff;
                border: 1px solid #f5c6cb;
                border-radius: 8px;
                padding: 20px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                max-width: 400px;
                width: 100%;
            }
            .error-container h1 {
                font-size: 1.5em;
                margin-bottom: 10px;
            }
            .error-container p {
                font-size: 1em;
                margin-bottom: 20px;
            }
            .error-container a {
                color: #0056b3;
                text-decoration: none;
                font-weight: bold;
            }
            .error-container a:hover {
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <div class="error-container">
            <h1>Credenciais Inválidas</h1>
            <p>As credenciais fornecidas estão incorretas. <a href="admin_login.php">Tente novamente</a>.</p>
        </div>
    </body>
    </html>
    <?php
}
?>
