<?php
function get_product_id(){
    $url = $_SERVER['REQUEST_URI'];
    $url = explode('/', $url);

    if (isset($url[4]) && $url[4] !== 'items') {
        echo "ERROR 404 Not Found";
        die();
    }
    
    $product_id = null;
    
    if (isset($url[5])) {
        $product_id = intval($url[5]);
       return $product_id;
    }  
}

function methodHandler($db, $product_id){
    
    $method = $_SERVER["REQUEST_METHOD"];
    
    switch($method){

        case 'GET':
            if ($product_id) {
                if($db->search("id", $product_id)){
                    $db = new MySQLHandler("products");
                    $dbConnector = $db->connect();
                    $response =  $db->get_record_by_id($product_id);
                    echo json_encode($response);
                }else{
                    $response = ["Error" => "Not Found"];
                    http_response_code(404); 
                }
            }else{
                $response = $db->get_data();
            }
            echo json_encode($response);
            break;


        
        case 'POST':
            $formInput = json_decode(file_get_contents('php://input'), true);
            $response = $db->save($formInput);
            echo json_encode($response);
            break;


        case 'PUT':
            if ($product_id) {
                if($db->search("id", $product_id)){
                    $db = new MySQLHandler("products");
                    $dbConnector = $db->connect();
                    $formInput = json_decode(file_get_contents('php://input'), true);
                    $response = $db->formInput($update,$product_id);
                }else{
                    $response = ["Error" => "Not Found"];
                    http_response_code(404);
                }
                echo json_encode($response);
            }
            break;
            
        
            
        case 'DELETE':
            if ($product_id) {
                if($db->search("id", $product_id)){
                    $db = new MySQLHandler("products");
                    $dbConnector = $db->connect();
                    $response = $db->delete($product_id);
                }else{
                    $response = ["Error" => "Not Found"];
                    http_response_code(404); 
                }
                echo json_encode($response);
            }
            break;

       

        default:
            $response = ["Error" => "Request Method Not Supported"];
            http_response_code(405);
            echo json_encode($response);
            break;
    }
    
}