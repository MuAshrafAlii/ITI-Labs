<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    if ((empty($name)) || (empty($email)) || (empty($message))) {
        echo "<p class='error'>Name, Email & Message are required</p>";
    } else {
        if ((strlen($name) > MAX_NAME_LENGTH)) {
            echo "<p class='error'>Name Must be less than 100 Chars.</p>";
        } else if ((!filter_var($email, FILTER_VALIDATE_EMAIL))) {
            echo "<p class='error'>Email is not vaild.</p>";
        } else if ((strlen($message) > MAX_MESSAGE_LENGTH)) {
            echo "<p class='error'>Message Must be less 225 Chars.</p>";
        } else {
            echo THANKS_MESSAGE . "<b>Name: </b>" . $name . "<br><b>Email: </b>" . $email . "<br><b>Message: </b>" . $message;

            $fp = fopen("log.txt", "a+");
            fwrite($fp, date("F j Y g:i a") . "," . $_SERVER['REMOTE_ADDR'] . "," . $email . "," . $name."\n");
            fclose($fp);

            die;
        }
    }

    function clearBtn() {
        $name = "";
        $email = "";
        $message = "";
    }
}

?>