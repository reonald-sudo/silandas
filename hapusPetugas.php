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

if (hapusPetugas($id) > 0) {
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
                        document.location.href = 'petugas.php';
                    }
                })
                
            });
            </script>
        ";
} else {
    echo mysqli_affected_rows($conn);
    echo mysqli_error($conn);
}
?>