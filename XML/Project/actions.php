<?php
session_start();
$_SESSION['counter'] = isset($_SESSION['counter']) ? $_SESSION['counter'] : 0;
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
            displayEmployee($employee);
            break;

        case 'delete':
            $employee = findEmployee($_POST['name'],$xmlDocument);
            deleteEmployee($employee);
            $xmlDocument->save("employee.xml");
            break;

        case 'update':
            $employee = findEmployee($_POST['name'],$xmlDocument);
            updateEmployee($_POST,$employee);
            $xmlDocument->save("employee.xml");

            displayEmployee($employee);
            break;

        case "prev":
            displayEmployee(prevEmployee($xmlDocument));
            break;

        case "next":
            displayEmployee(nextEmployee($xmlDocument));
            break;
    }
}

?>