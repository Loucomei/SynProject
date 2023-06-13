<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Validate form data (you can add more validation if needed)
  if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo "Please fill in all the required fields.";
    exit;
  }

  // Email information
  $to = 'sheephson71177@gmail.com';
  $subject = 'New Form Submission';
  $headers = "From: $name <$email>" . "\r\n";
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  // Send email
  if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo "Thank you for your submission!";
  } else {
    http_response_code(500);
    echo "Oops! Something went wrong. Please try again later.";
  }
} else {
  http_response_code(405);
  echo "Method Not Allowed";
}
?>