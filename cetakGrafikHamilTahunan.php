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

$cetakStunting = cetakStuntingGrafikBulanan("SELECT * FROM rekap_hamil_2022");
$jumlahData2022 = count(query("SELECT * FROM rekap_hamil_2022"));
$jumlahData2023 = count(query("SELECT * FROM rekap_hamil_2023"));
$jumlahData2024 = count(query("SELECT * FROM rekap_hamil_2024"));
$jumlahData2025 = count(query("SELECT * FROM rekap_hamil_2025"));

// KEK 2022
$menghitungKEK2022 = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'KEK'"));

if ($menghitungKEK2022 == 0) {
    $menghitungKEK2022 = 0;
}

// NORMAL 2022
$menghitungNORMAL2022 = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'N'"));

if ($menghitungNORMAL2022 == 0) {
    $menghitungNORMAL2022 = 0;
}

// RISTI 2022
$menghitungRISTI2022 = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'RISTI'"));

if ($menghitungRISTI2022 == 0) {
    $menghitungRISTI2022 = 0;
}



// KEK 2023
$menghitungKEK2023 = count(query("SELECT * FROM rekap_hamil_2023 WHERE status_kehamilan = 'KEK'"));

if ($menghitungKEK2023 == 0) {
    $menghitungKEK2023 = 0;
}

// NORMAL 2023
$menghitungNORMAL2023 = count(query("SELECT * FROM rekap_hamil_2023 WHERE status_kehamilan = 'N'"));

if ($menghitungNORMAL2023 == 0) {
    $menghitungNORMAL2023 = 0;
}

// RISTI 2023
$menghitungRISTI2023 = count(query("SELECT * FROM rekap_hamil_2023 WHERE status_kehamilan = 'RISTI'"));

if ($menghitungRISTI2023 == 0) {
    $menghitungRISTI2023 = 0;
}




// KEK 2024
$menghitungKEK2024 = count(query("SELECT * FROM rekap_hamil_2024 WHERE status_kehamilan = 'KEK'"));

if ($menghitungKEK2024 == 0) {
    $menghitungKEK2024 = 0;
}

// NORMAL 2024
$menghitungNORMAL2024 = count(query("SELECT * FROM rekap_hamil_2024 WHERE status_kehamilan = 'N'"));

if ($menghitungNORMAL2024 == 0) {
    $menghitungNORMAL2024 = 0;
}

// RISTI 2024
$menghitungRISTI2024 = count(query("SELECT * FROM rekap_hamil_2024 WHERE status_kehamilan = 'RISTI'"));

if ($menghitungRISTI2024 == 0) {
    $menghitungRISTI2024 = 0;
}





// KEK 2025
$menghitungKEK2025 = count(query("SELECT * FROM rekap_hamil_2025 WHERE status_kehamilan = 'KEK'"));

if ($menghitungKEK2025 == 0) {
    $menghitungKEK2025 = 0;
}

// NORMAL 2025
$menghitungNORMAL2025 = count(query("SELECT * FROM rekap_hamil_2025 WHERE status_kehamilan = 'N'"));

if ($menghitungNORMAL2025 == 0) {
    $menghitungNORMAL2025 = 0;
}

// RISTI 2025
$menghitungRISTI2025 = count(query("SELECT * FROM rekap_hamil_2025 WHERE status_kehamilan = 'RISTI'"));

if ($menghitungRISTI2025 == 0) {
    $menghitungRISTI2025 = 0;
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

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungNORMAL2022 . ' Ibu berstatus kehamilan Normal' . '
<p>' . 'b) ' . $menghitungKEK2022 . ' Ibu berstatus kehamilan KEK' . '</p>
<p>' . 'c) ' . $menghitungRISTI2022 . ' ibu berstatus kehamilan RISTI' . '</p>
</td> 
</tr>


<tr>
                <td align="center" style="border: 1px solid black;"> Tahun 2023 </td>';
$html .= '<td align="center" style="border: 1px solid black;"> ' . $jumlahData2023 . ' Data' . ' </td>';

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungNORMAL2023 . ' Ibu berstatus kehamilan Normal' . '
<p>' . 'b) ' . $menghitungKEK2023 . ' Ibu berstatus kehamilan KEK' . '</p>
<p>' . 'c) ' . $menghitungRISTI2023 . ' ibu berstatus kehamilan RISTI' . '</p>
</td> 
</tr>


<tr>
                <td align="center" style="border: 1px solid black;"> Tahun 2024 </td>';
$html .= '<td align="center" style="border: 1px solid black;"> ' . $jumlahData2024 . ' Data' . ' </td>';

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungNORMAL2024 . ' Ibu berstatus kehamilan Normal' . '
<p>' . 'b) ' . $menghitungKEK2024 . ' Ibu berstatus kehamilan KEK' . '</p>
<p>' . 'c) ' . $menghitungRISTI2024 . ' ibu berstatus kehamilan RISTI' . '</p>
</td> 
</tr>


<tr>
                <td align="center" style="border: 1px solid black;"> Tahun 2025 </td>';
$html .= '<td align="center" style="border: 1px solid black;"> ' . $jumlahData2025 . ' Data' . ' </td>';

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungNORMAL2025 . ' Ibu berstatus kehamilan Normal' . '
<p>' . 'b) ' . $menghitungKEK2025 . ' Ibu berstatus kehamilan KEK' . '</p>
<p>' . 'c) ' . $menghitungRISTI2025 . ' ibu berstatus kehamilan RISTI' . '</p>
</td> 
</tr>';

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
