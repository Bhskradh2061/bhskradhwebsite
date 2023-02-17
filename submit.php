<?php
if (isset($_POST['name'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $education = $_POST['education'];
  $experience = $_POST['experience'];

  $file = fopen("cv.txt", "a");
  fwrite($file, "Name: " . $name . "\n");
  fwrite($file, "Email: " . $email . "\n");
  fwrite($file, "Phone: " . $phone . "\n");
  fwrite($file, "Education: " . $education . "\n");
  fwrite($file, "Work Experience: " . $experience . "\n\n");
  fclose($file);

  echo "CV submitted successfully!";
}
?>
