<?php
include "config.php";

header("Access-Control-Allow-Origin: *");

$response = array("status"=> 0);
$data = [];
$msg = "";


// Try For Handle Error
try {
    
    
if(isset($_GET["name"]) && isset($_GET["phone"]) && isset($_GET["leason"])){
    
    $name = $_GET["name"];
    $phone = $_GET["phone"];
    $leason = $_GET["leason"];

    $q = "INSERT INTO `tbl_teachers`(`Namee`, `Phone`, `Leason`) VALUES ('$name','$phone','$leason')";
    $cmd = mysqli_query($con,$q);

    if($cmd){

        $response["status"] = 1;
       
        echo json_encode($response);

    } else {

    echo json_encode($response);
    
    }; // End IF Command Not Executed


} else {

    echo json_encode($response);

} /// End if Data is not set


} catch (\Throwable $th) {

    echo json_encode($response);
    
}


?>