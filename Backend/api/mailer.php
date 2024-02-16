<?php

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';


function send_password_reset($get_username, $get_email, $token_hash)
{

    try {
        //Create an instance; passing `true` enables exceptions
        $mail = new PHPMailer(true);


        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'test.hackdevelopers@gmail.com';                     //SMTP username
        $mail->Password   = 'aqylivxfwehqqjld';                                //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('test.hackdevelopers@gmail.com', 'noreply@furnitura.com');
        $mail->addAddress($get_email);     //Add a recipient

        //Content
        $mail->isHTML(true);
        $mail->Subject = 'Reset Password Notification';
        $mail->Body = <<<END

            <html>
            <head>
                <title>Welcome to our Newsletter</title>
                <style>
                    /* Add CSS styles here */
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #FFFFFF;
                        color: #000000;
                    }
                    .centers{
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
                <h3 class="centers">Furnitura(logo)</h3>
                </div>
                <p>Dear $get_username,</p>
                <p>You are recieving this email because you have resquested for a password reset.</p><br>
               <p> Note that this a one time password reset mail, this link will expires in the next 30 mins. </p>
               <p>Keep your password save at all times.</p>
               <p>This password reset is associated with furnitura.</p>
               <p>Best regards, </p>
               <p>Furnitura Team.</p>
               <center>
               <a href="http://localhost:5173/login/resetPassword?$token_hash" style="color: #FFFFFF" class="button">Password Reset</a>
               </center>
               <p>If password reset was not initiated by you, please ignore, thanks!</p>
</div>
</body>

</html>


END;

        $mail->send();
        echo json_encode(["message" => "Message has been sent to your mailbox successfully"]);
    } catch (Exception $e) {
        echo json_encode(["error" => $e, "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
    };
};