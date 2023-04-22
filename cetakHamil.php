<?php

$tanggal = date("d");
$bulan = date("m");
$tahun = date("Y");

function bulan($text)
{
    if ($text == "1") return "Januari";
    if ($text == "2") return "Februari";
    if ($text == "3") return "Maret";
    if ($text == "4") return "April";
    if ($text == "5") return "Mei";
    if ($text == "6") return "Juni";
    if ($text == "7") return "Juli";
    if ($text == "8") return "Agustus";
    if ($text == "9") return "September";
    if ($text == "10") return "Oktober";
    if ($text == "11") return "November";
    if ($text == "12") return "Desember";
}

require 'link.php';
require 'functions.php';

$id = $_GET["id"];
$cetakHamil = cetakHamil("SELECT * FROM hamil WHERE id=$id");

require_once __DIR__ . '/vendor/autoload.php';

$mpdf = new \Mpdf\Mpdf(['format' => 'A4']);
$html = '
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cetak Data |</title>
    <link rel="icon" href="img/icon.ico">
    <link rel="stylesheet" href="css/print.css">
</head>

<body>
  <div class="container-fluid";>
    <table style="border: 1px solid #fff; width: 100%;">
        <tr>
            <td style="width: 15%;">
                <img src="img/logo.jpg" style="width:90px; height:90px;">
            </td>
            <td style="width:70%;">
                <center>
                    <p style="font-size: 20px;">PEMERINTAH KABUPATEN BANJAR</p>
                    <P style="font-size: 20px;">KECAMATAN KARANG INTAN</P>
                    <P style="font-size: 20px;"><b>DESA SUNGAI LANDAS</b></P>
                    <P style="font-size: 12px";>Jl. Irigasi RT.002 Desa Sungai Landas Kecamatan Karang Intan Kab. Banjar Email:</P>
                    <p style="font-size: 12px";>sungailandas70661@gmail.com Kode Pos: 70661</p>
                </center>
            </td>
            <td style="width:15%;">
            <img src="img/germas.jpg" alt="" style="width:160px; height: 85px;">
            </td>
        </tr>
    </table>

    <hr style="color: black; margin:0px; padding:0px; height:5px;">
    <br>
    <br>

        <h4 align="center" style="margin: 0px; padding:0px;"><b><u>SURAT PERNYATAAN PROGRAM KPM</u></b></h4>
        <p align="center" style="margin: 0px; padding:0px; font-size:12px;">Nomor : 1/SUNGAI-LANDAS/A.1/IX/2021</p>

        <br>
        
        <p align="justify"; style="padding-left:3em; margin: 0px; margin-left: 10px;">Yang bertanda tangan di bawah ini Pambakal Desa Sungai Landas, Kecamatan Karang Intan,</p>
        <p style="padding:0px; margin-top:0px;">Kabupaten Banjar, Provinsi Kalimantan Selatan  menerangkan dengan sebenarnya bahwa :</p>

    <table style="width: 100%;">
    <tr>
        <td style="width:29%;">No Register KIA</td>
        <td style="width:2%;">:</td>';
$html .= '<td>' . $cetakHamil["id_kia"] . '</td>';

$html .= '</tr>
    <tr>
        <td>Nama Lengkap</td>
        <td>:</td>';
$html .= '<td><b>' . $cetakHamil["nama"] . '</b></td>';

$html .= '</tr>
    <tr>
        <td>Umur</td>
        <td>:</td>';
$html .= '<td>' . $cetakHamil["umur"] . " " . "Tahun" . '</td>';

$html .= '</tr>
    <tr>
        <td>Lingkar Lengan</td>
        <td>:</td>';
$html .= '<td>' . $cetakHamil["lingkar_lengan"] . " " . "Cm" . '</td>';

$html .= '</tr>
    <tr>
        <td>Usia Kehamilan</td>
        <td>:</td>';
$html .= '<td>' . $cetakHamil["usia_kehamilan"] . " " . "Bulan" . '</td>';

$html .= '</tr>
    <tr>
        <td>Tanggal Melahirkan</td>
        <td>:</td>';
$html .= '<td>' . $cetakHamil["tanggal_melahirkan"] . '</td>';

