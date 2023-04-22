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
$jumlahDataJanuari = count(query("SELECT * FROM rekap_hamil_2022 WHERE bulan_pemeriksaan = '01'"));
$jumlahDataFebruari = count(query("SELECT * FROM rekap_hamil_2022 WHERE bulan_pemeriksaan = '02'"));
$jumlahDataMaret = count(query("SELECT * FROM rekap_hamil_2022 WHERE bulan_pemeriksaan = '03'"));
$jumlahDataApril = count(query("SELECT * FROM rekap_hamil_2022 WHERE bulan_pemeriksaan = '04'"));
$jumlahDataMei = count(query("SELECT * FROM rekap_hamil_2022 WHERE bulan_pemeriksaan = '05'"));
$jumlahDataJuni = count(query("SELECT * FROM rekap_hamil_2022 WHERE bulan_pemeriksaan = '06'"));
$jumlahDataJuli = count(query("SELECT * FROM rekap_hamil_2022 WHERE bulan_pemeriksaan = '07'"));
$jumlahDataAgustus = count(query("SELECT * FROM rekap_hamil_2022 WHERE bulan_pemeriksaan = '08'"));
$jumlahDataSeptember = count(query("SELECT * FROM rekap_hamil_2022 WHERE bulan_pemeriksaan = '09'"));
$jumlahDataOktober = count(query("SELECT * FROM rekap_hamil_2022 WHERE bulan_pemeriksaan = '10'"));
$jumlahDataNovember = count(query("SELECT * FROM rekap_hamil_2022 WHERE bulan_pemeriksaan = '11'"));
$jumlahDataDesember = count(query("SELECT * FROM rekap_hamil_2022 WHERE bulan_pemeriksaan = '12'"));

// KEK JANUARI
$menghitungKEKjanuari = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'KEK' AND bulan_pemeriksaan = '01' "));

if ($menghitungKEKjanuari == 0) {
    $menghitungKEKjanuari = 0;
}

// NORMAL JANUARI
$menghitungNORMALjanuari = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'N' AND bulan_pemeriksaan = '01'"));

if ($menghitungNORMALjanuari == 0) {
    $menghitungNORMALjanuari = 0;
}

// RISTI JANUARI
$menghitungRISTIjanuari = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'RISTI' AND bulan_pemeriksaan = '01'"));

if ($menghitungRISTIjanuari == 0) {
    $menghitungRISTIjanuari = 0;
}




// KEK FEBRUARI
$menghitungKEKfebruari = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'KEK' AND bulan_pemeriksaan = '02' "));

if ($menghitungKEKfebruari == 0) {
    $menghitungKEKfebruari = 0;
}

// NORMAL FEBRUARI
$menghitungNORMALfebruari = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'N' AND bulan_pemeriksaan = '02'"));

if ($menghitungNORMALfebruari == 0) {
    $menghitungNORMALfebruari = 0;
}

// RISTI FEBRUARI
$menghitungRISTIfebruari = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'RISTI' AND bulan_pemeriksaan = '02'"));

if ($menghitungRISTIfebruari == 0) {
    $menghitungRISTIfebruari = 0;
}





// KEK MARET
$menghitungKEKmaret = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'KEK' AND bulan_pemeriksaan = '03' "));

if ($menghitungKEKmaret == 0) {
    $menghitungKEKmaret = 0;
}

// NORMAL MARET
$menghitungNORMALmaret = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'N' AND bulan_pemeriksaan = '03'"));

if ($menghitungNORMALmaret == 0) {
    $menghitungNORMALmaret = 0;
}

// RISTI MARET
$menghitungRISTImaret = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'RISTI' AND bulan_pemeriksaan = '03'"));

if ($menghitungRISTImaret == 0) {
    $menghitungRISTImaret = 0;
}



// KEK APRIL
$menghitungKEKapril = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'KEK' AND bulan_pemeriksaan = '04' "));

if ($menghitungKEKapril == 0) {
    $menghitungKEKapril = 0;
}

// NORMAL APRIL
$menghitungNORMALapril = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'N' AND bulan_pemeriksaan = '04'"));

if ($menghitungNORMALapril == 0) {
    $menghitungNORMALapril = 0;
}

// RISTI APRIL
$menghitungRISTIapril = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'RISTI' AND bulan_pemeriksaan = '04'"));

