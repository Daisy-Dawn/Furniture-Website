<?php
include("db.php");

$method = $_SERVER['REQUEST_METHOD'];
// echo "test....." . $method;
// die;

switch ($method) {
    case 'GET':
        # code...
        $alluser = mysqli_query($db_connect, "SELECT * from googleAuth");
        if (mysqli_num_rows($alluser) > 0) {
            # code...
            while ($row = mysqli_fetch_array($alluser)) {
                $json_array['userdata'][] = array("id" => $row["id"], "name" => $row["name"], "email" => $row["email"], "picture" => $row["picture"]);
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

        $name = $userformpost->name;
        $email = $userformpost->email;
        $picture = $userformpost->picture;

        $checkEmailQuery = "SELECT COUNT(*) as emailCount FROM googleAuth WHERE email = '$email' ";
        $checkResult = $db_connect->query($checkEmailQuery);

        if ($checkResult && $checkResult->num_rows > 0) {
            # code...
            $row = $checkResult->fetch_assoc();
            $emailCount = $row['emailCount'];
            if ($emailCount > 0) {
                # code...
                echo json_encode(["error" => "Email already exists"]);
            } else {
                $result = mysqli_query($db_connect, "INSERT INTO googleAuth (name, email, picture) VALUES('$name', '$email', '$picture')");
            }
        } else {
            echo json_encode(['error' => 'Error checking email']);
        }
        break;



    default:
        # code...
        break;
}
