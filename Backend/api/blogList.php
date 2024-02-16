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
            $allProduct = mysqli_query($db_connect, "SELECT * FROM bloglist ORDER BY created_at DESC");
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
                        'date' => $row['date'],
                        'feature' => $row['features'],
                        'bannerDescription' => $row['bannerdescription'],
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
            function generateUniqueBlogID()
            {
                // Prefix for the product ID
                $prefix = 'BLOG';
                // Random component (you can adjust the length as needed)
                $random = mt_rand(1000, 9999);
                // Combine the components to create a unique ID
                $ID = $prefix . $random;
                return $ID;
            }
            // Example usage
            $id = generateUniqueBlogID();

            $category = mysqli_real_escape_string($db_connect, $_POST['category']);
            $image = $_FILES['image']['name'];
            $image_temp = $_FILES['image']['tmp_name'];
            $destination = $_SERVER['DOCUMENT_ROOT'] . '/reactApiPhp/images' . "/" . $image;
            $date = mysqli_real_escape_string($db_connect, $_POST['date']);
            $Bdescription = mysqli_real_escape_string($db_connect, $_POST['bannerdescription']);
            $author = mysqli_real_escape_string($db_connect, $_POST['author']);
            $title = mysqli_real_escape_string($db_connect, $_POST['title']);
            $description = mysqli_real_escape_string($db_connect, $_POST['description']);
            $feature = mysqli_real_escape_string($db_connect, $_POST['features']);








            // $result = mysqli_query($db_connect, "INSERT INTO productlist (title, price, ratings, category, description, image, status) 
            // VALUES ('$title','$price','$ratings','$category','$description','$image','1') ");
            // tag, productName, productDetails, color, formerPrice, peopleRating, feature,
            //  '$tag', '$productName', '$productDetails', '$color', '$formerPrice', '$peopleRatings', '$feature',
            $result =  "INSERT INTO bloglist (id, category, image, date, bannerdescription, author, title, description, features  ) VALUES ('$id', '$category', '$image', '$date', '$Bdescription', '$author',  '$title',  '$description'  ) ";

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
