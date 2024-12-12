<?php
require_once '../config/db_connection.php';

// Función para obtener todas las habilidades de un usuario
function obtenerHabilidadesPorUsuario($id_usuario) {
    global $conn;
    $sql = "SELECT * FROM Habilidades WHERE id_usuario = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_usuario);
    $stmt->execute();
    $result = $stmt->get_result();

    $habilidades = [];
    while ($row = $result->fetch_assoc()) {
        $habilidades[] = $row;
    }
    return $habilidades;
}

// Función para agregar una nueva habilidad a un usuario
function agregarHabilidad($id_usuario, $habilidad) {
    global $conn;
    $sql = "INSERT INTO Habilidades (id_usuario, habilidad) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("is", $id_usuario, $habilidad);
    return $stmt->execute();
}

// Función para eliminar una habilidad por ID
function eliminarHabilidad($id_habilidad) {
    global $conn;
    $sql = "DELETE FROM Habilidades WHERE id_habilidad = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_habilidad);
    return $stmt->execute();
}
?>
