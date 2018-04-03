<?php
if($_POST) {
	$Name=$_POST['Name'];
	$Email=$_POST['Email'];
	$Subject=$_POST['Subject'];
	$Mensaje=$_POST['Mensaje'];
	echo json_encode(array("respuesta"=>'“Gracias por contactarse con nosotros, '.$Name));
}
