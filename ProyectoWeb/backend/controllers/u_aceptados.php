<?php
require_once '../config/db_connection.php';

// Función para obtener todas las aceptaciones
function obtenerAceptaciones() {
    global $conn;
    $sql = "SELECT * FROM U_aceptados";
    $result = $conn->query($sql);

    $aceptaciones = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $aceptaciones[] = $row;
        }
    }
    return $aceptaciones;
}

// Función para obtener aceptaciones por usuario
function obtenerAceptacionesPorUsuario($id_usuario) {
    global $conn;
    $sql = "SELECT * FROM U_aceptados WHERE id_usuario = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_usuario);
    $stmt->execute();
    $result = $stmt->get_result();

    $aceptaciones = [];
    while ($row = $result->fetch_assoc()) {
        $aceptaciones[] = $row;
    }
    return $aceptaciones;
}

// Función para agregar una aceptación
function agregarAceptacion($id_usuario, $id_proyecto, $tipo_usuario) {
    global $conn;
    $sql = "INSERT INTO U_aceptados (id_usuario, id_proyecto, tipo_usuario) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iii", $id_usuario, $id_proyecto, $tipo_usuario);
    return $stmt->execute();
}

// Función para eliminar una aceptación
function eliminarAceptacion($id_aceptacion) {
    global $conn;
    $sql = "DELETE FROM U_aceptados WHERE id_aceptacion = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_aceptacion);
    return $stmt->execute();
}
?>
