<?php
session_start();

if (!isset($_SESSION['login'])) {
    header('Location:login.php');
}

require 'functions.php';

$id = $_GET["id"];
$tinggi_badan = $_GET["tinggi_badan"];
$id_kia = $_GET["id_kia"];

if (hapusRekapStunting($id) > 0 && hapusGrafikStuntingPerorangan($id_kia, $tinggi_badan) > 0) {
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
