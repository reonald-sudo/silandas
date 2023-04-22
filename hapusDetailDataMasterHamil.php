<?php
session_start();

if (!isset($_SESSION['login'])) {
    header('Location:login.php');
}

require 'functions.php';

$id = $_GET["id"];
$id_kia = $_GET["id_kia"];
$lingkar_lengan = $_GET["lingkar_lengan"];

if (hapusRekapHamil($id) > 0 && hapusGrafikHamilPerorangan($id_kia, $lingkar_lengan) > 0) {
    echo "
            <script>
                alert ('Data Berhasil di Hapus !');
                document.location.href = 'master.php';
            </script>
        ";
} else {
    echo "
            <script>
                alert ('Data Gagal di Hapus !');
                document.location.href = 'master.php';
            </script>
        ";
}
