<?php
	header('Content-Type: application/json; charset=utf-8'); 
    error_reporting(0);
    include('includes/config.php'); 
    $data = json_decode(file_get_contents('php://input'), true);
  
    $username=$data['username'];
    $password=$data['password'];
  
	$sql = "SELECT * from users where ( email='".$username."' OR phone='".$username."') AND password='".$password."'";
	$result = $conn->query($sql);

	
if ($result->num_rows > 0) {
   $dataArray=array();	  
        $responseObj = new stdClass();
        $responseObj->status = 'success';
        $responseObj->message = 'Login Successfull';
        $responseObj->data = $dataArray; 	  
        echo json_encode($responseObj);
		exit;
} else {
    $dataArray=array();	     
        $responseObj = new stdClass();
        $responseObj->status = 'failed';
        $responseObj->message = 'User not found';
        $responseObj->data = $dataArray; 	  
        echo json_encode($responseObj);
		exit;
}
$conn->close(); 
?>

