<?php
// login process for handling authentication at the server-side

include("db.php");

$userData = json_decode(file_get_contents('php://input'));
$email = $userData->email;
$password = $userData->password;

$sql = "SELECT * FROM registration WHERE email ='$email' ";
$result = $db_connect->query($sql);
if ($result && $result->num_rows > 0) {
    # code...
    $user = $result->fetch_assoc();

    // verify the hash password
    if (password_verify($password, $user['password'])) {
        # code...
        // Generate a token 
        $token = bin2hex(random_bytes(32));
        $updateTokenSql = "UPDATE registration SET token='$token' WHERE id={$user['id']}";
        $db_connect->query($updateTokenSql);
        echo json_encode(['message' => 'Login successful', 'token' => $token, 'user' => ['username' => $user['username'], 'email' => $user['email']]]);
    } else {
        echo json_encode(['error' => 'Invalid password']);
    }
} else {
    echo json_encode(['error' => 'User not found']);
}
