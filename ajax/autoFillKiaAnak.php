<?php

require '../functions.php';

$kia = $_GET['kia'];

$kiaAnak = kiaAnak("SELECT * FROM kia_anak WHERE id_kia='$kia' ");

$data = array(
    'nama' => $kiaAnak['nama_anak'],
    'nama_ortu' => $kiaAnak['nama_ibu']
);

echo json_encode($data);
