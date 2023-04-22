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

$id_kia = $_GET["id_kia"];
$data = cetakStuntingGrafikBulanan("SELECT * FROM grafik_perorangan_hamil WHERE id_kia=$id_kia");


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

        <h4 align="center" style="margin: 0px; padding:0px;"><b><u>SURAT REKAPITULASI GRAFIK PEMANTAUAN PROGRAM KPM</u></b></h4>
        <p align="center" style="margin: 0px; padding:0px; font-size:12px;">Nomor : 1/SUNGAI-LANDAS/A.1/IX/2021</p>

        <br>
        
        <p align="justify"; style="padding-left:3em; margin: 0px; margin-left: 10px;">Yang bertanda tangan di bawah ini Pambakal Desa Sungai Landas, Kecamatan Karang Intan,</p>
        <p style="padding:0px; margin-top:0px;">Kabupaten Banjar, Provinsi Kalimantan Selatan  menerangkan dengan sebenarnya bahwa :</p>

    <table style="width: 100%;">
    <tr>
        <td style="width:29%;">No Register (KIA)</td>
        <td style="width:2%;">:</td>';

$html .= '<td> ' . $data["id_kia"] . ' </td>';

$html .= '</tr>
    <tr>
        <td>Nama Lengkap</td>
        <td>:</td>';
$html .= '<td><b>' . $data["nama"] . '</b></td></table>';

$html .= '<table class="table table-bordered mb-3" style="border: 1px solid black; width: 100%;" cellspacing="0" cellpadding="5">
    <tr >
        <td style="border: 1px solid black;" align="center">Bulan Januari</td>';
$html .= '<td style="border: 1px solid black;" align="center">' . $data["p_jan"] . " " . " Cm" . '</td>';

$html .= '</tr>
    <tr>
        <td style="border: 1px solid black; background-color: #E0DECA;" align="center">Bulan Februari</td>';
$html .= '<td style="border: 1px solid black; background-color: #E0DECA;" align="center">' . $data["p_feb"] . " " . " Cm" . '</td>';

$html .= '</tr>
    <tr>
        <td style="border: 1px solid black;" align="center">Bulan Maret</td>';
$html .= '<td style="border: 1px solid black;" align="center">  ' . $data["p_mar"] . " " . " Cm" . '</td>';

$html .= '</tr>
    <tr>
        <td style="border: 1px solid black; background-color: #E0DECA;" align="center">Bulan April</td>';
$html .= '<td style="border: 1px solid black; background-color: #E0DECA;" align="center">' . $data["p_apr"] . " " . " Cm" . '</td>';

$html .= '</tr>
    <tr>
        <td style="border: 1px solid black;" align="center">Bulan Mei</td>';
$html .= '<td style="border: 1px solid black;" align="center">' . $data["p_mei"] . " " . " Cm" . '</td>';

$html .= '</tr>
    <tr>
        <td style="border: 1px solid black; background-color: #E0DECA;" align="center">Bulan Juni </td>';
$html .= '<td style="border: 1px solid black; background-color: #E0DECA;" align="center">' . $data["p_jun"] . " " . " Cm" . '</td>';

$html .= '</tr>
    <tr>
        <td style="border: 1px solid black;" align="center">Bulan Juli</td>';
$html .= '<td style="border: 1px solid black;" align="center">' . $data["p_jul"] . " " . " Cm" . '</td>';

$html .= '</tr>
    <tr>
        <td style="border: 1px solid black; background-color: #E0DECA;" align="center">Bulan Agustus</td>';
$html .= '<td style="border: 1px solid black; background-color: #E0DECA;" align="center">' . $data["p_agu"] . " " . " Cm" . '</td>';

$html .= '</tr>
    <tr>
        <td style="border: 1px solid black;" align="center">Bulan September</td>';
$html .= '<td style="border: 1px solid black;" align="center">' . $data["p_sep"] . " " . " Cm" . '</td>';

$html .= '</tr>
    <tr>
        <td style="border: 1px solid black; background-color: #E0DECA;" align="center">Bulan Oktober</td>';
$html .= '<td style="border: 1px solid black; background-color: #E0DECA;" align="center">' . $data["p_okt"] . " " . " Cm" . '</td>';

$html .= '</tr>
    <tr>
        <td style="border: 1px solid black;" align="center">Bulan November</td>';
$html .= '<td style="border: 1px solid black;" align="center">' . $data["p_nov"] . " " . " Cm" . '</td>';

$html .= '</tr>
    <tr>
        <td style="border: 1px solid black; background-color: #E0DECA;" align="center">Bulan Desember</td>';
$html .= '<td style="border: 1px solid black; background-color: #E0DECA;"  align="center">' . $data["p_des"] . " " . " Cm" . '</td></tr></table>';

$html .= '<p align="justify" style="padding-left:3em; margin-bottom:0px; margin-left: 10px;">Pada dasarnya surat ini dibuat dengan berdasarkan data yang di dapat dari perhitungan dan</p>
    <p style="padding:0px; margin-top:0px;"> dengan sebenar benarnya.</p>
    <p>Demikian kami sampaikan sebagaimana mestinya.</p>

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
