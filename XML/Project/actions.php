<?php
$xmlDocument = new DOMDocument();
$xmlDocument->load("employee.xml");


if(isset($_POST['action'])) {

    switch($_POST['action']) {
        case 'insert':
            createEmployee($_POST,$xmlDocument);
            $xmlDocument->save("employee.xml");
            break;

            case 'search':
                $employee = findEmployee($_POST['name'],$xmlDocument);
                echo "Name: " . $employee->getElementsByTagName('name')->item(0)->nodeValue . "<br>";
                echo "Phone: " . $employee->getElementsByTagName('phone')->item(0)->nodeValue . "<br>";
                echo "Address: " . $employee->getElementsByTagName('address')->item(0)->nodeValue . "<br>";
                echo "Email: " . $employee->getElementsByTagName('email')->item(0)->nodeValue . "<br>";
                break;
    }
}

?>