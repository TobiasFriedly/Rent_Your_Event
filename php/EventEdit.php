<?php

require_once('config.php');
require_once('authenticate.php');

$userID = $_POST["userID"];
$name = $_POST["name"];
$preis = $_POST["preis"];
$beschreibung = $_POST["beschreibung"];
$ort = $_POST["ort"];


$bild = $_POST["bild"];

$eventID = $_POST["eventID"];


$sql = "UPDATE event SET name=?, bild=?, preis=?, ort=?, beschreibung=? WHERE user=?";
$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute([$name, $bild, $preis, $ort, $beschreibung, $userID]);

if ($erfolg) {

    print_r("Dein Event wurde aktualisiert.");

} else {

    print_r($erfolg);

};

