<?php

session_start();

$_SESSION = [];
session_unset();
session_destroy();

setcookie('dump', '', time() - 3600);
setcookie('nama', '', time() - 3600);


header('Location:login.php');
exit;
