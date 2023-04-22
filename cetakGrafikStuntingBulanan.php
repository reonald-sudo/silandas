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
$jumlahDataJanuari = count(query("SELECT * FROM rekap_stunting_2022 WHERE bulan_pemeriksaan = '01'"));
$jumlahDataFebruari = count(query("SELECT * FROM rekap_stunting_2022 WHERE bulan_pemeriksaan = '02'"));
$jumlahDataMaret = count(query("SELECT * FROM rekap_stunting_2022 WHERE bulan_pemeriksaan = '03'"));
$jumlahDataApril = count(query("SELECT * FROM rekap_stunting_2022 WHERE bulan_pemeriksaan = '04'"));
$jumlahDataMei = count(query("SELECT * FROM rekap_stunting_2022 WHERE bulan_pemeriksaan = '05'"));
$jumlahDataJuni = count(query("SELECT * FROM rekap_stunting_2022 WHERE bulan_pemeriksaan = '06'"));
$jumlahDataJuli = count(query("SELECT * FROM rekap_stunting_2022 WHERE bulan_pemeriksaan = '07'"));
$jumlahDataAgustus = count(query("SELECT * FROM rekap_stunting_2022 WHERE bulan_pemeriksaan = '08'"));
$jumlahDataSeptember = count(query("SELECT * FROM rekap_stunting_2022 WHERE bulan_pemeriksaan = '09'"));
$jumlahDataOktober = count(query("SELECT * FROM rekap_stunting_2022 WHERE bulan_pemeriksaan = '10'"));
$jumlahDataNovember = count(query("SELECT * FROM rekap_stunting_2022 WHERE bulan_pemeriksaan = '11'"));
$jumlahDataDesember = count(query("SELECT * FROM rekap_stunting_2022 WHERE bulan_pemeriksaan = '12'"));

// SANGAT PENDEK JANUARI
$menghitungSangatPendekJanuari = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Sangat Pendek' AND bulan_pemeriksaan = '01' "));

if ($menghitungSangatPendekJanuari == 0) {
    $menghitungSangatPendekJanuari = 0;
}

// PENDEK JANUARI
$menghitungPendekJanuari = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Pendek' AND bulan_pemeriksaan = '01'"));

if ($menghitungPendekJanuari == 0) {
    $menghitungPendekJanuari = 0;
}

// STUNTING JANUARI
$menghitungStuntingJanuari = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Stunting' AND bulan_pemeriksaan = '01'"));

if ($menghitungStuntingJanuari == 0) {
    $menghitungStuntingJanuari = 0;
}

// NORMAL JANUARI
$menghitungNormalJanuari = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Normal' AND bulan_pemeriksaan = '01'"));

if ($menghitungNormalJanuari == 0) {
    $menghitungNormalJanuari = 0;
}

// TINGGI JANUARI
$menghitungTinggiJanuari = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Tinggi' AND bulan_pemeriksaan = '01'"));

if ($menghitungTinggiJanuari == 0) {
    $menghitungTinggiJanuari = 0;
}

// SANGAT PENDEK FEBRUARI
$menghitungSangatPendekFebruari = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Sangat Pendek' AND bulan_pemeriksaan = '02' "));

if ($menghitungSangatPendekFebruari == 0) {
    $menghitungSangatPendekFebruari = 0;
}

// PENDEK FEBRUARI
$menghitungPendekFebruari = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Pendek' AND bulan_pemeriksaan = '02'"));

if ($menghitungPendekFebruari == 0) {
    $menghitungPendekFebruari = 0;
}

// STUNTING FEBRUARI
$menghitungStuntingFebruari = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Stunting' AND bulan_pemeriksaan = '02'"));

if ($menghitungStuntingFebruari == 0) {
    $menghitungStuntingFebruari = 0;
}

// NORMAL FEBRUARI
$menghitungNormalFebruari = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Normal' AND bulan_pemeriksaan = '02'"));

if ($menghitungNormalFebruari == 0) {
    $menghitungNormalFebruari = 0;
}

