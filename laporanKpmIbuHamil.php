<?php
session_start();

require 'functions.php';

// PAGINATION CONFIGURATION
$jumlahDataTampil = 6;
$jumlahData = count(query("SELECT * FROM hamil"));
$jumlahHamalan = ceil($jumlahData / $jumlahDataTampil);
$halamanAktif = (isset($_GET["page"])) ? $_GET["page"] : 1;
$awalData = ($jumlahDataTampil * $halamanAktif) - $jumlahDataTampil;

$hamil = query("SELECT * FROM hamil LIMIT $awalData,$jumlahDataTampil");

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
                    <a class="nav-link active text-white" href="dashboard.php"><img src="img/icon/home-white.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Home</a>
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
                <img src="img/icon/pdfFormatBlack.png" alt="" style="width: 27px; height: 27px; margin-bottom: 8px; margin-right: 5px;">LAPORAN SURAT PERNYATAAN KPM IBU HAMIL
                <br style="margin-bottom: 10px;">
                <hr>
            </h3>

            <table class="table table-sm table-bordered mb-2" style="margin:0px; padding: 0px; border: 1px solid transparent;">

                <td style="width: 14.8%; padding: 0px; margin: 0px;">
                    <a href="dashboardPimpinan.php" class="btn btn-sm btn-primary font-Form-Input" style="border-radius: 0px; "><img src="img/icon/left-arrow.png" class="iconTable" style="margin-right: 5px;" alt="">
                        Kembali
                    </a>
                </td>
                <td style="width: 3%; padding: 0px; padding-top: 0px;">
                    <input type="text" name="keyword" class="form-control form-control-sm ds-input" placeholder="Cari data..." style="display: inline; width: 80%; border-radius: 0px;" autocomplete="off" id="keyword">

                    <img src="img/gif/loading.gif" alt="" style="width: 65px; height: 55px; z-index: -1; right: 110px; top: 177px; position: fixed; display: none;" id="loading">
                </td>
                </tr>

            </table>

            <div id="laporan_tabel_hamil">
                <table class="table table-sm table-striped mb-3" style="border: 1px solid #DEE2E6; margin: 0px;" cellspacing="0" cellpadding="5">

                    <thead style="font-size: 17px;" class="font-Form">
                        <tr align="center">
                            <th style="width: 4%;">#</th>
                            <th style="width: 12%;">No Register KIA</th>
                            <th>Nama</th>
                            <th style="width: 10%;">Umur</th>
                            <th style="width: 15%;">Usia Kehamilan</th>
                            <th style="width: 18%;">Status Kehamilan</th>
                            <th style="width: 6%;">Aksi</th>
                        </tr>
                    </thead>

                    <?php $i = 1 + $awalData; ?>
                    <?php foreach ($hamil as $row) : ?>
                        <tr align="center" class="font-Form-Input">
                            <th style=""><?= $i ?></td>
                            <td style=""><?= $row["id_kia"]  ?></td>
                            <td style=""><?= $row["nama"]  ?></td>
                            <td style=""><?= $row["umur"] . " " . "Tahun"  ?></td>
                            <td style=""><?= $row["usia_kehamilan"] . " " . "Bulan" ?></td>
                            <td style=""><?= $row["status_kehamilan"] ?></td>
                            <td>
                                <a href="cetakHamil.php?id=<?= $row['id'] ?>" target="blank" class="btn btn-sm" style="border-radius: 0px; border: 1px #dc3545;"><img src="img/icon/pdfRed.png" alt="" class="iconTable2" style="width: 25px; height: 25px;"></a>

                            </td>
                        </tr>
                        <?php $i++; ?>
                    <?php endforeach; ?>
                </table>

                <!-- NAVIGATION PAGINATION -->
                <ul class="pagination font-Form-Input">

                    <!-- PREVIOUS -->
                    <?php if ($halamanAktif > 1) : ?>
                        <li class="page-item">
                            <a class="page-link" href="?page=<?= $halamanAktif - 1 ?>"> &laquo; </a>
                        </li>
                    <?php else : ?>
                        <li class="page-item disabled">
                            <a class="page-link" href="?page=<?= $halamanAktif - 1 ?>"> &laquo; </a>
                        </li>
                    <?php endif; ?>

                    <!-- NUMBERING -->
                    <?php for ($i = 1; $i <= $jumlahHamalan; $i++) : ?>
                        <?php if ($i == $halamanAktif) : ?>
                            <li class="page-item active">
                                <a href="?page=<?= $i; ?>" class="page-link"><?= $i; ?></a>
                            </li>
                        <?php else : ?>
                            <li class="page-item">
                                <a href="?page=<?= $i; ?>" class="page-link"><?= $i; ?></a>
                            </li>
                        <?php endif; ?>
                    <?php endfor; ?>

                    <!-- NEXT -->
                    <?php if ($halamanAktif < $jumlahHamalan) : ?>
                        <li class="page-item">
                            <a href="?page=<?= $halamanAktif + 1 ?>" class="page-link"> &raquo; </a>
                        </li>
                    <?php else : ?>
                        <li class="page-item disabled">
                            <a href="?page=<?= $halamanAktif + 1 ?>" class="page-link"> &raquo; </a>
                        </li>
                    <?php endif; ?>
                </ul>
            </div>
        </div>
    </div>

    <script src="js/jquery.js"></script>
    <script src="js/laporanKpmIbuHamil.js"></script>

</body>

</html>