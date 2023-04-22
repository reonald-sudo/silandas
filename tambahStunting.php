<script src="js/jquery.js"></script>
<script src="sweetalert2-11.3.4/package/dist/sweetalert2.all.min.js"></script>

<?php

session_start();

if (!isset($_SESSION['login'])) {
    header('Location:login.php');
}

require 'functions.php';

// Cek Apakah Tombol Telah di Tekan atau Belum
if (isset($_POST["submit"])) {

    // Cek apakah data telah berhasil ditambahkan atau tidak
    if (tambahStunting($_POST) > 0 && GrafikPerorangan($_POST) > 0) {
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
                    document.location.href = 'stunting.php';
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


// cek apakah input file di isi
if (isset($_POST['foto'])) {
    uploadStunting();
}

$stunting = query("SELECT * FROM stunting");

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SiLandas | Tambah Data Stunting</title>
    <?php require 'link.php' ?>
</head>

<body>
    <!-- Heading -->
    <center>
        <img src="img/logo.png" alt="" height="64px" width="64px" style="margin-top: 8px">
        <img src="img/LOGO_GERMAS_NORMAL.png" alt="" height="64px" width="128px" style="margin-top: 8px">
    </center>
    <h3 align="center" class="font-Form" style="color:#4A5568; padding: 8px 0 0 0;">Form Tambah Data Pemantauan Anak Desa Sungai Landas</h3>
    <p align="center" class="font-Form-Input" style="color:#4A5568; padding-bottom: 15px;">Kec. Karang Intan, Kab. Banjar, Prov. Kalimantan Selatan</p>

    <div class="container mb-3">
        <form action="" class="needs-validation" method="post" style="margin: 0px;" enctype="multipart/form-data">

            <!-- TOMBOL MENU & HEADING -->
            <div style="border: 1px solid #F0F0F0; border-radius: 8px;" class="mb-3">

                <div style="background-color: #15ada7; border:1px solid #15ada7; padding:5px" class="mb-3">
                    <p class="font-Form" style="margin-top:12px; color:white" align="center">Menu Utama Tambah Data Stunting Anak</p>
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
                            <p class="font-Form-Input" style="margin-bottom:10px; ">Simpan Data</p>
                        </button>
                    </div>


                    <div class="col-sm-3 batal_stunting" align="center">
                        <a href="tambahStunting.php" style="border: 1px solid #E0E0E0; display:block; width:150px; height:80px; border-radius: 5px; box-shadow: 1px 1px 3px #ccc;" class="noUnderline btn">
                            <img src="img/icon/trash.png" class="gambar" style="margin-top: 5px;">
                            <p class="font-Form-Input">Batal</p>
                        </a>
                    </div>


                    <div class="col-sm-3" align="center" id="tombol_kembali">
                        <a href="stunting.php" style="border: 1px solid #E0E0E0; display:block; width:150px; height:80px; border-radius: 5px; box-shadow: 1px 1px 3px #ccc;" class="noUnderline btn">
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

                        <div style="background-color: #15ada7; border:1px solid #15ada7; border-radius: 5px;" class="mb-1">
                            <p class="font-Form" style="margin-top: 10px; color:white" align="center">Biodata</p>
                        </div>


                        <div>

                            <table class="table mb-2 font-Form-Input" style="border: 1px transparent; margin:0px;" cellspacing="0" cellpading="0">

                                <!-- KIA -->
                                <tr>
                                    <td style="width: 40%;"><label for="nik" style="margin-top: 5px; ">No Register (KIA) </label></td>
                                    <td><input type="text" name="kia" id="kia" class="form-control" required autofocus autocomplete="on" onkeyup="autoFillKiaAnak()">
                                    </td>
                                </tr>
                                <!-- NAMA ANAK -->
                                <tr>
                                    <td><label for="nama" style="margin-top: 5px; ">Nama Anak</label></td>
                                    <td><input type="text" name="nama" id="nama" class="form-control" readonly required autofocus autocomplete="off"></td>
                                </tr>
                                <!-- UMUR -->
                                <tr>
                                    <td><label for="umur" style="margin-top: 5px; ">Umur</label></td>
                                    <td><input type="number" name="umur" id="umur" class="form-control" placeholder="*Dalam bulan" required autofocus autocomplete="off" onkeyup="hitungStunting()" onkeyup="autoFillKiaAnak()" min="0" max="24">
                                    </td>
                                </tr>
                                <!-- JENIS KELAMIN -->
                                <tr>
                                    <td><label for="jenis_kelamin">Jenis Kelamin</label></td>
                                    <td>
                                        <div onclick="hitungStunting()">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="jenis_kelamin" value="Laki-laki" id="jenis_kelamin_laki_laki">
                                                <label class="form-check-label">Laki - Laki</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="jenis_kelamin" value="Perempuan" id="jenis_kelamin_perempuan">
                                                <label class="form-check-label">Perempuan</label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <!-- BERAT BADAN -->
                                <tr>
                                    <td><label for="berat_badan" style="margin-top: 5px; ">Berat Badan</label></td>
                                    <td><input type="number" step="0.1" name="berat_badan" id="berat_badan" class="form-control" placeholder="*Dalam kg" required autofocus autocomplete="off" onkeyup="hitungStunting()"></td>
                                </tr>
                                <!-- TINGGI BADAN -->
                                <tr>
                                    <td><label for="tinggi_badan" style="margin-top: 5px; ">Tinggi Badan</label></td>
                                    <td><input type="number" name="tinggi_badan" id="tinggi_badan" class="form-control" placeholder="*Dalam cm" required autofocus autocomplete="off" onkeyup="hitungStunting()"></td>
                                </tr>
                                <!-- UPLOAD FOTO -->
                                <tr>
                                    <td><label for="foto" style="margin-top: 5px; ">Unggah Foto</label></td>
                                    <td><input type="file" name="foto" id="foto" class="form-control"></td>
                                </tr>
                                <!-- ID PETUGAS PNEANGUNG JAWAB -->
                                <tr>
                                    <td><label for="id_petugas" align="center" style="margin-top: 5px; ">ID Petugas</label></td>
                                    <td>
                                        <select class="form-select" id="id_petugas" name="id_petugas" required>
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


                            <!-- STATUS GIZI -->
                            <div style="background-color: #15ada7; border:1px solid #15ada7; border-radius: 3px;" class="mb-2 font-Form">
                                <p style="margin-top: 10px; color:white" align="center">Status Gizi</p>
                            </div>


                            <table class="table mb-2 font-Form-Input" style="border: 1px solid transparent; margin:0px; padding:0px;">
                                <tr>
                                    <td><label for="" style="margin-top: 5px;">BB/U</label></td>
                                    <td><input type="text" class="form-control" name="status_gizi_bb_u" id="status_gizi_bb_u" readonly></td>
                                </tr>
                                <tr>
                                    <td><label for="" style="margin-top: 5px;">TB/U</label></td>
                                    <td><input type="text" class="form-control" name="status_gizi_tb_u" id="status_gizi_tb_u" readonly></td>
                                </tr>
                                <tr>
                                    <td><label for="" style="margin-top: 5px;">IMT/U</label></td>
                                    <td><input type="text" class="form-control" name="status_gizi_imt_u" id="status_gizi_imt_u" readonly></td>
                                </tr>
                            </table>

                            <div style="background-color: #15ada7; border:1px solid #15ada7; border-radius: 3px;" class="mb-2 font-Form">
                                <p style="margin-top: 10px; color:white" align="center">Bulan Pemeriksaan</p>
                            </div>

                            <table class="table" style="border: 1px solid transparent; margin:0px; padding:0px;">
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
                        <div style="background-color: #15ada7; border:1px solid #15ada7; border-radius: 5px;" class="mb-2 font-Form">
                            <p style="margin-top: 10px; color:white" align="center">Indikator Layanan</p>
                        </div>

                        <div id="indikator_layanan" name="indikator_layanan">
                            <table class="table table-bordered font-Form-Input" style="border:1px transparent; margin: 0px; padding: 0px;">

                                <!-- PEMBERIAN IMUNISASI DASAR -->
                                <tr>
                                    <td style="width: 45%;"><label for="pemberian_imunisasi_dasar" align="center" style="margin-top: 5px;">Pemberian Imunisasi Dasar</label></td>
                                    <td>
                                        <select class="form-select" id="pemberian_imunisasi_dasar" name="pemberian_imunisasi_dasar" required>
                                            <option selected>Pilih...</option>
                                            <option value="Y">Ya</option>
                                            <option value="T">Tidak</option>
                                        </select>
                                    </td>
                                </tr>
                                <!-- PENGUKURAN BERAT BADAN -->
                                <tr>
                                    <td style="width: 45%;"><label for="pengukuran_berat_badan" align="center" style="margin-top: 5px;">Pengukuran Berat Badan</label></td>
                                    <td>
                                        <select class="form-select" id="pengukuran_berat_badan" name="pengukuran_berat_badan">
                                            <option selected>Pilih...</option>
                                            <option value="Y">Ya</option>
                                            <option value="T">Tidak</option>
                                        </select>
                                    </td>
                                </tr>

                                <!-- PENGUKURAN TINGGI BADAN -->
                                <tr>
                                    <td style="width: 45%;"><label for="pengukuran_tinggi_badan" align="center" style="margin-top: 5px;">Pengukuran Tinggi Badan</label></td>
                                    <td>
                                        <select class="form-select" id="pengukuran_tinggi_badan" name="pengukuran_tinggi_badan">
                                            <option selected>Pilih...</option>
                                            <option value="Y">Ya</option>
                                            <option value="T">Tidak</option>
                                        </select>
                                    </td>
                                </tr>

                                <!-- KONSELING GIZI BAGI ORANG TUA -->
                                <tr>
                                    <td style="width: 45%;"><label for="konseling_gizi_bagi_ortu" align="center" style="margin-top: 5px;">Konseling Gizi Bagi Orang Tua</label></td>
                                    <td>
                                        <select class="form-select" id="konseling_gizi_bagi_ortu" name="konseling_gizi_bagi_ortu">
                                            <option selected>Pilih...</option>
                                            <option value="Y">Ya</option>
                                            <option value="T">Tidak</option>
                                        </select>
                                    </td>
                                </tr>

                                <!-- KUNJUNGAN KE RUMAH -->
                                <tr>
                                    <td style="width: 45%;"><label for="kunjungan_rumah" align="center" style="margin-top: 5px;">Kunjungan Ke Rumah</label></td>
                                    <td>
                                        <select class="form-select" id="kunjungan_rumah" name="kunjungan_rumah">
                                            <option selected>Pilih...</option>
                                            <option value="Y">Ya</option>
                                            <option value="T">Tidak</option>
                                        </select>
                                    </td>
                                </tr>

                                <!-- KEPEMILIKAN AKSES AIR BERSIH -->
                                <tr>
                                    <td style="width: 45%;"><label for="kepemilikan_akses_air_bersih" align="center" style="margin-top: 5px;">Kepemilikan Akses Air Bersih</label></td>
                                    <td>
                                        <select class="form-select" id="kepemilikan_akses_air_bersih" name="kepemilikan_akses_air_bersih">
                                            <option selected>Pilih...</option>
                                            <option value="Y">Ya</option>
                                            <option value="T">Tidak</option>
                                        </select>
                                    </td>
                                </tr>

                                <!-- KEPEMILIKAN JAMBAN SEHAT -->
                                <tr>
                                    <td style="width: 45%;"><label for="kepemilikan_jamban_sehat" align="center" style="margin-top: 5px;">Kepemilikan Jamban Sehat</label></td>
                                    <td>
                                        <select class="form-select" id="kepemilikan_jamban_sehat" name="kepemilikan_jamban_sehat">
                                            <option selected>Pilih...</option>
                                            <option value="Y">Ya</option>
                                            <option value="T">Tidak</option>
                                        </select>
                                    </td>
                                </tr>

                                <!-- AKTA LAHIR -->
                                <tr>
                                    <td style="width: 45%;"><label for="akta_lahir" align="center" style="margin-top: 5px;">Akta Lahir</label></td>
                                    <td>
                                        <select class="form-select" id="akta_lahir" name="akta_lahir">
                                            <option selected>Pilih...</option>
                                            <option value="Y">Ya</option>
                                            <option value="T">Tidak</option>
                                        </select>
                                    </td>
                                </tr>

                                <!-- JAMINAN KESEHATAN -->
                                <tr>
                                    <td style="width: 45%;"><label for="jaminan_kesehatan" align="center" style="margin-top: 5px;">Jaminan Kesehatan</label></td>
                                    <td>
                                        <select class="form-select" id="jaminan_kesehatan" name="jaminan_kesehatan">
                                            <option selected>Pilih...</option>
                                            <option value="Y">Ya</option>
                                            <option value="T">Tidak</option>
                                        </select>
                                    </td>
                                </tr>

                                <!-- PENGASUHAN PAUD -->
                                <tr>
                                    <td style="width: 45%;"><label for="pengasuhan_paud" align="center" style="margin-top: 5px;">Pengasuhan (PAUD)</label></td>
                                    <td>
                                        <select class="form-select" id="pengasuhan_paud" name="pengasuhan_paud">
                                            <option selected>Pilih...</option>
                                            <option value="Y">Ya</option>
                                            <option value="T">Tidak</option>
                                        </select>
                                    </td>
                                </tr>

                            </table>
                        </div>

                        <!-- TINGKAT KONVERGENSI INDIKATOR -->
                        <div style="background-color: #15ada7; border:1px solid #15ada7; border-radius: 3px;" class="mb-2 font-Form">
                            <p style="margin-top: 10px; color:white" align="center">Tingkat Konvergensi Indikator</p>
                        </div>

                        <table class="table table-bordered font-Form-Input" style="border: 1px transparent; margin:0px; padding: 0px;">

                            <!-- JUMLAH DITERIMA LENGKAP -->
                            <tr>
                                <td style="width: 45%;"><label for="jumlah_diterima_lengkap" align="center" style="margin-top: 5px;">Jumlah Diterima Lengkap</label></td>
                                <td><input type="text" name="jumlah_diterima_lengkap" id="jumlah_diterima_lengkap" class="form-control" readonly></td>
                            </tr>

                            <!-- JUMLAH SEHARUSNYA -->
                            <tr>
                                <td style="width: 45%;"><label for="jumlah_seharusnya" align="center" style="margin-top: 5px;">Jumlah Seharusnya</label></td>
                                <td><input type="text" name="jumlah_seharusnya" id="jumlah_seharusnya" class="form-control" readonly></td>
                            </tr>

                            <!-- PRESENTASE -->
                            <tr>
                                <td style="width: 45%;"><label for="presentase" align="center" style="margin-top: 5px;">Presentase</label></td>
                                <td><input type="text" name="presentase" id="presentase" class="form-control" placeholder="*Dalam %" readonly></td>
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

    <script src="js/hitungStunting7.js"></script>
    <script src="js/hitungIndikatorLayananStunting.js"></script>
    <script src="js/autoFillKiaAnak.js"></script>
    <script src="js/validation.js"></script>

    <script>
        $('.batal_stunting').on('click', function(e) {

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
                    document.location.href = 'tambahStunting.php';
                }
            })
        });
    </script>
</body>

</html>