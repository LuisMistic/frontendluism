<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/PHPMailer.php';
require 'src/SMTP.php';

// Reemplaza esto con la dirección de correo electrónico a la que deseas enviar los datos del formulario
$destinatario = 'luis.escalada21@gmail.com';

if (isset($_POST['submit'])) {
  // Recopilar los datos del formulario
  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $telefono = $_POST['telefono'];
  $mensaje = $_POST['mensaje'];

  // Validación de los datos
  if (empty($nombre) || empty($correo) || empty($mensaje)) {
    echo "Por favor, rellena todos los campos del formulario.";
  } elseif (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    echo "Por favor, introduce una dirección de correo electrónico válida.";
  } else {
    // Formatear el mensaje de correo electrónico
    $asunto = 'Nuevo mensaje de formulario de contacto';
    $contenido = "Nombre: $nombre\nCorreo: $correo\nTeléfono: $telefono\nMensaje:\n$mensaje";

    // Enviar correo electrónico
    $mail = new PHPMailer(true);
    try {
      // Configuración del servidor SMTP
      $mail->isSMTP();
      $mail->Host = 'smtp.gmail.com';
      $mail->SMTPAuth = true;
      $mail->Username = 'tu_direccion_de_correo@gmail.com'; // Reemplaza esto con tu dirección de correo electrónico
      $mail->Password = 'tu_contraseña_de_correo'; // Reemplaza esto con tu contraseña de correo electrónico
      $mail->SMTPSecure = 'tls';
      $mail->Port = 587;

      // Destinatario
      $mail->setFrom($correo, $nombre);
      $mail->addAddress($destinatario);

      // Contenido del correo electrónico
      $mail->isHTML(false);
      $mail->Subject = $asunto;
      $mail->Body = $contenido;

      $mail->send();
      echo 'Mensaje enviado correctamente.';
    } catch (Exception $e) {
      echo 'No se pudo enviar el mensaje. Error: ', $mail->ErrorInfo;
    }
  }
}
