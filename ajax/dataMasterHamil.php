<?php
sleep(1);

$tahun = date('Y');

require '../functions.php';

// PAGINATION CONFIGURATION HAMIL
$jumlahDataTampilHamil = 50;
$jumlahDataHamil = count(query("SELECT * FROM rekap_hamil_" . $tahun . ""));
$jumlahHalamanHamil = ceil($jumlahDataHamil / $jumlahDataTampilHamil);
$halamanAktifHamil = (isset($_GET["pageHamil"])) ? $_GET["pageHamil"] : 1;
$awalDataHamil = ($jumlahDataTampilHamil * $halamanAktifHamil) - $jumlahDataTampilHamil;

$keyword = $_GET["keyword"];

$dbMasterHamil = queryMaster("SELECT * FROM rekap_hamil_" . $tahun . " WHERE
                    id_kia LIKE '%$keyword%' OR
                    nama LIKE '%$keyword%' OR
                    umur LIKE '%$keyword%' OR
                    usia_kehamilan LIKE '%$keyword%' OR
                    lingkar_lengan LIKE '%$keyword%' OR
                    status_kehamilan LIKE '%$keyword%' OR
                    bulan_pemeriksaan LIKE '%$keyword%'
                    LIMIT $awalDataHamil, $jumlahDataTampilHamil");
?>

<div id="tabel_rekap_hamil">
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
                <td><?= $row["bulan_pemeriksaan"] ?></td>
                <td style="font-family: 'Manrope', sans-serif;">
                    <a href="hapusDetailDataMasterHamil.php?id=<?= $row["id"] ?>" class="btn btn-danger hapusHamil" style="display: inline-block;border-radius: 0px;"><img src="img/icon/trashWhite.png" class="iconTable2" alt="" style=""></a>
                </td>
            </tr>
            <?php $i++ ?>
        <?php endforeach; ?>
    </table>

    <!-- NAVIGATION PAGINATION -->
    <ul class="pagination paginationHamil">

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

<script src="../js/jquery.js"></script>
<script src="sweetalert2-11.3.4/package/dist/sweetalert2.all.min.js"></script>

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