<?php

$tahun = date("Y");

require 'functions.php';

// PAGINATION CONFIGURATION STUNTING
$jumlahDataTampil = 50;
$jumlahData = count(query("SELECT * FROM rekap_stunting_" . $tahun . ""));
$jumlahHalaman = ceil($jumlahData / $jumlahDataTampil);
$halamanAktif = (isset($_GET["page"])) ? $_GET["page"] : 1;
$awalData = ($jumlahDataTampil * $halamanAktif) - $jumlahDataTampil;

$dbMasterStunting = queryMaster("SELECT * FROM grafik_perorangan_hamil ORDER BY nama ASC LIMIT $awalData,$jumlahDataTampil");

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Silandas KIA Anak</title>
    <?php require 'link.php' ?>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>

<body style="background-color: #F8F9FA;">
    <center>
        <img src="img/logo.png" alt="" height="64px" width="64px" style="margin-top: 8px">
        <img src="img/LOGO_GERMAS_NORMAL.png" alt="" height="64px" width="128px" style="margin-top: 8px">
    </center>
    <h3 align="center" class="font-Form" style="color:#4A5568; padding: 8px 0 0 0;">Grafik Statistik Ibu Hamil Desa Sungai Landas</h3>
    <p align="center" class="font-Form-Input" style="color:#4A5568; padding-bottom: 15px;">Kec. Karang Intan, Kab. Banjar, Prov. Kalimantan Selatan</p>

    <form action="" method="POST" class="container">
        <table class="table table-bordered" style="border: 1px solid transparent; margin:0px; padding:0px;">

            <tr class="font-Form-Input">
                <td style="padding: 0px; padding-top: 8px;">
                    <a href="statistikIbu.php" class="btn btn-sm btn-success mb-2" style="border-radius: 0px; border: 1px solid #15ada7; background-color: #15ada7;"><img src="img/icon/bar-chart-white.png" alt="" class="iconTable" style="margin-right: 5px;">Grafik Bulanan </a>

                    <a href="statistikIbuTahunan.php" class="btn btn-sm btn-secondary mb-2" style="border-radius: 0px; background-color: #009868; border: 1px solid #009868;"><img src="img/icon/bar-chart-white.png" alt="" class="iconTable" style="margin-right: 5px;">Grafik Tahunan</a>

                    <a href="statistikIbuPerorangan.php" class="btn btn-sm btn-secondary mb-2" style="border-radius: 0px; background-color: #843b62; border: 1px solid #843b62;"><img src="img/icon/bar-chart-white.png" alt="" class="iconTable" style="margin-right: 5px;">Grafik Perorangan</a>

                    <a href="index.php" class="btn btn-sm btn-primary mb-2" style="border-radius: 0px; background-color: #334b49; border: 1px solid #334b49;"><img src="img/icon/undo-white.png" alt="" class="iconTable" style="margin-right: 5px;">Kembali</a>
                </td>
            </tr>
        </table>
    </form>

    <div id="tabel_rekap_stunting" class="container">
        <div style="display: inline-block; width: 100%; background-color: #EBECED; border: 1px solid black;">
            <center>
                <h5 style="font-size: 25px; font-family: 'Manrope', sans-serif; margin-top: 5px;" class="font-Form">Arsip Pemantauan Ibu Hamil <?= $tahun ?></h5>
            </center>
        </div>
        <table class="table table-sm table-striped table-bordered mb-3" style="border: 1px solid #DEE2E6; margin:0px;" cellspacing="0" cellpadding="5">
            <thead class="font-Form">
                <tr align="center">
                    <th style="width: 2%; ">#</th>
                    <th style="width: 13%; ">Kia</th>
                    <th style="width: 15%; ">Nama</th>
                    <th style="width: 5%; ">Aksi</th>
                </tr>
            </thead>
            <?php $i = 1 + $awalData; ?>
            <?php foreach ($dbMasterStunting as $row) : ?>
                <tr align="center" class="font-Form-Input">
                    <td><?= $i ?></td>
                    <td><?= $row["id_kia"] ?></td>
                    <td><?= $row["nama"] ?></td>
                    <td style="font-family: 'Manrope', sans-serif;">
                        <a href="statistikIbuPeroranganNama.php?id=<?= $row["id"] ?>" class="btn btn-warning hapusStunting" style="display: inline-block; border-radius: 0px;"><img src="img/icon/view.png" class="iconTable2" alt="" style=""></a>
                        <a href="cetakStatistikHamilPerorangan.php?id_kia=<?= $row["id_kia"] ?>" target="blank()" class="btn btn-danger hapusStunting" style="display: inline-block; border-radius: 0px;"><img src="img/icon/pdfFormat.png" class="iconTable2" alt="" style=""></a>
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


    <script src="js/jquery.js"></script>
    <script src="js/kia_anak.js"></script>
    <script src="sweetalert2-11.3.4/package/dist/sweetalert2.all.min.js"></script>


</body>

</html>