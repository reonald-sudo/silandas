<script src="js/jquery.js"></script>
<?php

require 'link.php';
require 'functions.php';

$bulan = date('m');
$tahun = date('Y');

function bulan($text)
{
    if ($text == "01") return "Januari";
    if ($text == "02") return "Februari";
    if ($text == "03") return "Maret";
    if ($text == "04") return "April";
    if ($text == "05") return "Mei";
    if ($text == "06") return "Juni";
    if ($text == "07") return "Juli";
    if ($text == "08") return "Agustus";
    if ($text == "09") return "September";
    if ($text == "10") return "Oktober";
    if ($text == "11") return "November";
    if ($text == "12") return "Desember";
}

// PAGINATION CONFIGURATION STUNTING
$jumlahDataTampil = 50;
$jumlahData = count(query("SELECT * FROM rekap_stunting_" . $tahun . ""));
$jumlahHalaman = ceil($jumlahData / $jumlahDataTampil);
$halamanAktif = (isset($_GET["page"])) ? $_GET["page"] : 1;
$awalData = ($jumlahDataTampil * $halamanAktif) - $jumlahDataTampil;

// PAGINATION CONFIGURATION HAMIL
$jumlahDataTampilHamil = 50;
$jumlahDataHamil = count(query("SELECT * FROM rekap_hamil_" . $tahun . ""));
$jumlahHalamanHamil = ceil($jumlahDataHamil / $jumlahDataTampilHamil);
$halamanAktifHamil = (isset($_GET["pageHamil"])) ? $_GET["pageHamil"] : 1;
$awalDataHamil = ($jumlahDataTampilHamil * $halamanAktifHamil) - $jumlahDataTampilHamil;

