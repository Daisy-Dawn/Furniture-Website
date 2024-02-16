<?php
include("db.php");

$method = $_SERVER['REQUEST_METHOD'];
// echo "test....." . $method;
// die;

switch ($method) {
    case 'GET':
        # code...
        $alluser = mysqli_query($db_connect, "SELECT * from registration ");
        if (mysqli_num_rows($alluser) > 0) {
            # code...
            while ($row = mysqli_fetch_array($alluser)) {
                $json_array['userdata'][] = array("id" => $row["id"], "username" => $row["username"], "email" => $row["email"], "password" => $row["password"]);
            }
            echo json_encode($json_array["userdata"]);
            return;
        } else {
            echo json_encode(["result" => "Please check the data input"]);
        }
        break;

    case 'POST':
        # code...
        // registration authentication process for the server-side
        $userformpost = json_decode(file_get_contents('php://input'));
        // echo "success data";
        // print_r($userformpost);
        $username = $userformpost->username;
        $email = $userformpost->email;
        $password = password_hash($userformpost->password, PASSWORD_BCRYPT);

        $checkEmailQuery = "SELECT COUNT(*) as emailCount FROM registration WHERE email = '$email' ";
        $checkResult = $db_connect->query($checkEmailQuery);

        if ($checkResult && $checkResult->num_rows > 0) {
            # code...
            $row = $checkResult->fetch_assoc();
            $emailCount = $row['emailCount'];
            if ($emailCount > 0) {
                # code...
                echo json_encode(["error" => "Email already exists"]);
            } else {
                $result = mysqli_query($db_connect, "INSERT INTO registration (username, email, password) VALUES('$username', '$email', '$password')");

                if ($result) {
                    # code...
                    $token = bin2hex(random_bytes(32));
                    // Store the token in the database
                    $updateTokenSql = "UPDATE registration SET token='$token' WHERE email='$email'";
                    $db_connect->query($updateTokenSql);

                    echo json_encode(["success" => "user added successfully", 'token' => $token, 'user' => ['username' => $username, 'email' => $email]]);
                    return;
                } else {
                    # code...
                    echo json_encode(["error" => "please check the credentials"]);
                }
            }
        } else {
            echo json_encode(['error' => 'Error checking email']);
        }


        break;

    default:
        # code...
        break;
}
