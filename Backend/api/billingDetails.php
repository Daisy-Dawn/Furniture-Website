<?php
include("db.php");

$method = $_SERVER['REQUEST_METHOD'];
// echo "test....." . $method;
// die;

switch ($method) {
    case 'GET':
        # code...
        $alluser = mysqli_query($db_connect, "SELECT * FROM billingDetails");
        if (mysqli_num_rows($alluser) > 0) {
            # code...
            while ($row = mysqli_fetch_array($alluser)) {
                $json_array['userdata'][] = array("id" => $row["id"], "firstName" => $row["firstName"], "lastName" => $row["lastName"], "email" => $row["email"], "contactNumber" => $row["contactNumber"], "companyName" => $row["companyName"], "address" => $row["address"], "city" => $row["city"], "state" => $row["state"], "country" => $row["country"], "postalCode" => $row["postalCode"], "otherNotes" => $row["otherNotes"], "timestamp" => $row["timestamp"],);
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
        $firstName = $userformpost->firstName;
        $lastName = $userformpost->lastName;
        $email = $userformpost->email;
        $contactNumber = $userformpost->contactNumber;
        $companyName = $userformpost->companyName;
        $address = $userformpost->address;
        $city = $userformpost->city;
        $state = $userformpost->state;
        $country = $userformpost->country;
        $postalCode = $userformpost->postalCode;
        $otherNotes = $userformpost->otherNotes;





        $checkEmailQuery = "SELECT COUNT(*) as emailCount FROM billingdetails WHERE email = '$email' ";
        $checkResult = $db_connect->query($checkEmailQuery);

        if ($checkResult && $checkResult->num_rows > 0) {
            # code...
            $row = $checkResult->fetch_assoc();
            $emailCount = $row['emailCount'];
            if ($emailCount > 0) {
                # code...
                echo json_encode(["error" => "billing details already exists"]);
            } else {
                $result = mysqli_query($db_connect, "INSERT INTO billingdetails (firstName, lastName, email, contactNumber, companyName, address, city, state, country, postalCode, otherNotes) 
                VALUES('$firstName', '$lastName', '$email', '$contactNumber', '$companyName', '$address', '$city', '$state', '$country', '$postalCode', '$otherNotes') ");
            }
        } else {
            echo json_encode(['error' => 'Error checking email']);
        }
        break;

    default:
        # code...
        break;
}