// TINGGI FEBRUARI
$menghitungTinggiFebruari = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Tinggi' AND bulan_pemeriksaan = '02'"));

if ($menghitungTinggiFebruari == 0) {
    $menghitungTinggiFebruari = 0;
}

// SANGAT PENDEK MARET
$menghitungSangatPendekMaret = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Sangat Pendek' AND bulan_pemeriksaan = '03' "));

if ($menghitungSangatPendekMaret == 0) {
    $menghitungSangatPendekMaret = 0;
}

// PENDEK MARET
$menghitungPendekMaret = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Pendek' AND bulan_pemeriksaan = '03'"));

if ($menghitungPendekMaret == 0) {
    $menghitungPendekMaret = 0;
}

// STUNTING MARET
$menghitungStuntingMaret = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Stunting' AND bulan_pemeriksaan = '03'"));

if ($menghitungStuntingMaret == 0) {
    $menghitungStuntingMaret = 0;
}

// NORMAL MARET
$menghitungNormalMaret = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Normal' AND bulan_pemeriksaan = '03'"));

if ($menghitungNormalMaret == 0) {
    $menghitungNormalMaret = 0;
}

// TINGGI MARET
$menghitungTinggiMaret = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Tinggi' AND bulan_pemeriksaan = '03'"));

if ($menghitungTinggiMaret == 0) {
    $menghitungTinggiMaret = 0;
}

// SANGAT PENDEK APRIL
$menghitungSangatPendekApril = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Sangat Pendek' AND bulan_pemeriksaan = '04' "));

if ($menghitungSangatPendekApril == 0) {
    $menghitungSangatPendekApril = 0;
}

// PENDEK APRIL
$menghitungPendekApril = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Pendek' AND bulan_pemeriksaan = '04'"));

if ($menghitungPendekApril == 0) {
    $menghitungPendekApril = 0;
}

// STUNTING APRIL
$menghitungStuntingApril = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Stunting' AND bulan_pemeriksaan = '04'"));

if ($menghitungStuntingApril == 0) {
    $menghitungStuntingApril = 0;
}

// NORMAL APRIL
$menghitungNormalApril = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Normal' AND bulan_pemeriksaan = '04'"));

if ($menghitungNormalApril == 0) {
    $menghitungNormalApril = 0;
}

// TINGGI APRIL
$menghitungTinggiApril = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Tinggi' AND bulan_pemeriksaan = '04'"));

if ($menghitungTinggiApril == 0) {
    $menghitungTinggiApril = 0;
}




// SANGAT PENDEK MEI
$menghitungSangatPendekMei = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Sangat Pendek' AND bulan_pemeriksaan = '05' "));

if ($menghitungSangatPendekMei == 0) {
    $menghitungSangatPendekMei = 0;
}

// PENDEK MEI
$menghitungPendekMei = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Pendek' AND bulan_pemeriksaan = '05'"));

if ($menghitungPendekMei == 0) {
    $menghitungPendekMei = 0;
}

// STUNTING MEI
$menghitungStuntingMei = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Stunting' AND bulan_pemeriksaan = '05'"));

if ($menghitungStuntingMei == 0) {
    $menghitungStuntingMei = 0;
}

// NORMAL MEI
$menghitungNormalMei = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Normal' AND bulan_pemeriksaan = '05'"));

if ($menghitungNormalMei == 0) {
    $menghitungNormalMei = 0;
}

// TINGGI MEI
$menghitungTinggiMei = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Tinggi' AND bulan_pemeriksaan = '05'"));

if ($menghitungTinggiMei == 0) {
    $menghitungTinggiMei = 0;
}


// SANGAT PENDEK JUNI
$menghitungSangatPendekJuni = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Sangat Pendek' AND bulan_pemeriksaan = '06' "));

if ($menghitungSangatPendekJuni == 0) {
    $menghitungSangatPendekJuni = 0;
}
// PENDEK JUNI
$menghitungPendekJuni = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Pendek' AND bulan_pemeriksaan = '06'"));

