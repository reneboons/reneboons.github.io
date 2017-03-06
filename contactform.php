<?php

$email_adress = $_POST['emailInput'];
$subject_user = $_POST['subjectInput'];
$message = $_POST['messageInput'];

$subject = "$email_adress stuurde je een bericht via renéboons.nl";

$to = "felixrutgerjan@gmail.com"; /*DIT E-MAILADRES MOET WORDEN : rene.boons@live.nl*/

mail ($to, $subject, $message, "From: " . $email_adress);
echo "Your message has been sent.";

?>