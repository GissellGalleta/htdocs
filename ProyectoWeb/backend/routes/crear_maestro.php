<?php
require_once '../controllers/maestro.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id_usuario = $_POST['id_usuario'];
    $especialidad = $_POST['especialidad'];
    $años_lab = $_POST['años_lab'];

    if (crearMaestro($id_usuario, $especialidad, $años_lab)) {
        echo "Maestro creado exitosamente.";
    } else {
        echo "Error al crear el maestro.";
    }
}
?>
