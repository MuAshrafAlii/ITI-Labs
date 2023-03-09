<?php
if (file_exists("log.txt")) {
    $imported_content = file("log.txt");
    foreach ($imported_content as $ic) {
        $data = explode(",", $ic);
        echo "Visit Date: " . $data[0];
        echo "<br />IP Address: " . $data[1];
        echo "<br />Email: " . $data[2];
        echo "<br />Name: " . $data[3];
        echo "<hr />";
    }
}


?>
