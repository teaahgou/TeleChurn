<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $company = $_POST["company"];
  $message = $_POST["message"];

  $to = "jamorcales25@gmail.com"; // Replace with your Gmail address
  $subject = "New Contact Form Submission from $name";

  $headers = "From: $email" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  $mailBody = "Name: $name\n";
  $mailBody .= "Email: $email\n";
  $mailBody .= "Company: $company\n";
  $mailBody .= "Message:\n$message";

  // Send the email
  mail($to, $subject, $mailBody, $headers);
}
?>
