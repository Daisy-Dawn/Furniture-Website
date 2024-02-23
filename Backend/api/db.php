<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: http://localhost:5173");
// Allow methods GET, POST, PUT, DELETE, OPTIONS
header("Access-Control-Allow-Methods: GET, POST,  OPTIONS");
// Allow headers Content-Type, Authorization, Accept
header("Access-Control-Allow-Headers: Content-Type, Authorization, Accept");

$serverhost = "localhost";
$servername = "root";
$password = "";
$database = "reactphp";

$db_connect = mysqli_connect($serverhost, $servername, $password, $database);
if ($db_connect === false) {
    # code...
    die("ERROR:Could not connect to server" . mysqli_connect_error());
};