<script src="js/jquery.js"></script>
<script src="sweetalert2-11.3.4/package/dist/sweetalert2.all.min.js"></script>
<?php

require 'functions.php';

// Cek Apakah Tombol Telah di Tekan atau Belum
if (isset($_POST["submit"])) {

    // Cek apakah data telah berhasil ditambahkan atau tidak
    if (tambahKiaAnak($_POST) > 0) {
        echo "
            <script>
            $(document).ready(function(){

                Swal.fire({
                    title: 'Data Telah Tersimpan',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Oke'
                }).then((result) => {
                    if (result.isConfirmed) {
                        document.location.href = 'kiaAnak.php';
                    }
                })
    
            });
            </script>
        ";
    } else {
        echo "
            <script>
                alert ('Data Gagal di Tambahkan !');
            </script>
        ";
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SiLandas Tambah Data KIA Anak</title>
    <?php require 'link.php' ?>
</head>

<body>
    <!-- Heading -->
    <center>
        <img src="img/logo.png" alt="" height="64px" width="64px" style="margin-top: 8px">
        <img src="img/LOGO_GERMAS_NORMAL.png" alt="" height="64px" width="128px" style="margin-top: 8px">
    </center>
    <h3 align="center" class="font-Form" style="color:#4A5568; padding: 8px 0 0 0;">Form Tambah Data KIA Anak Desa Sungai Landas</h3>
    <p align="center" class="font-Form-Input" style="color:#4A5568; padding-bottom: 15px;">Kec. Karang Intan, Kab. Banjar, Prov. Kalimantan Selatan</p>


    <div class="container mb-3">
        <form action="" method="post" style="margin: 0px;">

            <!-- TOMBOL MENU & HEADING -->
            <div style="border: 1px solid #F0F0F0; border-radius: 8px;" class="mb-3">

                <div style="background-color: #006b65; border:1px solid #15ada7; padding:5px" class="mb-3">
                    <p class="font-Form" style="margin-top:12px; color:white" align="center">Menu Utama Tambah Data KIA Anak</p>
                </div>

                <div class="row gx-1 gy-3 mb-3">

                    <div class="col-sm-3" align="center">
                        <a href="index.php" style="border: 1px solid #E0E0E0; display:block; width:150px; height:80px; border-radius: 5px; box-shadow: 1px 1px 3px #ccc;" class="noUnderline btn">
                            <img src="img/icon/home.png" class="gambar" style="margin-top: 5px;">
                            <p class="font-Form-Input">Dashboard</p>
                        </a>
                    </div>

                    <div class="col-sm-3" align="center">
                        <button type="submit" class="btn" name="submit" style="border: 1px solid #F0F0F0; margin: 0px; padding: 0px 30px; box-shadow: 1px 1px 3px #ccc;">
                            <img src="img/icon/big-check-mark.png" class="gambar" style="padding: 0px; margin-top: 10px;">
                            <p class="font-Form-Input" style="margin-bottom:10px;">Simpan Data</p>
                        </button>
                    </div>


                    <div class="col-sm-3 batal_kia_anak" align="center">
                        <a href="tambahKiaAnak.php" style="border: 1px solid #E0E0E0; display:block; width:150px; height:80px; border-radius: 5px; box-shadow: 1px 1px 3px #ccc;" class="noUnderline btn">
                            <img src="img/icon/trash.png" class="gambar" style="margin-top: 5px;">
                            <p class="font-Form-Input">Batal</p>
                        </a>
                    </div>


                    <div class="col-sm-3" align="center" id="tombol_kembali">
                        <a href="kiaAnak.php" style="border: 1px solid #E0E0E0; display:block; width:150px; height:80px; border-radius: 5px; box-shadow: 1px 1px 3px #ccc;" class="noUnderline btn">
                            <img src="img/icon/undo.png" class="gambar" style="margin-top: 5px;">
                            <p class="font-Form-Input">Kembali</p>
                        </a>
                    </div>
                </div>
            </div>

            <div class="row gx-4 gy-1" style="margin-top:10px;">

                <!-- BANNER -->
                <div class="col-sm-5">
                    <div style="border:1px solid transparent;">
                        <div style="background-color: white; border-radius: 5px;" class="mb-2">
                            <img src="img/kia anak.jpg" style="width: 450px; height: 394px;" alt="">
                        </div>
                    </div>
                </div>

                <!-- IDENTITAS -->

                <div class="col-sm-7 font-Form-Input">
                    <div style="border:1px solid #F0F0F0; border-radius: 5px;">

                        <div style="background-color: white; border-radius: 5px;" class="mb-2">

                            <table class="table mb-2" style="border: 1px transparent; margin:0px;" cellspacing="0" cellpading="0">

                                <!-- KIA -->
                                <tr>
                                    <td style="width: 25%;"><label for="kia" style="margin-top: 5px;">No Register (KIA) </label></td>
                                    <td><input type="text" name="kia" id="kia" class="form-control" required autofocus autocomplete="off"></td>
                                </tr>
                                <!-- NAMA ANAK -->
                                <tr>
                                    <td><label for="nama" style="margin-top: 5px;">Nama Anak</label></td>
                                    <td><input type="text" name="nama_anak" id="nama_anak" class="form-control" required autofocus autocomplete="off"></td>
                                </tr>
                                <!-- NIK ANAK -->
                                <tr>
                                    <td><label for="nama" style="margin-top: 5px;">Nik Anak</label></td>
                                    <td><input type="text" name="nik_anak" id="nik_anak" class="form-control" required autofocus autocomplete="off"></td>
                                </tr>
                                <!-- NAMA IBU -->
                                <tr>
                                    <td><label for="nama" style="margin-top: 5px;">Nama Ibu</label></td>
                                    <td><input type="text" name="nama_ibu" id="nama_ibu" class="form-control" required autofocus autocomplete="off"></td>
                                </tr>
                                <!-- NIK IBU -->
                                <tr>
                                    <td><label for="nama" style="margin-top: 5px;">NIK Ibu</label></td>
                                    <td><input type="text" name="nik_ibu" id="nik_ibu" class="form-control" required autofocus autocomplete="off"></td>
                                </tr>
                                <!-- TANGGAL BUKU -->
                                <tr>
                                    <td><label for="nama" style="margin-top: 5px;">Tanggal Buku</label></td>
                                    <td><input type="date" name="tanggal_buku" id="tanggal_buku" class="form-control" required autofocus autocomplete="off"></td>
                                </tr>
                                <!-- KABUPATEN -->
                                <tr>
                                    <td><label for="nama" style="margin-top: 5px;">Kabupaten</label></td>
                                    <td><input type="text" name="kabupaten" id="kabupaten" class="form-control" required autofocus autocomplete="off" readonly value="Banjar"></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <footer>
        <div class=" text-center text-dark p-1" style="background-color: rgba(0, 0, 0, 0.2);">
            <!-- Facebook -->
            <a class="btn btn-link btn-md text-dark" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-facebook-f"></i></a>

            <!-- Instagram -->
            <a class="btn btn-link btn-floating btn-md text-dark m-1" href="https://www.instagram.com/reonald12/" role="button" data-mdb-ripple-color="dark"><i class="fab fa-instagram"></i></a>

            <!-- Google -->
            <a class="btn btn-link btn-floating btn-md text-dark m-1" href="https://www.google.com/search?client=firefox-b-d&q=sungai+landas" role="button" data-mdb-ripple-color="dark"><i class="fab fa-google"></i></a>
        </div>
    </footer>

    <script>
        $('.batal_kia_anak').on('click', function(e) {

            e.preventDefault();

            Swal.fire({
                title: 'Yakin Ingin Mengulang Form ?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya',
                cancelButtonText: 'Batal'
            }).then((result) => {
                if (result.isConfirmed) {
                    document.location.href = 'tambahKiaAnak.php';
                }
            })
        });
    </script>
</body>

</html>