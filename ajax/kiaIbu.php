<?php
sleep(1);

require '../functions.php';


// PAGINATION CONFIGURATION
$jumlahDataTampil = 6;
$jumlahData = count(query("SELECT * FROM kia_hamil"));
$jumlahHalaman = ceil($jumlahData / $jumlahDataTampil);
$halamanAktif = (isset($_GET["page"])) ? $_GET["page"] : 1;
$awalData = ($jumlahDataTampil * $halamanAktif) - $jumlahDataTampil;


$keyword = $_GET["keyword"];

$kiaIbu = query("SELECT * FROM kia_hamil WHERE 
                    id_kia LIKE '%$keyword%' OR
                    nama LIKE '%$keyword%' OR
                    nik LIKE '%$keyword%' OR
                    tanggal_buku LIKE '%$keyword%' OR
                    kabupaten LIKE '%$keyword%'
                    LIMIT $awalData,$jumlahDataTampil");

?>

<div id="tabel_kia_ibu">
    <table class="table table-sm table-bordered table-striped mb-3" style="border: 1px solid black; margin:0px;" cellspacing="0" cellpadding="5">
        <thead style="background-color: #4a7e92; color: white; font-size: 17px;" class="font-Form">
            <tr align="center">
                <th style="width: 3%;">No</th>
                <th style="width: 12%;">No Register (KIA)</th>
                <th style=" width: 15%;">Nama Ibu</th>
                <th style="width: 12%;">Nik Ibu</th>
                <th style="width: 8%;">Umur Ibu</th>
                <th style="width: 11%;">Tanggal Buku</th>
                <th style="width: 9%;">Kabupaten</th>
                <th style="width: 5%;">Aksi</th>
            </tr>
        </thead>

        <?php $i = 1 + $awalData; ?>
        <?php foreach ($kiaIbu as $row) : ?>
            <tr align="center" class="font-Form-Input">
                <th><?= $i ?></th>
                <td><?= $row["id_kia"] ?></td>
                <td><?= $row["nama"] ?></td>
                <td><?= $row["nik"] ?></td>
                <td><?= $row["umur"] . ' Tahun' ?></td>
                <td><?= $row["tanggal_buku"] ?></td>
                <td><?= $row["kabupaten"] ?></td>
                <td>
                    <a href="hapusKiaIbu.php?id= <?= $row["id_kia"] ?>" class="btn btn-sm btn-danger hapus" style="border-radius: 0px; border: 1px #dc3545;"><img src="img/icon/trashWhite.png" alt="" class="iconTable2"></a>
                    <a href="editKiaIbu.php?id= <?= $row["id_kia"] ?>" class="btn btn-sm btn-warning" style="border-radius: 0px; background-color: #FF9300; color: white; border: #FF9300;" id="buttonEdit">
                        <img src="img/icon/editing_white.png" alt="" class="iconTable2">
                    </a>
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