$dbMasterStunting = queryMaster("SELECT * FROM rekap_stunting_" . $tahun . " ORDER BY nama ASC LIMIT $awalData,$jumlahDataTampil");
$dbMasterHamil = queryMaster("SELECT * FROM rekap_hamil_" . $tahun . " ORDER BY nama ASC LIMIT $awalDataHamil, $jumlahDataTampilHamil");

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
        <div class="container-fluid" style="margin: 0px; padding: 0px;">
            <a class="navbar-brand" href="#" style="color: white;">SELAMAT DATANG ADMIN <b>| SiLandas</b></a>
            <div class="d-flex">
                <img src="img/icon/mail.png" class="iconTable" style="margin-right: 20px;" alt="">
                <img src="img/icon/bell.png" class="iconTable" style="margin-right: 20px;" alt="">
                <img src="img/icon/zoom-in.png" class="iconTable" style="margin-right: 0px;" alt="">
            </div>
        </div>
    </nav>

    <body class="row no-gutter mt-5">

        <!-- sidebar -->
        <div class="col-md-2 pr-3 mt-2 pt-3" style="background-color: #406882;">
            <ul class=" nav flex-column mb-5" style="margin-left: 10px;">
                <li class="nav-item">
                    <a class="nav-link active text-white" href="#"><img src="img/profil/admin.png" alt="" style="width: 35px; height: 35px; margin-right: 5px; font-family: 'Roboto', sans-serif;"> Admin</a>
                    <hr class="bg-light mr-5">
                </li>
                <li class="nav-item">
                    <a class="nav-link active text-white" href="dashboard.php"><img src="img/icon/home-white.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active text-white" href="index.php"><img src="img/icon/silandas.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> SiLandas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="user.php"><img src="img/icon/user-white.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Data User</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="petugas.php"><img src="img/icon/identity-card-white.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Data Petugas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="master.php"><img src="img/icon/database1.png" alt="" style="width: 24px; height: 24px; margin-bottom: 5px; margin-right: 5px;"> Data Master</a>
                </li>
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
        <div class="col-md-10 pt-4 p-4 mt-2" style="background-color: #f8f9fa;">
            <h3 class="heading-Page">
                <img src="img/icon/database_black.png" alt="" style="width: 27px; height: 27px; margin-bottom: 5px; margin-right: 5px;"> DATA REKAP KPM ANAK & IBU HAMIL
                <br style="margin-bottom: 17px;">
                <hr>
            </h3>

            <table class="table table-bordered" style="border: 1px solid transparent; margin: 0px; padding: 0px;">
                <tr>
                    <td style="padding: 0px; width: 43%; padding-top: 8px;">
                        <button class="btn btn-sm btn-success font-Form-Input" style="border-radius: 0px;" id="rekap_stunting1" name="rekap_stunting">Rekap Program Pemantauan Anak</button>
                        <button class="btn btn-sm btn-info font-Form-Input" style="border-radius: 0px;" id="rekap_hamil1" name="rekap_hamil">Rekap Program Kehamilan</button>
                    </td>
                    <td>
                        <form action="" method="POST">
                            <a href="cetakRekapDataMasterStunting.php" class="btn btn-danger font-Form-Input btn-sm" id="unduh_data_rekap_stunting_pdf" name="unduh_data_rekap_stunting_pdf" target="blank" style="border-radius: 0px;"><img src="img/icon/pdfFormat.png" alt="" class="iconTable" style="margin-right: 5px;">Pdf Stunting</a>

                            <a href="cetakRekapDataMasterHamil.php" class="btn btn-danger font-Form-Input btn-sm" id="unduh_data_rekap_hamil_pdf" name="unduh_data_rekap_hamil_pdf" target="blank" style="border-radius: 0px;"><img src="img/icon/pdfFormat.png" alt="" class="iconTable" style="margin-right: 5px;">Pdf Hamil</a>

                            <a href="excelDataMasterStunting.php" class="btn btn-secondary font-Form-Input btn-sm" id="unduh_data_rekap_stunting" name="unduh_data_rekap_stunting" target="blank" style="border-radius: 0px;"><img src="img/icon/excel.png" alt="" class="iconTable" style="margin-right: 5px;">Unduh Data Xlsx</a>

                            <a href="index.php" class="btn btn-dark font-Form-Input btn-sm" style="border-radius: 0px;"><img src="img/icon/undo-white.png" alt="" style="margin-right: 5px;" class="iconTable">Kembali</a>
                    <td style="width: 12%;">
                        <input type="text" class="form-control-sm font-Form-Input" style=" width: 100%; border-radius: 0px;" placeholder="Cari Data..." id="keyword" name="keyword">
                    </td>
                    </form>
                    </td>
                </tr>
            </table>


            <div id="tabel_rekap_stunting">
                <div style="display: inline-block; width: 100%; background-color: #EBECED; border: 1px solid black;">
                    <center>
                        <h5 style="font-size: 25px; font-family: 'Manrope', sans-serif; margin-top: 5px;" class="font-Form">Arsip Pemantauan Anak Tahun <?= $tahun ?></h5>
                    </center>
                </div>
                <table class="table table-sm table-striped table-bordered mb-3" style="border: 1px solid #DEE2E6; margin:0px;" cellspacing="0" cellpadding="5">
                    <thead class="font-Form">
                        <tr align="center">
                            <th style="width: 2%; ">#</th>
                            <th style="width: 13%; ">Kia</th>
                            <th style="width: 15%; ">Nama</th>
                            <th style="width: 7%; ">JK</th>
                            <th style="width: 5%;">Umur</th>
                            <th style="width: 6%; ">BB</th>
                            <th style="width: 6%; ">TB</th>
                            <th style="width: 10%; ">Status Gizi</th>
                            <th style="width: 13%; ">Bulan Pemeriksaan</th>
                            <th style="width: 5%; ">Aksi</th>
                        </tr>
                    </thead>
                    <?php $i = 1 + $awalData; ?>

                    <?php foreach ($dbMasterStunting as $row) : ?>
                        <tr align="center" class="font-Form-Input">
                            <td><?= $i ?></td>
                            <td><?= $row["id_kia"] ?></td>
                            <td><?= $row["nama"] ?></td>
                            <td><?= $row["jenis_kelamin"] ?></td>
                            <td><?= $row["umur"] . ' B' ?></td>
                            <td><?= $row["berat_badan"] . ' Kg' ?></td>
                            <td><?= $row["tinggi_badan"] . ' Cm' ?></td>
                            <td><?= $row["status_gizi_imt_u"] ?></td>
                            <td><?= bulan($row["bulan_pemeriksaan"]) ?></td>
                            <td style="font-family: 'Manrope', sans-serif;">
                                <a href="hapusDetailDataMasterStunting.php?id=<?= $row["id"] . "&id_kia=" . $row["id_kia"] . "&tinggi_badan=" . $row["tinggi_badan"] ?> " class="btn btn-danger hapusStunting" style="display: inline-block; border-radius: 0px;"><img src="img/icon/trashWhite.png" class="iconTable2" alt="" style=""></a>
                            </td>
                        </tr>
                        <?php $i++ ?>
                    <?php endforeach; ?>
                </table>

                <!-- NAVIGATION PAGINATION -->
                <ul class="pagination">

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
                    <?php for ($i = 1; $i <= $jumlahHalaman; $i++) : ?>
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
                    <?php if ($halamanAktif < $jumlahHalaman) : ?>
                        <li class="page-item">
                            <a class="page-link" href="?page=<?= $halamanAktif + 1 ?>"> &raquo; </a>
                        </li>
                    <?php else : ?>
                        <li class="page-item disabled">
                            <a class="page-link" href="?page=<?= $halamanAktif + 1 ?>"> &raquo; </a>
                        </li>
                    <?php endif; ?>
                </ul>

            </div>

            <div id="tabel_rekap_hamil" style="display: none;">
                <div style="width: 100%; border: 1px solid black; background-color: #EBECED;">
                    <center>
                        <h5 style="font-size: 25px; font-family: 'Manrope', sans-serif; margin-top: 5px;" class="font-Form">Arsip Program Kehamilan Tahun <?= $tahun ?></h5>
                    </center>
                </div>
                <table class="table table-sm table-striped table-bordered mb-3" style="border: 1px solid #DEE2E6; margin:0px;" cellspacing="0" cellpadding="5">
                    <thead class="font-Form">
                        <tr align="center">
                            <th style="width: 2%; ">#</th>
                            <th style="width: 13%; ">KIA</th>
                            <th style="width: 13%; ">Nama</th>
                            <th style="width: 8%; ">Umur</th>
                            <th style="width: 12%; ">Usia Kehamilan</th>
                            <th style="width: 5%; ">Lila</th>
                            <th style="width: 10%; ">Status Kehamilan</th>
                            <th style="width: 12%;">Bulan Pemeriksaan</th>
                            <th style="width: 4%; ">Aksi</th>
                        </tr>
                    </thead>
                    <?php $i = 1 + $awalDataHamil; ?>
                    <?php foreach ($dbMasterHamil as $row) : ?>
                        <tr align="center" class="font-Form-Input">
                            <td><?= $i ?></td>
                            <td><?= $row["id_kia"] ?></td>
                            <td><?= $row["nama"] ?></td>
                            <td><?= $row["umur"] . ' Thn' ?></td>
                            <td><?= $row["usia_kehamilan"] . ' B' ?></td>
                            <td><?= $row["lingkar_lengan"] . ' Cm' ?></td>
                            <td><?= $row["status_kehamilan"] ?></td>
                            <td><?= bulan($row["bulan_pemeriksaan"]) ?></td>
                            <td style="font-family: 'Manrope', sans-serif;">
                                <a href="hapusDetailDataMasterHamil.php?id=<?= $row["id"] . "&id_kia=" . $row["id_kia"] . "&lingkar_lengan=" . $row["lingkar_lengan"] ?>" class="btn btn-danger hapusHamil" style="display: inline-block;border-radius: 0px;"><img src="img/icon/trashWhite.png" class="iconTable2" alt="" style=""></a>
                            </td>
                        </tr>
                        <?php $i++ ?>
                    <?php endforeach; ?>
                </table>

                <!-- NAVIGATION PAGINATION -->
                <ul class="pagination paginationHamil" style="display: none;">

                    <!-- PREVIOUS -->
                    <?php if ($halamanAktifHamil > 1) : ?>
                        <li class="page-item">
                            <a class="page-link" href="?pageHamil=<?= $halamanAktifHamil - 1 ?>"> &laquo; </a>
                        </li>
                    <?php else : ?>
                        <li class="page-item disabled">
                            <a class="page-link" href="?pageHamil=<?= $halamanAktifHamil - 1 ?>"> &laquo; </a>
                        </li>
                    <?php endif; ?>

                    <!-- NUMBERING -->
                    <?php for ($i = 1; $i <= $jumlahHalamanHamil; $i++) : ?>
                        <?php if ($i == $halamanAktifHamil) : ?>
                            <li class="page-item active">
                                <a href="?pageHamil=<?= $i; ?>" class="page-link"><?= $i; ?></a>
                            </li>
                        <?php else : ?>
                            <li class="page-item">
                                <a href="?pageHamil=<?= $i; ?>" class="page-link"><?= $i; ?></a>
                            </li>
                        <?php endif; ?>
                    <?php endfor; ?>

                    <!-- NEXT -->
                    <?php if ($halamanAktifHamil < $jumlahHalamanHamil) : ?>
                        <li class="page-item">
                            <a class="page-link" href="?pageHamil=<?= $halamanAktifHamil + 1 ?>"> &raquo; </a>
                        </li>
                    <?php else : ?>
                        <li class="page-item disabled">
                            <a class="page-link" href="?pageHamil=<?= $halamanAktifHamil + 1 ?>"> &raquo; </a>
                        </li>
                    <?php endif; ?>
                </ul>

            </div>

        </div>


        <script src="js/jquery.js"></script>
        <script src="js/dataMaster.js"></script>
        <script src="js/dataMasterHamil.js"></script>
        <script src="sweetalert2-11.3.4/package/dist/sweetalert2.all.min.js"></script>

        <script>
            <?php foreach ($dbMasterStunting as $row) : ?>
                $('.hapusStunting').on('click', function(e) {

                    e.preventDefault();
                    const href = $(this).attr('href');

                    Swal.fire({
                        title: 'Yakin Hapus Data ?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Ya',
                        cancelButtonText: 'Batal'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            document.location.href = href;
                        }
                    })
                });
            <?php endforeach; ?>
        </script>

        <script>
            <?php foreach ($dbMasterHamil as $row) : ?>
                $('.hapusHamil').on('click', function(e) {

                    e.preventDefault();
                    const href = $(this).attr('href');

                    Swal.fire({
                        title: 'Yakin Hapus Data <?= $row["nama"] ?>?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Ya',
                        cancelButtonText: 'Batal'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            document.location.href = href;
                        }
                    })
                });
            <?php endforeach; ?>
        </script>

    </body>

</html>