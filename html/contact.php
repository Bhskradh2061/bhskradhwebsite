<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'bhskradh@gmail.com';
  $subject = 'Contact Form Submission';
  $body = "From: $name\n E-Mail: $email\n Message:\n $message";
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  if (mail($to, $subject, $body, $headers)) {
    echo 'Your message has been sent successfully!';
  } else {
    echo 'There was a problem sending your message. Please try again later.';
  }
}