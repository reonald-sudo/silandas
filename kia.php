<?php
?>

<head>
    <title>Si Landas KIA</title>
    <link rel="icon" href="img/icon.ico">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <?php require 'link.php' ?>
</head>

<body style="background-color: #F8f9fa;">
    <!-- Heading -->
    <center>
        <img src="img/logo.png" alt="" height="64px" width="64px" style="margin-top: 8px">
        <img src="img/LOGO_GERMAS_NORMAL.png" alt="" height="64px" width="128px" style="margin-top: 8px">
    </center>

    <h3 align="center" class="font-Form" style="color:#4A5568; padding: 8px 0 0 0;">Data KIA Silandas</h3>
    <p align="center" class="font-Form-Input" style="color:#4A5568; padding-bottom: 15px;">Kec. Karang Intan, Kab. Banjar, Prov. Kalimantan Selatan</p>

    <!-- MENU ITEM -->
    <div class="container" style="background-color: #F8F9FA;">
        <!-- kia anak -->
        <div class="card transisi" style="width: 14rem; float: left; margin: 5px 0px 130px 320px; border: 1px solid black; border-radius: 0px;">
            <img src="img/kia anak.jpg" style="border-radius: 0px;" class="card-img-top" alt="...">
            <div class="card-body" style="font-family: 'Roboto Slab', serif;">
                <h5 class="card-title font-Form" align="center">KIA ANAK</h5>
                <hr>
                <a href="kiaAnak.php" class="btn btn-primary font-Form-Input" style="display: block; background-color: #2a8476; border: 0px; border-radius: 0px;">Masuk</a>
            </div>
        </div>
        <!-- kia ibu -->
        <div class="card transisi" style="width: 14rem; float: left; margin:5px 0px 0px 20px; border: 1px solid black; border-radius: 0px;">
            <img src="img/kia ibu.jpg" class="card-img-top" style="border-radius: 0px;" alt="...">
            <div class="card-body" style="font-family: 'Roboto Slab', serif;">
                <h5 class="card-title font-Form" align="center">KIA IBU</h5>
                <hr>
                <a href="kiaIbu.php" class="btn btn-primary font-Form-Input buttonAnimation" style="display: block; background-color: #2a8476; border: 0px; border-radius: 0px;" id="dataStuntingAnak">Masuk</a>
            </div>
        </div>
    </div>
    <?php require 'simpleFooter.php' ?>
</body>