if ($menghitungPendekJuni == 0) {
    $menghitungPendekJuni = 0;
}

// STUNTING JUNI
$menghitungStuntingJuni = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Stunting' AND bulan_pemeriksaan = '06'"));

if ($menghitungStuntingJuni == 0) {
    $menghitungStuntingJuni = 0;
}

// NORMAL JUNI
$menghitungNormalJuni = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Normal' AND bulan_pemeriksaan = '06'"));

if ($menghitungNormalJuni == 0) {
    $menghitungNormalJuni = 0;
}

// TINGGI JUNI
$menghitungTinggiJuni = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Tinggi' AND bulan_pemeriksaan = '06'"));

if ($menghitungTinggiJuni == 0) {
    $menghitungTinggiJuni = 0;
}



// SANGAT PENDEK JULI
$menghitungSangatPendekJuli = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Sangat Pendek' AND bulan_pemeriksaan = '07' "));

if ($menghitungSangatPendekJuli == 0) {
    $menghitungSangatPendekJuli = 0;
}
// PENDEK JULI
$menghitungPendekJuli = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Pendek' AND bulan_pemeriksaan = '07'"));

if ($menghitungPendekJuli == 0) {
    $menghitungPendekJuli = 0;
}

// STUNTING JULI
$menghitungStuntingJuli = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Stunting' AND bulan_pemeriksaan = '07'"));

if ($menghitungStuntingJuli == 0) {
    $menghitungStuntingJuli = 0;
}

// NORMAL JULI
$menghitungNormalJuli = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Normal' AND bulan_pemeriksaan = '07'"));

if ($menghitungNormalJuli == 0) {
    $menghitungNormalJuli = 0;
}

// TINGGI JULI
$menghitungTinggiJuli = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Tinggi' AND bulan_pemeriksaan = '07'"));

if ($menghitungTinggiJuli == 0) {
    $menghitungTinggiJuli = 0;
}




// SANGAT PENDEK AGUSTUS
$menghitungSangatPendekAgustus = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Sangat Pendek' AND bulan_pemeriksaan = '08' "));

if ($menghitungSangatPendekAgustus == 0) {
    $menghitungSangatPendekAgustus = 0;
}
// PENDEK AGUSTUS
$menghitungPendekAgustus = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Pendek' AND bulan_pemeriksaan = '08'"));

if ($menghitungPendekAgustus == 0) {
    $menghitungPendekAgustus = 0;
}

// STUNTING AGUSTUS
$menghitungStuntingAgustus = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Stunting' AND bulan_pemeriksaan = '08'"));

if ($menghitungStuntingAgustus == 0) {
    $menghitungStuntingAgustus = 0;
}

// NORMAL AGUSTUS
$menghitungNormalAgustus = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Normal' AND bulan_pemeriksaan = '08'"));

if ($menghitungNormalAgustus == 0) {
    $menghitungNormalAgustus = 0;
}

// TINGGI AGUSTUS
$menghitungTinggiAgustus = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Tinggi' AND bulan_pemeriksaan = '08'"));

if ($menghitungTinggiAgustus == 0) {
    $menghitungTinggiAgustus = 0;
}



// SANGAT PENDEK SEPTEMBER
$menghitungSangatPendekSeptember = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Sangat Pendek' AND bulan_pemeriksaan = '09' "));

if ($menghitungSangatPendekSeptember == 0) {
    $menghitungSangatPendekSeptember = 0;
}
// PENDEK SEPTEMBER
$menghitungPendekSeptember = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Pendek' AND bulan_pemeriksaan = '09'"));

if ($menghitungPendekSeptember == 0) {
    $menghitungPendekSeptember = 0;
}

// STUNTING SEPTEMBER
$menghitungStuntingSeptember = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Stunting' AND bulan_pemeriksaan = '09'"));

if ($menghitungStuntingSeptember == 0) {
    $menghitungStuntingSeptember = 0;
}