if ($menghitungRISTIapril == 0) {
    $menghitungRISTIapril = 0;
}







// KEK MEI
$menghitungKEKmei = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'KEK' AND bulan_pemeriksaan = '05' "));

if ($menghitungKEKmei == 0) {
    $menghitungKEKmei = 0;
}

// NORMAL MEI
$menghitungNORMALmei = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'N' AND bulan_pemeriksaan = '05'"));

if ($menghitungNORMALmei == 0) {
    $menghitungNORMALmei = 0;
}

// RISTI MEI
$menghitungRISTImei = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'RISTI' AND bulan_pemeriksaan = '05'"));

if ($menghitungRISTImei == 0) {
    $menghitungRISTImei = 0;
}




// KEK JUNI
$menghitungKEKjuni = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'KEK' AND bulan_pemeriksaan = '06' "));

if ($menghitungKEKjuni == 0) {
    $menghitungKEKjuni = 0;
}

// NORMAL JUNI
$menghitungNORMALjuni = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'N' AND bulan_pemeriksaan = '06'"));

if ($menghitungNORMALjuni == 0) {
    $menghitungNORMALjuni = 0;
}

// RISTI JUNI
$menghitungRISTIjuni = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'RISTI' AND bulan_pemeriksaan = '06'"));

if ($menghitungRISTIjuni == 0) {
    $menghitungRISTIjuni = 0;
}




// KEK JULI
$menghitungKEKjuli = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'KEK' AND bulan_pemeriksaan = '07' "));

if ($menghitungKEKjuli == 0) {
    $menghitungKEKjuli = 0;
}

// NORMAL JULI
$menghitungNORMALjuli = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'N' AND bulan_pemeriksaan = '07'"));

if ($menghitungNORMALjuli == 0) {
    $menghitungNORMALjuli = 0;
}

// RISTI JULI
$menghitungRISTIjuli = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'RISTI' AND bulan_pemeriksaan = '07'"));

if ($menghitungRISTIjuli == 0) {
    $menghitungRISTIjuli = 0;
}




// RISTI AGUSTUS
$menghitungRISTIagustus = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'RISTI' AND bulan_pemeriksaan = '08'"));

if ($menghitungRISTIagustus == 0) {
    $menghitungRISTIagustus = 0;
}

// KEK AGUSTUS
$menghitungKEKagustus = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'KEK' AND bulan_pemeriksaan = '08' "));

if ($menghitungKEKagustus == 0) {
    $menghitungKEKagustus = 0;
}

// NORMAL AGUSTUS
$menghitungNORMALagustus = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'N' AND bulan_pemeriksaan = '08'"));

if ($menghitungNORMALagustus == 0) {
    $menghitungNORMALagustus = 0;
}




// KEK SEPTEMBER
$menghitungKEKseptember = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'KEK' AND bulan_pemeriksaan = '09' "));

if ($menghitungKEKseptember == 0) {
    $menghitungKEKseptember = 0;
}

// NORMAL SEPTEMBER
$menghitungNORMALseptember = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'N' AND bulan_pemeriksaan = '09'"));

if ($menghitungNORMALseptember == 0) {
    $menghitungNORMALseptember = 0;
}

// RISTI SEPTEMBER
$menghitungRISTIseptember = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'RISTI' AND bulan_pemeriksaan = '09'"));

if ($menghitungRISTIseptember == 0) {
    $menghitungRISTIseptember = 0;
}




// KEK OKTOBER
$menghitungKEKoktober = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'KEK' AND bulan_pemeriksaan = '10' "));

if ($menghitungKEKoktober == 0) {
    $menghitungKEKoktober = 0;
}

// NORMAL OKTOBER
$menghitungNORMALoktober = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'N' AND bulan_pemeriksaan = '10'"));

if ($menghitungNORMALoktober == 0) {
    $menghitungNORMALoktober = 0;
}

// RISTI OKTOBER
$menghitungRISTIoktober = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'RISTI' AND bulan_pemeriksaan = '10'"));

if ($menghitungRISTIoktober == 0) {
    $menghitungRISTIoktober = 0;
}




// KEK NOVEMBER
$menghitungKEKnovember = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'KEK' AND bulan_pemeriksaan = '11' "));

