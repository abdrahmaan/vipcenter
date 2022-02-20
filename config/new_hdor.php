<?php
include "config.php";

header("Access-Control-Allow-Origin: *");

$response = array("status"=> 0);
$data = [];
$msg = "";


// Try For Handle Error
try {
    
    
if(isset($_GET["name"]) && isset($_GET["teacher"]) && isset($_GET["leason"]) && isset($_GET["date"])){
    
    $name = $_GET["name"];
    $teacher = $_GET["teacher"];
    $leason = $_GET["leason"];
    $datee = $_GET["date"];

    $q = "INSERT INTO `tbl_hdor`(`Namee`, `Leason`, `Teacher`, `Date`) VALUES ('$name','$leason','$teacher','$datee')";
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