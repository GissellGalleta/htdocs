<?php
require_once '../config/db_connection.php';

// Función para obtener todos los alumnos
function obtenerAlumnos() {
    global $conn;
    $sql = "SELECT a.*, u.nombre, u.correo, u.telefono 
            FROM Alumno a
            INNER JOIN Usuario u ON a.id_usuario = u.id_usuario";
    $result = $conn->query($sql);

    $alumnos = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $alumnos[] = $row;
        }
    }
    return $alumnos;
}

// Función para obtener un alumno por ID
function obtenerAlumnoPorId($id_alumno) {
    global $conn;
    $sql = "SELECT a.*, u.nombre, u.correo, u.telefono 
            FROM Alumno a
            INNER JOIN Usuario u ON a.id_usuario = u.id_usuario
            WHERE a.id_alumno = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_alumno);
    $stmt->execute();
    return $stmt->get_result()->fetch_assoc();
}

// Función para crear un nuevo alumno
function crearAlumno($id_usuario, $semestre, $universidad) {
    global $conn;
    $sql = "INSERT INTO Alumno (id_usuario, semestre, universidad) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iss", $id_usuario, $semestre, $universidad);
    return $stmt->execute();
}

// Función para actualizar un alumno
function actualizarAlumno($id_alumno, $semestre, $universidad) {
    global $conn;
    $sql = "UPDATE Alumno SET semestre = ?, universidad = ? WHERE id_alumno = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssi", $semestre, $universidad, $id_alumno);
    return $stmt->execute();
}

// Función para eliminar un alumno
function eliminarAlumno($id_alumno) {
    global $conn;
    $sql = "DELETE FROM Alumno WHERE id_alumno = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_alumno);
    return $stmt->execute();
}
?>
