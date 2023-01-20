<?php

require('config.php');

$email = $_POST["email"];
$password = $_POST["password"];

$sql = "SELECT * FROM user WHERE email = '$email'";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $anzahlResultate = count($array);

    if ($anzahlResultate == 1) {

        $dbPassword = $array[0]['password'];
        $userID = $array[0]['ID'];

        pruefepassword($password, $dbPassword, $userID);
    } else {

        sendeAntwort('Diese E-Mail Adresse existiert nicht.', 0, 0);
    }
}

function pruefepassword($userPassword, $dbPassword, $userID)
{

    if (password_verify($userPassword, $dbPassword)) {

        erstelleToken($userID);

    } else {

        sendeAntwort('Falsches Passwort!', 0, 0);


    }
}

function erstelleToken($userID)
{
    require('config.php');

    $token = generateRandomString(42);

    $sql = "INSERT INTO session (User_ID, Token) VALUES (:User_ID, :Token);";

    $stmt = $pdo->prepare($sql);

    $erfolg = $stmt->execute(array('User_ID' => $userID, 'Token' => $token));
 
    if ($erfolg) {

        sendeAntwort('Login erfolgreich.', $userID, $token);

    } else {

        print_r($erfolg);

        sendeAntwort('Datenbankfehler: ' . $erfolg, 0, 0);

    };
}

function generateRandomString($length)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function sendeAntwort($nachricht, $userID, $token){

    $antwort = [$nachricht, $userID, $token];

    $antwort = json_encode($antwort);

    print($antwort);

}
?>