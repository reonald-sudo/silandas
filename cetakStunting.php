<?php

$tanggal = date("d");
$bulan = date("m");
$tahun = date("Y");

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

require 'link.php';
require 'functions.php';

$id = $_GET["id"];
$cetakStunting = cetakStunting("SELECT * FROM stunting WHERE id=$id");
$jumlahDataJanuari = count(query("SELECT * FROM rekap_stunting_2022 WHERE bulan_pemeriksaan = '01'"));

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
        <td style="width:29%;">No Register (KIA)</td>
        <td style="width:2%;">:</td>';

$html .= '<td> ' . $cetakStunting["id_kia"] . ' </td>';

$html .= '</tr>
    <tr>
        <td>Nama Lengkap</td>
        <td>:</td>';
$html .= '<td><b>' . $cetakStunting["nama"] . '</b></td>';

$html .= '</tr>
    <tr>
        <td>Umur</td>
        <td>:</td>';
$html .= '<td>' . $cetakStunting["umur"] . " " . "Bulan" . '</td>';

$html .= '</tr>
    <tr>
        <td>Jenis Kelamin</td>
        <td>:</td>';
$html .= '<td>' . $cetakStunting["jenis_kelamin"] . '</td>';

$html .= '</tr>
    <tr>
        <td>Berat Badan</td>
        <td>:</td>';
$html .= '<td>' . $cetakStunting["berat_badan"] . " " . "Kg" . '</td>';

$html .= '</tr>
    <tr>
        <td>Tinggi Badan</td>
        <td>:</td>';
$html .= '<td>' . $cetakStunting["tinggi_badan"] . " " . "Cm" . '</td>';

$html .= '</tr>
    <tr>
        <td>Status BB/U</td>
        <td>:</td>';
$html .= '<td>  ' . $cetakStunting["status_gizi_bb_u"] . '</td>';

$html .= '</tr>
    <tr>
        <td>Status TB/U</td>
        <td>:</td>';
$html .= '<td>' . $cetakStunting["status_gizi_tb_u"] . '</td>';

$html .= '</tr>
    <tr>
        <td>Status Gizi IMT</td>
        <td>:</td>';
$html .= '<td>' . $cetakStunting["status_gizi_imt_u"] . '</td>';

$html .= '</tr>
    <tr>
        <td>Bulan Pemeriksaan</td>
        <td>:</td>';
$html .= '<td>' . bulan($cetakStunting["bulan_pemeriksaan"]) . '</td>';

$html .= '</tr>
    </table>
    
    <p align="justify";>Dan berdasarkan data indikator layanan sebagai berikut :</p>

    <table style="border: 1px solid #fff; border-spacing: 0px;">
        <tr style="border: 1px solid black;">
            <th style="width:10%; border: 1px solid black; background-color: #f4f0ec;" align="center">Pemberian Imunisasi Dasar</th>
            <th style="width:10%; border: 1px solid black; background-color: #f4f0ec;" align="center">Pengukuran Berat Badan</th>
            <th style="width:10%; border: 1px solid black; background-color: #f4f0ec;" align="center">Pengukuran Tinggi Badan</th>
            <th style="width:10%; border: 1px solid black; background-color: #f4f0ec;" align="center">Konseling Gizi</th>
            <th style="width:10%; border: 1px solid black; background-color: #f4f0ec;" align="center">Kunjungan Ke Rumah</th>
            <th style="width:10%; border: 1px solid black; background-color: #f4f0ec;" align="center">Kepemilikan Akses Air Bersih</th>
            <th style="width:10%; border: 1px solid black; background-color: #f4f0ec;" align="center">Kepemilikan Jamban Sehat</th>
            <th style="width:10%; border: 1px solid black; background-color: #f4f0ec;" align="center">Akta Lahir</th>
            <th style="width:10%; border: 1px solid black; background-color: #f4f0ec;" align="center">Jaminan Kesehatan</th>
            <th style="width:10%; border: 1px solid black; background-color: #f4f0ec;" align="center">Pengasuhan (PAUD)</th>
        </tr>

        <tr style="border: 1px solid black;">';

$html .= '<td style="border: 1px solid black; padding-top:15px; padding-bottom:15px;" align="center"><p>' . $cetakStunting["pemberian_imunisasi_dasar"] . '</p></td>';
$html  .= '<td style="border: 1px solid black;" align="center";>' . $cetakStunting["pengukuran_berat_badan"] . '</td>';
$html  .= '<td style="border: 1px solid black;" align="center";>' . $cetakStunting["pengukuran_tinggi_badan"] . '</td>';
$html  .= '<td style="border: 1px solid black;" align="center";>' . $cetakStunting["konseling_gizi_bagi_ortu"] . '</td>';
$html  .= '<td style="border: 1px solid black;" align="center";>' . $cetakStunting["kunjungan_rumah"] . '</td>';
$html  .= '<td style="border: 1px solid black;" align="center";>' . $cetakStunting["kepemilikan_akses_air_bersih"] . '</td>';
$html  .= '<td style="border: 1px solid black;" align="center";>' . $cetakStunting["kepemilikan_jamban_sehat"] . '</td>';
$html  .= '<td style="border: 1px solid black;" align="center";>' . $cetakStunting["akta_lahir"] . '</td>';
$html  .= '<td style="border: 1px solid black;" align="center";>' . $cetakStunting["jaminan_kesehatan"] . '</td>';
$html  .= '<td style="border: 1px solid black;" align="center";>' . $cetakStunting["pengasuhan_paud"] . '</td>';
$html .= '</tr>
    </table>
    
    <p align="justify" style="padding-left:3em; margin-bottom:0px; margin-left: 10px;">Pada dasarnya surat ini dibuat dengan berdasarkan data yang di dapat dari perhitungan dan</p>
    <p style="padding:0px; margin-top:0px;"> dengan sebenar benarnya.</p>
    <p>Demikian kami sampaikan sebagaimana mestinya.</p>

    <br>
    <br>
    <br>
    <br>';

$html .= '<p align="right" style="margin-right: 14px;">' . "Sungai Landas," . " " . $tanggal . " " . bulan($bulan) . " " . $tahun . '</p>';
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
