<?php

$allCitiesArr = json_decode(file_get_contents("./assets/city.list.json"),true);
$egyptian_cities = [];

foreach($allCitiesArr as $city) {
    if($city['country'] == "EG") {
        $egyptian_cities[] = $city;
    }
}


function toC($f) {
    $c = (($f-32)*5)/9;
    return number_format($c, 2, '.', '' );
}


function showResult($arr) {
    echo "<p>" . date("l g:i A") . "</p>";
    echo "<p>" . date("jS F, Y") . "</p>";
    echo "<p>" . $arr['weather'][0]['description'] . "</p>";
    echo "<p>" . toC($arr['main']['temp_min']) . "°C " . toC($arr['main']['temp_max']) . "°C" . "</p>";
    echo "<p>" . "Humidity: " . $arr['main']['humidity'] . " % </p>";
    echo "<p>" . "Wind: " . $arr['wind']['speed'] . " Km/h </p>";
}
?>