<?php
	$name = $_post["nombre"];
	$email = $_post["email"];
	$message = $_post["message"];
	$content = "nombre:" . $name . "\nCorreo" . $email . "\nMensaje" . $message;

	mail(juanmanuel.mexi@gmail.com, "Nuevo Mensaje", $content);
	?>