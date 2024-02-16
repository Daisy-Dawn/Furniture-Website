<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
// Allow methods GET, POST, PUT, DELETE, OPTIONS
header("Access-Control-Allow-Methods: *");
// Allow headers Content-Type, Authorization, Accept
header("Access-Control-Allow-Headers: *");

$serverhost = "localhost";
$servername = "root";
$password = "";
$database = "reactphp";

$db_connect = mysqli_connect($serverhost, $servername, $password, $database);
if ($db_connect === false) {
    # code...
    die("ERROR:Could not connect to server" . mysqli_connect_error());
};