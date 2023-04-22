<?php
sleep(1);

require '../functions.php';


// PAGINATION CONFIGURATION
$jumlahDataTampil = 6;
$jumlahData = count(query("SELECT * FROM user"));
$jumlahHalaman = ceil($jumlahData / $jumlahDataTampil);
$halamanAktif = (isset($_GET["page"])) ? $_GET["page"] : 1;
$awalData = ($jumlahDataTampil * $halamanAktif) - $jumlahDataTampil;


$keyword = $_GET["keyword"];

$user = query("SELECT * FROM user WHERE 
                    username LIKE '%$keyword%' OR
                    email LIKE '%$keyword%' OR
                    hak_akses LIKE '%$keyword%'
                    LIMIT $awalData,$jumlahDataTampil");
?>

<div id="tabel_user">
    <table class="table table-sm table-striped mb-3" style="border: 1px solid #DEE2E6; margin:0px;" cellspacing="0" cellpadding="5">
        <thead class="font-Form">
            <tr align="center">
                <th style="width: 5%;">#</th>
                <th style="width: 20%;">Username</th>
                <th style="width: 35%;">Email</th>
                <th style=>Hak Akses</th>
                <th style=" width: 9%;">Aksi</th>
            </tr>
        </thead>

        <?php $i = 1 + $awalData ?>
        <?php foreach ($user as $row) : ?>
            <tr align="center" class="font-Form-Input">
                <th><?= $i ?></th>
                <td><?= $row["username"] ?></td>
                <td><?= $row["email"] ?></td>
                <td><?= $row["hak_akses"] ?></td>
                <td>
                    <a href="hapusUser.php?id= <?= $row["id"] ?>" class="btn btn-danger hapus" style="font-family: 'Manrope', sans-serif; border-radius: 0px; border: 1px #dc3545;"><img src="img/icon/trashWhite.png" alt="" class="iconTable2"></a>

                    <a href="editUser.php?id= <?= $row["id"] ?>" class="btn btn-info" style="font-family: 'Manrope', sans-serif; border-radius: 0px;  background-color: #FFC900; border: 1px #004f6e;" id="tombol_detail"><img src="img/icon/editing_white.png" alt="Detail" class="iconTable" align="center"></a>
                </td>
            </tr>
            <?php $i++ ?>
        <?php endforeach; ?>
    </table>

    <!-- NAVIGATION PAGINATION -->
    <ul class="pagination">

        <!-- PREVIOUS -->
        <?php if ($halamanAktif > 1) : ?>
            <li class="page-item font-Form-Input">
                <a class="page-link" href="?page=<?= $halamanAktif - 1 ?>"> &laquo; </a>
            </li>
        <?php else : ?>
            <li class="page-item disabled font-Form-Input">
                <a class="page-link" href="?page=<?= $halamanAktif - 1 ?>"> &laquo; </a>
            </li>
        <?php endif; ?>

        <!-- NUMBERING -->
        <?php for ($i = 1; $i <= $jumlahHalaman; $i++) : ?>
            <?php if ($i == $halamanAktif) : ?>
                <li class="page-item active font-Form-Input">
                    <a href="?page=<?= $i; ?>" class="page-link"><?= $i; ?></a>
                </li>
            <?php else : ?>
                <li class="page-item font-Form-Input">
                    <a href="?page=<?= $i; ?>" class="page-link"><?= $i; ?></a>
                </li>
            <?php endif; ?>
        <?php endfor; ?>

        <!-- NEXT -->
        <?php if ($halamanAktif < $jumlahHalaman) : ?>
            <li class="page-item font-Form-Input">
                <a class="page-link" href="?page=<?= $halamanAktif + 1 ?>"> &raquo; </a>
            </li>
        <?php else : ?>
            <li class="page-item disabled font-Form-Input">
                <a class="page-link" href="?page=<?= $halamanAktif + 1 ?>"> &raquo; </a>
            </li>
        <?php endif; ?>

    </ul>

</div>