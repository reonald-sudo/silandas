<head>
    <script src="js/jquery.js"></script>
    <script src="sweetalert2-11.3.4/package/dist/sweetalert2.all.min.js"></script>
</head>

<?php
session_start();

if (!isset($_SESSION['login'])) {
    header('Location:login.php');
}

require 'functions.php';

$id = $_GET["id"];
$id_kia = $_GET["id_kia"];
$lingkar_lengan = $_GET["lingkar_lengan"];

if (hapusHamil($id) > 0 && hapusGrafikHamilPerorangan($id_kia, $lingkar_lengan) > 0) {
    echo "
    <script>
    $(document).ready(function(){

        Swal.fire({
            title: 'Data Telah Terhapus',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oke'
        }).then((result) => {
            if (result.isConfirmed) {
                document.location.href = 'hamil.php';
            }
        })
        
    });
    </script>
        ";
} else {
    echo "
            <script>
                alert ('Data Gagal di Hapus !');
                document.location.href = 'hamil.php';
            </script>
        ";
}
