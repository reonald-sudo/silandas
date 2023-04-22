<script src="js/jquery.js"></script>
<script src="sweetalert2-11.3.4/package/dist/sweetalert2.all.min.js"></script>
<?php

session_start();

if (!isset($_SESSION['login'])) {
    header('Location:login.php');
}

require 'functions.php';

$id = $_GET["id"];

$detailHamil = detailHamil("SELECT * FROM hamil WHERE id= $id");

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


if (isset($_POST["ubah"])) {
    // Cek apakah data telah berhasil ditambahkan atau tidak
    if (ubahHamil($_POST) > 0 && ubahStuntingGrafikHamil($_POST) > 0) {
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
                        document.location.href = 'detailHamil.php?id= $id';
                    }
                })
    
            });
            </script>
        ";
    } else {
        echo "
            <script>
                alert ('Data Gagal di Ubah !');
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
    <title>Silandas | Detail Data <?= $detailHamil["nama"] ?></title>
    <?php require 'link.php' ?>
</head>

<body>
    <form action="" method="POST" enctype="multipart/form-data">
        <!-- Heading -->
        <center>
            <img src="img/logo.png" alt="" height="64px" width="64px" style="margin-top: 8px">
            <img src="img/LOGO_GERMAS_NORMAL.png" alt="" height="64px" width="128px" style="margin-top: 8px">
        </center>
        <h3 align="center" class="font-Form" style="color:#4A5568; padding: 8px 0 0 0;">Detail Data Program Kehamilan Ibu Desa Sungai Landas</h3>
        <p align="center" class="font-Form-Input" style="color:#4A5568; padding-bottom: 15px;">Kec. Karang Intan, Kab. Banjar, Prov. Kalimantan Selatan</p>

        <div class="container mb-3">

            <!-- TOMBOL MENU & HEADING -->
            <div style="border: 1px solid #F0F0F0; border-radius: 8px;" class="mb-3">

                <div style="background-color: #1ea3b2; border:1px solid #1ea3b2; padding:5px" class="mb-3 font-Form">
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
                        <a href="cetakHamil.php?id=<?= $detailHamil["id"] ?>" target="blank" style="border: 1px solid #E0E0E0; display:block; width:150px; height:80px; border-radius: 5px; box-shadow: 1px 1px 3px #ccc;" class="noUnderline btn">
                            <img src="img/icon/print.png" class="gambar" style="margin-top: 5px;">
                            <p class="font-Form-Input">Cetak Data</p>
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

            <div class="row">

                <div class="col-sm-6">
                    <div style="border: 1px solid #F0F0F0; border-radius: 8px; margin-top: 10px;">


                        <!-- JUDUL -->
                        <div>
                            <div style="background-color: #1ea3b2; border-radius:5px; padding:1px;">
                                <p style="color:white; margin-top:12px;" align="center" class="font-Form">Biodata</p>
                            </div>
                        </div>

                        <div class="row gx-1">
                            <!-- GAMBAR -->
                            <div class="col-sm-4">
                                <img src="img/profil/<?= $detailHamil["gambar"] ?>" class="uploadGambarHamil" alt="..." style="margin:0px;">
                            </div>

                            <!-- BIODATA -->
                            <div class="col-sm-8">
                                <table class="table table-bordered" style="border: 1px #F0F0F0; margin:0px; padding:0px" cellspacing="0" cellpadding="5">

                                    <!-- NO Register KIA -->
                                    <tr>
                                        <td class="font-Form-Input">No Register Kia</td>
                                        <td style="width: 40%;">
                                            <p id="p_nik" class="font-Form-Input"><?= $detailHamil["id_kia"] ?></p>
                                        </td>
                                    </tr>
                                    <!-- NAMA -->
                                    <tr>
                                        <td class="font-Form-Input">Nama</td>
                                        <td>
                                            <p id="p_nama" class="font-Form-Input"><?= $detailHamil["nama"] ?></p>
                                        </td>
                                    </tr>
                                    <!-- UMUR -->
                                    <tr>
                                        <td class="font-Form-Input">Umur</td>
                                        <td>
                                            <p id="p_umur" class="font-Form-Input"><?= $detailHamil["umur"] . " " . "Tahun" ?></p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- USIA KEHAMILAN DAN PERSALINAN -->
                <div class="col-sm-6">

                    <div style="border: 1px solid #F0F0F0; border-radius: 8px; margin-top: 10px;">

                        <!-- JUDUL -->
                        <div style=" background-color: #1ea3b2; border-radius:5px; padding:1px;">
                            <p style="color:white; margin-top:12px;" class="font-Form" align="center">Usia Kehamilan dan Persalinan</p>
                        </div>

                        <table class="table table-bordered" style="border: 1px solid #F0F0F0; margin:0px; padding:0px;" cellspacing="0" cellpadding="5">
                            <!-- LINGKAR LENGAN -->
                            <tr>
                                <td class="font-Form-Input">Lingkar Lengan</td>
                                <td>
                                    <p id="p_lingkarLengan" class="font-Form-Input"><?= $detailHamil["lingkar_lengan"] . " " . "Cm"  ?></p>
                                </td>
                            </tr>
                            <!-- USIA KEHAMILAN -->
                            <tr>
                                <td class="font-Form-Input">Usia Kehamilan</td>
                                <td>
                                    <p id="p_usiaKehamilan" class="font-Form-Input"><?= $detailHamil["usia_kehamilan"] . " " . "Bulan" ?></p>
                                </td>
                            </tr>
                            <!-- TANGGAL MELAHIRKAN -->
                            <tr>
                                <td class="font-Form-Input">Tanggal Melahirkan</td>
                                <td>
                                    <p id="p_tanggalMelahirkan" class="font-Form-Input"><?= $detailHamil["tanggal_melahirkan"] ?></p>
                                </td>
                            </tr>
                        </table>

                    </div>

                </div>

            </div>

            <div class=" row">

                <!-- INDIKATOR LAYANAN -->
                <div class="col-sm-6">
                    <div style="border: 1px solid #F0F0F0; border-radius: 8px; margin-top: 10px;">

                        <!-- JUDUL -->
                        <div style="background-color: #1ea3b2; border-radius:5px; padding:1px;">
                            <p style="color: white; margin-top:12px;" align="center" class="font-Form">Indikator Layanan</p>
                        </div>

                        <!-- ISI DATA -->
                        <div>
                            <table class="table table-bordered" style="border: 1px #F0F0F0; margin:0px;" cellspacing="0" cellpadding="5">

                                <!-- PEMERIKSAAN KEHAMILAN -->
                                <tr>
                                    <td style="width: 80%;" class="font-Form-Input">Pemeriksaan Kehamilan</td>
                                    <td>
                                        <p id="p_pemeriksaanKehamilan" class="font-Form-Input"><?= $detailHamil["pemeriksaan_kehamilan"] ?></p>
                                    </td>
                                </tr>

                                <!-- DAPAT DAN KONSUMSI PILL FE -->
                                <tr>
                                    <td class="font-Form-Input">Dapat & Konsumsi Pill Fe</td>
                                    <td>
                                        <p id="p_dapatDanKonsumsiPillFe" class="font-Form-Input"><?= $detailHamil["dapat_konsumsi_pil_fe"] ?></p>
                                    </td>
                                </tr>

                                <!-- PEMERIKSAAN NI'AS -->
                                <tr>
                                    <td class="font-Form-Input">Pemeriksaan Ni'as</td>
                                    <td>
                                        <p id="p_pemeriksaanNias" class="font-Form-Input"><?= $detailHamil["pemeriksaan_nias"] ?></p>
                                    </td>
                                </tr>

                                <!-- KONSELING GIZI KELAS 1H -->
                                <tr>
                                    <td class="font-Form-Input">Konseling Gizi (Kelas 1H)</td>
                                    <td>
                                        <p id="p_konselingGizi" class="font-Form-Input"><?= $detailHamil["konseling_gizi"] ?></p>
                                    </td>
                                </tr>

                                <!-- KUNJUNGAN RUMAH -->
                                <tr>
                                    <td class="font-Form-Input">Kunjungan Rumah</td>
                                    <td>
                                        <p id="p_kunjunganRumah" class="font-Form-Input"><?= $detailHamil["kunjungan_rumah"] ?></p>
                                    </td>
                                </tr>

                                <!-- KEPEMILIKAN AKSES AIR BERSIH -->
                                <tr>
                                    <td class="font-Form-Input">Kepemilikan Akses Air Bersih</td>
                                    <td>
                                        <p id="p_kepemilikanAksesAirBersih" class="font-Form-Input"><?= $detailHamil["kepemilikan_akses_air_bersih"] ?></p>
                                    </td>
                                </tr>

                                <!-- KEPEMILIKAN JAMBAN -->
                                <tr>
                                    <td class="font-Form-Input">Kepemilikan Jamban</td>
                                    <td>
                                        <p id="p_kepemilikanJamban" class="font-Form-Input"><?= $detailHamil["kepemilikan_jamban"] ?></p>
                                    </td>
                                </tr>

                                <!-- JAMINAN KESEHATAN -->
                                <tr>
                                    <td class="font-Form-Input">Jaminan Kesehatan</td>
                                    <td>
                                        <p id="p_jaminanKesehatan" class="font-Form-Input"><?= $detailHamil["jaminan_kesehatan"] ?></p>
                                    </td>
                                </tr>
                            </table>

                        </div>
                    </div>
                </div>

                <!-- TINGKAT KONVERGENSI INDIKATOR -->
                <div class="col-sm-6">
                    <div style="border: 1px solid #F0F0F0; border-radius: 8px; margin-top: 10px;">
                        <!-- JUDUL -->
                        <div style="background-color: #1ea3b2; border-radius:5px; padding:1px;">
                            <p style="color: white; margin-top:12px;" class="font-Form" align="center">Tingkat Konvergensi Indikator</p>
                        </div>

                        <!-- ISI DATA -->
                        <div>
                            <table class="table table-bordered" style="border: 1px #F0F0F0; margin:0px;" cellspacing="0" cellpadding="5">

                                <!-- JUMLAH DITERIMA LENGKAP -->
                                <tr>
                                    <td style="width: 70%;" class="font-Form-Input">
                                        Jumlah Diterima Lengkap
                                    </td>
                                    <td>
                                        <p id="p_jumlahDiterimaLengkap" class="font-Form-Input"><?= $detailHamil["jumlah_diterima_lengkap"] ?></p>
                                    </td>
                                </tr>

                                <!-- JUMLAH SEHARUSNYA -->
                                <tr>
                                    <td class="font-Form-Input">Jumlah Seharusnya</td>
                                    <td>
                                        <p id=" p_jumlahSeharusnya" class="font-Form-Input"><?= $detailHamil["jumlah_seharusnya"] ?></p>
                                    </td>
                                </tr>

                                <!-- PRESENTASE -->
                                <tr>
                                    <td class="font-Form-Input">Presentase</td>
                                    <td>
                                        <p id=" p_Presentase" class="font-Form-Input"><?= $detailHamil["presentase"] ?></p>
                                    </td>
                                </tr>

                            </table>
                        </div>

                        <div style="background-color: #1ea3b2; border-radius:5px; padding:1px;">
                            <p class="font-Form" style="color: white; margin-top:12px;" align="center">Status Kehamilan (KEK/RISTI/N)</p>
                        </div>

                        <table class="table table-bordered" style="border: 1px #F0F0F0; margin:0px;" cellspacing="0" cellpadding="5">

                            <!-- HASIL -->
                            <tr>
                                <td align="center">
                                    <p id="p_statusKehamilan" class="font-Form-Input"><b><?= $detailHamil["status_kehamilan"] ?></b></p>
                                </td>
                            </tr>
                        </table>

                        <div style="background-color: #1ea3b2; border-radius:5px; padding:1px;">
                            <p class="font-Form" style="color: white; margin-top:12px;" align="center">ID Petugas Penanggung Jawab Data</p>
                        </div>

                        <table class="table table-bordered" style="border: 1px #F0F0F0; margin:0px;" cellspacing="0" cellpadding="5">

                            <!-- HASIL -->
                            <tr>
                                <td align="center">
                                    <p id="p_statusGizi" class="font-Form-Input"><b><?= $detailHamil["id_petugas"] ?></b></p>
                                </td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
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

        <!-- open modal -->
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

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" id="buttonEditModal" data-bs-target="#modalEdit">
            Launch demo modal
        </button>

        <div class="modal fade" id="modalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title font-Form" id="exampleModalLabel">Edit Data : <?= $detailHamil["nama"] . ' - ' . $detailHamil["id_kia"] ?></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">

                        <div class="row g-3">

                            <div class="col-sm-5">
                                <div style="border:1px solid #F0F0F0; border-radius: 5px;">

                                    <div style="background-color: #1EA3B2; border:1px solid #1EA3B2; border-radius: 5px;" class="mb-2">
                                        <p class="font-Form" style="margin-top: 10px; color:white" align="center">Biodata</p>
                                    </div>


                                    <table class="table mb-2 font-Form-Input" style="border: 1px transparent; margin:0px; padding: 0px;" cellspacing="0" cellpading="0">

                                        <!-- Hidden ID -->
                                        <div id="id">
                                            <div class="col-4">
                                                <label for="edit_id" class="col-form-label" style="margin-left: 5px;">No (KIA)</label>
                                            </div>
                                            <div class="col-8">
                                                <input type="text" name="edit_id" id="edit_id" class="form-control font-Form-Input" value="<?= $detailHamil["id"] ?>">
                                            </div>
                                        </div>

                                        <!-- NO REGIST KIA -->
                                        <tr>
                                            <td style="width: 40%;">
                                                <label for="kia" style="margin-top: 5px;">No Register KIA</label>
                                            </td>
                                            <td>
                                                <input type="text" name="kia" id="edit_kia" class="form-control font-Form-Input" required autofocus autocomplete="on" value="<?= $detailHamil["id_kia"] ?>" readonly>
                                            </td>
                                        </tr>
                                        <!-- NAMA IBU -->
                                        <tr>
                                            <td><label for="nama" style="margin-top: 5px;">Nama Ibu</label></td>
                                            <td><input type="text" name="nama" id="edit_nama" class="form-control font-Form-Input" required autofocus autocomplete="off" value="<?= $detailHamil["nama"] ?>" readonly></td>
                                        </tr>
                                        <!-- UMUR IBU -->
                                        <tr>
                                            <td><label for="umur" style="margin-top: 5px;">Umur</label></td>
                                            <td><input type="text" name="umur" id="edit_umur" class="form-control font-Form-Input" onkeyup="hitungHamil()" value="<?= $detailHamil["umur"] ?>"></td>
                                        </tr>
                                        <!-- UPLOAD FOTO -->
                                        <tr>
                                            <td><label for="foto" style="margin-top: 5px;">Unggah Foto</label></td>
                                            <td><input type="file" name="foto" id="edit_foto" class="form-control font-Form-Input"></td>
                                        </tr>

                                    </table>

                                    <!-- USIA KEHAMILAN DAN PERSALINAN -->
                                    <div style="background-color: #1EA3B2; border:1px solid #1EA3B2; border-radius: 3px;">
                                        <p class="font-Form" style="margin-top: 10px; color:white" align="center">Usia Kehamilan dan Persalinan</p>
                                    </div>

                                    <table class="table font-Form-Input" style="border: 1px transparent; margin: 0px; padding: 0px;">

                                        <!-- USIA KEHAMILAN -->
                                        <tr>
                                            <td style="width: 40%;"><label for="usia_kehamilan" align="center" style="margin-top: 5px;">Usia Kehamilan</label></td>
                                            <td><input type="number" name="edit_usia_kehamilan" id="usia_kehamilan" class="form-control" placeholder="*Dalam Bulan" required autofocus autocomplete="off" value="<?= $detailHamil["usia_kehamilan"] ?>"></td>
                                        </tr>

                                        <!-- LINGKAR LENGAN -->
                                        <tr>
                                            <td style="width: 40%;"><label for="edit_lingkar_lengan" align="center" style="margin-top: 5px;">Lingkar Lengan</label></td>
                                            <td><input type="number" name="lingkar_lengan" id="lingkar_lengan" class="form-control" placeholder="*Dalam Cm" required autofocus autocomplete="off" onkeyup="hitungHamil ()" value="<?= $detailHamil["lingkar_lengan"] ?>"></td>
                                        </tr>

                                        <!-- TANGGAL MELAHIRKAN -->
                                        <tr>
                                            <td style="width: 35%;"><label for="edit_tanggal_melahirkan" align="center" style="margin-top: 5px;">Tanggal Melahirkan</label></td>
                                            <td><input type="date" name="tanggal_melahirkan" id="tanggal_melahirkan" class="form-control" required value="<?= $detailHamil["tanggal_melahirkan"] ?>"></td>
                                        </tr>
                                    </table>

                                    <!-- STATUS KEHAMILAN -->
                                    <div style="background-color: #1EA3B2; border:1px solid #1EA3B2; border-radius: 3px;" class="mb-2 font-Form">
                                        <p style="margin-top: 10px; color:white" align="center">Status Kehamilan (KEK/RESTI/N)</p>
                                    </div>

                                    <table class="table font-Form-Input" style="border: 1px solid transparent; margin:0px; padding:0px;">
                                        <tr>
                                            <td><input type="text" name="edit_status_kehamilan" id="status_kehamilan" class="form-control" readonly value="<?= $detailHamil["status_kehamilan"] ?>"></td>
                                        </tr>
                                    </table>

                                    <!-- BULAN PEMERIKSAAN -->
                                    <table class="table table-bordered" style="border: 1px transparent; margin:0px; padding: 0px;">

                                        <div style="background-color: #1EA3B2; border:1px solid #1EA3B2; border-radius: 3px;" class="mb-2">
                                            <p class="font-Form" style="margin-top: 10px; color:white" align="center">Bulan Pemeriksaan</p>
                                        </div>

                                        <tr>
                                            <td>
                                                <select name="edit_bulan_pemeriksaan" class="form-control" id="bulan_pemeriksaan" readonly>
                                                    <option value="<?= $detailHamil["bulan_pemeriksaan"] ?>"><?= bulan($detailHamil["bulan_pemeriksaan"]) ?></option>
                                                </select>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <div class="col-sm-7">
                                <div style="border:1px solid #F0F0F0; border-radius:5px;">

                                    <!-- SATUS PENERIMAAN INDIKATOR -->
                                    <div style="background-color: #1EA3B2; border:1px solid #1EA3B2; border-radius: 5px;" class="mb-2 font-Form">
                                        <p style="margin-top: 10px; color:white" align="center">Status Penerimaan Indikator</p>
                                    </div>

                                    <table class="table table-bordered mb-1 font-Form-Input" style="border:1px transparent; margin: 0px; padding: 0px;">

                                        <!-- PEMERIKSAAN KEHAMILAN -->
                                        <tr>
                                            <td style="width: 45%;"><label for="pemeriksaan_kehamilan" align="center" style="margin-top: 5px;">Pemeriksaan Kehamilan</label></td>
                                            <td>
                                                <select class="form-select" id="pemeriksaan_kehamilan" name="pemeriksaan_kehamilan">
                                                    <option selected>Pilih...</option>
                                                    <option value="Y">Ya</option>
                                                    <option value="T">Tidak</option>
                                                </select>
                                            </td>
                                        </tr>

                                        <!-- DAPAT DAN KONSUMSI PILL FE -->
                                        <tr>
                                            <td style="width: 45%;"><label for="dapat_konsumsi_pil_fe" align="center" style="margin-top: 5px;">Dapat & Konsumsi Pill Fe</label></td>
                                            <td>
                                                <select class="form-select" id="dapat_konsumsi_pil_fe" name="dapat_konsumsi_pil_fe">
                                                    <option selected>Pilih...</option>
                                                    <option value="Y">Ya</option>
                                                    <option value="T">Tidak</option>
                                                </select>
                                            </td>
                                        </tr>

                                        <!-- PEMERIKSAAN NI'AS -->
                                        <tr>
                                            <td style="width: 45%;"><label for="pemeriksaan_nias" align="center" style="margin-top: 5px;">Pemeriksaan Ni'as</label></td>
                                            <td>
                                                <select class="form-select" id="pemeriksaan_nias" name="pemeriksaan_nias">
                                                    <option selected>Pilih...</option>
                                                    <option value="Y">Ya</option>
                                                    <option value="T">Tidak</option>
                                                </select>
                                            </td>
                                        </tr>

                                        <!-- KONSELING GIZI -->
                                        <tr>
                                            <td style="width: 45%;"><label for="konseling_gizi" align="center" style="margin-top: 5px;">Konseling Gizi (Kelas 1H)</label></td>
                                            <td>
                                                <select class="form-select" id="konseling_gizi" name="konseling_gizi">
                                                    <option selected>Pilih...</option>
                                                    <option value="Y">Ya</option>
                                                    <option value="T">Tidak</option>
                                                </select>
                                            </td>
                                        </tr>

                                        <!-- KUNJUNGAN RUMAH -->
                                        <tr>
                                            <td style="width: 45%;"><label for="kunjungan_rumah" align="center" style="margin-top: 5px;">Kunjungan Rumah</label></td>
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

                                        <!-- KEPEMILIKAN JAMBAN -->
                                        <tr>
                                            <td style="width: 45%;"><label for="kepemilikan_jamban" align="center" style="margin-top: 5px;">Kepemilikan Jamban</label></td>
                                            <td>
                                                <select class="form-select" id="kepemilikan_jamban" name="kepemilikan_jamban">
                                                    <option selected>Pilih...</option>
                                                    <option value="Y">Ya</option>
                                                    <option value="T">Tidak</option>
                                                </select>
                                            </td>
                                        </tr>

                                        <!-- KEPEMILIKAN JAMINAN KESEHATAN -->
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
                                            <td style="width: 45%;"><label for="jumlah_seharusnya" align="center" style="margin-top: 5px; font-family: 'Heebo', sans-serif;" class="font-Form-Input">Jumlah Seharusnya</label></td>
                                            <td><input type="number" name="jumlah_seharusnya" id="jumlah_seharusnya" class="form-control font-Form-Input" readonly></td>
                                        </tr>

                                        <!-- JUMLAH PRESENTASE -->
                                        <tr>
                                            <td style="width: 45%;"><label for="presentase" align="center" style="margin-top: 5px; font-family: 'Heebo', sans-serif;" class="font-Form-Input">Presentase</label></td>
                                            <td><input type="text" name="presentase" id="presentase" class="form-control font-Form-Input" placeholder="*Dalam %" readonly></td>
                                        </tr>

                                    </table>
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
    </form>

    <script src="js/bootstrap.min.js"></script>
    <script src="js/script.js"></script>
    <script src="js/detailHamil.js"></script>
</body>

</html>