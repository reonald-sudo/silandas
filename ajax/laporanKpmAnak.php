<?php
session_start();

require '../functions.php';

// PAGINATION CONFIGURATION
$jumlahDataTampil = 6;
$jumlahData = count(query("SELECT * FROM stunting"));
$jumlahHalaman = ceil($jumlahData / $jumlahDataTampil);
$halamanAktif = (isset($_GET["page"])) ? $_GET["page"] : 1;
$awalData = ($jumlahDataTampil * $halamanAktif) - $jumlahDataTampil;

$keyword = $_GET["keyword"];

$stunting = query("SELECT * FROM stunting WHERE 
                    id_kia LIKE '%$keyword%' OR
                    nama LIKE '%$keyword%' OR
                    umur LIKE '%$keyword%' OR
                    jenis_kelamin LIKE '%$keyword%' OR
                    status_gizi_imt_u LIKE '%$keyword%'
                    LIMIT $awalData,$jumlahDataTampil");
?>

<div id="tabel_laporan_stunting">
    <table class="table table-sm table-striped mb-3" style="border: 1px solid #DEE2E6; margin: 0px;" cellspacing="0" cellpadding="5">
        <thead style="font-size: 17px;" class="font-Form">
            <tr align="center">
                <th style="width: 5%;">#</th>
                <th style="width: 20%;">No Register (KIA)</th>
                <th>Nama</th>
                <th style="width: 10%;">Umur</th>
                <th style="width: 15%;">Jenis Kelamin</th>
                <th style="width: 11%;">Status Gizi</th>
                <th style="width: 9%;">Aksi</th>
            </tr>
        </thead>

        <?php $i = 1 + $awalData; ?>
        <?php foreach ($stunting as $row) : ?>
            <tr align="center" class="font-Form-Input">
                <th style=""><?= $i ?></th>
                <td style=""><?= $row["id_kia"] ?></td>
                <td style=""><?= $row["nama"] ?></td>
                <td style=""><?= $row["umur"] . " " . "Bulan" ?></td>
                <td style=""><?= $row["jenis_kelamin"] ?></td>
                <td style=""><?= $row["status_gizi_imt_u"] ?></td>
                <td>
                    <a href="cetakStunting.php?id=<?= $row['id'] ?>" target="blank" class="btn" style="border-radius: 0px; border: 1px #dc3545;"><img src="img/icon/pdfRed.png" alt="" class="iconTable2" style="width: 25px; height: 25px;"></a>
                </td>
            </tr>

            <?php $i++ ?>
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

<script src="js/stunting.js"></script>