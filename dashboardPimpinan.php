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
    <title>Dashboard Pambakal</title>
    <?php require 'link.php' ?>
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: #1A374D;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style="color: white; font-family: 'Source Sans Pro', sans-serif;">SELAMAT DATANG PAMBAKAL<b> | SiLandas</b></a>
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
                    <a class="nav-link active text-white" href="#"><img src="img/profil/pambakal.png" alt="" style="width: 35px; height: 35px; margin-right: 5px; font-family: 'Roboto', sans-serif;"> Pambakal</a>
                    <hr class="bg-light mr-5">
                </li>
                <li class="nav-item">
                    <a class="nav-link active text-white" href="dashboardPimpinan.php"><img src="img/icon/home-white.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Home</a>
                </li>
                <li class="nav-item" style="padding-top: 0px;">
                    <hr class="bg-light mr-5">
                    <a class="nav-link text-white" href="logout.php"><img src="img/icon/exit-white.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Logout</a>
                </li>
                <li>
                    <br><br><br><br><br><br><br><br><br><br>
                </li>
            </ul>
        </div>

        <!-- menu utama -->
        <div class="col-md-10 pt-4 p-4 mt-2" style="background-color: #f8f9fa;">
            <h3 class="heading-Page">
                <marquee direction="left" scrollamount="2" behavior="alternate"> SiLandas | Pambakal - Home </marquee>
                <br style="margin-bottom: 10px;">
                <hr>
            </h3>

            <!-- banner slider -->
            <div id="carouselExampleCaptions" style="width: 100%; position: relative; padding-left: 8px;" class="carousel container slide data-bs-ride=" false">
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

                <!-- LAPORAN KPM ANAK -->

                <div class="card ml-3 mt-3" style="width: 21rem; margin-left: 20px; background-color: #2f4858;">
                    <div class="card-body">
                        <div class="card-body-icon" style="top: 60px;">
                            <img src="img/icon/xlsx-file-format-extension.png" style="width: 75px; opacity: 0.4;" alt="">
                        </div>
                        <div class="card-body-icon" style="top: 60px; right: 100px;">
                            <img src="img/icon/pdfFormat.png" style="width: 75px; opacity: 0.4;" alt="">
                        </div>
                        <h5 class="card-title font-Form">Laporan Rekapitualasi Bulanan KPM Anak</h5>
                        <div class="display-4 font-Form" style="font-weight: bold;">
                            <br>
                        </div>

                        <a href="cetakRekapStunting.php" target="blank" class="text-white noUnderline font-Form-Input" style="display: inline-block;">
                            <p class="card-text">PDF<img src="img/icon/fast-forward.png" class="iconTable" alt="" style="margin-left: 5px; height: 14px;"></p>
                        </a>
                        <a href="excelStunting.php" target="blank" class="text-white noUnderline font-Form-Input" style="display: inline-block; margin-left: 10px;">
                            <p class="card-text">XLSX<img src="img/icon/fast-forward.png" class="iconTable" alt="" style="margin-left: 5px; height: 14px;"></p>
                        </a>


                    </div>
                </div>
                <br>

                <!-- LAPORAN KPM IBU HAMIL -->
                <div class="card mt-3" style="width: 21rem; margin-left: 10px; background-color: #255b6d;">
                    <div class="card-body">
                        <div class="card-body-icon" style="top: 70px;">
                            <img src="img/icon/xlsx-file-format-extension.png" style="width: 75px; opacity: 0.4;" alt="">
                        </div>
                        <div class="card-body-icon" style="top: 70px; right: 100px;">
                            <img src="img/icon/pdfFormat.png" style="width: 75px; opacity: 0.4;" alt="">
                        </div>
                        <h5 class="card-title font-Form">Laporan Rekapitualasi Bulanan KPM Ibu Hamil</h5>
                        <div class="display-4 font-Form" style="font-weight: bold;">
                            <br>
                        </div>
                        <a href="cetakRekapHamil.php" target="blank" class="text-white noUnderline font-Form-Input" style="display: inline-block;">
                            <p class="card-text">PDF<img src="img/icon/fast-forward.png" class="iconTable" alt="" style="margin-left: 5px; height: 14px;"></p>
                        </a>
                        <a href="excelHamil.php" target="blank" class="text-white noUnderline font-Form-Input" style="display: inline-block; margin-left: 10px;">
                            <p class="card-text">XLSX<img src="img/icon/fast-forward.png" class="iconTable" alt="" style="margin-left: 5px; height: 14px;"></p>
                        </a>
                    </div>
                </div>
                <br>

                <!-- PERNYATAAN KPM ANAK -->
                <div class="card mt-3" style="width: 21rem; margin-left: 10px; background-color: #096f7e;">
                    <div class="card-body">
                        <div class="card-body-icon" style="top: 70px;">
                            <img src=" img/icon/pdfFormat.png" style="width: 75px; opacity: 0.4;" alt="">
                        </div>
                        <h5 class="card-title font-Form">Laporan Surat Pernyataan KPM Anak</h5>
                        <div class="display-4 font-Form" style="font-weight: bold;">
                            <br>
                        </div>
                        <a href="LaporanKpmAnak.php" class="text-white noUnderline">
                            <p class="card-text font-Form-Input">PDF<img src="img/icon/fast-forward.png" class="iconTable" alt="" style="margin-left: 5px;"></p>
                        </a>
                    </div>
                </div>

                <!-- TAHUNAN KPM ANAK DAN IBU HAMIL -->
                <div class="card mt-4" style="width: 21rem; margin-left: 20px; background-color: #008388;">
                    <div class="card-body">
                        <div class="card-body-icon" style="top: 65px;">
                            <img src="img/icon/xlsx-file-format-extension.png" style="width: 75px; opacity: 0.4;" alt="">
                        </div>
                        <div class="card-body-icon" style="top: 65px; right: 100px;">
                            <img src="img/icon/pdfFormat.png" style="width: 75px; opacity: 0.4;" alt="">
                        </div>
                        <h5 class="card-title font-Form">Laporan Rekapitualasi Tahunan KPM Anak & Ibu Hamil</h5>
                        <div class="display-4 font-Form" style="font-weight: bold;">
                            <br>
                        </div>
                        <a href="cetakRekapDataMasterStunting.php" target="blank" class="text-white noUnderline" style="display: inline-block;">
                            <p class="card-text font-Form-Input">PDF Anak <img src="img/icon/fast-forward.png" class="iconTable" alt="" style="margin-left: 5px;"></p>
                        </a>
                        <a href="cetakRekapDataMasterHamil.php" target="blank" class="text-white noUnderline" style="display: inline-block;">
                            <p class="card-text font-Form-Input">PDF Hamil <img src="img/icon/fast-forward.png" class="iconTable" alt="" style="margin-left: 5px;"></p>
                        </a>
                        <a href="excelDataMasterStunting.php" target="blank" class="text-white noUnderline" style="display: inline-block;">
                            <p class="card-text font-Form-Input">XLSX <img src="img/icon/fast-forward.png" class="iconTable" alt="" style="margin-left: 5px;"></p>
                        </a>
                    </div>
                </div>

                <!-- PERNYATAAN KPM IBU HAMIL -->
                <div class="card mt-4" style="width: 21rem; margin-left: 35px; background-color: #00978c;">
                    <div class="card-body">
                        <div class="card-body-icon" style="top: 70px;">
                            <img src="img/icon/pdfFormat.png" style="width: 75px; opacity: 0.4;" alt="">
                        </div>
                        <h5 class="card-title font-Form">Laporan Surat Pernyataan KPM Ibu Hamil</h5>
                        <div class="display-4 font-Form" style="font-weight: bold;">
                            <br>
                        </div>
                        <a href="LaporanKpmIbuHamil.php" class="text-white noUnderline">
                            <p class="card-text font-Form-Input">PDF<img src="img/icon/fast-forward.png" class="iconTable" alt="" style="margin-left: 5px;"></p>
                        </a>
                    </div>
                </div>

                <!-- PERNYATAAN GRAFIK Bulanan Anak & Ibu Hamil -->
                <div class="card mt-4" style="width: 21rem; margin-left: 35px; background-color: #00978c;">
                    <div class="card-body">
                        <div class="card-body-icon" style="top: 70px;">
                            <img src="img/icon/pdfFormat.png" style="width: 75px; opacity: 0.4;" alt="">
                        </div>
                        <h5 class="card-title font-Form">Pernyataan Grafik Bulanan Anak & Ibu Hamil</h5>
                        <div class="display-4 font-Form" style="font-weight: bold;">
                            <br>
                        </div>
                        <a href="cetakGrafikStuntingBulanan.php" class="text-white noUnderline" style="display: inline-block;" target="blank">
                            <p class="card-text font-Form-Input">PDF Anak<img src="img/icon/fast-forward.png" class="iconTable" alt="" style="margin-left: 5px;"></p>
                        </a>
                        <a href="cetakGrafikHamilBulanan.php" class="text-white noUnderline" style="display: inline-block;" target="blank">
                            <p class="card-text font-Form-Input">PDF Ibu Hamil<img src="img/icon/fast-forward.png" class="iconTable" alt="" style="margin-left: 5px;"></p>
                        </a>
                    </div>
                </div>


                <!-- PERNYATAAN GRAFIK Tahunan Anak & Ibu Hamil -->
                <div class="card mt-4" style="width: 21rem; margin-left: 20px; background-color: #00978c;">
                    <div class="card-body">
                        <div class="card-body-icon" style="top: 70px;">
                            <img src="img/icon/pdfFormat.png" style="width: 75px; opacity: 0.4;" alt="">
                        </div>
                        <h5 class="card-title font-Form">Pernyataan Grafik Tahunan Anak & Ibu Hamil</h5>
                        <div class="display-4 font-Form" style="font-weight: bold;">
                            <br>
                        </div>
                        <a href="cetakGrafikStuntingTahunan.php" class="text-white noUnderline" style="display: inline-block;" target="blank">
                            <p class="card-text font-Form-Input">PDF Anak<img src="img/icon/fast-forward.png" class="iconTable" alt="" style="margin-left: 5px;"></p>
                        </a>
                        <a href="cetakGrafikHamilTahunan.php" class="text-white noUnderline" style="display: inline-block;" target="blank">
                            <p class="card-text font-Form-Input">PDF Ibu Hamil<img src="img/icon/fast-forward.png" class="iconTable" alt="" style="margin-left: 5px;"></p>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</body>

</html>