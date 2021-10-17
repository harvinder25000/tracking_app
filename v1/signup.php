<?php
	header('Content-Type: application/json; charset=utf-8'); 
    error_reporting(0);
    include('includes/config.php'); 
    $data = json_decode(file_get_contents('php://input'), true);
  
    $first_name=$data['first_name'];
    $last_name=$data['last_name'];
    $email=$data['email'];
    $phone=$data['phone'];
    $longitude="";
    $latitude="";
    
   $sql = "INSERT INTO users (parent_id, first_name, last_name, email, `password`, `cpassword`, phone, longitude, latitude )
    VALUES ('','".$first_name."', '".$last_name."', '".$email."', '".md5($password)."', '".$cpassword."', '".$phone."', '', '')";

    if ($conn->query($sql) === TRUE) {
        $dataArray=array();	  
        $responseObj = new stdClass();
        $responseObj->status = 'success';
        $responseObj->message = 'Registration Successfull';
        $responseObj->data = $dataArray; 	  
        echo json_encode($responseObj);

    } else {  
        $dataArray=array();	  
        $responseObj = new stdClass();
        $responseObj->status = 'failed';
        $responseObj->message = 'Email Already Exist';
        $responseObj->data = $dataArray; 	  
        echo json_encode($responseObj);

    }

	 exit;
?>

