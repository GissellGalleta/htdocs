<?php
require_once '../config/db_connection.php';

// Función para obtener todas las postulaciones
function obtenerPostulaciones() {
    global $conn;
    $sql = "SELECT * FROM Postulaciones";
    $result = $conn->query($sql);

    $postulaciones = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $postulaciones[] = $row;
        }
    }
    return $postulaciones;
}

// Función para crear una postulación
function crearPostulacion($id_usuario, $id_proyecto, $tipo_usuario, $estado) {
    global $conn;
    $sql = "INSERT INTO Postulaciones (id_usuario, id_proyecto, tipo_usuario, estado) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iiii", $id_usuario, $id_proyecto, $tipo_usuario, $estado);
    return $stmt->execute();
}

// Función para actualizar una postulación
function actualizarPostulacion($id_postulacion, $estado) {
    global $conn;
    $sql = "UPDATE Postulaciones SET estado = ? WHERE id_postulacion = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $estado, $id_postulacion);
    return $stmt->execute();
}

// Función para eliminar una postulación
function eliminarPostulacion($id_postulacion) {
    global $conn;
    $sql = "DELETE FROM Postulaciones WHERE id_postulacion = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_postulacion);
    return $stmt->execute();
}
?>
