<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$area = $_POST['sel_categoria'];
$consulta = $_POST['sel_consulta'];
$mensaje =  $_POST['mensaje']; 
$para = '';
$titulo = 'Contacto Cruxes';
$header = 'From: ' .$email;
$msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Teléfono: $telefono\n Área: $area\n Consulta: $consulta\n Mensaje:\n $mensaje";
  
if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo "<script language='javascript'>
alert('Mensaje enviado, muchas gracias.');
window.location.href = 'www.cruxes.com/index.html';
</script>";
} else {
echo 'Falló el envio';
}
}




?>
