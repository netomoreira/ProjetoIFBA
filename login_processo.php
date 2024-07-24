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
    echo "Credenciais inválidas. <a href='admin_login.php'>Tente novamente</a>";
}
?>
