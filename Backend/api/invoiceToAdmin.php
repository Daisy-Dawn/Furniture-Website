<?php
include("db.php");
include("mailerToAdmin.php");

$userformpost = json_decode(file_get_contents("php://input"), true);
// data got from react js
$totalAmount = $userformpost['total'];
$getCartItems = $userformpost['cartItems'];
$emails = $userformpost['email'];
$current_Time = date("Y-m-d H:i:s");


if (isset($emails, $totalAmount, $getCartItems) && is_array($getCartItems)) {
    $sql = "SELECT * FROM billingdetails WHERE email = '$emails' LIMIT 1";
    $query = mysqli_query($db_connect, $sql);

    if ($query && $query->num_rows > 0) {
        $row =  mysqli_fetch_array($query);
        $email = $row['email'];
        $city = $row['city'];
        $firstName = $row['firstName'];
        $lastName = $row['lastName'];
        $contact = $row['contactNumber'];
        $companyName = $row['companyName'];
        $state = $row['state'];
        $country = $row['country'];
        $address = $row['address'];
        $postalCode = $row['postalCode'];
        $otherNotes = $row['otherNotes'];
        if ($email && $city && $firstName && $lastName && $contact && $companyName && $state && $country && $address && $postalCode && $otherNotes && $getCartItems && $current_Time && $totalAmount) {
            send_mailer_to_admin(
                // billing details to the admin
                $firstName,
                $lastName,
                $email,
                $contact,
                $companyName,
                $address,
                $city,
                $state,
                $country,
                $postalCode,
                $otherNotes,
                // product details to the admin
                $getCartItems,
                $totalAmount,
                // time payment was made
                $current_Time,
            );
            echo json_encode(['success' => ' sending mail to admin was successfully']);
        } else {
            echo json_encode(['error' => 'error sending mail to admin']);
        }

        // echo  $id,  $color, $price, $category, $quantity, $state, $country;
        echo json_encode(['success' => 'data got successful from database']);
    } else {
        echo json_encode(['error' => 'Could not fetch from database']);
    }
} else {
    echo json_encode(['error' => 'data failed']);
}