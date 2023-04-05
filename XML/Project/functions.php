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

    foreach ($employees as $employee) {
        if($employee->getElementsByTagName('name')->item(0)->nodeValue === $employeeName) {
            return $employee;
        }
    }
}