<?php
require_once '../controllers/empresa.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id_usuario = $_POST['id_usuario'];
    $RFC = $_POST['RFC'];
    $direccion = $_POST['direccion'];

    if (crearEmpresa($id_usuario, $RFC, $direccion)) {
        echo "Empresa creada exitosamente.";
    } else {
        echo "Error al crear la empresa.";
    }
}
?>
