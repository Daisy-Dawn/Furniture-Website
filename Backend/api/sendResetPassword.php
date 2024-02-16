<?php


include  "db.php";
include "mailer.php";


// Get the input data from the request body
$inputData = json_decode(file_get_contents('php://input'), true);

// $error = "Could not connect to the database";

// // Check if the input data is valid
if (isset($inputData['userEmail'])) {
    // Extract the input value
    $input = $inputData['userEmail'];

    $sql = "SELECT * FROM registration WHERE email = '$input' LIMIT 1 ";
    $query = $db_connect->query($sql);

    if ($query && $query->num_rows > 0) {

        $row = mysqli_fetch_array($query);
        $get_email = $row['email'];
        $get_username = $row['username'];
        $get_reset_token = $row['temp_reset_token'];
        $get_reset_timer = $row['temp_reset_token_validation'];

        $token = bin2hex(random_bytes(32)); // creating a token in random byte
        $token_hash = hash('sha256', $token); // hashing the token so to have a longer figure
        $expiring_date = date("Y-m-d H:i:s", time() + 60 * 30);
        $sqli = "UPDATE registration SET temp_reset_token = '$token_hash', temp_reset_token_validation = '$expiring_date' WHERE
email = '$input' ";
        if ($result = $db_connect->query($sqli) === true) {
            // Echo the input back
            // echo json_encode(['message' => $get_email, $get_reset_token, $get_username]);


            if ($result === true) {
                # code...
                send_password_reset($get_username, $get_email, $token_hash);
            }
        } else {
            echo json_encode(['error' => 'could not send to db']);
        }
    } else {
        // Input data is invalid
        echo json_encode(['error' => 'Invalid input data']);
        exit(0);
    }
}