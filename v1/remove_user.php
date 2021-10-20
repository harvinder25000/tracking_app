<?php
	header('Content-Type: application/json; charset=utf-8'); 
    error_reporting(0);
    include('includes/config.php'); 
    $data = json_decode(file_get_contents('php://input'), true);
  
    $email=$data['email'];

    $ids = "SELECT `id` FROM `users` WHERE `email`= $email";
    $deletequery = "DELETE from `users` where id=$ids";
    $query = mysqli_query($con, $deletequery);
    if($query){
        ?>
        <script>
        alert('Deleted successfully');
        </script>
        <?php
        header('location:select.php');
    }else{
        ?>
        <script>
        alert('Not Deleted');
        </script>
        <?php
    }

	 exit;
?>