if ($menghitungKEKnovember == 0) {
    $menghitungKEKnovember = 0;
}

// NORMAL NOVEMBER
$menghitungNORMALnovember = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'N' AND bulan_pemeriksaan = '11'"));

if ($menghitungNORMALnovember == 0) {
    $menghitungNORMALnovember = 0;
}

// RISTI NOVEMBER
$menghitungRISTInovember = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'RISTI' AND bulan_pemeriksaan = '11'"));

if ($menghitungRISTInovember == 0) {
    $menghitungRISTInovember = 0;
}



// KEK DESEMBER
$menghitungKEKdesember = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'KEK' AND bulan_pemeriksaan = '12' "));

if ($menghitungKEKdesember == 0) {
    $menghitungKEKdesember = 0;
}

// NORMAL DESEMBER
$menghitungNORMALdesember = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'N' AND bulan_pemeriksaan = '12'"));

if ($menghitungNORMALdesember == 0) {
    $menghitungNORMALdesember = 0;
}

// RISTI DESEMBER
$menghitungRISTIdesember = count(query("SELECT * FROM rekap_hamil_2022 WHERE status_kehamilan = 'RISTI' AND bulan_pemeriksaan = '12'"));

if ($menghitungRISTIdesember == 0) {
    $menghitungRISTIdesember = 0;
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

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungKEKjanuari . ' Ibu Berstatus Kekurangan Energi Kronik' . '
<p>' . 'b) ' . $menghitungNORMALjanuari . ' Ibu Berstatus Normal' . '</p>
<p>' . 'c) ' . $menghitungRISTIjanuari . ' Ibu Berstatus Resiko Tinggi' . '</p>
</td> 
</tr>

<tr>
                <td align="center" style="border: 1px solid black;"> Februari </td>';
$html .= '<td align="center" style="border: 1px solid black;"> ' . $jumlahDataFebruari . ' Data' . ' </td>';

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungKEKfebruari . ' Ibu Berstatus Kekurangan Energi Kronik' . '
<p>' . 'b) ' . $menghitungNORMALfebruari . ' Ibu Berstatus Normal' . '</p>
<p>' . 'c) ' . $menghitungRISTIfebruari . ' Ibu Berstatus Resiko Tinggi' . '</p>
</td> 
</tr>


<tr>
                <td align="center" style="border: 1px solid black;"> Maret </td>';
$html .= '<td align="center" style="border: 1px solid black;"> ' . $jumlahDataMaret . ' Data' . ' </td>';

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungKEKmaret . ' Ibu Berstatus Kekurangan Energi Kronik' . '
<p>' . 'b) ' . $menghitungNORMALmaret . ' Ibu Berstatus Normal' . '</p>
<p>' . 'c) ' . $menghitungRISTImaret . ' Ibu Berstatus Resiko Tinggi' . '</p>
</td> 
</tr>


<tr>
                <td align="center" style="border: 1px solid black;"> April </td>';
$html .= '<td align="center" style="border: 1px solid black;"> ' . $jumlahDataApril . ' Data' . ' </td>';

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungKEKapril . ' Ibu Berstatus Kekurangan Energi Kronik' . '
<p>' . 'b) ' . $menghitungNORMALapril . ' Ibu Berstatus Normal' . '</p>
<p>' . 'c) ' . $menghitungRISTIapril . ' Ibu Berstatus Resiko Tinggi' . '</p>
</td> 
</tr>


<tr>
                <td align="center" style="border: 1px solid black;"> Mei </td>';
$html .= '<td align="center" style="border: 1px solid black;"> ' . $jumlahDataMei . ' Data' . ' </td>';

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungKEKmei . ' Ibu Berstatus Kekurangan Energi Kronik' . '
<p>' . 'b) ' . $menghitungNORMALmei . ' Ibu Berstatus Normal' . '</p>
<p>' . 'c) ' . $menghitungRISTImei . ' Ibu Berstatus Resiko Tinggi' . '</p>
</td> 
</tr>


<tr>
                <td align="center" style="border: 1px solid black;"> Juni </td>';
