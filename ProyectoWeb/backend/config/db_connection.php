<?php
// Archivo de conexión a la base de datos
$host = 'localhost';
$user = 'u117281852_w24021202'; 
$password = 'Gissell62$'; 
$database = 'u117281852.w24021202'; 

// Crear la conexión
$conn = new mysqli($host, $user, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

echo "Conexión exitosa a la base de datos!";
?>