<?php
require_once '../config/db_connection.php';

// Función para obtener todos los maestros
function obtenerMaestros() {
    global $conn;
    $sql = "SELECT m.*, u.nombre, u.correo, u.telefono 
            FROM Maestro m
            INNER JOIN Usuario u ON m.id_usuario = u.id_usuario";
    $result = $conn->query($sql);

    $maestros = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $maestros[] = $row;
        }
    }
    return $maestros;
}

// Función para obtener un maestro por ID
function obtenerMaestroPorId($id_maestro) {
    global $conn;
    $sql = "SELECT m.*, u.nombre, u.correo, u.telefono 
            FROM Maestro m
            INNER JOIN Usuario u ON m.id_usuario = u.id_usuario
            WHERE m.id_maestro = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_maestro);
    $stmt->execute();
    return $stmt->get_result()->fetch_assoc();
}

// Función para crear un nuevo maestro
function crearMaestro($id_usuario, $especialidad, $años_lab) {
    global $conn;
    $sql = "INSERT INTO Maestro (id_usuario, especialidad, años_lab) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isi", $id_usuario, $especialidad, $años_lab);
    return $stmt->execute();
}

// Función para actualizar un maestro
function actualizarMaestro($id_maestro, $especialidad, $años_lab) {
    global $conn;
    $sql = "UPDATE Maestro SET especialidad = ?, años_lab = ? WHERE id_maestro = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sii", $especialidad, $años_lab, $id_maestro);
    return $stmt->execute();
}

// Función para eliminar un maestro
function eliminarMaestro($id_maestro) {
    global $conn;
    $sql = "DELETE FROM Maestro WHERE id_maestro = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_maestro);
    return $stmt->execute();
}
?>
