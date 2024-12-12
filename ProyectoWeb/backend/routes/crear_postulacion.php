<?php
require_once '../controllers/postulaciones.php'; // Ruta al controlador de postulaciones

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Recibir datos del formulario
    $id_usuario = $_POST['id_usuario'];
    $id_proyecto = $_POST['id_proyecto'];
    $tipo_usuario = $_POST['tipo_usuario'];
    $estado = isset($_POST['estado']) ? 1 : 0;

    // Crear la postulación utilizando la función en el controlador
    if (crearPostulacion($id_usuario, $id_proyecto, $tipo_usuario, $estado)) {
        echo "Postulación creada exitosamente.";
    } else {
        echo "Error al crear la postulación.";
    }
}
?>
