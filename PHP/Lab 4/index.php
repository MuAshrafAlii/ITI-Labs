<?php
require_once("vendor/autoload.php");
session_start();
$db=new MySQLHandler("items");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glasses Shop</title>
</head>
<body>
    
    <?php
        if(isset($_GET["id"]) && is_numeric($_GET["id"])){
            require_once("views/single.php");
        }else{
            require_once("views/all.php");
        }
    ?>

</body>
</html>