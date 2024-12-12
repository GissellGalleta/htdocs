<?php
require_once '../controllers/proyecto.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id_empresa = $_POST['id_empresa'];
    $estado = isset($_POST['estado']) ? 1 : 0;
    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];
    $id_categoria = $_POST['id_categoria'];
    $limite_alum = $_POST['limite_alum'];
    $limite_maes = $_POST['limite_maes'];
    $fecha_inicio = $_POST['fecha_inicio'];
    $fecha_termino = $_POST['fecha_termino'];

    if (crearProyecto($id_empresa, $estado, $titulo, $descripcion, $id_categoria, $limite_alum, $limite_maes, $fecha_inicio, $fecha_termino)) {
        echo "Proyecto creado exitosamente.";
    } else {
        echo "Error al crear el proyecto.";
    }
}
?>
