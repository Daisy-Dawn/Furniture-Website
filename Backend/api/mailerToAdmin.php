<?php

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';
function send_mailer_to_admin(
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
    $current_Time,
) {
    try {

        // Start building the HTML template
        $body = '
<html?>

<head>
    <title>Product Successfully Purchase</title>
    <style>
    /* Add CSS styles here */
    body {
        font-family: Arial, sans-serif;
        background-color: #FFFFFF;
        color: #000000;
    }

    .centers {
        text-align: center;
        color: #0E0E0E;
    }

    .container {
        max-width: 500px;
        margin: 0 auto;
        padding: 15px;
        background-color: #FFFFFF;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    p {
        font-size: 18px;
        line-height: 1.6;
        color: #000000;
    }

    .button {
        display: inline-block;
        padding: 10px 15px;
        background-color: #0B0FF3;
        color: #000000;
        text-align: center;
        text-decoration: none;
        border-radius: 10px;
    }
    </style>
</head>

<body>
    <div class="container">
        <div>
            <h3 class="centers">(logo)</h3>
        </div>
        <p>Hey Admin,</p>
        <p>You are receiving this email because you are the admin of Furnitura Company</p><br>
        <p> Note, that You will get this mail each time a buyer successfully purchases a product</p>
        <p>Keep in mind that you are getting this mail just to send the buyers goods to the right location.</p>
        <h3>Customer Billing Details</h3>
        <p>
            First name: ' . $firstName . ' <br>
            Last name: ' . $lastName . ' <br>
            Email: ' . $email . ' <br>
            Contact: ' . $contact . ' <br>
            Company name: ' . $companyName . ' <br>
            Address: ' . $address . ' <br>
            City: ' . $city . ' <br>
            State: ' . $state . ' <br>
            Country: ' . $country . ' <br>
            Postal Code: ' . $postalCode . ' <br>
            Description Note: ' . $otherNotes . ' <br>
        </p> <br>
        <h3>Customer List of Items and descriptions</h3>';

        // Iterate over cartItems using a foreach loop
        foreach ($getCartItems as $item) {
        $name = $item['name'];
        $image = $item['image'];
        $color = $item['color'];
        $quantity = $item['quantity'];
        $category = $item['category'];
        $price = $item['price'];
        $tag = $item['tag'];
        $productName = $item['productName'];


        // Append HTML for each item to the $body variable
        $body .= '
        <p>
            Name of item: ' . $name . ', <br>
            Images: ' . $image . ', <br>
            Colors: ' . $color . ', <br>
            Quantity: ' . $quantity . ', <br>
            Category: ' . $category . ', <br>
            Price: ' . $price . ', <br>
            Tag: ' . $tag . ', <br>
            Name of product: ' . $productName . ', <br>
        </p>';
        }

        // Continue building the HTML template
        $body .= '
        <p>
            Total Amount: N ' . $totalAmount . ', <br>
            Time of payment: ' . $current_Time . ', <br>
        </p>
        <p>Best regards, </p>
        <p>Furnitura Team.</p>
        <center>
            <a href="http://localhost:5173/shop" style="color: #FFFFFF" class="button">See More Insights</a>
        </center>
        <p>Getting this mail means a user has Successfully purchased a product from Furnitura</p>
    </div>
</body>

</html>
';


// foreach ($getCartItems as $item) {
// $name = $item['name'];
// $image = $item['image'];
// $color = $item['color'];
// $quantity = $item['quantity'];
// $category = $item['category'];
// $price = $item['price'];
// $tag = $item['tag'];
// $productName = $item['productName'];
// }

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);


//Server settings
$mail->SMTPDebug = SMTP::DEBUG_SERVER; //Enable verbose debug output
$mail->isSMTP(); //Send using SMTP
$mail->Host = 'smtp.gmail.com'; //Set the SMTP server to send through
$mail->SMTPAuth = true; //Enable SMTP authentication
$mail->Username = 'test.hackdevelopers@gmail.com'; //SMTP username
$mail->Password = 'aqylivxfwehqqjld'; //SMTP password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; //Enable implicit TLS encryption
$mail->Port = 465; //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

//Recipients
$mail->setFrom('test.hackdevelopers@gmail.com', 'Admin@furnitura.com');
$mail->addAddress('emmanuelbigboss26@gmail.com', 'admin'); //Add a recipient

//Content
$mail->isHTML(true);
$mail->Subject = 'Purchase Product Details Invoice';
$mail->Body = $body;

$mail->send();
echo json_encode(["message" => "Message has been sent to your mailbox successfully"]);
} catch (Exception $e) {
echo json_encode(["error" => $e, "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
};
};