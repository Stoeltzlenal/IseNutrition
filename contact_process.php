<?php

    $email = $_REQUEST['email'];
    $nom = $_REQUEST['nom'];
    $prenom = $_REQUEST['prenom'];
    $objet = $_REQUEST['subject'];
    $situation = $_REQUEST['situation'];
    $age = $_REQUEST['age'];
    $msg = $_REQUEST['message'];

    $to = 'jeremy.vaccaro@isen.yncrea.fr';
    $subject = "$objet | $prenom $nom";
    $message = "Vous avez reçu un message de $nom $prenom, agé de $age."
            . "Son niveau est $situation."
            . "Message : $msg";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'From:'.$prenom.' '.$nom.' <'.$email.'>' . "\r\n" .
				'Reply-To:'.$email. "\r\n" .
				'Content-Type: text/html; charset="utf-8"; DelSp="Yes"; format=flowed '."\r\n" .
				'Content-Disposition: inline'. "\r\n" .
				'Content-Transfer-Encoding: 7bit'." \r\n" .
				'X-Mailer:PHP/'.phpversion();

            mail($to, $subject, $message, $headers);

?>