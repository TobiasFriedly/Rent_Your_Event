<?php

$host = "localhost";
$user = "user";
$password = "password";
$dbname = "db";

$pdo = new PDO('mysql:host='. $host . '; dbname=' . $dbname . ';charset=utf8', $user, $password);
$pdo->exec("set names utf8");
?>