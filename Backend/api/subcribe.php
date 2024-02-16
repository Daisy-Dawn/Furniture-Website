<?php
// Subscription to our newsletter from the server-side
include("db.php");

$userData = json_decode(file_get_contents('php://input'));
$email = $userData->email;

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}


// Check if the email already exists in the database
$checkEmailQuery = "SELECT COUNT(*) as emailCount FROM subscribe WHERE email = '$email'";
$checkResult = $db_connect->query($checkEmailQuery);

if ($checkResult && $checkResult->num_rows > 0) {
    $row = $checkResult->fetch_assoc();
    $emailCount = $row['emailCount'];

    if ($emailCount > 0) {
        echo json_encode(['error' => 'Email address already subscribed']);
    } else {
        // Insert the email into the database
        $insertQuery = "INSERT INTO subscribe (email) VALUES ('$email')";

        if ($db_connect->query($insertQuery) === TRUE) {
            echo json_encode(['success' => 'Subscription successful']);
        } else {
            echo json_encode(['error' => 'Error subscribing']);
        }
    }
} else {
    echo json_encode(['error' => 'Error checking email']);
}
