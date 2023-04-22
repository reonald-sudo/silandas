<?php

session_start();

if (!isset($_SESSION['login'])) {
    header('Location:login.php');
}

require 'functions.php';

// PAGINATION CONFIGURATION
$jumlahDataTampil = 6;
$jumlahData = count(query("SELECT * FROM hamil"));
$jumlahHamalan = ceil($jumlahData / $jumlahDataTampil);
$halamanAktif = (isset($_GET["page"])) ? $_GET["page"] : 1;
$awalData = ($jumlahDataTampil * $halamanAktif) - $jumlahDataTampil;

$hamil = query("SELECT * FROM hamil LIMIT $awalData,$jumlahDataTampil");

// TOMBOL CARI DI TEKAN
if (isset($_POST["cari"])) {
    $hamil = cariHamil($_POST["keyword"]);
}

// TOMBOL REKAP DITEKAN
if (isset($_POST["rekap_data"])) {

    if (rekapDataHamil($_POST) > 0) {

        hapusDataHamil("DELETE FROM hamil");

        echo "
            <script>
                alert ('Data Berhasil di Rekap !');
                document.location.href = 'hamil.php';
            </script>
        ";
    } else {
        echo "
            <script>
                alert ('Data Gagal di Rekap !');
            </script>
        ";
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<div id="wrap">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Silandas | Data Kehamilan</title>
        <?php require 'link.php' ?>
    </head>


    <body style="background-color: #F8F9FA;">
        <!-- Heading -->
        <center>
            <img src="img/logo.png" alt="" height="64px" width="64px" style="margin-top: 8px">
            <img src="img/LOGO_GERMAS_NORMAL.png" alt="" height="64px" width="128px" style="margin-top: 8px">
        </center>
        <h3 align="center" class="font-Form" style="color:#4A5568; padding: 8px 0 0 0;">Data Kehamilan Ibu Desa Sungai Landas</h3>
        <p align="center" class="font-Form-Input" style="color:#4A5568; padding-bottom: 15px;">Kec. Karang Intan, Kab. Banjar, Prov. Kalimantan Selatan</p>
        <!-- Table -->
        <div class="container">

            <form action="" method="POST">
                <table class="table table-bordered" style="border: 1px solid transparent; margin:0px; padding:0px;">
                    <tr class="font-Form-Input">
                        <td style="padding: 0px; padding-top: 8px;">
                            <a href="tambahHamil.php" class="btn btn-sm btn-success mb-2" style="border-radius: 0px; border: 1px solid #1EA3B2; background-color: #1EA3B2;"><img src="img/icon/plus-sign.png" alt="" class="iconTable" style="margin-right: 5px;">Tambah Data </a>

                            <a href="excelHamil.php" class="btn btn-sm btn-secondary mb-2" style="border-radius: 0px; background-color: #009868; border: 1px solid #009868;" target="blank"><img src="img/icon/xlsx-file-format-extension.png" alt="" class="iconTable" style="margin-right: 5px;">Unduh Data Xlsx</a>

                            <a href="cetakRekapHamil.php" class="btn btn-sm btn-secondary mb-2" style="border-radius: 0px; background-color: #ee3625; border: 1px solid #ee3625;" target="blank"><img src="img/icon/pdfFormat.png" alt="" class="iconTable" style="margin-right: 5px;">Unduh Data Pdf</a>

                            <button class="btn btn-sm btn-info mb-2" style="border-radius: 0px; background-color: #008782; border: 1px solid #008782;" name="rekap_data" id="rekap_data" onclick="return confirm('PERINGATAN !!! Harap menekan cancel jika anda belum mengunduh data bulan ini')"><img src="img/icon/database.png" alt="" class="iconTable" style="margin-right: 5px;">Rekap Data</button>

                            <a href="index.php" class="btn btn-sm btn-primary mb-2" style="border-radius: 0px; background-color: #334b49; border: 1px solid #334b49;"><img src="img/icon/undo-white.png" alt="" class="iconTable" style="margin-right: 5px;">Kembali</a>
                        </td>
                        <td style="width: 19%; padding: 0px; padding-top: 8px;">
                            <input type="text" name="keyword" class="form-control form-control-sm ds-input" placeholder="Cari data..." style="display: inline; width: 80%; border-radius: 0px;" autocomplete="off" id="keyword">

                            <img src="img/gif/loading.gif" alt="" style="width: 65px; height: 55px; z-index: -1; right: 110px; top: 177px; position: fixed; display: none;" id="loading">
                        </td>
                    </tr>
                </table>
            </form>

            <div id="tabel_hamil">
                <table class="table table-sm table-bordered table-striped mb-3" style="border: 1px solid black; margin: 0px;" cellspacing="0" cellpadding="5">

                    <thead style="background-color: #1EA3B2; color: white; font-size: 17px;" class="font-Form">
                        <tr align="center">
                            <th style="width: 4%;">#</th>
                            <th style="width: 12%;">No KK</th>
                            <th style="width: 12%;">No Register KIA</th>
                            <th>Nama</th>
                            <th style="width: 10%;">Umur</th>
                            <th style="width: 15%;">Usia Kehamilan</th>
                            <th style="width: 15%;">Lokasi</th>
                            <th style="width: 18%;">Status Kehamilan</th>
                            <th style="width: 6%;">Aksi</th>
                        </tr>
                    </thead>

                    <?php $i = 1 + $awalData; ?>
                    <?php foreach ($hamil as $row) : ?>
                        <tr align="center" class="font-Form-Input">
                            <th style=""><?= $i ?></td>
                            <th style="width: 12%;">6312456659784</th>
                            <td style=""><?= $row["id_kia"]  ?></td>
                            <td style=""><?= $row["nama"]  ?></td>
                            <td style=""><?= $row["umur"] . " " . "Tahun"  ?></td>
                            <td style=""><?= $row["usia_kehamilan"] . " " . "Bulan" ?></td>
                            <th style="width: 15%;">Sungai Landas</th>
                            <td style=""><?= $row["status_kehamilan"] ?></td>
                            <td>
                                <a href="hapusHamil.php?id= <?= $row["id"] . "&id_kia=" . $row["id_kia"] . "&lingkar_lengan=" . $row["lingkar_lengan"] ?>" class="btn btn-sm btn-danger hapus" style="border-radius: 0px; border: 1px #dc3545;"><img src="img/icon/trashWhite.png" alt="" class="iconTable2"></a>

                                <a href="detailHamil.php?id= <?= $row["id"] ?>" class="btn btn-sm btn-info" style="border-radius: 0px;  background-color: #004f6e; border: 1px #004f6e;" id="tombol_detail"><img src="img/icon/view.png" alt="Detail" class="iconTable2" align="center"></a>
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

        <script src="js/jquery.js"></script>
        <script src="js/hamil.js"></script>
        <script src="sweetalert2-11.3.4/package/dist/sweetalert2.all.min.js"></script>

        <script>
            <?php foreach ($hamil as $row) : ?>
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
</div>

</html>