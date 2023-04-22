<?php

require 'link.php';
require 'functions.php';

$bulan = date('m');
$tahun = date('Y');

function bulan($text)
{
    if ($text == "1") return "Januari";
    if ($text == "2") return "Februari";
    if ($text == "3") return "Maret";
    if ($text == "4") return "April";
    if ($text == "5") return "Mei";
    if ($text == "6") return "Juni";
    if ($text == "7") return "Juli";
    if ($text == "8") return "Agustus";
    if ($text == "9") return "September";
    if ($text == "10") return "Oktober";
    if ($text == "11") return "November";
    if ($text == "12") return "Desember";
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Admin</title>
    <?php require 'link.php' ?>
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: #1A374D;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style="color: white;">SELAMAT DATANG ADMIN <b>| SiLandas</b></a>

            <div class="d-flex">
                <form>
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                </form>
            </div>
        </div>
        </div>
    </nav>

    <div class="row no-gutter mt-5">

        <!-- sidebar -->
        <div class="col-md-2 pr-3 mt-2 pt-4" style="background-color: #406882;">
            <ul class=" nav flex-column mb-5" style="margin-left: 3px;">
                <li class="nav-item">
                    <a class="nav-link active text-white" href="#"><img src="img/icon/user2.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Admin</a>
                    <hr class="bg-light mr-5" style="margin-left: 5px;">
                </li>
                <li class="nav-item">
                    <a class="nav-link active text-white" href="dashboard.php"><img src="img/icon/dashboard.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active text-white" href="index.php"><img src="img/icon/silandas.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> SiLandas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="user.php"><img src="img/icon/user.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Data User</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="pegawai.php"><img src="img/icon/officer.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Data Pegawai</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="master.php"><img src="img/icon/database1.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Data Master</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#"><img src="img/icon/logout.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Logout</a>
                </li>
            </ul>
        </div>

        <!-- menu utama -->
        <div class="col-md-10 pt-4 p-4 mt-3">
            <h3>
                <img src="img/icon/database_black.png" alt="" style="width: 27px; height: 27px; margin-bottom: 5px; margin-right: 5px;"> DATA MASTER > DATA REKAP KPM HAMIL
                <hr>
            </h3>


            <div class="row text-white">
            </div>
        </div>