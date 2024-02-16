<?php
include("db.php");

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
            $allProduct = mysqli_query($db_connect, "SELECT * FROM allproduct ORDER BY created_at DESC ");
            if (mysqli_num_rows($allProduct) > 0) {
                # code...
                while ($row = mysqli_fetch_array($allProduct)) {
                    # code...
                    $json_array['productData'][] = array(
                        'id' => $row['id'],
                        'image' => $row['image'],
                        'price' => $row['price'],
                        'quantity' => $row['quantity'],
                        'name' => $row['name'],
                        'description' => $row['description'],
                        'category' => $row['category'],
                        'feature' => $row['feature'],
                        'productName' => $row['productName'],
                        'formerPrice' => $row['formerPrice'],
                        'color' => $row['color'],
                        'ratings' => $row['starRating'],
                        'peopleRating' => $row['peopleRating'],
                        'tag' => $row['tag'],
                        'productDetails' => $row['productDetails'],
                        'timestamp' => $row['created_at'],


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
            function generateUniqueProductID()
            {
                // Prefix for the product ID
                $prefix = 'PROD';
                // Current timestamp (or any other date-related information)
                $timestamp = date('YmdHis');
                // Random component (you can adjust the length as needed)
                $random = mt_rand(1000, 9999);
                // Combine the components to create a unique ID
                $productID = $prefix . $timestamp . $random;
                return $productID;
            }
            // Example usage
            $id = generateUniqueProductID();
            $image = $_FILES['image']['name'];
            $image_temp = $_FILES['image']['tmp_name'];
            $destination = $_SERVER['DOCUMENT_ROOT'] . '/reactApiPhp/images' . "/" . $image;
            $price = mysqli_real_escape_string($db_connect, $_POST['price']);
            $name = mysqli_real_escape_string($db_connect, $_POST['quantity']);
            $name = mysqli_real_escape_string($db_connect, $_POST['name']);
            $description = mysqli_real_escape_string($db_connect, $_POST['description']);
            $category = mysqli_real_escape_string($db_connect, $_POST['category']);
            $feature = mysqli_real_escape_string($db_connect, $_POST['feature']);
            $productname = mysqli_real_escape_string($db_connect, $_POST['productName']);
            $formerprice = mysqli_real_escape_string($db_connect, $_POST['formerPrice']);
            $color = mysqli_real_escape_string($db_connect, $_POST['color']);
            $ratings = mysqli_real_escape_string($db_connect, $_POST['starRating']);
            $peopleratings = mysqli_real_escape_string($db_connect, $_POST['peopleRating']);
            $tag = mysqli_real_escape_string($db_connect, $_POST['tag']);
            $productdetails = mysqli_real_escape_string($db_connect, $_POST['productDetails']);

            $result =  "INSERT INTO allproduct (id, name, price, ratings, category, description, image, tag, color, formerprice, feature, peopleratings, productname, productdetails ) VALUES ( '$id','$name', '$price', '$ratings', '$category', '$description', '$image', '$tag', '$color', '$formerprice', '$feature', '$peopleratings', '$productname', '$productdetails' ) ";

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
