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

$cetakStunting = cetakStuntingGrafikBulanan("SELECT * FROM rekap_stunting_2022");
$jumlahData2022 = count(query("SELECT * FROM rekap_stunting_2022"));
$jumlahData2023 = count(query("SELECT * FROM rekap_stunting_2023"));
$jumlahData2024 = count(query("SELECT * FROM rekap_stunting_2024"));
$jumlahData2025 = count(query("SELECT * FROM rekap_stunting_2025"));

// SANGAT PENDEK 2022
$menghitungSangatPendek2022 = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Sangat Pendek' "));

if ($menghitungSangatPendek2022 == 0) {
    $menghitungSangatPendek2022 = 0;
}

// PENDEK 2022
$menghitungPendek2022 = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Pendek'"));

if ($menghitungPendek2022 == 0) {
    $menghitungPendek2022 = 0;
}

// STUNTING 2022
$menghitungStunting2022 = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Stunting'"));

if ($menghitungStunting2022 == 0) {
    $menghitungStunting2022 = 0;
}

// NORMAL 2022
$menghitungNormal2022 = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Normal'"));

if ($menghitungNormal2022 == 0) {
    $menghitungNormal2022 = 0;
}

// TINGGI 2022
$menghitungTinggi2022 = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Tinggi'"));

if ($menghitungTinggi2022 == 0) {
    $menghitungTinggi2022 = 0;
}





// SANGAT PENDEK 2023
$menghitungSangatPendek2023 = count(query("SELECT * FROM rekap_stunting_2023 WHERE status_gizi_tb_u = 'Sangat Pendek'"));

if ($menghitungSangatPendek2022 == 0) {
    $menghitungSangatPendek2022 = 0;
}

// PENDEK 2023
$menghitungPendek2023 = count(query("SELECT * FROM rekap_stunting_2023 WHERE status_gizi_tb_u = 'Pendek'"));

if ($menghitungPendek2023 == 0) {
    $menghitungPendek2023 = 0;
}

// STUNTING 2023
$menghitungStunting2023 = count(query("SELECT * FROM rekap_stunting_2023 WHERE status_gizi_tb_u = 'Stunting'"));

if ($menghitungStunting2023 == 0) {
    $menghitungStunting2023 = 0;
}

// NORMAL 2023
$menghitungNormal2023 = count(query("SELECT * FROM rekap_stunting_2023 WHERE status_gizi_tb_u = 'Normal'"));

if ($menghitungNormal2023 == 0) {
    $menghitungNormal2023 = 0;
}

// TINGGI 2023
$menghitungTinggi2023 = count(query("SELECT * FROM rekap_stunting_2023 WHERE status_gizi_tb_u = 'Tinggi'"));

if ($menghitungTinggi2023 == 0) {
    $menghitungTinggi2023 = 0;
}

// SANGAT PENDEK 2024
$menghitungSangatPendek2024 = count(query("SELECT * FROM rekap_stunting_2024 WHERE status_gizi_tb_u = 'Sangat  Pendek' "));

if ($menghitungSangatPendek2024 == 0) {
    $menghitungSangatPendek2024 = 0;
}

// PENDEK 2024
$menghitungPendek2024 = count(query("SELECT * FROM rekap_stunting_2024 WHERE status_gizi_tb_u = 'Pendek'"));

if ($menghitungPendek2024 == 0) {
    $menghitungPendek2024 = 0;
}

// STUNTING 2024
$menghitungStunting2024 = count(query("SELECT * FROM rekap_stunting_2024 WHERE status_gizi_tb_u = 'Stunting'"));

if ($menghitungStunting2024 == 0) {
    $menghitungStunting2024 = 0;
}

// NORMAL 2024
$menghitungNormal2024 = count(query("SELECT * FROM rekap_stunting_2024 WHERE status_gizi_tb_u = 'Normal'"));

if ($menghitungNormal2024 == 0) {
    $menghitungNormal2024 = 0;
}

// TINGGI 2024
$menghitungTinggi2024 = count(query("SELECT * FROM rekap_stunting_2024 WHERE status_gizi_tb_u = 'Tinggi'"));

if ($menghitungTinggi2024 == 0) {
    $menghitungTinggi2024 = 0;
}

// SANGAT PENDEK 2025
$menghitungSangatPendek2025 = count(query("SELECT * FROM rekap_stunting_2025 WHERE status_gizi_tb_u = 'Sangat Pendek' "));

if ($menghitungSangatPendek2025 == 0) {
    $menghitungSangatPendek2025 = 0;
}

// PENDEK 2025
$menghitungPendek2025 = count(query("SELECT * FROM rekap_stunting_2025 WHERE status_gizi_tb_u = 'Pendek'"));

if ($menghitungPendek2025 == 0) {
    $menghitungPendek2025 = 0;
}

// STUNTING 2025
$menghitungStunting2025 = count(query("SELECT * FROM rekap_stunting_2025 WHERE status_gizi_tb_u = 'Stunting'"));

if ($menghitungStunting2025 == 0) {
    $menghitungStunting2025 = 0;
}

// NORMAL 2025
$menghitungNormal2025 = count(query("SELECT * FROM rekap_stunting_2025 WHERE status_gizi_tb_u = 'Normal'"));

if ($menghitungNormal2025 == 0) {
    $menghitungNormal2025 = 0;
}