// NORMAL SEPTEMBER
$menghitungNormalSeptember = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Normal' AND bulan_pemeriksaan = '09'"));

if ($menghitungNormalSeptember == 0) {
    $menghitungNormalSeptember = 0;
}

// TINGGI SEPTEMBER
$menghitungTinggiSeptember = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Tinggi' AND bulan_pemeriksaan = '09'"));

if ($menghitungTinggiSeptember == 0) {
    $menghitungTinggiSeptember = 0;
}




// SANGAT PENDEK OKTOBER
$menghitungSangatPendekOktober = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Sangat Pendek' AND bulan_pemeriksaan = '10' "));

if ($menghitungSangatPendekOktober == 0) {
    $menghitungSangatPendekOktober = 0;
}
// PENDEK OKTOBER
$menghitungPendekOktober = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Pendek' AND bulan_pemeriksaan = '10'"));

if ($menghitungPendekOktober == 0) {
    $menghitungPendekOktober = 0;
}

// STUNTING OKTOBER
$menghitungStuntingOktober = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Stunting' AND bulan_pemeriksaan = '10'"));

if ($menghitungStuntingOktober == 0) {
    $menghitungStuntingOktober = 0;
}

// NORMAL OKTOBER
$menghitungNormalOktober = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Normal' AND bulan_pemeriksaan = '07'"));

if ($menghitungNormalOktober == 0) {
    $menghitungNormalOktober = 0;
}

// TINGGI OKTOBER
$menghitungTinggiOktober = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Tinggi' AND bulan_pemeriksaan = '07'"));

if ($menghitungTinggiOktober == 0) {
    $menghitungTinggiOktober = 0;
}



// SANGAT PENDEK NOVEMBER
$menghitungSangatPendekNovember = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Sangat Pendek' AND bulan_pemeriksaan = '11' "));

if ($menghitungSangatPendekNovember == 0) {
    $menghitungSangatPendekNovember = 0;
}
// PENDEK NOVEMBER
$menghitungPendekNovember = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Pendek' AND bulan_pemeriksaan = '11'"));

if ($menghitungPendekNovember == 0) {
    $menghitungPendekNovember = 0;
}

// STUNTING NOVEMBER
$menghitungStuntingNovember = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Stunting' AND bulan_pemeriksaan = '11'"));

if ($menghitungStuntingNovember == 0) {
    $menghitungStuntingNovember = 0;
}

// NORMAL NOVEMBER
$menghitungNormalNovember = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Normal' AND bulan_pemeriksaan = '11'"));

if ($menghitungNormalNovember == 0) {
    $menghitungNormalNovember = 0;
}

// TINGGI NOVEMBER
$menghitungTinggiNovember = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Tinggi' AND bulan_pemeriksaan = '11'"));

if ($menghitungTinggiNovember == 0) {
    $menghitungTinggiNovember = 0;
}



// SANGAT PENDEK DESEMBER
$menghitungSangatPendekDesember = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Sangat Pendek' AND bulan_pemeriksaan = '12' "));

if ($menghitungSangatPendekDesember == 0) {
    $menghitungSangatPendekDesember = 0;
}
// PENDEK DESEMBER
$menghitungPendekDesember = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Pendek' AND bulan_pemeriksaan = '12'"));

if ($menghitungPendekDesember == 0) {
    $menghitungPendekDesember = 0;
}

// STUNTING DESEMBER
$menghitungStuntingDesember = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Stunting' AND bulan_pemeriksaan = '12'"));

if ($menghitungStuntingDesember == 0) {
    $menghitungStuntingDesember = 0;
}

// NORMAL DESEMBER
$menghitungNormalDesember = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Normal' AND bulan_pemeriksaan = '12'"));

if ($menghitungNormalDesember == 0) {
    $menghitungNormalDesember = 0;
}

// TINGGI DESEMBER
$menghitungTinggiDesember = count(query("SELECT * FROM rekap_stunting_2022 WHERE status_gizi_tb_u = 'Tinggi' AND bulan_pemeriksaan = '12'"));

