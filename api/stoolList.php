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
            $allProduct = mysqli_query($db_connect, "SELECT * FROM stoollist ");
            if (mysqli_num_rows($allProduct) > 0) {
                # code...
                while ($row = mysqli_fetch_array($allProduct)) {
                    # code...
                    $json_array['productData'][] = array(
                        'id' => $row['id'],
                        'name' => $row['name'],
                        'price' => $row['price'],
                        'ratings' => $row['ratings'],
                        'category' => $row['category'],
                        'description' => $row['description'],
                        'image' => $row['image'],

                        'tag' => $row['tag'],
                        'color' => $row['color'],
                        'peopleRating' => $row['peopleratings'],
                        'productName' => $row['productname'],
                        'productDetails' => $row['productdetails'],
                        'feature' => $row['feature'],
                        'formerPrice' => $row['formerprice'],
                        'timestamp' => $row['timestamp'],
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
            $name = mysqli_real_escape_string($db_connect, $_POST['name']);
            $price = mysqli_real_escape_string($db_connect, $_POST['price']);
            $ratings = mysqli_real_escape_string($db_connect, $_POST['ratings']);
            $category = mysqli_real_escape_string($db_connect, $_POST['category']);
            $description = mysqli_real_escape_string($db_connect, $_POST['description']);
            $image = $_FILES['image']['name'];
            $image_temp = $_FILES['image']['tmp_name'];
            $destination = $_SERVER['DOCUMENT_ROOT'] . '/reactApiPhp/images' . "/" . $image;
            $tag = mysqli_real_escape_string($db_connect, $_POST['tag']);
            $color = mysqli_real_escape_string($db_connect, $_POST['color']);
            $formerprice = mysqli_real_escape_string($db_connect, $_POST['formerprice']);
            $feature = mysqli_real_escape_string($db_connect, $_POST['feature']);
            $peopleratings = mysqli_real_escape_string($db_connect, $_POST['peopleratings']);
            $productname = mysqli_real_escape_string($db_connect, $_POST['productname']);
            $productdetails = mysqli_real_escape_string($db_connect, $_POST['productdetails']);




            // $result = mysqli_query($db_connect, "INSERT INTO productlist (title, price, ratings, category, description, image, status) 
            // VALUES ('$title','$price','$ratings','$category','$description','$image','1') ");
            // tag, productName, productDetails, color, formerPrice, peopleRating, feature,
            //  '$tag', '$productName', '$productDetails', '$color', '$formerPrice', '$peopleRatings', '$feature',
            $result =  "INSERT INTO stoollist (name, price, ratings, category, description, image, tag, color, formerprice, feature, peopleratings, productname, productdetails ) VALUES ('$name', '$price', '$ratings', '$category', '$description', '$image', '$tag', '$color', '$formerprice', '$feature', '$peopleratings', '$productname', '$productdetails' ) ";

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