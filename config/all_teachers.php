<?php
include "config.php";

header("Access-Control-Allow-Origin: *");

$response = array("status"=> 0);
$data = [];
$msg = "";

// Try For Handle Error
try {
    

    $q = "SELECT Namee FROM tbl_teachers";
    $cmd = mysqli_query($con,$q);

    if(mysqli_num_rows($cmd) > 0){

        while ($row = mysqli_fetch_assoc($cmd)){
            $data[] = $row;
        }

        $response["status"] = 1;
        $response["data"] = $data;

        echo json_encode($response);

    } else {

    echo json_encode($response);
    
    }; // End IF Num rows > 0

} catch (\Throwable $th) {

    echo json_encode($response);
    
}


?>