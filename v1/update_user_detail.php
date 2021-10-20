<?php
	header('Content-Type: application/json; charset=utf-8'); 
    error_reporting(0);
    include('includes/config.php'); 
    $data = json_decode(file_get_contents('php://input'), true);
  
    $first_name=$data['first_name'];
    $last_name=$data['last_name'];
    $email=$data['email'];
    $phone=$data['phone'];
    
    if (isset($_POST['update'])) {
       $first_name =   mysqli_real_escape_string($conn,$_POST['first_name']);
       $last_name =   mysqli_real_escape_string($conn,$_POST['last_name']);
       $email =   mysqli_real_escape_string($conn,$_POST['email']);
       $phone =   mysqli_real_escape_string($conn,$_POST['phone']);
    
       $updatequery = "UPDATE `users` SET first_name='".$first_name."',last_name='".$last_name."',email='".$email."',phone='".$phone."'";


	 exit;
?>

