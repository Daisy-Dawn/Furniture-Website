<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$serverhost = "localhost";
$servername = "root";
$password = "";
$database = "reactphp";

$db_connect = mysqli_connect($serverhost, $servername, $password, $database);
if ($db_connect === false) {
    # code...
    die("ERROR:Could not connect to server" . mysqli_connect_error());
};

$method = $_SERVER['REQUEST_METHOD'];
// echo "test....." . $method;
// die;

switch ($method) {
    case 'GET':

        $path = explode('/', $_SERVER['REQUEST_URI']);

        if (isset($path[4]) && is_numeric($path[4])) {
            # code...
            echo 'get api singles';
            die;
        } else {
            $destination = $_SERVER['DOCUMENT_ROOT'] . "/reactApiPhp" . "/";
            $allProduct = mysqli_query($db_connect, "SELECT * FROM bloglist");
            if (mysqli_num_rows($allProduct) > 0) {
                # code...
                while ($row = mysqli_fetch_array($allProduct)) {
                    # code...
                    $json_array['productData'][] = array(
                        'id' => $row['id'],
                        'title' => $row['title'],
                        'category' => $row['category'],
                        'description' => $row['description'],
                        'image' => $row['image'],
                        'author' => $row['author'],
                        'timestamp' => $row['time'],
                    );
                }
                echo json_encode($json_array['productData']);
                return;
            } else {
                echo json_encode(["result" => "Please check your data again"]);
            }
        }


        break;

    case 'POST':
        if (isset($_FILES['image'])) {
            $title = mysqli_real_escape_string($db_connect, $_POST['title']);
            $author = mysqli_real_escape_string($db_connect, $_POST['author']);
            $category = mysqli_real_escape_string($db_connect, $_POST['category']);
            $description = mysqli_real_escape_string($db_connect, $_POST['description']);
            $Bdescription = mysqli_real_escape_string($db_connect, $_POST['bannerdescription']);
            $image = $_FILES['image']['name'];
            $image_temp = $_FILES['image']['tmp_name'];
            $destination = $_SERVER['DOCUMENT_ROOT'] . '/reactApiPhp/images' . "/" . $image;





            // $result = mysqli_query($db_connect, "INSERT INTO productlist (title, price, ratings, category, description, image, status) 
            // VALUES ('$title','$price','$ratings','$category','$description','$image','1') ");
            // tag, productName, productDetails, color, formerPrice, peopleRating, feature,
            //  '$tag', '$productName', '$productDetails', '$color', '$formerPrice', '$peopleRatings', '$feature',
            $result =  "INSERT INTO bloglist (title, author, category, description, bannerdescription, image) VALUES ('$title', '$author', '$category', '$description', '$Bdescription', '$image') ";

            if ($db_connect->query($result) === true) {
                move_uploaded_file($image_temp, $destination);
                echo json_encode(["success" => "product successfully added"]);
            } else {
                echo json_encode(["error" => "product not added"]);
                return;
            }
        } else {
            # code...
            echo json_encode(["errors" => "data not in correct format."]);
        }

        break;

    default:

        break;
}