if ($menghitungTinggiDesember == 0) {
    $menghitungTinggiDesember = 0;
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

        <h4 align="center" style="margin: 0px; padding:0px;"><b><u>SURAT HASIL REKAPITULASI GRAFIK PROGRAM KPM SKALA BULANAN</u></b></h4>
        <p align="center" style="margin: 0px; padding:0px; font-size:12px;">Nomor : 1/SUNGAI-LANDAS/A.1/IX/2022</p>
        

        <p align="justify" style="padding-left:4em; margin-bottom:0px; margin-left: 10px;">Berikut merupakan hasil rekapitulasi statistik anak pada grafik bulanan pelaksanaan KPM</p>
        <p style="padding:0px; margin-top:0px;"> data di diperoleh dan di pertanggung jawabkan dengan sebenar benar nya.</p>

        <table class="table table-bordered mb-3" style="width: 100%;" cellspacing="0" cellpadding="5">
            <tr align="center";>
                <th style="width: 20%;" style="border: 1px solid black; background-color: #90C8AC;"> Bulan </th>
                <th style="width: 40%;" style="border: 1px solid black; background-color: #90C8AC;"> Jumlah Data </th>
                <th style="width: 40%;" style="border: 1px solid black; background-color: #90C8AC;"> Keterangan </th>
            </tr>

            <tr>
                <td align="center" style="border: 1px solid black;"> Januari </td>';
$html .= '<td align="center" style="border: 1px solid black;"> ' . $jumlahDataJanuari . ' Data' . ' </td>';

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungSangatPendekJanuari . ' Anak Bertubuh Sangat Pendek' . '
<p>' . 'b) ' . $menghitungPendekJanuari . ' Anak Bertubuh Pendek' . '</p>
<p>' . 'c) ' . $menghitungStuntingJanuari . ' Anak Bertubuh Stunting' . '</p>
<p>' . 'd) ' . $menghitungNormalJanuari . ' Anak Bertubuh Normal' . '</p>
<p>' . 'e) ' . $menghitungTinggiJanuari . ' Anak Bertubuh Tinggi' . '</p>
</td> 
</tr>';

$html .= '<tr>
<td align="center" style="border: 1px solid black; background-color: #E0DECA;"> Februari </td>
<td align="center" style="border: 1px solid black; background-color: #E0DECA;"> ' . $jumlahDataFebruari . ' Data' . ' </td>';
$html .= '<td align="justify" style="border: 1px solid black; background-color: #E0DECA;"> ' . 'a) ' . $menghitungSangatPendekFebruari . ' Anak Bertubuh Sangat Pendek' . '
<p>' . 'b) ' . $menghitungPendekFebruari . ' Anak Bertubuh Pendek' . '</p>
<p>' . 'c) ' . $menghitungStuntingFebruari . ' Anak Bertubuh Stunting' . '</p>
<p>' . 'd) ' . $menghitungNormalFebruari . ' Anak Bertubuh Normal' . '</p>
<p>' . 'e) ' . $menghitungTinggiFebruari . ' Anak Bertubuh Tinggi' . '</p>
</td></tr>';

$html .= '<tr>
<td align="center" style="border: 1px solid black;"> Maret </td>
<td align="center" style="border: 1px solid black;"> ' . $jumlahDataMaret . ' Data' . ' </td>';
$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungSangatPendekMaret . ' Anak Bertubuh Sangat Pendek' . '
<p>' . 'b) ' . $menghitungPendekMaret . ' Anak Bertubuh Pendek' . '</p>
<p>' . 'c) ' . $menghitungStuntingMaret . ' Anak Bertubuh Stunting' . '</p>
<p>' . 'd) ' . $menghitungNormalMaret . ' Anak Bertubuh Normal' . '</p>
<p>' . 'e) ' . $menghitungTinggiMaret . ' Anak Bertubuh Tinggi' . '</p>
</td></tr>';

