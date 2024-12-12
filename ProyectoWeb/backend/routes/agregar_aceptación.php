<?php
require_once '../controllers/u_aceptados.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id_usuario = $_POST['id_usuario'];
    $id_proyecto = $_POST['id_proyecto'];
    $tipo_usuario = $_POST['tipo_usuario'];

    if (agregarAceptacion($id_usuario, $id_proyecto, $tipo_usuario)) {
        echo "Aceptación agregada exitosamente.";
    } else {
        echo "Error al agregar la aceptación.";
    }
}
?>
