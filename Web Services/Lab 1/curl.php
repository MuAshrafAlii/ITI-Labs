<?php
if(isset($_POST['city'])){

$appkey = "cd6966ae83bcefae7fa3c68e02265cbf";
define("__API_key", "&appid=${appkey}");
define("__API", "https://api.openweathermap.org/data/2.5/weather?id=");
$cityid = $_POST['city'];
$api = __API . $cityid . __API_key;

$ch = curl_init();
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_URL, $api);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
$data = curl_exec($ch);
curl_close($ch);

$data_arr = json_decode($data, true);

echo "<p>" . date("l g:i A") . "</p>";
echo "<p>" . date("jS F, Y") . "</p>";
echo "<p>" . $data_arr['weather'][0]['description'] . "</p>";
echo "<p>" . toC($data_arr['main']['temp_min']) . "°C " . toC($data_arr['main']['temp_max']) . "°C" . "</p>";
echo "<p>" . "Humidity: " . $data_arr['main']['humidity'] . " % </p>";
echo "<p>" . "Wind: " . $data_arr['wind']['speed'] . " Km/h </p>";

}

?>