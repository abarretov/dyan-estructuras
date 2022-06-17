<?php
// replace this with your own email address
$siteOwnersEmail = 'aj.barretov@gmail.com';
// check if the user has clicked the submit button
if (isset($_POST)) {
  // get the data from the contact form
  $data = json_decode(file_get_contents('php://input'), true);
  $name = trim(stripslashes($data['name']));
  $company = trim(stripslashes($data['company']));
  $phone = trim(stripslashes($data['phone']));
  $email = trim(stripslashes($data['email']));
  $subject = trim(stripslashes($data['subject']));
  $note = trim(stripslashes($data['note']));
  $message = '';
  $error = '';

  // set message
  $message .= 'Contacto: '.$name.'<br>';
  $message .= 'Empresa: '.$company.'<br>';
  $message .= 'Teléfono: '.$phone.'<br>';
  $message .= 'Correo: '.$email.'<br>';
  $message .= 'Mensaje: <br>';
  $message .= $note;
  $message .= "<br> ----- <br> Este correo electrónico fue enviado desde el formulario de contacto de D'yan Estructuras. <br>";

  // set from: header
  $from =  $name." <".$email.">";

  // email headers
  $headers = "From: ".$from."\r\n";
  $headers .= "Reply-To: ".$email."\r\n";
  $headers .= "MIME-Version: 1.0"."\r\n";    
  $headers .= "Content-type: text/html; charset=utf-8" ."\r\n";

  if (!$error) {  
    $mail = mail($siteOwnersEmail, $subject, $message, $headers);
    if ($mail) {
      $response = array("message"=>"Gracias por contactarnos. Estaremos en contacto con usted en la brevedad posible", "status"=>"success");
      echo json_encode($response);
    } else {
      $response = array("message"=>"Algo salio mal, por favor intente de nuevo", "status"=>"failed");
      echo json_encode($response);
      // echo 'Algo salio mal, por favor intente de nuevo. Error: '.$error;
    }
  } else {
    // $response = (isset($error['contactName'])) ? $error['name'] . "<br> \n" : null;
    // $response .= (isset($error['contactEmail'])) ? $error['email'] . "<br> \n" : null;
    // $response .= (isset($error['contactMessage'])) ? $error['message'] . "<br>" : null;
    $response = array("message"=>"Algo salio mal, por favor intente de nuevo", "status"=>"failed");
    echo json_encode($response);
  }
}
?>