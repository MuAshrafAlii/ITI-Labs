<?php
require("./vendor/autoload.php");
if(isset($_POST['city'])){
    $cityid = $_POST['city'];
    $api = __API . $cityid . __API_key;
    $client = new \GuzzleHttp\Client();

    $response = $client->request("GET",$api);

    $returnedDataArr = json_decode($response->getBody(),true);


    showResult($returnedDataArr);
}
?>