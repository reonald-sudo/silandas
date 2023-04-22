<?php
sleep(1);

$tahun = date('Y');

require '../functions.php';

// PAGINATION CONFIGURATION
$jumlahDataTampil = 50;
$jumlahData = count(query("SELECT * FROM rekap_stunting_" . $tahun . ""));
$jumlahHalaman = ceil($jumlahData / $jumlahDataTampil);
$halamanAktif = (isset($_GET["page"])) ? $_GET["page"] : 1;
$awalData = ($jumlahDataTampil * $halamanAktif) - $jumlahDataTampil;

$keyword = $_GET["keyword"];

$dbMasterStunting = queryMaster("SELECT * FROM rekap_stunting_" . $tahun . " WHERE
                    id_kia LIKE '%$keyword%' OR
                    nama LIKE '%$keyword%' OR
                    umur LIKE '%$keyword%' OR
                    jenis_kelamin LIKE '%$keyword%' OR
                    status_gizi_imt_u LIKE '%$keyword%' OR
                    berat_badan LIKE '%$keyword%' OR
                    tinggi_badan LIKE '%$keyword%' OR
                    bulan_pemeriksaan LIKE '%$keyword%'
                    LIMIT $awalData,$jumlahDataTampil");

?>

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
                <td><?= $row["bulan_pemeriksaan"] ?></td>
                <td style="font-family: 'Manrope', sans-serif;">
                    <a href="hapusDetailDataMasterStunting.php?id=<?= $row["id"] ?>" class="btn btn-danger hapusStunting" style="display: inline-block; border-radius: 0px;"><img src="img/icon/trashWhite.png" class="iconTable2" alt="" style=""></a>
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

<script src="../js/jquery.js"></script>
<script src="sweetalert2-11.3.4/package/dist/sweetalert2.all.min.js"></script>

<script>
    <?php foreach ($dbMasterStunting as $row) : ?>
        $('.hapusStunting').on('click', function(e) {

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