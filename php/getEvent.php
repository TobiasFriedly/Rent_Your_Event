<?php

require("config.php");
require("authenticate.php");

$sql = "

SELECT EV.ID, EV.name, EV.bild, EV.preis, EV.ort, EV.beschreibung, U.username, U.email, EV.timestamp
FROM event EV
INNER JOIN user U
ON EV.user = U.ID
ORDER BY EV.timestamp DESC;

";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $jsonArray = json_encode($array);

    print_r($jsonArray);
}
?>