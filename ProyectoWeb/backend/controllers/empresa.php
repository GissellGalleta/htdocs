<?php
require_once '../config/db_connection.php';

// Función para obtener todas las empresas
function obtenerEmpresas() {
    global $conn;
    $sql = "SELECT e.*, u.nombre, u.correo 
            FROM Empresa e
            INNER JOIN Usuario u ON e.id_usuario = u.id_usuario";
    $result = $conn->query($sql);

    $empresas = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $empresas[] = $row;
        }
    }
    return $empresas;
}

// Función para obtener una empresa por ID
function obtenerEmpresaPorId($id_empresa) {
    global $conn;
    $sql = "SELECT e.*, u.nombre, u.correo 
            FROM Empresa e
            INNER JOIN Usuario u ON e.id_usuario = u.id_usuario
            WHERE e.id_empresa = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_empresa);
    $stmt->execute();
    return $stmt->get_result()->fetch_assoc();
}

// Función para crear una nueva empresa
function crearEmpresa($id_usuario, $RFC, $direccion) {
    global $conn;
    $sql = "INSERT INTO Empresa (id_usuario, RFC, direccion) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iss", $id_usuario, $RFC, $direccion);
    return $stmt->execute();
}

// Función para actualizar una empresa
function actualizarEmpresa($id_empresa, $RFC, $direccion) {
    global $conn;
    $sql = "UPDATE Empresa SET RFC = ?, direccion = ? WHERE id_empresa = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssi", $RFC, $direccion, $id_empresa);
    return $stmt->execute();
}

// Función para eliminar una empresa
function eliminarEmpresa($id_empresa) {
    global $conn;
    $sql = "DELETE FROM Empresa WHERE id_empresa = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_empresa);
    return $stmt->execute();
}
?>
