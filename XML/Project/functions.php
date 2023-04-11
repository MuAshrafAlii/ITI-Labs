<?php

function createEmployee($formDetails, $xmlDocument)
{
    $root = $xmlDocument->documentElement;
    $employee = $xmlDocument->createElement('employee', ' ');

    $name = $xmlDocument->createElement('name', $formDetails['name']);
    $phone = $xmlDocument->createElement('phone', $formDetails['phone']);
    $address = $xmlDocument->createElement('address', $formDetails['address']);
    $email = $xmlDocument->createElement('email', $formDetails['email']);

    $employee->appendChild($name);
    $employee->appendChild($phone);
    $employee->appendChild($address);
    $employee->appendChild($email);

    $root->appendChild($employee);
}

function findEmployee($employeeName, $xmlDocument)
{
    $employees = $xmlDocument->getElementsByTagName('employee');
    $_SESSION['counter'] = 0;

    foreach ($employees as $employee) {
        if($employee->getElementsByTagName('name')->item(0)->nodeValue === $employeeName) {
            return $employee;
        }

        $_SESSION['counter']++;
    }
}

function updateEmployee($formDetails,$employee) {
    $employee->getElementsByTagName('name')->item(0)->nodeValue = $formDetails['name'];
    $employee->getElementsByTagName('phone')->item(0)->nodeValue = $formDetails['phone'];
    $employee->getElementsByTagName('address')->item(0)->nodeValue = $formDetails['address'];
    $employee->getElementsByTagName('email')->item(0)->nodeValue = $formDetails['email'];
}

function deleteEmployee($employee) {
    $employee->parentNode->removeChild($employee);
}

function displayEmployee($employee) {
    echo "Name: " . $employee->getElementsByTagName('name')->item(0)->nodeValue . "<br>";
    echo "Phone: " . $employee->getElementsByTagName('phone')->item(0)->nodeValue . "<br>";
    echo "Address: " . $employee->getElementsByTagName('address')->item(0)->nodeValue . "<br>";
    echo "Email: " . $employee->getElementsByTagName('email')->item(0)->nodeValue . "<br>";
}

function nextEmployee($xmlDocument) {
    $employees = $xmlDocument->getElementsByTagName('employee');
    if($_SESSION['counter'] >= count($employees)) {
        $_SESSION['counter'] = 0;
    }
    $_SESSION['counter']++;
    return $employees->item($_SESSION['counter'] - 1);
}

function prevEmployee($xmlDocument) {
    $employees = $xmlDocument->getElementsByTagName('employee');
    if($_SESSION['counter'] <= 0) {
        $_SESSION['counter'] = count($employees);
    }
    $_SESSION['counter']--;
    return $employees->item($_SESSION['counter']);
}