<?php

require('config.php');
require('authenticate.php');

$user =  $_POST["user"];

$name = $_POST["name"];
$preis = $_POST["preis"];
$bild = $_POST["bild"];
$beschreibung = $_POST["beschreibung"];
$ort = $_POST["ort"];


$sql = "INSERT INTO event (name, bild, preis, ort, beschreibung, user) VALUES (:Name, :Bild, :Preis, :Ort, :Beschreibung, :User)";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute(array('Name' => $name, 'Bild' => $bild, 'Preis' => $preis, 'Ort' => $ort, 'Beschreibung' => $beschreibung, 'User' => $user ));

if ($erfolg) {

    $letzteID = $pdo->lastInsertId();
    print_r("Dein Event wurde erstellt!");

} else {

    print_r($erfolg);
};

?>