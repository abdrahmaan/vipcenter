<?php

include "config.php";

header("Access-Control-Allow-Origin: *");

$response = array("status"=> 0);

if(isset($_GET["id"]) && isset($_GET["action"])){

    $id = $_GET["id"];
    $action = $_GET["action"];

    
    if($action === "hdor"){
        $q = "DELETE FROM tbl_hdor WHERE id = '$id'";
        $cmd = mysqli_query($con,$q);
        if($cmd){
            $response["status"] = 1;
            echo json_encode($response);
        } else {
            // echo json_encode($response);
            echo $cmd;
        }
    }

    if($action === "exam"){
        $q = "DELETE FROM tbl_exams WHERE id = '$id'";
      $cmd = mysqli_query($con,$q);
        if($cmd){
            $response["status"] = 1;
            echo json_encode($response);
        } else {
            echo json_encode($response);
        }

    }

} else {

echo json_encode($response);

}








?>