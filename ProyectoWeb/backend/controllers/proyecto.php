<?php
require_once '../config/db_connection.php';

// Función para obtener todos los proyectos
function obtenerProyectos() {
    global $conn;
    $sql = "SELECT p.*, e.RFC, c.nombre AS categoria
            FROM Proyecto p
            INNER JOIN Empresa e ON p.id_empresa = e.id_empresa
            INNER JOIN Categoria c ON p.id_categoria = c.id_categoria";
    $result = $conn->query($sql);

    $proyectos = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $proyectos[] = $row;
        }
    }
    return $proyectos;
}

// Función para obtener un proyecto por ID
function obtenerProyectoPorId($id_proyecto) {
    global $conn;
    $sql = "SELECT p.*, e.RFC, c.nombre AS categoria
            FROM Proyecto p
            INNER JOIN Empresa e ON p.id_empresa = e.id_empresa
            INNER JOIN Categoria c ON p.id_categoria = c.id_categoria
            WHERE p.id_proyecto = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_proyecto);
    $stmt->execute();
    return $stmt->get_result()->fetch_assoc();
}

// Función para crear un nuevo proyecto
function crearProyecto($id_empresa, $estado, $titulo, $descripcion, $id_categoria, $limite_alum, $limite_maes, $fecha_inicio, $fecha_termino) {
    global $conn;
    $sql = "INSERT INTO Proyecto (id_empresa, estado, titulo, descripcion, id_categoria, limite_alum, limite_maes, fecha_inicio, fecha_termino)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iisssiiis", $id_empresa, $estado, $titulo, $descripcion, $id_categoria, $limite_alum, $limite_maes, $fecha_inicio, $fecha_termino);
    return $stmt->execute();
}

// Función para actualizar un proyecto
function actualizarProyecto($id_proyecto, $titulo, $descripcion, $limite_alum, $limite_maes, $fecha_inicio, $fecha_termino) {
    global $conn;
    $sql = "UPDATE Proyecto SET titulo = ?, descripcion = ?, limite_alum = ?, limite_maes = ?, fecha_inicio = ?, fecha_termino = ? WHERE id_proyecto = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssiissi", $titulo, $descripcion, $limite_alum, $limite_maes, $fecha_inicio, $fecha_termino, $id_proyecto);
    return $stmt->execute();
}

// Función para eliminar un proyecto
function eliminarProyecto($id_proyecto) {
    global $conn;
    $sql = "DELETE FROM Proyecto WHERE id_proyecto = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_proyecto);
    return $stmt->execute();
}
?>
