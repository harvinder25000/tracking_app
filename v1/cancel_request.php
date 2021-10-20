<?php
	header('Content-Type: application/json; charset=utf-8'); 
    error_reporting(0);
    include('includes/config.php'); 
    $data = json_decode(file_get_contents('php://input'), true);
  
    if (isset($_POST['accept'])) {
        
    }
   




    if (isset($_POST['cancel'])) {
        
    }
?>

