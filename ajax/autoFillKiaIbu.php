<?php

require '../functions.php';

// if (isset($_POST['kia'])) {
//     $kia = $_POST['kia'];

//     $query = "SELECT * FROM kia_ibu WHERE nama like '%" . $kia . "%' ";
//     $result = mysqli_query($conn, $query);

//     $response = array();
//     while ($row = mysqli_fetch_assoc($result)) {
//         $response[] = array(
//             "kia" => $row['kia']
//         );
//     }

//     echo json_encode($response);
// }
// exit;


$kia = $_GET['kia'];

$kiaAnak = kiaIbu("SELECT * FROM kia_hamil WHERE id_kia='$kia' ");


$data = array(
    'nama' => $kiaAnak['nama'],
    'umur' => $kiaAnak['umur']
);

echo json_encode($data);
