<?php
include "config.php";

header("Access-Control-Allow-Origin: *");

$response = array("status"=> 0);
$data = [];
$msg = "";


// Try For Handle Error
try {
    
    
if(isset($_GET["name"])){
    
    $name = $_GET["name"];

    $q = "SELECT * FROM tbl_hdor WHERE stuname = '$name'";
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


} else {

    echo json_encode($response);

} /// End if namee is not set


} catch (\Throwable $th) {

    echo json_encode($response);
    
}


?>