<?php
require_once '../config/db_connection.php';

// Función para obtener todos los usuarios
function obtenerUsuarios() {
    global $conn;
    $sql = "SELECT * FROM Usuario";
    $result = $conn->query($sql);

    $usuarios = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $usuarios[] = $row;
        }
    }
    return $usuarios;
}

// Función para obtener un usuario por ID
function obtenerUsuarioPorId($id_usuario) {
    global $conn;
    $sql = "SELECT * FROM Usuario WHERE id_usuario = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_usuario);
    $stmt->execute();
    return $stmt->get_result()->fetch_assoc();
}

// Función para crear un nuevo usuario
function crearUsuario($nombre, $correo, $contrasena, $tipo_usuario, $telefono, $limite_proy) {
    global $conn;
    $sql = "INSERT INTO Usuario (nombre, correo, contraseña, tipo_usuario, telefono, limite_proy) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssi", $nombre, $correo, password_hash($contrasena, PASSWORD_DEFAULT), $tipo_usuario, $telefono, $limite_proy);
    return $stmt->execute();
}

// Función para actualizar un usuario
function actualizarUsuario($id_usuario, $nombre, $correo, $telefono, $limite_proy) {
    global $conn;
    $sql = "UPDATE Usuario SET nombre = ?, correo = ?, telefono = ?, limite_proy = ? WHERE id_usuario = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssii", $nombre, $correo, $telefono, $limite_proy, $id_usuario);
    return $stmt->execute();
}

// Función para eliminar un usuario
function eliminarUsuario($id_usuario) {
    global $conn;
    $sql = "DELETE FROM Usuario WHERE id_usuario = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_usuario);
    return $stmt->execute();
}
?>
