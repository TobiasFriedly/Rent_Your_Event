<?php

require('config.php');

$email = $_POST["email"];
$benutzername = $_POST["benutzername"];
$password = $_POST["password"];

$password = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO user (username, email, password) VALUES (:Username, :Email, :Password)";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute(array('Username' => $benutzername, 'Email' => $email, 'Password' => $password));

if ($erfolg) {

    print_r('Registrierung erfolgreich.');
} else {

    print_r($erfolg);
};

?>