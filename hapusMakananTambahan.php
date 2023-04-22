<?php

include 'functions.php';

$id = $_GET['id'];

if (hapusTambahanMakanan($id) > 0) {
    echo "
    <script>
    alert ('Data berhasil dihapus');
    location.href = 'tambahanMakanan.php';
    </script>
    ";
} else {
    echo "
    <script>
    alert ('Data gagal dihapus');
    </script>
    ";
}
