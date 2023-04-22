<?php

session_start();

if (!isset($_SESSION['login'])) {
    header('Location:login.php');
}

require 'functions.php';

// PAGINATION CONFIGURATION
$jumlahDataTampil = 6;
$jumlahData = count(query("SELECT * FROM hamil"));
$jumlahHamalan = ceil($jumlahData / $jumlahDataTampil);
$halamanAktif = (isset($_GET["page"])) ? $_GET["page"] : 1;
$awalData = ($jumlahDataTampil * $halamanAktif) - $jumlahDataTampil;

$hamil = query("SELECT * FROM hamil LIMIT $awalData,$jumlahDataTampil");

// TOMBOL CARI DI TEKAN
if (isset($_POST["cari"])) {
    $hamil = cariHamil($_POST["keyword"]);
}

// TOMBOL REKAP DITEKAN
if (isset($_POST["rekap_data"])) {

    if (rekapDataHamil($_POST) > 0) {

        hapusDataHamil("DELETE FROM hamil");

        echo "
            <script>
                alert ('Data Berhasil di Rekap !');
                document.location.href = 'hamil.php';
            </script>
        ";
    } else {
        echo "
            <script>
                alert ('Data Gagal di Rekap !');
            </script>
        ";
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<div id="wrap">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Silandas | Statistik KPM</title>
        <?php require 'link.php' ?>
    </head>

    <body style="background-color: #F8F9FA;">
        <!-- Heading -->
        <center>
            <img src="img/logo.png" alt="" height="64px" width="64px" style="margin-top: 8px">
            <img src="img/LOGO_GERMAS_NORMAL.png" alt="" height="64px" width="128px" style="margin-top: 8px">
        </center>
        <h3 align="center" class="font-Form" style="color:#4A5568; padding: 8px 0 0 0;">Data Grafik Statistik KPM Desa Sungai Landas</h3>
        <p align="center" class="font-Form-Input" style="color:#4A5568; padding-bottom: 15px;">Kec. Karang Intan, Kab. Banjar, Prov. Kalimantan Selatan</p>

        <!-- MENU ITEM -->
        <div class="container" style="background-color: #F8F9FA;">
            <!-- kia anak -->
            <div class="card transisi" style="width: 18rem; float: left; margin: 5px 0px 130px 257px; border: 1px solid black; border-radius: 0px;">
                <img src="img/statistik anak.jpg" style="border-radius: 0px;" class="card-img-top" alt="...">
                <div class="card-body" style="font-family: 'Roboto Slab', serif;">
                    <h5 class="card-title font-Form" align="center">GRAFIK ANAK</h5>
                    <hr>
                    <a href="statistikAnak.php" class="btn btn-primary font-Form-Input" style="display: block; background-color: #2a8476; border: 0px; border-radius: 0px;">Masuk</a>
                </div>
            </div>
            <!-- kia ibu -->
            <div class="card transisi" style="width: 18rem; float: left; margin:5px 0px 0px 20px; border: 1px solid black; border-radius: 0px;">
                <img src="img/statistik ibu hamil.jpg" class="card-img-top" style="border-radius: 0px;" alt="...">
                <div class="card-body" style="font-family: 'Roboto Slab', serif;">
                    <h5 class="card-title font-Form" align="center">GRAFIK IBU HAMIL</h5>
                    <hr>
                    <a href="statistikIbu.php" class="btn btn-primary font-Form-Input buttonAnimation" style="display: block; background-color: #2a8476; border: 0px; border-radius: 0px;" id="dataStuntingAnak">Masuk</a>
                </div>
            </div>
        </div>
        <?php require 'simpleFooter.php' ?>


        <script src="js/jquery.js"></script>
        <script src="js/hamil.js"></script>
        <script src="sweetalert2-11.3.4/package/dist/sweetalert2.all.min.js"></script>

    </body>
</div>

</html>