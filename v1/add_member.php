<?php

    header('Content-Type: application/json; charset=utf-8'); 
    error_reporting(0);
    include('includes/config.php'); 
    $data = json_decode(file_get_contents('php://input'), true);

    $username=$data[($email OR $phone)];
    $first_name=$data['first_name'];
    $last_name=$data['last_name'];
    $email=$data['email'];
    $phone=$data['phone'];
    $longitude="";
    $latitude="";

    $parent_fetch ="SELECT `id` FROM `users` WHERE `email`= $username ";

    $id_insert = "INSERT INTO users (parent_id) VALUES ('".$parent_fetch."')";


?>