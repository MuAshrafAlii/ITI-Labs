<?php 
require_once("./config.php");
require_once("./functions.php");
require_once("./MySQLHandler.php");

$db = new MySQLHandler("products");
$dbConnector = $db->connect();

if($dbConnector){
    $product_id = get_product_id(); 
    methodHandler($db, $product_id);
}
else{
    $response = ["error" => "database Not connected."];
    http_response_code(500);
    header('Content-Type: application/json');
}

?>

