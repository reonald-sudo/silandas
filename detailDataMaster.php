<?php

require 'functions.php';
require 'link.php';

$bulan = date('m');
$tahun = date('Y');

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
    if ($text == "11") return "november";
    if ($text == "12") return "Desember";
}


$data = $_GET["Tables_in_data_master"];
var_dump($data);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail Data Arsip</title>
</head>

<body>
    <table class="table table-bordered" style="border: 1px solid black;">
        <tr>
            <th>Nama</th>
            <th>Berat Badan</th>
        </tr>
        <tr>
            <?php foreach ($data as $row) : ?>
                <td><?= $row["nama"] ?></td>
                <td><?= $row["berat_badan"]  ?></td>
            <?php endforeach; ?>
        </tr>
    </table>
</body>

</html>