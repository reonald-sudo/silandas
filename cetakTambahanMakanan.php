<?php

include 'functions.php';

$tambahanMakanan = query("SELECT * FROM tambahan_makanan");

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body onload="window.print()">

    <style>
        table,
        td {
            border: 2px solid black;
        }

        thead {
            font-weight: bold;
        }

        table {
            width: 100%;
        }
    </style>

    <h1 align="center">CETAK DATA TAMBAHAN MAKANAN BAYI</h1>

    <table>
        <thead>
            <td>No</td>
            <td>No KIA</td>
            <td>Nama Bayi</td>
            <td>Nama Orang Tua</td>
            <td>Makanan Tambahan</td>
            <td>Tanggal</td>
            <td>Volume</td>
        </thead>

        <tbody>
            <tr>
                <?php $i = 1; ?>
                <?php foreach ($tambahanMakanan as $row) : ?>
                    <td><?= $i ?></td>
                    <td><?= $row['id_kia'] ?></td>
                    <td><?= $row['nama_bayi'] ?></td>
                    <td><?= $row['nama_ortu'] ?></td>
                    <td><?= $row['makanan_tambahan'] ?></td>
                    <td><?= $row['tanggal'] ?></td>
                    <td><?= $row['volume'] ?></td>
            </tr>
        </tbody>
        <?php $i++; ?>
    <?php endforeach; ?>
    </table>
</body>

</html>