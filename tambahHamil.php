<script src="js/jquery.js"></script>
<script src="sweetalert2-11.3.4/package/dist/sweetalert2.all.min.js"></script>

<?php

session_start();

if (!isset($_SESSION['login'])) {
    header('Location:login.php');
}

require 'functions.php';

if (isset($_POST["submit"])) {

    if (tambahHamil($_POST) > 0 && GrafikPeroranganHamil($_POST) > 0) {
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
                        document.location.href = 'hamil.php';
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

// cek apakah gambar di isi
if (isset($_POST['foto'])) {
    uploadHamil();
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SiLandas | Tambah Data Hamil</title>
    <link rel="stylesheet" href="css/jquery-ui.min.css">
    <?php require 'link.php' ?>
</head>

<body>
    <!-- Heading -->
    <center>
        <img src="img/logo.png" alt="" height="64px" width="64px" style="margin-top: 8px">
        <img src="img/LOGO_GERMAS_NORMAL.png" alt="" height="64px" width="128px" style="margin-top: 8px">
    </center>
    <h3 align="center" class="font-Form" style="color:#4A5568; padding: 8px 0 0 0;">Form Tambah Data Kehamilan Ibu Desa Sungai Landas</h3>
    <p align="center" class="font-Form-Input" style="color:#4A5568; padding-bottom: 15px;">Kec. Karang Intan, Kab. Banjar, Prov. Kalimantan Selatan</p>

    <div class="container mb-3">
        <form action="" method="post" style="margin: 0px;" enctype="multipart/form-data">

            <!-- TOMBOL MENU & HEADING -->
            <div style="border: 1px solid #F0F0F0; border-radius: 8px;" class="mb-3">

                <div style="background-color: #1EA3B2; border:1px solid #1EA3B2; padding:5px" class="mb-3 font-Form">
                    <p style="margin-top:12px; color:white" align="center">Menu Utama Tambah Data Program Kehamilan</p>
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
                            <p style="margin-bottom:10px;" class="font-Form-Input">Simpan Data</p>
                        </button>
                    </div>

                    <div class="col-sm-3 batal_hamil" align="center">
                        <a href="tambahHamil.php" style="border: 1px solid #E0E0E0; display:block; width:150px; height:80px; border-radius: 5px; box-shadow: 1px 1px 3px #ccc;" class="noUnderline btn">
                            <img src="img/icon/trash.png" class="gambar" style="margin-top: 5px;">
                            <p class="font-Form-Input">Batal</p>
                        </a>
                    </div>


                    <div class="col-sm-3" align="center">
                        <a href="hamil.php" style="border: 1px solid #E0E0E0; display:block; width:150px; height:80px; border-radius: 5px; box-shadow: 1px 1px 3px #ccc;" class="noUnderline btn">
                            <img src="img/icon/undo.png" class="gambar" style="margin-top: 5px;">
                            <p class="font-Form-Input">Kembali</p>
                        </a>
                    </div>
                </div>
            </div>


            <div class="row gx-4 gy-1" style="margin-top:10px;">

                <!-- BIODATA -->
                <div class="col-sm-5">
                    <div style="border:1px solid #F0F0F0; border-radius: 5px;">

                        <div style="background-color: #1EA3B2; border:1px solid #1EA3B2; border-radius: 5px;" class="mb-2 font-Form">
                            <p style="margin-top: 10px; color:white" align="center">Biodata</p>
                        </div>


                        <div>

                            <table class="table mb-2" style="border: 1px transparent; margin:0px; padding: 0px;" cellspacing="0" cellpading="0">

                                <!-- KIA -->
                                <tr>
                                    <td style="width: 40%;">
                                        <label for="kia" class="font-Form-Input" style="margin-top: 5px;">No Register KIA</label>
                                    </td>
                                    <td>
                                        <input type="text" name="kia" id="kia" class="form-control font-Form-Input" required autofocus autocomplete="on" onkeyup="autoFillKiaIbu()">
                                        <div id="box_pencarian"></div>
                                    </td>
                                </tr>
                                <!-- NAMA IBU -->
                                <tr>
                                    <td><label for="nama" class="font-Form-Input" style="margin-top: 5px;">Nama Ibu</label></td>
                                    <td><input type="text" name="nama" id="nama" class="form-control font-Form-Input" required autofocus autocomplete="off" readonly></td>
                                </tr>
                                <!-- UMUR IBU -->
                                <tr>
                                    <td><label for="umur" class="font-Form-Input" style="margin-top: 5px;">Umur</label></td>
                                    <td><input type="text" name="umur" id="umur" class="form-control font-Form-Input" onkeyup="hitungHamil()" readonly></td>
                                </tr>
                                <!-- UPLOAD FOTO -->
                                <tr>
                                    <td><label for="foto" class="font-Form-Input" style="margin-top: 5px;">Unggah Foto</label></td>
                                    <td><input type="file" name="foto" id="foto" class="form-control font-Form-Input"></td>
                                </tr>
                                <!-- ID PETUGAS PNEANGUNG JAWAB -->
                                <tr>
                                    <td><label for="id_petugas" align="center" class="font-Form-Input" style="margin-top: 5px;">ID Petugas</label></td>
                                    <td>
                                        <select class="form-select font-Form-Input" id="id_petugas" name="id_petugas" required>
                                            <option selected>-- Pilih --</option>
                                            <?php

                                            $idPetugas = "SELECT * FROM petugas";
                                            $result = mysqli_query($conn, $idPetugas);

                                            if (mysqli_num_rows($result) > 0) {

                                                while ($row = mysqli_fetch_assoc($result)) {
                                            ?>
                                                    <option value="<?= $row['id_petugas'] ?>"><?= $row['id_petugas'] ?></option>
                                            <?php
                                                }
                                            }
                                            ?>
                                        </select>
                                    </td>
                                </tr>

                            </table>

                            <!-- USIA KEHAMILAN DAN PERSALINAN -->
                            <div style="background-color: #1EA3B2; border:1px solid #1EA3B2; border-radius: 3px;">
                                <p class="font-Form" style="margin-top: 10px; color:white" align="center">Usia Kehamilan dan Persalinan</p>
                            </div>

                            <table class="table" style="border: 1px transparent; margin: 0px; padding: 0px;">

                                <!-- USIA KEHAMILAN -->
                                <tr>
                                    <td style="width: 40%;"><label for="usia_kehamilan" align="center" style="margin-top: 5px;" class="font-Form-Input">Usia Kehamilan</label></td>
                                    <td><input type="number" name="usia_kehamilan" id="usia_kehamilan" class="form-control font-Form-Input" placeholder="*Dalam Bulan" required autofocus autocomplete="off"></td>
                                </tr>

                                <!-- LINGKAR LENGAN -->
                                <tr>
                                    <td style="width: 40%;"><label for="lingkar_lengan" align="center" style="margin-top: 5px;" class="font-Form-Input">Lingkar Lengan</label></td>
                                    <td><input type="number" name="lingkar_lengan" id="lingkar_lengan" class="form-control font-Form-Input" placeholder="*Dalam Cm" required autofocus autocomplete="off" onkeyup="hitungHamil ()"></td>
                                </tr>

                                <!-- TANGGAL MELAHIRKAN -->
                                <tr>
                                    <td style="width: 35%;"><label for="tanggal_melahirkan" align="center" style="margin-top: 5px;" class="font-Form-Input">Tanggal Melahirkan</label></td>
                                    <td><input type="date" name="tanggal_melahirkan" id="tanggal_melahirkan" class="form-control font-Form-Input" required></td>
                                </tr>
                            </table>

                            <!-- STATUS KEHAMILAN -->
                            <div style="background-color: #1EA3B2; border:1px solid #1EA3B2; border-radius: 3px;" class="mb-2 font-Form">
                                <p style="margin-top: 10px; color:white" align="center">Status Kehamilan (KEK/RESTI/N)</p>
                            </div>

                            <table class="table" style="border: 1px solid transparent; margin:0px; padding:0px;">
                                <tr>
                                    <td><input type="text" name="status_kehamilan" id="status_kehamilan" class="form-control font-Form-Input" readonly></td>
                                </tr>
                            </table>

                            <!-- BULAN PEMERIKSAAN -->
                            <table class="table table-bordered" style="border: 1px transparent; margin:0px; padding: 0px;">

                                <div style="background-color: #1EA3B2; border:1px solid #1EA3B2; border-radius: 3px;" class="mb-2 font-Form">
                                    <p style="margin-top: 10px; color:white" align="center">Bulan Pemeriksaan</p>
                                </div>

                                <tr>
                                    <td>
                                        <select name="bulan_pemeriksaan" class="form-control" id="bulan_pemeriksaan">
                                            <option value="">Pilih Bulan</option>
                                            <option value="01">Januari</option>
                                            <option value="02">Februari</option>
                                            <option value="03">Maret</option>
                                            <option value="04">April</option>
                                            <option value="05">Mei</option>
                                            <option value="06">Juni</option>
                                            <option value="07">Juli</option>
                                            <option value="08">Agustus</option>
                                            <option value="09">September</option>
                                            <option value="10">Oktober</option>
                                            <option value="11">November</option>
                                            <option value="12">Desember</option>
                                        </select>
                                    </td>
                                </tr>

                            </table>
                        </div>
                    </div>
                </div>

                <!-- STATUS PENERIMAAN INDIKATOR -->
                <div class="col-sm-7">

                    <div style="border:1px solid #F0F0F0; border-radius:5px;">

                        <!-- SATUS PENERIMAAN INDIKATOR -->
                        <div style="background-color: #1EA3B2; border:1px solid #1EA3B2; border-radius: 5px;" class="mb-2 font-Form">
                            <p style="margin-top: 10px; color:white" align="center">Status Penerimaan Indikator</p>
                        </div>

                        <table class="table table-bordered mb-1" style="border:1px transparent; margin: 0px; padding: 0px;">

                            <!-- PEMERIKSAAN KEHAMILAN -->
                            <tr>
                                <td style="width: 45%;"><label for="pemeriksaan_kehamilan" align="center" style="margin-top: 5px;" class="font-Form-Input">Pemeriksaan Kehamilan</label></td>
                                <td>
                                    <select class="form-select font-Form-Input" id="pemeriksaan_kehamilan" name="pemeriksaan_kehamilan">
                                        <option selected>Pilih...</option>
                                        <option value="Y">Ya</option>
                                        <option value="T">Tidak</option>
                                    </select>
                                </td>
                            </tr>

                            <!-- DAPAT DAN KONSUMSI PILL FE -->
                            <tr>
                                <td style="width: 45%;"><label for="dapat_konsumsi_pil_fe" align="center" style="margin-top: 5px;" class="font-Form-Input">Dapat & Konsumsi Pill Fe</label></td>
                                <td>
                                    <select class="form-select font-Form-Input" id="dapat_konsumsi_pil_fe" name="dapat_konsumsi_pil_fe">
                                        <option selected>Pilih...</option>
                                        <option value="Y">Ya</option>
                                        <option value="T">Tidak</option>
                                    </select>
                                </td>
                            </tr>

                            <!-- PEMERIKSAAN NI'AS -->
                            <tr>
                                <td style="width: 45%;"><label for="pemeriksaan_nias" align="center" style="margin-top: 5px;" class="font-Form-Input">Pemeriksaan Ni'as</label></td>
                                <td>
                                    <select class="form-select font-Form-Input" id="pemeriksaan_nias" name="pemeriksaan_nias">
                                        <option selected>Pilih...</option>
                                        <option value="Y">Ya</option>
                                        <option value="T">Tidak</option>
                                    </select>
                                </td>
                            </tr>

                            <!-- KONSELING GIZI -->
                            <tr>
                                <td style="width: 45%;"><label for="konseling_gizi" align="center" style="margin-top: 5px;" class="font-Form-Input">Konseling Gizi (Kelas 1H)</label></td>
                                <td>
                                    <select class="form-select font-Form-Input" id="konseling_gizi" name="konseling_gizi">
                                        <option selected>Pilih...</option>
                                        <option value="Y">Ya</option>
                                        <option value="T">Tidak</option>
                                    </select>
                                </td>
                            </tr>

                            <!-- KUNJUNGAN RUMAH -->
                            <tr>
                                <td style="width: 45%;"><label for="kunjungan_rumah" align="center" style="margin-top: 5px;" class="font-Form-Input">Kunjungan Rumah</label></td>
                                <td>
                                    <select class="form-select font-Form-Input" id="kunjungan_rumah" name="kunjungan_rumah">
                                        <option selected>Pilih...</option>
                                        <option value="Y">Ya</option>
                                        <option value="T">Tidak</option>
                                    </select>
                                </td>
                            </tr>

                            <!-- KEPEMILIKAN AKSES AIR BERSIH -->
                            <tr>
                                <td style="width: 45%;"><label for="kepemilikan_akses_air_bersih" align="center" style="margin-top: 5px;" class="font-Form-Input">Kepemilikan Akses Air Bersih</label></td>
                                <td>
                                    <select class="form-select font-Form-Input" id="kepemilikan_akses_air_bersih" name="kepemilikan_akses_air_bersih">
                                        <option selected>Pilih...</option>
                                        <option value="Y">Ya</option>
                                        <option value="T">Tidak</option>
                                    </select>
                                </td>
                            </tr>

                            <!-- KEPEMILIKAN JAMBAN -->
                            <tr>
                                <td style="width: 45%;"><label for="kepemilikan_jamban" align="center" style="margin-top: 5px;" class="font-Form-Input">Kepemilikan Jamban</label></td>
                                <td>
                                    <select class="form-select font-Form-Input" id="kepemilikan_jamban" name="kepemilikan_jamban">
                                        <option selected>Pilih...</option>
                                        <option value="Y">Ya</option>
                                        <option value="T">Tidak</option>
                                    </select>
                                </td>
                            </tr>

                            <!-- KEPEMILIKAN JAMINAN KESEHATAN -->
                            <tr>
                                <td style="width: 45%;"><label for="jaminan_kesehatan" align="center" style="margin-top: 5px;" class="font-Form-Input">Jaminan Kesehatan</label></td>
                                <td>
                                    <select class="form-select font-Form-Input" id="jaminan_kesehatan" name="jaminan_kesehatan">
                                        <option selected>Pilih...</option>
                                        <option value="Y">Ya</option>
                                        <option value="T">Tidak</option>
                                    </select>
                                </td>
                            </tr>
                        </table>

                        <!-- TINGKAT KONVERGENSI INDIKATOR -->
                        <div style="background-color: #1EA3B2; border:1px solid #1EA3B2; border-radius: 3px;" class="mb-2 font-Form">
                            <p style="margin-top: 10px; color:white" align="center">Tingkat Konvergensi Indikator</p>
                        </div>

                        <table class="table table-bordered mb-1" style="border: 1px transparent; margin:0px; padding: 0px;">

                            <!-- JUMLAH DITERIMA LENGKAP -->
                            <tr>
                                <td style="width: 45%;"><label for="jumlah_diterima_lengkap" align="center" style="margin-top: 5px;" class="font-Form-Input">Jumlah Diterima Lengkap</label></td>
                                <td><input type="number" name="jumlah_diterima_lengkap" id="jumlah_diterima_lengkap" class="form-control font-Form-Input" readonly></td>
                            </tr>

                            <!-- JUMLAH SEHARUSNYA-->
                            <tr>
                                <td style="width: 45%;"><label for="jumlah_seharusnya" align="center" style="margin-top: 5px;" class="font-Form-Input">Jumlah Seharusnya</label></td>
                                <td><input type="number" name="jumlah_seharusnya" id="jumlah_seharusnya" class="form-control font-Form-Input" readonly></td>
                            </tr>

                            <!-- JUMLAH PRESENTASE -->
                            <tr>
                                <td style="width: 45%;"><label for="presentase" align="center" style="margin-top: 5px;" class="font-Form-Input">Presentase</label></td>
                                <td><input type="text" name="presentase" id="presentase" class="form-control font-Form-Input" placeholder="*Dalam %" readonly></td>
                            </tr>

                        </table>
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

    <script src="js/jquery.js"></script>
    <!-- <script src="js/jquery-ui.min.js"></script>
    <script src="js/jquery-ui.js"></script> -->
    <script src="js/tambahHamil.js"></script>
    <script src="js/hitungIndikatorLayananHamil.js"></script>
    <script src="js/autoFillKiaIbu.js"></script>


    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/resources/demos/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>

    <script>
        $('.batal_hamil').on('click', function(e) {

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
                    document.location.href = 'tambahHamil.php';
                }
            })
        });
    </script>

    <!-- <script>
        $(function() {
            $('#kia').autocomplete({
                source: function(request, response) {
                    // fetch data
                    $.ajax({
                        url: 'autoFillKiaIbu.php',
                        type: 'post',
                        dataType: 'json',
                        data: {
                            search: request.term
                        },
                        success: function(data) {
                            response(data);
                        }
                    });
                },
                select: function(event, ui) {
                    event.preventDefault();

                    $('#kia').val(ui.kia); //Display The Selected Text
                    return false;
                }
            });
        })
    </script> -->

</body>

</html>