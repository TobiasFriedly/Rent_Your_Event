<?php

require("config.php");

deleteSessions();

$userID = $_SERVER["PHP_AUTH_USER"];
$token = $_SERVER["PHP_AUTH_PW"];

$sql = "
SELECT * 
FROM session 
WHERE User_ID = '$userID' 
AND Token = '$token' 
AND timestamp > (NOW() - INTERVAL 2 HOUR)";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $results = $stmt->fetchAll();

    $sitzungsID = $results[0]['ID'];

    $anzahlResultate = count($results);

    if ($anzahlResultate == 1) {

        updateSession($sitzungsID);
    } else {

        exit(http_response_code(401));
    }

}

function updateSession($sitzungsID)
{
    require('config.php');

    $sql = "UPDATE session SET timestamp = now() WHERE ID=?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$sitzungsID]);
}

function deleteSessions()
{
    require('config.php');

    $sql = " DELETE FROM session WHERE timestamp < (NOW() - INTERVAL 2 HOUR);";

    $stmt = $pdo->prepare($sql);
    $stmt->execute();

}
?>