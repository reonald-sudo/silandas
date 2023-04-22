<?php
session_start();

require 'functions.php';

// hitung jumlah tabel kia anak & ibu
$kiaAnak = mysqli_query($conn, "SELECT * FROM kia_anak");
$kiaIbu = mysqli_query($conn, "SELECT * FROM kia_hamil");
$hitungKiaAnak = mysqli_num_rows($kiaAnak);
$hitungKiaIbu = mysqli_num_rows($kiaIbu);
$totalKia = $hitungKiaAnak + $hitungKiaIbu;


// hitung jumlah tabel stunting
$stunting = mysqli_query($conn, "SELECT * FROM stunting");
$hitungStunting = mysqli_num_rows($stunting);


// hitung jumlah tabel hamil
$hamil = mysqli_query($conn, "SELECT * FROM hamil");
$hitungHamil = mysqli_num_rows($hamil);



?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Puskesmas</title>
    <?php require 'link.php' ?>
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: #1A374D;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style="color: white; font-family: 'Source Sans Pro', sans-serif;">SELAMAT DATANG TIM PUSKESMAS <b>| SiLandas</b></a>
        </div>
        <div class="d-flex">
            <img src="img/icon/mail.png" class="iconTable" style="margin-right: 20px;" alt="">
            <img src="img/icon/bell.png" class="iconTable" style="margin-right: 20px;" alt="">
            <img src="img/icon/zoom-in.png" class="iconTable" style="margin-right: 12px;" alt="">
        </div>
    </nav>

    <div class="row no-gutter mt-5">

        <!-- sidebar -->
        <div class="col-md-2 pr-3 mt-2 pt-3" style="background-color: #406882;">
            <ul class=" nav flex-column mb-5" style="margin-left: 10px;">
                <li class="nav-item">
                    <a class="nav-link active text-white" href="#"><img src="img/profil/admin.png" alt="" style="width: 35px; height: 35px; margin-right: 5px; font-family: 'Roboto', sans-serif;"> Nakes </a>
                    <hr class="bg-light mr-5">
                </li>
                <li class="nav-item">
                    <a class="nav-link active text-white" href="dashboardPuskesmas.php"><img src="img/icon/home-white.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Home</a>
                </li>
                <li class="nav-item" style="padding-bottom: 0px;">
                    <a class="nav-link active text-white" href="obatLogistik.php"><img src="img/icon/medicine-white.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Obat & Logistik</a>
                </li>
                <li class="nav-item" style="padding-bottom: 0px;">
                    <a class="nav-link active text-white" href="kpmVerified.php"><img src="img/icon/verified-white.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> KPM Verified</a>
                </li>
                <li class="nav-item" style="padding-bottom: 80px;">
                    <a class="nav-link active text-white" href="userDokterPuskemas.php"><img src="img/icon/stethoscope-white.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Data Dokter</a>
                </li>
                <!-- <li class="nav-item" style="padding-bottom: 0px;">
                    <a class="nav-link active text-white" href="userNakesPuskemas.php"><img src="img/icon/nurse-white.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Data Nakes</a>
                </li> -->
                <!-- <li class="nav-item" style="margin-left: 16px; margin-bottom: 0px; margin-top: -20px; padding-bottom: 5px;">
                    <div>Test</div>
                </li> -->
                <li class="nav-item" style="padding-top: 0px;">
                    <hr class="bg-light mr-5">
                    <a class="nav-link text-white" href="logout.php"><img src="img/icon/exit-white.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Logout</a>
                </li>
            </ul>
        </div>

        <!-- menu utama -->
        <div class="col-md-10 pt-4 p-4 mt-3" style="background-color: #f8f9fa;">
            <h3 class="heading-Page">
                <marquee direction="left" scrollamount="2" behavior="alternate"> SiLandas | Tim Puskesmas - Home </marquee>
                <br style="margin-bottom: 1px;">
                <hr>
            </h3>

            <!-- banner slider -->
            <div id="carouselExampleCaptions" style="width: 100%; position: relative; padding-left: 3px;" class="carousel container slide data-bs-ride=" false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img/balai.JPG" style="margin-top: -240px;" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Balai Desa Sungai Landas</h5>
                            <p>Renovasi dan inovasi telah pembakal kita lakukan terhadap balai desa sungai landas</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/blt.jpeg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Pencairan Dana BLT</h5>
                            <p>Pencairan dana blt klaster ke 4 desa sungai landas</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/pasar.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Pasar murah oleh ibu-ibu PKK</h5>
                            <p>Pengadaan pasar murah untuk menggerakan ekonomi warga</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <!-- cards -->
            <div class="row text-white">

                <!-- KPM RESIKO IBU HAMIL -->
                <div class="card ml-3 mt-3" style="width: 21rem; margin-left: 13px; background-color: #af2459;">
                    <div class="card-body">
                        <div class="card-body-icon" style="top: 60px;">
                            <img src="img/icon/medicines.png" style="width: 85px; opacity: 0.4;" alt="">
                        </div>
                        <h5 class="card-title font-Form">KPM IBU DENGAN RESIKO</h5>
                        <div class="display-4 font-Form" style="font-weight: bold;">
                            <?= $totalKia ?>
                        </div>
                        <a href="kia.php" class="text-white noUnderline font-Form-Input">
                            <p class="card-text">Lihat Detail <img src="img/icon/fast-forward.png" class="iconTable" alt="" style="margin-left: 5px;"></p>
                        </a>
                    </div>
                </div>

                <div class="card ml-3 mt-3" style="width: 21rem; margin-left: 20px; background-color: #aa1431;">
                    <div class="card-body">
                        <div class="card-body-icon" style="top: 60px;">
                            <img src="img/icon/medicines.png" style="width: 85px; opacity: 0.4;" alt="">
                        </div>
                        <h5 class="card-title font-Form">KPM ANAK DENGAN RESIKO</h5>
                        <div class="display-4 font-Form" style="font-weight: bold;">
                            <?= $totalKia ?>
                        </div>
                        <a href="kia.php" class="text-white noUnderline font-Form-Input">
                            <p class="card-text">Lihat Detail <img src="img/icon/fast-forward.png" class="iconTable" alt="" style="margin-left: 5px;"></p>
                        </a>
                    </div>
                </div>
                <br>



            </div>
        </div>
</body>

</html>