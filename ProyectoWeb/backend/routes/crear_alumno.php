<?php
require_once '../controllers/alumno.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id_usuario = $_POST['id_usuario'];
    $semestre = $_POST['semestre'];
    $universidad = $_POST['universidad'];

    if (crearAlumno($id_usuario, $semestre, $universidad)) {
        echo "Alumno creado exitosamente.";
    } else {
        echo "Error al crear el alumno.";
    }
}
?>
