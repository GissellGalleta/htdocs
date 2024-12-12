<?php
require_once '../controllers/habilidades.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id_usuario = $_POST['id_usuario'];
    $habilidad = $_POST['habilidad'];

    if (agregarHabilidad($id_usuario, $habilidad)) {
        echo "Habilidad agregada exitosamente.";
    } else {
        echo "Error al agregar la habilidad.";
    }
}
?>
