<?php

$tahun = date("Y");

require 'functions.php';

// PAGINATION CONFIGURATION
$jumlahDataTampil = 6;
$jumlahData2022 = count(query("SELECT * FROM rekap_stunting_$tahun"));
$jumlahData2023 = count(query("SELECT * FROM rekap_stunting_2023"));
$jumlahData2024 = count(query("SELECT * FROM rekap_stunting_2024"));
$jumlahData2025 = count(query("SELECT * FROM rekap_stunting_2025"));

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Silandas KIA Anak</title>
    <?php require 'link.php' ?>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>

<body style="background-color: #F8F9FA;">
    <center>
        <img src="img/logo.png" alt="" height="64px" width="64px" style="margin-top: 8px">
        <img src="img/LOGO_GERMAS_NORMAL.png" alt="" height="64px" width="128px" style="margin-top: 8px">
    </center>
    <h3 align="center" class="font-Form" style="color:#4A5568; padding: 8px 0 0 0;">Grafik Statistik Anak 0 - 2 Tahun Desa Sungai Landas</h3>
    <p align="center" class="font-Form-Input" style="color:#4A5568; padding-bottom: 15px;">Kec. Karang Intan, Kab. Banjar, Prov. Kalimantan Selatan</p>

    <form action="" method="POST" class="container">
        <table class="table table-bordered" style="border: 1px solid transparent; margin:0px; padding:0px;">

            <tr class="font-Form-Input">
                <td style="padding: 0px; padding-top: 8px;">
                    <a href="statistikAnak.php" class="btn btn-sm btn-success mb-2" style="border-radius: 0px; border: 1px solid #15ada7; background-color: #15ada7;"><img src="img/icon/bar-chart-white.png" alt="" class="iconTable" style="margin-right: 5px;">Grafik Bulanan </a>

                    <a href="statistikAnakTahunan.php" class="btn btn-sm btn-secondary mb-2" style="border-radius: 0px; background-color: #009868; border: 1px solid #009868;"><img src="img/icon/bar-chart-white.png" alt="" class="iconTable" style="margin-right: 5px;">Grafik Tahunan</a>

                    <a href="cetakGrafikStuntingTahunan.php" target="blank()" class="btn btn-sm btn-success mb-2" style="border-radius: 0px; border: 1px solid #EE3625; background-color: #EE3625;"><img src="img/icon/pdfFormat.png" alt="" class="iconTable" style="margin-right: 5px;">Cetak Grafik Tahunan </a>

                    <a href="statistikAnakPerorangan.php" class="btn btn-sm btn-secondary mb-2" style="border-radius: 0px; background-color: #843b62; border: 1px solid #843b62;"><img src="img/icon/bar-chart-white.png" alt="" class="iconTable" style="margin-right: 5px;">Grafik Perorangan</a>

                    <a href="index.php" class="btn btn-sm btn-primary mb-2" style="border-radius: 0px; background-color: #334b49; border: 1px solid #334b49;"><img src="img/icon/undo-white.png" alt="" class="iconTable" style="margin-right: 5px;">Kembali</a>
                </td>
            </tr>
        </table>
    </form>

    <br>

    <div class="container" style="padding-bottom: 30px;">
        <canvas id="myChart"></canvas>
    </div>

    <script>
        const labels = [
            '2022',
            '2023',
            '2024',
            '2025',
        ];
        const data = {
            labels: labels,
            datasets: [{
                label: 'Total Data',
                data: [<?= $jumlahData2022 ?>, <?= $jumlahData2023 ?>, <?= $jumlahData2024 ?>, <?= $jumlahData2025 ?>],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                    'rgba(201, 203, 255, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        };

        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
    </script>

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

    <script src="js/jquery.js"></script>
    <script src="js/kia_anak.js"></script>
    <script src="sweetalert2-11.3.4/package/dist/sweetalert2.all.min.js"></script>


</body>

</html>