<?php
session_start();
require_once('./vendor/autoload.php');


$counter = new Counter();
$counter -> increment_and_update();
$count = $counter -> get_count();

echo "Count = $count";

?>

    