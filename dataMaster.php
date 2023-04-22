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

$dbMasterStunting = queryMaster("SELECT * FROM rekap_stunting_" . $tahun . " ORDER BY nama ASC");

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Master</title>
</head>

<body style="background-color: #F8F9FA;">

    <!-- Heading -->
    <center>
        <img src="img/logo.png" alt="" height="64px" width="64px" style="margin-top: 8px">
        <img src="img/LOGO_GERMAS_NORMAL.png" alt="" height="64px" width="128px" style="margin-top: 8px">
    </center>
    <h3 align="center" style="font-family: 'Roboto Slab', serif; color:#4A5568; padding: 8px 0 0 0;">Data Master SiLandas</h3>
    <p align="center" style="font-family: 'Roboto Slab', serif; color:#4A5568; padding-bottom: 15px;">Kec. Karang Intan, Kab. Banjar, Prov. Kalimantan Selatan</p>


    <div class="container-md">

        <div style="margin-bottom: 0px;">

            <table class="table table-bordered" style="border: 1px solid transparent; margin: 0px; padding: 0px;">
                <tr>
                    <td style="padding: 0px; width: 55%; padding-top: 8px;">
                        <button class="btn btn-success" style="font-family: 'Manrope', sans-serif;" id="rekap_stunting1" name="rekap_stunting">Rekap Stunting Anak</button>
                        <button class="btn btn-info" style="font-family: 'Manrope', sans-serif;">Rekap Program Kehamilan</button>
                        <button class="btn btn-primary" style="font-family: 'Manrope', sans-serif; color: white;">Rekap Persebaran Covid</button>
                    </td>
                    <td>
                        <form action="" method="POST">
                            <a href="excelDataMasterStunting.php" class="btn btn-secondary" id="unduh_data_rekap_stunting" name="unduh_data_rekap_stunting" target="blank"><img src="img/icon/excel.png" alt="" class="iconTable" style="margin-right: 5px;">Unduh Data</a>
                            <a href="index.php" class="btn btn-dark"><img src="img/icon/undo-white.png" alt="" style="margin-right: 5px;" class="iconTable">Kembali</a>
                    <td style="width: 20%;">
                        <input type="text" class="form-control" style=" width: 100%;" placeholder="Cari Data..." id="keyword" name="keyword">
                    </td>
                    </form>
                    </td>
                </tr>
            </table>

        </div>


        <div id="tabel_rekap_stunting" style="display: none;">
            <div style="background-color: #198754; color: white; display: inline-block; width: 100%; border: 1px solid black;">
                <center>
                    <h5 style="font-size: 25px; font-family: 'Manrope', sans-serif; margin-top: 5px;">Arsip Stunting Anak Tahun <?= $tahun ?></h5>
                </center>
            </div>
            <table class="table table-bordered" style="border: 1px solid black; margin: 0px; padding: 0px;">
                <tr align="center" style="background-color: #198754; font-family: 'Manrope', sans-serif;">
                    <th style="width: 2%; color: white;">No</th>
                    <th style="width: 20%; color: white;">Nama</th>
                    <th style="width: 12%; color: white;">Jenis Kelamin</th>
                    <th style="color: white;">Umur</th>
                    <th style="width: 12%; color: white;">Berat Badan</th>
                    <th style="width: 11%; color: white;">Tinggi Badan</th>
                    <th style="width: 10%; color: white;">Status Gizi</th>
                    <th style="color: white;">Bulan Pemeriksaan</th>
                    <th style="width: 10%; color: white;">Aksi</th>
                </tr>
                <?php $i = 1; ?>
                <?php foreach ($dbMasterStunting as $row) : ?>
                    <tr align="center">
                        <td style="font-family: 'Roboto', sans-serif;"><?= $i ?></td>
                        <td style="font-family: 'Roboto', sans-serif;"><?= $row["nama"] ?></td>
                        <td style="font-family: 'Roboto', sans-serif;"><?= $row["jenis_kelamin"] ?></td>
                        <td style="font-family: 'Roboto', sans-serif;"><?= $row["umur"] . ' B' ?></td>
                        <td style="font-family: 'Roboto', sans-serif;"><?= $row["berat_badan"] . ' Kg' ?></td>
                        <td style="font-family: 'Roboto', sans-serif;"><?= $row["tinggi_badan"] . ' Cm' ?></td>
                        <td style="font-family: 'Roboto', sans-serif;"><?= $row["status_gizi_imt_u"] ?></td>
                        <td style="font-family: 'Roboto', sans-serif;"><?= $row["bulan_pemeriksaan"] ?></td>
                        <td style="font-family: 'Manrope', sans-serif;">
                            <a href="hapusDetailDataMasterStunting.php?id=<?= $row["id"] ?>" class="btn btn-danger" style="display: inline-block; width: 100%;" onclick="return confirm('Yakin Hapus Data ?')"><img src="img/icon/minus.png" class="iconTable2" alt="" style="margin-right: 5px;">Hapus</a>
                        </td>
                    </tr>
                    <?php $i++ ?>
                <?php endforeach; ?>
            </table>
        </div>
    </div>

    <script src="js/jquery.js"></script>
    <script src="js/dataMaster.js"></script>
</body>

</html>