$html .= '<tr>
<td align="center" style="border: 1px solid black; background-color: #E0DECA;"> April </td>
<td align="center" style="border: 1px solid black; background-color: #E0DECA;"> ' . $jumlahDataApril . ' Data' . ' </td>';
$html .= '<td align="justify" style="border: 1px solid black; background-color: #E0DECA;"> ' . 'a) ' . $menghitungSangatPendekApril . ' Anak Bertubuh Sangat Pendek' . '
<p>' . 'b) ' . $menghitungPendekApril . ' Anak Bertubuh Pendek' . '</p>
<p>' . 'c) ' . $menghitungStuntingApril . ' Anak Bertubuh Stunting' . '</p>
<p>' . 'd) ' . $menghitungNormalApril . ' Anak Bertubuh Normal' . '</p>
<p>' . 'e) ' . $menghitungTinggiApril . ' Anak Bertubuh Tinggi' . '</p>
</td></tr>';

$html .= '<tr>
<td align="center" style="border: 1px solid black;"> Mei </td>
<td align="center" style="border: 1px solid black;"> ' . $jumlahDataMei . ' Data' . ' </td>';
$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungSangatPendekMei . ' Anak Bertubuh Sangat Pendek' . '
<p>' . 'b) ' . $menghitungPendekMei . ' Anak Bertubuh Pendek' . '</p>
<p>' . 'c) ' . $menghitungStuntingMei . ' Anak Bertubuh Stunting' . '</p>
<p>' . 'd) ' . $menghitungNormalMei . ' Anak Bertubuh Normal' . '</p>
<p>' . 'e) ' . $menghitungTinggiMei . ' Anak Bertubuh Tinggi' . '</p>
</td></tr>';

$html .= '<tr>
<td align="center" style="border: 1px solid black; background-color: #E0DECA;"> Juni </td>
<td align="center" style="border: 1px solid black; background-color: #E0DECA;"> ' . $jumlahDataJuni . ' Data' . ' </td>';
$html .= '<td align="justify" style="border: 1px solid black; background-color: #E0DECA;"> ' . 'a) ' . $menghitungSangatPendekJuni . ' Anak Bertubuh Sangat Pendek' . '
<p>' . 'b) ' . $menghitungPendekJuni . ' Anak Bertubuh Pendek' . '</p>
<p>' . 'c) ' . $menghitungStuntingJuni . ' Anak Bertubuh Stunting' . '</p>
<p>' . 'd) ' . $menghitungNormalJuni . ' Anak Bertubuh Normal' . '</p>
<p>' . 'e) ' . $menghitungTinggiJuni . ' Anak Bertubuh Tinggi' . '</p>
</td></tr>';

$html .= '<tr>
<td align="center" style="border: 1px solid black;"> Juli </td>
<td align="center" style="border: 1px solid black;"> ' . $jumlahDataJuli . ' Data' . ' </td>';
$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungSangatPendekJuli . ' Anak Bertubuh Sangat Pendek' . '
<p>' . 'b) ' . $menghitungPendekJuli . ' Anak Bertubuh Pendek' . '</p>
<p>' . 'c) ' . $menghitungStuntingJuli . ' Anak Bertubuh Stunting' . '</p>
<p>' . 'd) ' . $menghitungNormalJuli . ' Anak Bertubuh Normal' . '</p>
<p>' . 'e) ' . $menghitungTinggiJuli . ' Anak Bertubuh Tinggi' . '</p>
</td></tr>';

$html .= '<tr>
<td align="center" style="border: 1px solid black; background-color: #E0DECA;"> Agustus </td>
<td align="center" style="border: 1px solid black; background-color: #E0DECA;"> ' . $jumlahDataAgustus . ' Data' . ' </td>';
$html .= '<td align="justify" style="border: 1px solid black; background-color: #E0DECA;"> ' . 'a) ' . $menghitungSangatPendekAgustus . ' Anak Bertubuh Sangat Pendek' . '
<p>' . 'b) ' . $menghitungPendekAgustus . ' Anak Bertubuh Pendek' . '</p>
<p>' . 'c) ' . $menghitungStuntingAgustus . ' Anak Bertubuh Stunting' . '</p>
<p>' . 'd) ' . $menghitungNormalAgustus . ' Anak Bertubuh Normal' . '</p>
<p>' . 'e) ' . $menghitungTinggiAgustus . ' Anak Bertubuh Tinggi' . '</p>
</td></tr>';

