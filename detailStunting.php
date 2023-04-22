<script src="js/jquery.js"></script>
<script src="sweetalert2-11.3.4/package/dist/sweetalert2.all.min.js"></script>
<?php

session_start();

if (!isset($_SESSION['login'])) {
    header('Location:login.php');
}

require 'functions.php';

$id = $_GET["id"];

function bulan($text)
{
    if ($text == "01") return "Januari";
    if ($text == "02") return "Februari";
    if ($text == "03") return "Maret";
    if ($text == "04") return "April";
    if ($text == "05") return "Mei";
    if ($text == "06") return "Juni";
    if ($text == "07") return "Juli";
    if ($text == "08") return "Agustus";
    if ($text == "09") return "September";
    if ($text == "10") return "Oktober";
    if ($text == "11") return "November";
    if ($text == "12") return "Desember";
}


// $detailStunting = detailStunting("SELECT * FROM stunting JOIN grafik_perorangan_stunting ON stunting.id_kia = grafik_perorangan_stunting.id_kia WHERE stunting.id=$id");

$detailStunting = detailStunting("SELECT * FROM stunting WHERE id = $id");
// $detailGrafikStunting = detailStunting("SELECT * FROM grafik_perorangan_stunting WHERE id_kia = $id_kia");

if (isset($_POST["ubah"])) {
    // Cek apakah data telah berhasil ditambahkan atau tidak
    if (ubahStuntingGrafikPerorangan($_POST) > 0 && ubahStunting($_POST) > 0) {
        echo "
            <script>
            $(document).ready(function(){

                Swal.fire({
                    title: 'Data Telah Diubah!',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Oke'
                }).then((result) => {
                    if (result.isConfirmed) {
                        document.location.href = 'detailStunting.php?id= $id';
                    }
                })
    
            });
            </script>
        ";
    } else {
        var_dump($detailStunting);
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Silandas | Detail Data <?= $detailStunting["nama"]  ?> </title>
    <?php require 'link.php' ?>
    <script src="js/jquery.js"></script>
</head>

<body>
    <form action="" method="POST" enctype="multipart/form-data">
        <!-- Heading -->
        <center>
            <img src="img/logo.png" alt="" height="64px" width="64px" style="margin-top: 8px">
            <img src="img/LOGO_GERMAS_NORMAL.png" alt="" height="64px" width="128px" style="margin-top: 8px">
        </center>
        <h3 align="center" class="font-Form" style="color:#4A5568; padding: 8px 0 0 0;">Detail Data Pemantauan Anak Desa Sungai Landas</h3>
        <p align="center" class="font-Form-Input" style="color:#4A5568; padding-bottom: 15px;">Kec. Karang Intan, Kab. Banjar, Prov. Kalimantan Selatan</p>

        <div class="container mb-3">

            <!-- TOMBOL MENU & HEADING -->
            <div style="border: 1px solid #F0F0F0; border-radius: 8px;" class="mb-3">

                <div style="background-color: #15ada7; border:1px solid #15ada7; padding:5px" class="mb-3 font-Form">
                    <p style="color: white; margin-top:12px;" align="center">Menu Utama Detail Data</p>
                </div>

                <div class="row gx-1 gy-3 mb-3">

                    <div class="col-sm-3" align="center">
                        <a href="index.php" style="border: 1px solid #E0E0E0; display:block; width:150px; height:80px; border-radius: 5px; box-shadow: 1px 1px 3px #ccc;" class="noUnderline btn">
                            <img src="img/icon/home.png" class="gambar" style="margin-top: 5px;">
                            <p class="font-Form-Input">Dashboard</p>
                        </a>
                    </div>

                    <div class="col-sm-3" align="center" id="tombol_edit">
                        <a style="border: 1px solid #E0E0E0; display:block; width:150px; height:80px; border-radius: 5px; box-shadow: 1px 1px 3px #ccc;" class="noUnderline btn">
                            <img src=" img/icon/editing.png" class="gambar" style="margin-top: 3px;">
                            <p class="font-Form-Input">Edit Data</p>
                        </a>
                    </div>

                    <div class="col-sm-3" align="center">
                        <a href="cetakStunting.php?id=<?= $detailStunting["id"] ?>" target="blank" style="border: 1px solid #E0E0E0; display:block; width:150px; height:80px; border-radius: 5px; box-shadow: 1px 1px 3px #ccc;" class="noUnderline btn">
                            <img src="img/icon/print.png" class="gambar" style="margin-top: 5px;">
                            <p class="font-Form-Input">Cetak Data</p>
                        </a>
                    </div>


                    <div class="col-sm-3" align="center">
                        <a href="stunting.php" style="border: 1px solid #E0E0E0; display:block; width:150px; height:80px; border-radius: 5px; box-shadow: 1px 1px 3px #ccc;" class="noUnderline btn">
                            <img src="img/icon/undo.png" class="gambar" style="margin-top: 5px;">
                            <p class="font-Form-Input">Kembali</p>
                        </a>
                    </div>
                </div>
            </div>

            <div style="border: 1px solid #F0F0F0; border-radius: 8px; margin-top: 10px;" class="col-sm-12 font-Form-Input">
                <div class="row g-1">
                    <!-- INFO BIODATA -->
                    <div>
                        <div class="font-Form" style="background-color: #15ada7; border-radius:5px; padding:1px;">
                            <p style="color:white; margin-top:12px;" align="center">Biodata</p>
                        </div>
                    </div>

                    <!-- GAMBAR -->
                    <div class="col-sm-2">
                        <img src="img/profil/<?= $detailStunting["gambar"] ?>" class="uploadGambarStunting" alt="..." style="margin:0px;">
                    </div>

                    <!-- BIODATA -->
                    <div class="col-sm-10">
                        <table class="table table-bordered" style="border: 1px #F0F0F0; margin:0px;" cellspacing="0" cellpadding="5">
                            <tr>
                                <td>No Register (KIA)</td>
                                <td style="width: 58%;">
                                    <p id="p_nik"><?= $detailStunting["id_kia"] ?></p>
                                </td>
                            </tr>
                            <tr>
                                <td>Nama</td>
                                <td>
                                    <p id="p_nama"><?= $detailStunting["nama"] ?></p>
                                </td>
                            </tr>
                            <tr>
                                <td>Umur</td>
                                <td>
                                    <p id="p_umur"><?= $detailStunting["umur"] . " " . "Bulan" ?></p>
                                </td>
                            </tr>
                            <tr>
                                <td>Jenis Kelamin</td>
                                <td>
                                    <p id="p_kelamin"><?= $detailStunting["jenis_kelamin"] ?></p>
                                </td>
                            </tr>
                            <tr>
                                <td>Berat Badan</td>
                                <td>
                                    <p id="p_beratBadan"><?= $detailStunting["berat_badan"] . " " . "Kg" ?></p>
                                </td>
                            </tr>
                            <tr>
                                <td>Tinggi Badan</td>
                                <td>
                                    <p id="p_tinggiBadan"><?= $detailStunting["tinggi_badan"] . " " . "Cm" ?></p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div class="row">

                <!-- INDIKATOR LAYANAN -->
                <div class="col-sm-6 font-Form-Input">
                    <div style="border: 1px solid #F0F0F0; border-radius: 8px; margin-top: 10px;">

                        <!-- JUDUL -->
                        <div style="background-color: #15ada7; border-radius:5px; padding:1px;">
                            <p class="font-Form" style="color: white; margin-top:12px;" align="center">Indikator Layanan</p>
                        </div>

                        <!-- ISI DATA -->
                        <div>
                            <table class="table table-bordered" style="border: 1px #F0F0F0; margin:0px;" cellspacing="0" cellpadding="5">

                                <!-- PEMBERIAN IMUNISASI DASAR -->
                                <tr>
                                    <td style="width: 70%">Pemberian Imunisasi Dasar</td>
                                    <td>
                                        <p id=" p_pemberianImunisasiDasar"><?= $detailStunting["pemberian_imunisasi_dasar"] ?></p>
                                    </td>
                                </tr>

                                <!-- PENGUKURAN BERAT BADAN -->
                                <tr>
                                    <td>Pengukuran Berat Badan</td>
                                    <td>
                                        <p id="p_pengukuranBeratBadan"><?= $detailStunting["pengukuran_berat_badan"] ?></p>
                                    </td>
                                </tr>

                                <!-- PENGUKURAN TINGGI BADAN -->
                                <tr>
                                    <td>Pengukuran Tinggi Badan</td>
                                    <td>
                                        <p id="p_pengukuranTinggiBadan"><?= $detailStunting["pengukuran_tinggi_badan"] ?></p>
                                    </td>
                                </tr>

                                <!-- KONSELING GIZI BAGI ORANG TUA -->
                                <tr>
                                    <td>Konseling Gizi Bagi Orang Tua</td>
                                    <td>
                                        <p id="p_konselingGiziBagiOrangTua"><?= $detailStunting["konseling_gizi_bagi_ortu"] ?></p>
                                    </td>
                                </tr>

                                <!-- KUNJUNGAN KE RUMAH -->
                                <tr>
                                    <td>Kunjungan Ke Rumah</td>
                                    <td>
                                        <p id="p_kunjunganKeRumah"><?= $detailStunting["kunjungan_rumah"] ?></p>
                                    </td>
                                </tr>

                                <!-- KEPEMILIKAN AKSES AIR BERSIH -->
                                <tr>
                                    <td>Kepemilikan Akses Air Bersih</td>
                                    <td>
                                        <p id="p_kepemilikanAksesAirBersih"><?= $detailStunting["kepemilikan_akses_air_bersih"] ?></p>
                                    </td>
                                </tr>

                                <!-- KEPEMILIKAN JAMBAN SEHAT -->
                                <tr>
                                    <td>Kepemilikan Jamban Sehat</td>
                                    <td>
                                        <p id="p_kepemilikanJambanSehat"><?= $detailStunting["kepemilikan_jamban_sehat"] ?></p>
                                    </td>
                                </tr>

                                <!-- AKTA LAHIR -->
                                <tr>
                                    <td>Akta Lahir</td>
                                    <td>
                                        <p id="p_aktaLahir"><?= $detailStunting["akta_lahir"] ?></p>
                                    </td>
                                </tr>

                                <!-- JAMINAN KESEHATAN -->
                                <tr>
                                    <td>Jaminan Kesehatan</td>
                                    <td>
                                        <p id="p_jaminanKesehatan"><?= $detailStunting["jaminan_kesehatan"] ?></p>
                                    </td>
                                </tr>

                                <!-- PENGASUHAN PAUD -->
                                <tr>
                                    <td>pengasuhan (PAUD)</td>
                                    <td>
                                        <p id="p_pengasuhanPaud"><?= $detailStunting["pengasuhan_paud"] ?></p>
                                    </td>
                                </tr>

                            </table>

                        </div>
                    </div>
                </div>

                <!-- TINGKAT KONVERGENSI INDIKATOR -->
                <div class="col-sm-6 font-Form-Input">
                    <div style="border: 1px solid #F0F0F0; border-radius: 8px; margin-top: 10px;">
                        <!-- JUDUL -->
                        <div style="background-color: #15ada7; border-radius:5px; padding:1px;">
                            <p class="font-Form" style="color: white; margin-top:12px;" align="center">Tingkat Konvergensi Indikator</p>
                        </div>

                        <!-- ISI DATA -->
                        <div class="font-Form-Input">
                            <table class="table table-bordered" style="border: 1px #F0F0F0; margin:0px;" cellspacing="0" cellpadding="5">

                                <!-- JUMLAH DITERIMA LENGKAP -->
                                <tr>
                                    <td style="width: 70%;">
                                        Jumlah Diterima Lengkap
                                    </td>
                                    <td>
                                        <p id="p_jumlahDiterimaLengkap"><?= $detailStunting["jumlah_diterima_lengkap"] ?></p>
                                    </td>
                                </tr>

                                <!-- JUMLAH SEHARUSNYA -->
                                <tr>
                                    <td>Jumlah Seharusnya</td>
                                    <td>
                                        <p id="p_jumlahSeharusnya"><?= $detailStunting["jumlah_seharusnya"] ?></p>
                                    </td>
                                </tr>

                                <!-- PRESENTASE -->
                                <tr>
                                    <td>Presentase</td>
                                    <td>
                                        <p id="p_Presentase"><?= $detailStunting["presentase"] ?></p>
                                    </td>
                                </tr>

                            </table>
                        </div>

                        <div style="background-color: #15ada7; border-radius:5px; padding:1px;">
                            <p class="font-Form" style="color: white; margin-top:12px;" align="center">Status Gizi</p>
                        </div>

                        <table class="table table-bordered font-Form-Input" style="border: 1px #F0F0F0; margin:0px;" cellspacing="0" cellpadding="5">

                            <!-- HASIL -->
                            <tr>
                                <td align="center">
                                    <p id="p_statusGizi"><b><?= $detailStunting["status_gizi_imt_u"] ?></b></p>
                                </td>
                            </tr>
                        </table>

                        <div style="background-color: #15ada7; border-radius:5px; padding:1px;">
                            <p class="font-Form" style="color: white; margin-top:12px;" align="center">ID Petugas Penanggung Jawab Data</p>
                        </div>

                        <table class="table table-bordered font-Form-Input" style="border: 1px #F0F0F0; margin:0px;" cellspacing="0" cellpadding="5">

                            <!-- HASIL -->
                            <tr>
                                <td align="center">
                                    <p id="p_statusGizi"><b><?= $detailStunting["id_petugas"] ?></b></p>
                                </td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
        </div>

        <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" id="buttonEditModal" data-bs-target="#modalEdit">
            Launch demo modal
        </button>
        <!-- Modal -->

        <div class="modal fade" id="modalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Data : <?= $detailStunting["nama"] . ' - ' . $detailStunting["id_kia"] ?></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <!-- FORM EDIT -->
                        <div class="row g-3">

                            <!-- BIODATA -->
                            <div class="col-5">
                                <div style="border: 1px solid #f0f0f0; border-radius: 5px;">

                                    <div style="background-color: #15ADA7; border:1px solid #15ADA7; border-radius: 5px;" class="mb-2">
                                        <p style="font-family: 'Manrope', sans-serif; margin-top: 10px; color: white;" align="center">Biodata</p>
                                    </div>

                                    <div class="row g-3">

                                        <!-- Hidden ID -->
                                        <div id="id">
                                            <div class="col-4">
                                                <label for="edit_id" class="col-form-label" style="font-family: 'Heebo', sans-serif; margin-left: 5px;">No (KIA)</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text" name="edit_id" id="edit_id" class="form-control" value="<?= $detailStunting["id"] ?>">
                                            </div>
                                        </div>

                                        <!-- no register KIA -->
                                        <div class="col-4">
                                            <label for="edit_kia" class="col-form-label" style="font-family: 'Heebo', sans-serif; margin-left: 5px;">No Register (KIA)</label>
                                        </div>
                                        <div class="col-8">
                                            <input type="text" id="edit_kia" name="edit_kia" class="form-control" onkeyup="validationEditStunting()" value="<?= $detailStunting["id_kia"] ?>" readonly>
                                        </div>

                                        <!-- nama -->
                                        <div class="col-4">
                                            <label for="edit_nama" class="col-form-label" style="font-family: 'Heebo', sans-serif; margin-left: 5px;">Nama</label>
                                        </div>
                                        <div class="col-8">
                                            <input type="text" id="edit_nama" name="edit_nama" class="form-control" value="<?= $detailStunting["nama"] ?>" readonly>
                                        </div>

                                        <!-- umur -->
                                        <div class="col-4">
                                            <label for="edit_umur" class="col-form-label" style="font-family: 'Heebo', sans-serif; margin-left: 5px;">Umur</label>
                                        </div>
                                        <div class="col-8">
                                            <input type="text" id="edit_umur" name="edit_umur" class="form-control" value="<?= $detailStunting["umur"] ?>" placeholder="*Dalam Bulan" onkeyup="hitungStunting()">
                                        </div>

                                        <!-- jenis kelamin -->
                                        <div class="col-4" style="margin-top: 10px;">
                                            <label for="edit_jk" class="col-form-label" style="font-family: 'Heebo', sans-serif; margin-left: 5px; ">Jenis Kelamin</label>
                                        </div>
                                        <div class="col-8" onclick="hitungStunting()" style="margin-top: 15px;">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="edit_jk" value="Laki-laki" id="jenis_kelamin_laki_laki">
                                                <label class="form-check-label" style="font-family: 'Roboto', sans-serif;">Laki - Laki</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="edit_jk" value="Perempuan" id="jenis_kelamin_perempuan">
                                                <label class="form-check-label" style="font-family: 'Roboto', sans-serif;">Perempuan</label>
                                            </div>
                                        </div>

                                        <!-- berat badan -->
                                        <div class="col-4" style="margin-top: 10px;">
                                            <label for="edit_beratBadan" class="col-form-label" style="font-family: 'Heebo', sans-serif; margin-left: 5px;">Berat Badan</label>
                                        </div>
                                        <div class="col-8" style="margin-top: 10px;">
                                            <input type="text" id="edit_beratBadan" name="edit_beratBadan" class="form-control" value="<?= $detailStunting["berat_badan"] ?>" placeholder="*Dalam Kg" onkeyup="hitungStunting()" required>
                                        </div>

                                        <!-- tinggi badan -->
                                        <div class="col-4" style="margin-top: 15px;">
                                            <label for="edit_tinggiBadan" class="col-form-label" style="font-family: 'Heebo', sans-serif; margin-left: 5px;">Tinggi Badan</label>
                                        </div>
                                        <div class="col-8" style="margin-top: 15px;">
                                            <input type="text" id="edit_tinggiBadan" name="edit_tinggiBadan" class="form-control" value="<?= $detailStunting["tinggi_badan"] ?>" placeholder="*Dalam Cm" onkeyup="hitungStunting()">
                                        </div>

                                        <!-- Upload foto -->
                                        <div class="col-4" style="margin-top: 15px;">
                                            <label for="foto" style="margin-top: 5px; font-family: 'Heebo', sans-serif; margin-left: 5px;">Unggah Foto</label>
                                        </div>
                                        <div class="col-8 mb-2" style="margin-top: 15px;">
                                            <input type="file" name="foto" id="foto" class="form-control" style="font-family: 'Roboto', sans-serif;">
                                        </div>
                                    </div>

                                    <!-- status gizi -->
                                    <div style="background-color: #15ADA7; border:1px solid #15ADA7; border-radius: 5px;" class="mb-3">
                                        <p style="font-family: 'Manrope', sans-serif; margin-top: 10px; color: white;" align="center">Status Gizi</p>
                                    </div>

                                    <div class="row g-3">
                                        <!-- STATUS GIZI BB/U -->
                                        <div class="col-4" style="margin-top: 15px;">
                                            <label for="status_gizi_bb_u" class="col-form-label" style="font-family: 'Heebo', sans-serif; margin-left: 5px;">BB/U</label>
                                        </div>
                                        <div class="col-8" style="margin-top: 15px;">
                                            <input type="text" class="form-control" name="status_gizi_bb_u" id="status_gizi_bb_u" style="font-family: 'Roboto', sans-serif;" readonly value="<?= $detailStunting["status_gizi_bb_u"] ?>">
                                        </div>

                                        <!-- STATUS GIZI TB/U -->
                                        <div class="col-4" style="margin-top: 15px;">
                                            <label for="status_gizi_tb_u" class="col-form-label" style="font-family: 'Heebo', sans-serif; margin-left: 5px;">TB/U</label>
                                        </div>
                                        <div class="col-8" style="margin-top: 15px;">
                                            <input type="text" class="form-control" name="status_gizi_tb_u" id="status_gizi_tb_u" style="font-family: 'Roboto', sans-serif;" readonly value="<?= $detailStunting["status_gizi_tb_u"] ?>">
                                        </div>

                                        <!-- STATUS GIZI IMT/U -->
                                        <div class="col-4" style="margin-top: 15px;">
                                            <label for="status_gizi_imt_u" class="col-form-label" style="font-family: 'Heebo', sans-serif; margin-left: 5px;">IMT/U</label>
                                        </div>
                                        <div class="col-8 mb-3" style="margin-top: 15px;">
                                            <input type="text" class="form-control" name="status_gizi_imt_u" id="status_gizi_imt_u" style="font-family: 'Roboto', sans-serif;" readonly value="<?= $detailStunting["status_gizi_imt_u"] ?>">
                                        </div>
                                    </div>

                                    <!-- Bulan pemeriksaan -->
                                    <div style="background-color: #15ADA7; border:1px solid #15ADA7; border-radius: 3px;" class="mb-2">
                                        <p style="font-family: 'Manrope', sans-serif; margin-top: 10px; color: white;" align="center">Bulan Pemeriksaan</p>
                                    </div>
                                    <select name="edit_bulan_pemeriksaan" class="form-control" id="bulan_pemeriksaan" readonly>
                                        <option value="<?= $detailStunting["bulan_pemeriksaan"] ?>"><?= bulan($detailStunting["bulan_pemeriksaan"]) ?></option>
                                    </select>
                                </div>
                                <!-- <h5 class="font-Form" style="margin-top: 10px; color: blue;">Bulan Data : <?= bulan($detailStunting["bulan_pemeriksaan"]) ?></h5> -->
                            </div>

                            <div class="col-7">
                                <div style="border: 1px solid #f0f0f0; border-radius: 5px;">

                                    <!-- INDIKATOR LAYANAN -->
                                    <div style="background-color: #15ADA7; border:1px solid #15ADA7; border-radius: 5px;" class="mb-2">
                                        <p style="font-family: 'Manrope', sans-serif; margin-top: 10px; color: white;" align="center">indikator Layanan</p>
                                    </div>

                                    <div class="row g-3">

                                        <!-- pemberian imunisasi dasar -->
                                        <div class="col-5">
                                            <label for="pemberian_imunisasi_dasar" align="center" style="margin-top: 7px; margin-left: 5px; font-family: 'Heebo', sans-serif;">Pemberian Imunisasi Dasar</label>
                                        </div>
                                        <div class="col-7">
                                            <select class="form-select" id="pemberian_imunisasi_dasar" name="pemberian_imunisasi_dasar" required>
                                                <option selected>Pilih</option>
                                                <option value="Y">Ya</option>
                                                <option value="T">Tidak</option>
                                            </select>
                                        </div>

                                        <!-- pengukuran berat badan -->
                                        <div class="col-5">
                                            <label for="pengukuran_berat_badan" align="center" style="margin-top: 7px; margin-left: 5px; font-family: 'Heebo', sans-serif;">Pengukuran Berat Badan</label>
                                        </div>
                                        <div class="col-7">
                                            <select class="form-select" id="pengukuran_berat_badan" name="pengukuran_berat_badan" required>
                                                <option selected>Pilih</option>
                                                <option value="Y">Ya</option>
                                                <option value="T">Tidak</option>
                                            </select>
                                        </div>

                                        <!-- pengukuran tinggi badan -->
                                        <div class="col-5">
                                            <label for="pengukuran_tinggi_badan" align="center" style="margin-top: 7px; margin-left: 5px; font-family: 'Heebo', sans-serif;">Pengukuran Tinggi Badan</label>
                                        </div>
                                        <div class="col-7">
                                            <select class="form-select" id="pengukuran_tinggi_badan" name="pengukuran_tinggi_badan" required>
                                                <option selected>Pilih</option>
                                                <option value="Y">Ya</option>
                                                <option value="T">Tidak</option>
                                            </select>
                                        </div>

                                        <!-- konseling gizi bagi ortu -->
                                        <div class="col-5">
                                            <label for="konseling_gizi_bagi_ortu" align="center" style="margin-top: 7px; margin-left: 5px; font-family: 'Heebo', sans-serif;">Konseling Gizi Bagi Orang Tua</label>
                                        </div>
                                        <div class="col-7">
                                            <select class="form-select" id="konseling_gizi_bagi_ortu" name="konseling_gizi_bagi_ortu" required>
                                                <option selected>Pilih</option>
                                                <option value="Y">Ya</option>
                                                <option value="T">Tidak</option>
                                            </select>
                                        </div>

                                        <!-- kunjungan ke rumah -->
                                        <div class="col-5">
                                            <label for="kunjungan_rumah" align="center" style="margin-top: 7px; margin-left: 5px; font-family: 'Heebo', sans-serif;">Kunjungan Ke Rumah</label>
                                        </div>
                                        <div class="col-7">
                                            <select class="form-select" id="kunjungan_rumah" name="kunjungan_rumah" required>
                                                <option selected>Pilih</option>
                                                <option value="Y">Ya</option>
                                                <option value="T">Tidak</option>
                                            </select>
                                        </div>

                                        <!-- kepemilikan akses air bersih -->
                                        <div class="col-5">
                                            <label for="kepemilikan_akses_air_bersih" align="center" style="margin-top: 7px; margin-left: 5px; font-family: 'Heebo', sans-serif;">Kepemilikan Akses Air Bersih</label>
                                        </div>
                                        <div class="col-7">
                                            <select class="form-select" id="kepemilikan_akses_air_bersih" name="kepemilikan_akses_air_bersih" required>
                                                <option selected>Pilih</option>
                                                <option value="Y">Ya</option>
                                                <option value="T">Tidak</option>
                                            </select>
                                        </div>

                                        <!-- kepemilikan jamban sehat -->
                                        <div class="col-5">
                                            <label for="kepemilikan_jamban_sehat" align="center" style="margin-top: 7px; margin-left: 5px; font-family: 'Heebo', sans-serif;">Kepemilikan Jamban Sehat</label>
                                        </div>
                                        <div class="col-7">
                                            <select class="form-select" id="kepemilikan_jamban_sehat" name="kepemilikan_jamban_sehat" required>
                                                <option selected>Pilih</option>
                                                <option value="Y">Ya</option>
                                                <option value="T">Tidak</option>
                                            </select>
                                        </div>

                                        <!-- akta lahir -->
                                        <div class="col-5">
                                            <label for="akta_lahir" align="center" style="margin-top: 7px; margin-left: 5px; font-family: 'Heebo', sans-serif;">Akta Lahir</label>
                                        </div>
                                        <div class="col-7">
                                            <select class="form-select" id="akta_lahir" name="akta_lahir" required>
                                                <option selected>Pilih</option>
                                                <option value="Y">Ya</option>
                                                <option value="T">Tidak</option>
                                            </select>
                                        </div>

                                        <!-- jaminan kesehatan -->
                                        <div class="col-5">
                                            <label for="jaminan_kesehatan" align="center" style="margin-top: 7px; margin-left: 5px; font-family: 'Heebo', sans-serif;">Jaminan Kesehatan</label>
                                        </div>
                                        <div class="col-7">
                                            <select class="form-select" id="jaminan_kesehatan" name="jaminan_kesehatan" required>
                                                <option selected>Pilih</option>
                                                <option value="Y">Ya</option>
                                                <option value="T">Tidak</option>
                                            </select>
                                        </div>

                                        <!-- pengasuhan paud -->
                                        <div class="col-5">
                                            <label for="pengasuhan_paud" align="center" style="margin-top: 7px; margin-left: 5px; font-family: 'Heebo', sans-serif;">Pengasuhan Paud</label>
                                        </div>
                                        <div class="col-7 mb-2">
                                            <select class="form-select" id="pengasuhan_paud" name="pengasuhan_paud" required>
                                                <option selected>Pilih</option>
                                                <option value="Y">Ya</option>
                                                <option value="T">Tidak</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!-- TINGKAT KONVERGENSI INDIKATOR -->
                                    <div style="background-color: #15ADA7; border:1px solid #15ADA7; border-radius: 5px;" class="mb-2">
                                        <p style="font-family: 'Manrope', sans-serif; margin-top: 10px; color: white;" align="center">Tingkat Konvergensi Indikator</p>
                                    </div>

                                    <div class="row g-3">

                                        <!-- jumlah diterima lengkap -->
                                        <div class="col-5">
                                            <label for="jumlah_diterima_lengkap" align="center" style="margin-top: 7px; font-family: 'Heebo', sans-serif;">Jumlah Diterima Lengkap</label>
                                        </div>
                                        <div class="col-7">
                                            <input type="text" name="jumlah_diterima_lengkap" id="jumlah_diterima_lengkap" class="form-control" style="font-family: 'Roboto', sans-serif;" readonly value="<?= $detailStunting["jumlah_diterima_lengkap"] ?>">
                                        </div>

                                        <!-- jumlah seharusnya -->
                                        <div class="col-5">
                                            <label for="jumlah_seharusnya" align="center" style="margin-top: 7px; font-family: 'Heebo', sans-serif;">Jumlah Seharusnya</label>
                                        </div>
                                        <div class="col-7">
                                            <input type="text" name="jumlah_seharusnya" id="jumlah_seharusnya" class="form-control" style="font-family: 'Roboto', sans-serif;" readonly value="<?= $detailStunting["jumlah_seharusnya"] ?>">
                                        </div>

                                        <!-- presentase -->
                                        <div class="col-5">
                                            <label for="presentase" align="center" style="margin-top: 7px; font-family: 'Heebo', sans-serif;">Presentase</label>
                                        </div>
                                        <div class="col-7">
                                            <input type="text" name="presentase" id="presentase" class="form-control" placeholder="*Dalam %" style="font-family: 'Roboto', sans-serif;" readonly value="<?= $detailStunting["presentase"] ?>">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Batal</button>
                        <button type="submit" class="btn btn-primary" id="ubah" name="ubah">Simpan</button>
                    </div>

                </div>
            </div>
        </div>
        </div>
    </form>



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

    <script src="js/detailStunting.js"></script>

</body>

</html>