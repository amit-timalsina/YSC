<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$mes = $_POST["message"];

$email_to = "info.communityysc@gmail.com";

$mail = new PHPMailer(true);

$mail->isSMTP();                                            //
$mail->Host       = 'smtp.gmail.com';                    
$mail->SMTPAuth   = true;                                   
$mail->Username   = 'tempmail.ysc@gmail.com';                     
$mail->Password   = 'yscrecast';                               
$mail->Port  = 587;

$mail->setFrom('tempmail.ysc@gmail.com');
$mail->addAddress($email_to);

$mail->isHTML(true); 

$mail->Subject = "Contact Us | $name";
$mail->Body = "<h1>$name</h1><h2>$email</h2><h2>$phone</h2><h2>$mes</h2>";

$mail->send();
echo "<script>
      window.location.href = 'contact.html';
    </script>";

?>