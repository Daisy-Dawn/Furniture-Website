<?php
function generateUniqueProductID()
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
$id = generateUniqueProductID();
echo $id;
