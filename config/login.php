<?php

include "config.php";

header("Access-Control-Allow-Origin: *");


$response = array("status"=> 0);
$data = [];
$msg = "";

try {
    
if(isset($_GET["user"]) && isset($_GET["pass"])){
    
    $name = $_GET["user"];
    $password = $_GET["pass"];

$q = "SELECT * FROM tbl_users WHERE username = '$name' AND passwordd = '$password'";

$cmd = mysqli_query($con,$q);

if(mysqli_num_rows($cmd) > 0){

while ($row = mysqli_fetch_assoc($cmd)) {
    $data[] = $row;
}

$response["status"] = 1;
$response["data"] = $data;

echo json_encode($response);


} else {

    echo json_encode($response);
}  // End IF Num rows > 0

} else {

  echo json_encode($response);

} // End If user and password not setted

} catch (\Throwable $th) {

     echo json_encode($response);

}




?>