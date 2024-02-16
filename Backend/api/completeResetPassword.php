<?php
include  "db.php";

$inputData = json_decode(file_get_contents('php://input'), true);

$error = "Could not connect to the database";

// // Check if the input data is valid
if (isset($inputData['password']) && isset($inputData['token'])) {
    // Extract the input value
    $password = $inputData['password'];
    $token = $inputData['token'];
    $password_hash = password_hash($password, PASSWORD_DEFAULT);

    // $check_items = "SELECT temp_reset_token_validation FROM registration WHERE temp_reset_token = '$token' LIMIT 1";
    // $check_items_run = mysqli_query($db_connect, $check_items);

    // if ($check_items_run && $check_items_run->num_rows > 0) {
    //     # code...
    //     $row = mysqli_fetch_array($check_items_run);
    //     $get_reset_timer = $row['temp_reset_token_validation'];
    //     echo $get_reset_timer;
    //     $get_reset_timer_db = strtotime($get_reset_timer);

    //     // Get the current Unix timestamp
    //     $currentTimestamp = time();

    //     $timeDifferent = $currentTimestamp - $get_reset_timer_db;

    // print_r($password_hash, $token);
    // echo json_encode(["success:" => "pass ok", $password_hash, $token]);

    // if ($timeDifferent > 1800) {
    //     echo json_encode(["failed" => "Token has expired, try again "]);
    // } else {

    if (!empty($token)) {
        if (!empty($password_hash)) {
            // this to check if token is curresponding with the one in the database
            $check_token = "SELECT * FROM registration WHERE temp_reset_token = '$token' LIMIT 1 ";
            $check_token_run = mysqli_query($db_connect, $check_token);

            if (mysqli_num_rows($check_token_run) > 0) {
                $row = mysqli_fetch_array($check_token_run);
                $get_email = $row['email'];
                // get the db time
                $get_db_timer = strtotime($row['temp_reset_token_validation']);
                // get the current time
                $current_Time = time();
                // calculate the time different
                $timeDiffent = $get_db_timer - $current_Time;

                if ($timeDiffent > 1800) {
                    echo json_encode(["failed" => "your token has expired!"]);
                    die();
                } else {

                    if ($password_hash) {
                        $update_password = "UPDATE registration SET password = '$password_hash', temp_reset_token = NULL, temp_reset_token_validation = NULL WHERE email = '$get_email' LIMIT 1";
                        $update_password_run = mysqli_query($db_connect, $update_password);

                        if ($update_password_run === TRUE) {
                            echo json_encode(["success" => "password has been updated successfully!"]);
                        } else {
                            echo json_encode(["error" => "Did not update password, something went wrong "]);
                        }
                    }
                }
            } else {
                echo json_encode(["error" => "Invalid token"]);
            }

            // echo json_encode(["success:" => "successful intake"]);
        } else {
            echo json_encode(["error" => "Token or input field is undefined"]);
        }
    } else {
        echo json_encode(["error" => "Token is not recognised"]);
    }
}
    // }
// }