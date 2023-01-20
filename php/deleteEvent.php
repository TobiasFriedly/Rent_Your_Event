<?php

require_once('config.php');
require_once('authenticate.php');

$userID = $_POST["userID"];
$eventID = $_POST["eventID"];

$sql = "DELETE FROM event WHERE user = ? AND ID = ?";
$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute([$userID, $eventID]);

if ($erfolg) {

    echo "Dein Event wurde gelöscht!";

} else {

    print_r($erfolg);
};

?>