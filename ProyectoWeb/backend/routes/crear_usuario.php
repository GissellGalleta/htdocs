<?php
require_once '../controllers/usuario.php'; // Ruta al controlador de usuarios

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Recibir los datos del formulario
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $contraseña = $_POST['contraseña'];
    $tipo_usuario = $_POST['tipo_usuario'];
    $telefono = $_POST['telefono'];
    $limite_proy = isset($_POST['limite_proy']) ? 1 : 0;

    // Crear el usuario utilizando la función en el controlador
    if (crearUsuario($nombre, $correo, $contraseña, $tipo_usuario, $telefono, $limite_proy)) {
        echo "Usuario creado exitosamente.";
    } else {
        echo "Error al crear el usuario.";
    }
}
?>