$html .= '<td align="center" style="border: 1px solid black;"> ' . $jumlahDataJuni . ' Data' . ' </td>';

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungKEKjuni . ' Ibu Berstatus Kekurangan Energi Kronik' . '
<p>' . 'b) ' . $menghitungNORMALjuni . ' Ibu Berstatus Normal' . '</p>
<p>' . 'c) ' . $menghitungRISTIjuni . ' Ibu Berstatus Resiko Tinggi' . '</p>
</td> 
</tr>


<tr>
                <td align="center" style="border: 1px solid black;"> Juli </td>';
$html .= '<td align="center" style="border: 1px solid black;"> ' . $jumlahDataJuli . ' Data' . ' </td>';

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungKEKjuli . ' Ibu Berstatus Kekurangan Energi Kronik' . '
<p>' . 'b) ' . $menghitungNORMALjuli . ' Ibu Berstatus Normal' . '</p>
<p>' . 'c) ' . $menghitungRISTIjuli . ' Ibu Berstatus Resiko Tinggi' . '</p>
</td> 
</tr>


<tr>
                <td align="center" style="border: 1px solid black;"> Agustus </td>';
$html .= '<td align="center" style="border: 1px solid black;"> ' . $jumlahDataAgustus . ' Data' . ' </td>';

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungKEKagustus . ' Ibu Berstatus Kekurangan Energi Kronik' . '
<p>' . 'b) ' . $menghitungNORMALagustus . ' Ibu Berstatus Normal' . '</p>
<p>' . 'c) ' . $menghitungRISTIagustus . ' Ibu Berstatus Resiko Tinggi' . '</p>
</td> 
</tr>


<tr>
                <td align="center" style="border: 1px solid black;"> September </td>';
$html .= '<td align="center" style="border: 1px solid black;"> ' . $jumlahDataSeptember . ' Data' . ' </td>';

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungKEKseptember . ' Ibu Berstatus Kekurangan Energi Kronik' . '
<p>' . 'b) ' . $menghitungNORMALseptember . ' Ibu Berstatus Normal' . '</p>
<p>' . 'c) ' . $menghitungRISTIseptember . ' Ibu Berstatus Resiko Tinggi' . '</p>
</td> 
</tr>


<tr>
                <td align="center" style="border: 1px solid black;"> Oktober </td>';
$html .= '<td align="center" style="border: 1px solid black;"> ' . $jumlahDataOktober . ' Data' . ' </td>';

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungKEKoktober . ' Ibu Berstatus Kekurangan Energi Kronik' . '
<p>' . 'b) ' . $menghitungNORMALoktober . ' Ibu Berstatus Normal' . '</p>
<p>' . 'c) ' . $menghitungRISTIoktober . ' Ibu Berstatus Resiko Tinggi' . '</p>
</td> 
</tr>


<tr>
                <td align="center" style="border: 1px solid black;"> November </td>';
$html .= '<td align="center" style="border: 1px solid black;"> ' . $jumlahDataNovember . ' Data' . ' </td>';

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungKEKnovember . ' Ibu Berstatus Kekurangan Energi Kronik' . '
<p>' . 'b) ' . $menghitungNORMALnovember . ' Ibu Berstatus Normal' . '</p>
<p>' . 'c) ' . $menghitungRISTInovember . ' Ibu Berstatus Resiko Tinggi' . '</p>
</td> 
</tr>


<tr>
                <td align="center" style="border: 1px solid black;"> Desember </td>';
$html .= '<td align="center" style="border: 1px solid black;"> ' . $jumlahDataDesember . ' Data' . ' </td>';

$html .= '<td align="justify" style="border: 1px solid black;"> ' . 'a) ' . $menghitungKEKdesember . ' Ibu Berstatus Kekurangan Energi Kronik' . '
<p>' . 'b) ' . $menghitungNORMALdesember . ' Ibu Berstatus Normal' . '</p>
<p>' . 'c) ' . $menghitungRISTIdesember . ' Ibu Berstatus Resiko Tinggi' . '</p>
</td> 
</tr>';



$html .= '</tr></table>';

$html .= '<p align="justify" style="padding-left:4em; margin-bottom:0px; margin-left: 10px;">Dengan ini menyatakan keaslian dan keabsahan data dengan sebenar - benarnya didapat</p>
        <p style="padding:0px; margin-top:0px;">serta data di diperoleh dan di pertanggung jawabkan dengan sepenuhnya</p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>';

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
