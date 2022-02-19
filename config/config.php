<?php 


$host = "localhost";
$username = "root";
$password = "";
$dbName = "mahaly_db";

try {
   $con = mysqli_connect($host,$username,$password,$dbName);
} catch (\Throwable $th) {
   echo $th;
}