$html .= '</tr>
    <tr>
        <td>Status Kehamilan</td>
        <td>:</td>';
$html .= '<td>' . $cetakHamil["status_kehamilan"] . '</td>';

$html .= '</tr>
    <tr>
        <td>Bulan Pemeriksaan</td>
        <td>:</td>';
$html .= '<td>' . bulan($cetakHamil["bulan_pemeriksaan"]) . '</td>';

$html .= '</tr>
    </table>
    
    <p align="justify";>Dan berdasarkan data indikator layanan sebagai berikut :</p>

    <table style="border: 1px solid #fff; border-spacing: 0px;">
        <tr style="border: 1px solid black;">
            <th style="width:12.5%; border: 1px solid black; background-color: #f4f0ec;" align="center">Pemeriksaan Kehamilan</th>
            <th style="width:12.5%; border: 1px solid black; background-color: #f4f0ec;" align="center">Dapat & Konsumsi Pill Fe</th>
            <th style="width:12.5%; border: 1px solid black; background-color: #f4f0ec;" align="center">Pemeriksaan Nias</th>
            <th style="width:12.5%; border: 1px solid black; background-color: #f4f0ec;" align="center">Konseling Gizi (Kelas 1H)</th>
            <th style="width:12.5%; border: 1px solid black; background-color: #f4f0ec;" align="center">Kunjungan Rumah</th>
            <th style="width:12.5%; border: 1px solid black; background-color: #f4f0ec;" align="center">Kepemilikan Akses Air Bersih</th>
            <th style="width:12.5%; border: 1px solid black; background-color: #f4f0ec;" align="center">Kepemilikan Jamban</th>
            <th style="width:12.5%; border: 1px solid black; background-color: #f4f0ec;" align="center">Jaminan Kesehatan</th>
        </tr>

        <tr style="border: 1px solid black;">';
$html .= '<td style="border: 1px solid black; padding-top:15px; padding-bottom:15px;" align="center";><p>' . $cetakHamil["pemeriksaan_kehamilan"] . '</p></td>';
$html .= '<td style="border: 1px solid black; padding-top:15px; padding-bottom:15px;" align="center";><p>' . $cetakHamil["dapat_konsumsi_pil_fe"] . '</p></td>';
$html .= '<td style="border: 1px solid black; padding-top:15px; padding-bottom:15px;" align="center";><p>' . $cetakHamil["pemeriksaan_nias"] . '</p></td>';
$html .= '<td style="border: 1px solid black; padding-top:15px; padding-bottom:15px;" align="center";><p>' . $cetakHamil["konseling_gizi"] . '</p></td>';
$html .= '<td style="border: 1px solid black; padding-top:15px; padding-bottom:15px;" align="center";><p>' . $cetakHamil["kunjungan_rumah"] . '</p></td>';
$html .= '<td style="border: 1px solid black; padding-top:15px; padding-bottom:15px;" align="center";><p>' . $cetakHamil["kepemilikan_akses_air_bersih"] . '</p></td>';
$html .= '<td style="border: 1px solid black; padding-top:15px; padding-bottom:15px;" align="center";><p>' . $cetakHamil["kepemilikan_jamban"] . '</p></td>';
$html .= '<td style="border: 1px solid black; padding-top:15px; padding-bottom:15px;" align="center";><p>' . $cetakHamil["jaminan_kesehatan"] . '</p></td>';
$html .= '</tr>
    </table>
    
    <p align="justify" style="padding-left:3em; margin-bottom:0px; margin-left: 10px;">Pada dasarnya surat ini dibuat dengan berdasarkan data yang di dapat dari perhitungan dan</p>
    <p style="padding:0px; margin-top:0px;"> dengan sebenar benarnya.</p>
    <p>Demikian kami sampaikan sebagaimana mestinya.</p>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>';

$html .= '<p align="right">' . "Sungai Landas," . " " . $tanggal . " " . bulan($bulan) . " " . $tahun . '</p>';
$html .= '<p align="right" style="margin-right: 8px;">Pambakal Desa Sungai Landas</p>
    <br>
    <br>
    <p align="right" style="margin-right: 80px;"><b>M. TOHA</b></p>
    </div>
</body>

</html>
';

$mpdf->WriteHTML($html);
$mpdf->Output();
