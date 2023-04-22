<?php
session_start();

require 'functions.php';

if (!isset($_SESSION['login'])) {
    header('Location:login.php');
} else {
    $username = $_SESSION['username'];
    $password = $_SESSION['password'];
    $hakAses = $_SESSION['hak_akses'];
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Si Landas</title>
    <link rel="icon" href="img/icon.ico">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <?php require 'link.php' ?>
</head>

<body style="background-color: #F8F9FA;">
    <!-- Heading -->
    <center>
        <img src="img/logo.png" alt="" height="64px" width="64px" style="margin-top: 8px">
        <img src="img/LOGO_GERMAS_NORMAL.png" alt="" height="64px" width="128px" style="margin-top: 8px">
    </center>

    <?php if ($hakAses === 'sekdes') { ?>
        <a href="dashboard.php" style="right: 10px; top: 45px; position: absolute; border-radius: 0px;" class="btn-sm btn-primary noUnderline font-Form-Input"><img src="img/icon/dashboard.png" class="iconTable" style="margin-right: 5px;" alt="">Dashboard</a>
    <?php } ?>


    <a href="logout.php" style="right: 10px; top: 8px; position: absolute; border-radius: 0px; width: 100px; height: 30px;" class="btn-sm btn-danger noUnderline font-Form-Input"><img src="img/icon/logout.png" class="iconTable" style="margin-right: 5px;" alt="">Logout</a>


    <h3 align="center" class="font-Form" style="color:#4A5568; padding: 8px 0 0 0;">Welcome to SiLandas</h3>
    <p align="center" class="font-Form-Input" style="color:#4A5568; padding-bottom: 15px;">Kec. Karang Intan, Kab. Banjar, Prov. Kalimantan Selatan</p>

    <!-- Menu ITEM -->
    <div class="container">
        <!-- KIA -->
        <div class="card transisi" style="width: 18rem; float: left; margin: 10px 0px 0px 100px; border: 1px solid black; border-radius: 0px;">
            <img src="img/kia.jpg" style="border-radius: 0px;" class="card-img-top" alt="...">
            <div class="card-body" style="font-family: 'Roboto Slab', serif;">
                <h5 class="card-title font-Form-Input" align="center">KIA</h5>
                <hr>
                <a href="kia.php" class="btn btn-primary font-Form-Input" style="display: block;  background-color: #2a8476; border: 0px; border-radius: 0px;">Masuk</a>
            </div>
        </div>
        <!-- data stunting anak -->
        <div class="card transisi" style="width: 18rem; float: left; margin:10px 0px 0px 20px; border: 1px solid black; border-radius: 0px;">
            <img src="img/stunting.jpg" class="card-img-top" style="border-radius: 0px;" alt="...">
            <div class="card-body" style="font-family: 'Roboto Slab', serif;">
                <h5 class="card-title font-Form-Input" align="center">Data Pemantauan Anak</h5>
                <hr>
                <a href="stunting.php" class="btn btn-primary buttonAnimation font-Form-Input" style="display: block;  background-color: #2a8476; border: 0px; border-radius: 0px;" id="dataStuntingAnak">Masuk</a>
            </div>
        </div>
        <!-- data program ibu hamil -->
        <div class="card transisi mb-5" style="width: 18rem; float: left; margin: 10px 0px 0px 20px; border: 1px solid black; border-radius: 0px;">
            <img src="img/hamil.jpg" style="border-radius: 0px;" class="card-img-top" alt="...">
            <div class="card-body" style="font-family: 'Roboto Slab', serif;">
                <h5 class="card-title font-Form-Input" align="center">Data Pemantauan Ibu Hamil</h5>
                <hr>
                <span><a href="hamil.php" class="btn btn-primary font-Form-Input" style="display: block; background-color: #2a8476; border: 0px; border-radius: 0px;">Masuk</a></span>
            </div>
        </div>
        <!-- data statistik -->
        <?php if ($hakAses === 'sekdes') { ?>
            <div class="card transisi mb-5" style="width: 18rem; float: left; margin: -20px -270px 0px 100px; border: 1px solid black; border-radius: 0px;">
                <img src="img/chart.jpg" style="border-radius: 0px;" class="card-img-top" alt="...">
                <div class="card-body" style="font-family: 'Roboto Slab', serif;">
                    <h5 class="card-title font-Form-Input" align="center">Data Statistik</h5>
                    <hr>
                    <span><a href="statistik.php" class="btn btn-primary font-Form-Input" style="display: block; background-color: #2a8476; border: 0px; border-radius: 0px;">Masuk</a></span>
                </div>
            </div>
        <?php } ?>

        <!-- data statistik -->
        <?php if ($hakAses === 'sekdes') { ?>
            <div class="card transisi mb-5" style="width: 18rem; float: left; margin: -20px -290px 0px 100px; margin-left: 290px; border: 1px solid black; border-radius: 0px;">
                <img src="img/chart.jpg" style="border-radius: 0px;" class="card-img-top" alt="...">
                <div class="card-body" style="font-family: 'Roboto Slab', serif;">
                    <h5 class="card-title font-Form-Input" align="center">Makanan Tambahan Bayi</h5>
                    <hr>
                    <span><a href="tambahanMakanan.php" class="btn btn-primary font-Form-Input" style="display: block; background-color: #2a8476; border: 0px; border-radius: 0px;">Masuk</a></span>
                </div>
            </div>
        <?php } ?>

        <div class="clear"></div>
    </div>

    <?php
    require 'footer.php';
    ?>

    <script src="js/jquery.js">