$html .= '<tr>
<td align="center" style="border: 1px solid black;"> September </td>
<td align="center" style="border: 1px solid black;"> ' . $jumlahDataSeptember . ' Data' . ' </td>';
$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungSangatPendekSeptember . ' Anak Bertubuh Sangat Pendek' . '
<p>' . 'b) ' . $menghitungPendekSeptember . ' Anak Bertubuh Pendek' . '</p>
<p>' . 'c) ' . $menghitungStuntingSeptember . ' Anak Bertubuh Stunting' . '</p>
<p>' . 'd) ' . $menghitungNormalSeptember . ' Anak Bertubuh Normal' . '</p>
<p>' . 'e) ' . $menghitungTinggiSeptember . ' Anak Bertubuh Tinggi' . '</p>
</td></tr>';

$html .= '<tr>
<td align="center" style="border: 1px solid black; background-color: #E0DECA;"> Oktober </td>
<td align="center" style="border: 1px solid black; background-color: #E0DECA;"> ' . $jumlahDataOktober . ' Data' . ' </td>';
$html .= '<td align="justify" style="border: 1px solid black; background-color: #E0DECA;"> ' . 'a) ' . $menghitungSangatPendekOktober . ' Anak Bertubuh Sangat Pendek' . '
<p>' . 'b) ' . $menghitungPendekOktober . ' Anak Bertubuh Pendek' . '</p>
<p>' . 'c) ' . $menghitungStuntingOktober . ' Anak Bertubuh Stunting' . '</p>
<p>' . 'd) ' . $menghitungNormalOktober . ' Anak Bertubuh Normal' . '</p>
<p>' . 'e) ' . $menghitungTinggiOktober . ' Anak Bertubuh Tinggi' . '</p>
</td></tr>';

$html .= '<tr>
<td align="center" style="border: 1px solid black;"> November </td>
<td align="center" style="border: 1px solid black;"> ' . $jumlahDataNovember . ' Data' . ' </td>';
$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungSangatPendekNovember . ' Anak Bertubuh Sangat Pendek' . '
<p>' . 'b) ' . $menghitungPendekNovember . ' Anak Bertubuh Pendek' . '</p>
<p>' . 'c) ' . $menghitungStuntingNovember . ' Anak Bertubuh Stunting' . '</p>
<p>' . 'd) ' . $menghitungNormalNovember . ' Anak Bertubuh Normal' . '</p>
<p>' . 'e) ' . $menghitungTinggiNovember . ' Anak Bertubuh Tinggi' . '</p>
</td></tr>';

$html .= '<tr>
<td align="center" style="border: 1px solid black; background-color: #E0DECA;"> Desember </td>
<td align="center" style="border: 1px solid black; background-color: #E0DECA;"> ' . $jumlahDataDesember . ' Data' . ' </td>';
$html .= '<td align="justify" style="border: 1px solid black; background-color: #E0DECA;"> ' . 'a) ' . $menghitungSangatPendekDesember . ' Anak Bertubuh Sangat Pendek' . '
<p>' . 'b) ' . $menghitungPendekDesember . ' Anak Bertubuh Pendek' . '</p>
<p>' . 'c) ' . $menghitungStuntingDesember . ' Anak Bertubuh Stunting' . '</p>
<p>' . 'd) ' . $menghitungNormalDesember . ' Anak Bertubuh Normal' . '</p>
<p>' . 'e) ' . $menghitungTinggiDesember . ' Anak Bertubuh Tinggi' . '</p>
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