// TINGGI 2025
$menghitungTinggi2025 = count(query("SELECT * FROM rekap_stunting_2025 WHERE status_gizi_tb_u = 'Tinggi'"));

if ($menghitungTinggi2025 == 0) {
    $menghitungTinggi2025 = 0;
}


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

        <h4 align="center" style="margin: 0px; padding:0px;"><b><u>SURAT HASIL REKAPITULASI GRAFIK PROGRAM KPM SKALA TAHUNAN</u></b></h4>
        <p align="center" style="margin: 0px; padding:0px; font-size:12px;">Nomor : 1/SUNGAI-LANDAS/A.1/IX/2022</p>
        

        <p align="justify" style="padding-left:4em; margin-bottom:0px; margin-left: 10px;">Berikut merupakan hasil rekapitulasi statistik anak pada grafik bulanan pelaksanaan KPM</p>
        <p style="padding:0px; margin-top:0px;"> data di diperoleh dan di pertanggung jawabkan dengan sebenar benar nya.</p>

        <table class="table table-bordered mb-3" style="width: 100%;" cellspacing="0" cellpadding="5">
            <tr align="center";>
                <th style="width: 20%;" style="border: 1px solid black; background-color: #90C8AC;"> Tahun </th>
                <th style="width: 40%;" style="border: 1px solid black; background-color: #90C8AC;"> Jumlah Data </th>
                <th style="width: 40%;" style="border: 1px solid black; background-color: #90C8AC;"> Keterangan </th>
            </tr>

            <tr>
                <td align="center" style="border: 1px solid black;"> Tahun 2022 </td>';
$html .= '<td align="center" style="border: 1px solid black;"> ' . $jumlahData2022 . ' Data' . ' </td>';

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungSangatPendek2022 . ' Anak Bertubuh Sangat Pendek' . '
<p>' . 'b) ' . $menghitungPendek2022 . ' Anak Bertubuh Pendek' . '</p>
<p>' . 'c) ' . $menghitungStunting2022 . ' Anak Bertubuh Stunting' . '</p>
<p>' . 'd) ' . $menghitungNormal2022 . ' Anak Bertubuh Normal' . '</p>
<p>' . 'e) ' . $menghitungTinggi2022 . ' Anak Bertubuh Tinggi' . '</p>
</td> 
</tr>';

$html .= '<tr>
<td align="center" style="border: 1px solid black; background-color: #E0DECA;"> Tahun 2023 </td>
<td align="center" style="border: 1px solid black; background-color: #E0DECA;"> ' . $jumlahData2023 . ' Data' . ' </td>';
$html .= '<td align="justify" style="border: 1px solid black; background-color: #E0DECA;"> ' . 'a) ' . $menghitungSangatPendek2023 . ' Anak Bertubuh Sangat Pendek' . '
<p>' . 'b) ' . $menghitungPendek2023 . ' Anak Bertubuh Pendek' . '</p>
<p>' . 'c) ' . $menghitungStunting2023 . ' Anak Bertubuh Stunting' . '</p>
<p>' . 'd) ' . $menghitungNormal2023 . ' Anak Bertubuh Normal' . '</p>
<p>' . 'e) ' . $menghitungTinggi2023 . ' Anak Bertubuh Tinggi' . '</p>
</td></tr>';

$html .= '<tr>
<td align="center" style="border: 1px solid black;"> Tahun 2024 </td>
<td align="center" style="border: 1px solid black;"> ' . $jumlahData2024 . ' Data' . ' </td>';
$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungSangatPendek2024 . ' Anak Bertubuh Sangat Pendek' . '
<p>' . 'b) ' . $menghitungPendek2024 . ' Anak Bertubuh Pendek' . '</p>
<p>' . 'c) ' . $menghitungStunting2024 . ' Anak Bertubuh Stunting' . '</p>
<p>' . 'd) ' . $menghitungNormal2024 . ' Anak Bertubuh Normal' . '</p>
<p>' . 'e) ' . $menghitungTinggi2024 . ' Anak Bertubuh Tinggi' . '</p>
</td></tr>';

$html .= '<tr>
<td align="center" style="border: 1px solid black; background-color: #E0DECA;"> Tahun 2025 </td>
<td align="center" style="border: 1px solid black; background-color: #E0DECA;"> ' . $jumlahData2025 . ' Data' . ' </td>';
$html .= '<td align="justify" style="border: 1px solid black; background-color: #E0DECA;"> ' . 'a) ' . $menghitungSangatPendek2025 . ' Anak Bertubuh Sangat Pendek' . '
<p>' . 'b) ' . $menghitungPendek2025 . ' Anak Bertubuh Pendek' . '</p>
<p>' . 'c) ' . $menghitungStunting2025 . ' Anak Bertubuh Stunting' . '</p>
<p>' . 'd) ' . $menghitungNormal2025 . ' Anak Bertubuh Normal' . '</p>
<p>' . 'e) ' . $menghitungTinggi2025 . ' Anak Bertubuh Tinggi' . '</p>
</td></tr>';

$html .= '</tr></table>';

$html .= '<p align="justify" style="padding-left:4em; margin-bottom:0px; margin-left: 10px;">Dengan ini menyatakan keaslian dan keabsahan data dengan sebenar - benarnya didapat</p>
        <p style="padding:0px; margin-top:0px;">serta data di diperoleh dan di pertanggung jawabkan dengan sepenuhnya</p><br><br><br><br>';

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
