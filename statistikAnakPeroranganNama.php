<?php

$tahun = date("Y");

require 'functions.php';

// PAGINATION CONFIGURATION STUNTING
$jumlahDataTampil = 50;
$jumlahData = count(query("SELECT * FROM rekap_stunting_" . $tahun . ""));
$jumlahHalaman = ceil($jumlahData / $jumlahDataTampil);
$halamanAktif = (isset($_GET["page"])) ? $_GET["page"] : 1;
$awalData = ($jumlahDataTampil * $halamanAktif) - $jumlahDataTampil;

$dbMasterStunting = queryMaster("SELECT * FROM rekap_stunting_" . $tahun . " ORDER BY nama ASC LIMIT $awalData,$jumlahDataTampil");

$id = $_GET["id"];

$detailGrafikStunting = detailGrafikStuntingNama("SELECT * FROM grafik_perorangan_stunting WHERE id = '$id'");

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

                    <a href="statistikAnakTahunan.php" class="btn btn-sm btn-secondary mb-2" style="border-radius: 0px; background-color: #843b62; border: 1px solid #843b62;"><img src="img/icon/bar-chart-white.png" alt="" class="iconTable" style="margin-right: 5px;">Grafik Perorangan</a>

                    <a href="statistikAnakPerorangan.php" class="btn btn-sm btn-primary mb-2" style="border-radius: 0px; background-color: #334b49; border: 1px solid #334b49;"><img src="img/icon/undo-white.png" alt="" class="iconTable" style="margin-right: 5px;">Kembali</a>
                </td>
            </tr>
        </table>
    </form>

    <div class="container" align="center" style="padding-top: 15px; padding-bottom: 10px; color:#4A5568">
        <h4 class="font-Form"><?= $detailGrafikStunting["nama"] ?></h4>
    </div>

    <div class="container" style="padding-bottom: 30px; width: 100%;">
        <canvas id="myChart"></canvas>
    </div>

    <script>
        const data = {
            labels: ['Januari',
                'Februari',
                'Maret',
                'April',
                'Mei',
                'Juni',
                'Juli',
                'Agustus',
                'September',
                'Oktober',
                'November',
                'Desember'
            ],
            datasets: [{
                    label: 'Bulan Pemeriksaan',
                    data: [<?= $detailGrafikStunting["p_jan"] ?>,
                        <?= $detailGrafikStunting["p_feb"] ?>,
                        <?= $detailGrafikStunting["p_mar"] ?>,
                        <?= $detailGrafikStunting["p_apr"] ?>,
                        <?= $detailGrafikStunting["p_mei"] ?>,
                        <?= $detailGrafikStunting["p_jun"] ?>,
                        <?= $detailGrafikStunting["p_jul"] ?>,
                        <?= $detailGrafikStunting["p_agu"] ?>,
                        <?= $detailGrafikStunting["p_sep"] ?>,
                        <?= $detailGrafikStunting["p_okt"] ?>,
                        <?= $detailGrafikStunting["p_nov"] ?>,
                        <?= $detailGrafikStunting["p_des"] ?>
                    ],
                    backgroundColor: ['rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(15, 205, 86)',
                        'rgb(35, 100, 33)',
                        'rgb(105, 15, 90)',
                        'rgb(105, 77, 41)',
                        'rgb(205, 13, 99)',
                        'rgb(5, 21, 200)',
                        'rgb(91, 9, 4)',
                        'rgb(77, 66, 88)',
                        'rgb(41, 14, 8)',
                        'rgb(188, 200, 43)',
                    ],
                    hoverOffset: 4
                }

            ]
        }

        ;
        const config = {
            type: 'line',
            data: data,
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