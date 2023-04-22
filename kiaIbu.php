<?php

require 'functions.php';

// PAGINATION CONFIGURATION
$jumlahDataTampil = 6;
$jumlahData = count(query("SELECT * FROM kia_hamil"));
$jumlahHalaman = ceil($jumlahData / $jumlahDataTampil);
$halamanAktif = (isset($_GET["page"])) ? $_GET["page"] : 1;
$awalData = ($jumlahDataTampil * $halamanAktif) - $jumlahDataTampil;

$kiaIbu = query("SELECT * FROM kia_hamil LIMIT $awalData,$jumlahDataTampil")
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Silandas KIA Ibu</title>
    <?php require 'link.php' ?>
</head>

<body style="background-color: #F8F9FA;">
    <center>
        <img src="img/logo.png" alt="" height="64px" width="64px" style="margin-top: 8px">
        <img src="img/LOGO_GERMAS_NORMAL.png" alt="" height="64px" width="128px" style="margin-top: 8px">
    </center>
    <h3 align="center" class="font-Form" style="color:#4A5568; padding: 8px 0 0 0;">Data KIA Ibu Desa Sungai Landas</h3>
    <p align="center" class="font-Form-Input" style="color:#4A5568; padding-bottom: 15px;">Kec. Karang Intan, Kab. Banjar, Prov. Kalimantan Selatan</p>

    <div class="container mb-3">
        <form action="" method="post" style="margin: 0px;">
            <table class="table table-bordered" style="border: 1px solid transparent; margin:0px; padding:0px;">
                <tr>
                    <td style="padding: 0px; padding-top: 8px;">
                        <a href="tambahKiaIbu.php" class="btn btn-sm btn-success mb-2" style="font-family: 'Manrope', sans-serif; border-radius: 0px; border: 1px solid #4a7e92; background-color: #4a7e92;"><img src="img/icon/plus-sign.png" alt="" class="iconTable" style="margin-right: 5px;">Tambah Data </a>

                        <a href="excelKiaIbu.php" class="btn btn-sm btn-secondary mb-2" style="font-family: 'Manrope', sans-serif; border-radius: 0px; background-color: #009868; border: 1px solid #009868;" target="blank"><img src="img/icon/xlsx-file-format-extension.png" alt="" class="iconTable" style="margin-right: 5px;">Unduh Data Xlsx</a>

                        <a href="cetakRekapKiaIbu.php" class="btn btn-sm btn-secondary mb-2" style="font-family: 'Manrope', sans-serif; border-radius: 0px; background-color: #ee3625; border: 1px solid #ee3625;" target="blank"><img src="img/icon/pdfFormat.png" alt="" class="iconTable" style="margin-right: 5px;">Unduh Data Pdf</a>

                        <a href="index.php" class="btn btn-sm btn-primary mb-2" style="font-family: 'Manrope', sans-serif; border-radius: 0px; background-color: #334b49; border: 1px solid #334b49;"><img src="img/icon/undo-white.png" alt="" class="iconTable" style="margin-right: 5px;">Kembali</a>
                    </td>

                    <td style="width: 19%; padding: 0px; padding-top: 8px;">
                        <input type="text" name="keyword" class="form-control form-control-sm ds-input" placeholder="Cari data..." style="display: inline; font-family: 'Manrope', sans-serif; width: 80%; border-radius: 0px;" autocomplete="off" id="keyword">

                        <img src="img/gif/loading.gif" alt="" style="width: 65px; height: 55px; z-index: -1; right: 110px; top: 180px; position: fixed; display: none;" id="loading">
                    </td>
                </tr>
            </table>
        </form>

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

    </div>
    <script src="js/jquery.js"></script>
    <script src="js/kia_ibu.js"></script>
    <script src="sweetalert2-11.3.4/package/dist/sweetalert2.all.min.js"></script>

    <script>
        <?php foreach ($kiaIbu as $row) : ?>
            $('.hapus').on('click', function(e) {

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
</body>

</html>