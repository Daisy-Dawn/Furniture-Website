<?php
// contact form, this will handle every input from the contact page to the server

// error_reporting(E_ALL);
// ini_set('display_errors', 1);
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: *");
// header("Access-Control-Allow-Methods: *");

// $serverhost = "localhost";
// $servername = "root";
// $password = "";
// $database = "reactphp";

// $db_connect = mysqli_connect($serverhost, $servername, $password, $database);
// if ($db_connect === false) {
//     # code...
//     die("ERROR:Could not connect to server" . mysqli_connect_error());
// };
// $userData = json_decode(file_get_contents('php://input'));
// $name = $userData->name;
// $email = $userData->email;
// $subject = $userData->subject;
// $phone = $userData->phone;
// $message = $userData->message;

// $result = mysqli_query($db_connect, "INSERT INTO contact (name, email, subject, phone, message) VALUES('$name', '$email', '$subject', '$phone', '$message')");
// if ($result) {
//     # code...
//     echo json_encode(["success" => "message added successfully"]);
// } else {
//     # code...
//     echo json_encode(["error" => "please check the credentials"]);
// }

include("db.php");

$userData = json_decode(file_get_contents('php://input'));
$name = $userData->name;
$email = $userData->email;
$subject = $userData->subject;
$phone = $userData->phone;
$message = $userData->message;

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}


// Check if the email already exists in the database
$checkEmailQuery = "SELECT COUNT(*) as emailCounts FROM contact WHERE email = '$email'";
$checkResult = $db_connect->query($checkEmailQuery);

if ($checkResult && $checkResult->num_rows > 0) {
    $row = $checkResult->fetch_assoc();
    $emailCount = $row['emailCounts'];

    if ($emailCount > 0) {
        echo json_encode(['error' => 'Email address already exist']);
    } else {
        // Insert the email into the database
        $insertQuery = "INSERT INTO contact (name, email, subject, phone, message) VALUES ('$name', '$email', '$subject', '$phone', '$message')";

        if ($db_connect->query($insertQuery) === TRUE) {
            echo json_encode(['success' => 'submitted successful']);
        } else {
            echo json_encode(['errors' => 'Error contacting us']);
        }
    }
} else {
    echo json_encode(['error' => 'Error checking email']);
}
