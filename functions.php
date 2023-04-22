<?php
$conn = mysqli_connect("localhost", "root", "", "silandas");

// MENAMPILKAN DATABASE DI DEPAN
function query($query)
{
    global $conn;
    $result = mysqli_query($conn, $query);
    $rows = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    return $rows;
}

// MENANGKAP DATA KIA ANAK
function kiaAnak($detail)
{
    global $conn;
    $result = mysqli_query($conn, $detail);
    $row = mysqli_fetch_assoc($result);

    return $row;
}

// MENANGKAP DATA KIA IBU
function kiaIbu($detail)
{
    global $conn;
    $result = mysqli_query($conn, $detail);
    $row = mysqli_fetch_assoc($result);

    return $row;
}


// MENAMPILKAN DETAIL DATA PADA PAGE DETAIL STUNTING
function detailStunting($detail)
{
    global $conn;
    $result = mysqli_query($conn, $detail);
    $row = mysqli_fetch_assoc($result);

    return $row;
}

// MENAMPILKAN DETAIL DATA PADA PAGE DETAIL GRAFIK STUNTING
function detailGrafikStuntingNama($detail)
{
    global $conn;
    $result = mysqli_query($conn, $detail);
    $row = mysqli_fetch_assoc($result);

    return $row;
}

// MENAMPILKAN DETAIL DATA PADA PAGE DETAIL GRAFIK HAMIL
function detailGrafikHamilNama($detail)
{
    global $conn;
    $result = mysqli_query($conn, $detail);
    $row = mysqli_fetch_assoc($result);

    return $row;
}

// MENGHITUNG ROW TABLE GRAFIK STUNTING ANAK PERORANGAN

function HitungRow($detail)
{
    global $conn;
    $hitungDB = mysqli_query($conn, $detail);
    $hitung = mysqli_num_rows($hitungDB);

    return $hitung;
}

// MENCETAK DATA PADA PAGE CETAK STUNTING
function cetakStunting($cetak)
{
    global $conn;
    $result = mysqli_query($conn, $cetak);
    $row = mysqli_fetch_assoc($result);

    return $row;
}

// MENCETAK DATA GRAFIK STUNTING BULANAN 
function cetakStuntingGrafikBulanan($cetak)
{
    global $conn;
    $result = mysqli_query($conn, $cetak);
    $row = mysqli_fetch_assoc($result);

    return $row;
}

// MENAMBAH DATA STUNTING
function tambahStunting($data)
{
    global $conn;

    // AMBIL DATA DARI TIAP ELEMEN FORM

    // BIODATA
    $kia = htmlspecialchars($data["kia"]);
    $nama = htmlspecialchars($data["nama"]);
    $umur = htmlspecialchars($data["umur"]);
    $jenis_kelamin = htmlspecialchars($data["jenis_kelamin"]);
    $berat_badan = htmlspecialchars($data["berat_badan"]);
    $tinggi_badan = htmlspecialchars($data["tinggi_badan"]);

    // upload gambar
    $gambar = uploadStunting();

    $id_petugas = htmlspecialchars($data['id_petugas']);

    $status_gizi_bb_u = htmlspecialchars($data["status_gizi_bb_u"]);
    $status_gizi_tb_u = htmlspecialchars($data["status_gizi_tb_u"]);
    $status_gizi_imt_u = htmlspecialchars($data["status_gizi_imt_u"]);

    // INDIKATOR LAYANAN
    $pemberian_imunisasi_dasar = htmlspecialchars($data["pemberian_imunisasi_dasar"]);
    $pengukuran_berat_badan = htmlspecialchars($data["pengukuran_berat_badan"]);
    $pengukuran_tinggi_badan = htmlspecialchars($data["pengukuran_tinggi_badan"]);
    $konseling_gizi_bagi_ortu = htmlspecialchars($data["konseling_gizi_bagi_ortu"]);
    $kunjungan_rumah = htmlspecialchars($data["kunjungan_rumah"]);
    $kepemilikan_akses_air_bersih = htmlspecialchars($data["kepemilikan_akses_air_bersih"]);
    $kepemilikan_jamban_sehat = htmlspecialchars($data["kepemilikan_jamban_sehat"]);
    $akta_lahir  = htmlspecialchars($data["akta_lahir"]);
    $jaminan_kesehatan = htmlspecialchars($data["jaminan_kesehatan"]);
    $pengasuhan_paud = htmlspecialchars($data["pengasuhan_paud"]);

    // TINGKAT KONVERGENSI INDIKATOR
    $jumlah_diterima_lengkap = htmlspecialchars($data["jumlah_diterima_lengkap"]);
    $jumlah_seharusnya = htmlspecialchars($data["jumlah_seharusnya"]);
    $presentase = htmlspecialchars($data["presentase"]);

    // BULAN PEMERIKSAAN
    $bulan_pemeriksaan = htmlspecialchars($data["bulan_pemeriksaan"]);


    $query = "INSERT INTO stunting VALUE ('', '$kia', '$nama', '$umur', '$jenis_kelamin', '$berat_badan', '$tinggi_badan', '$gambar', '$id_petugas', '$status_gizi_bb_u', '$status_gizi_tb_u', '$status_gizi_imt_u', '$pemberian_imunisasi_dasar', '$pengukuran_berat_badan', '$pengukuran_tinggi_badan', '$konseling_gizi_bagi_ortu', '$kunjungan_rumah', '$kepemilikan_akses_air_bersih', '$kepemilikan_jamban_sehat', '$akta_lahir', '$jaminan_kesehatan', '$pengasuhan_paud', '$jumlah_diterima_lengkap', '$jumlah_seharusnya', '$presentase', '$bulan_pemeriksaan' ,'')";

    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

// UPLOAD GAMBAR STUNTING

function uploadStunting()
{
    $namaFile = $_FILES['foto']['name'];
    $tmpFile = $_FILES['foto']['tmp_name'];
    $errorFile = $_FILES['foto']['error'];
    $sizeFile = $_FILES['foto']['size'];

    // cek apakah gambar di up
    if ($errorFile === 4) {
        $imageDefault = 'profil.jpg';
        return $imageDefault;
    }
    // cek apakah gambar yg di up atau bukan

    $extensionsImg = ['jpg', 'png', 'jpeg'];
    $extensionsImgUp = explode('.', $namaFile);
    $extensionsImgUp = strtolower(end($extensionsImgUp));
    if (!in_array($extensionsImgUp, $extensionsImg)) {
        echo "<script>
                alert ('File yang anda unggah bukan IMG!');
        </script>";
        return false;
    }

    // cek ukuran gambar
    if ($sizeFile >= 6500000) {
        echo "<script>
                alert ('File Yang Anda Unggah Terlalu Besar');
        </script>";
        return false;
    }

    // gambar siap di upload
    move_uploaded_file($tmpFile, 'img/profil/' . $namaFile);

    return $namaFile;
}

// MELAKUKAN PENCARIAN PADA TABEL STUNTING
function cariStunting($keyword)
{
    $query = "SELECT * FROM stunting WHERE 
            kia LIKE '%$keyword%' OR
            nama LIKE '%$keyword%' OR
            umur LIKE '%$keyword%' OR
            jenis_kelamin LIKE '%$keyword%' OR
            status_gizi_imt_u LIKE '%$keyword%'
    ";

    return query($query);
}

// UPDATE DATA STUNTING
function ubahStunting($data)
{
    global $conn;

    // AMBIL DATA DARI TIAP ELEMEN FORM

    // BIODATA
    $id = htmlspecialchars($data["edit_id"]);
    $kia = htmlspecialchars($data["edit_kia"]);
    $nama = htmlspecialchars($data["edit_nama"]);
    $umur = htmlspecialchars($data["edit_umur"]);
    $jenis_kelamin = htmlspecialchars($data["edit_jk"]);
    $berat_badan = htmlspecialchars($data["edit_beratBadan"]);
    $tinggi_badan = htmlspecialchars($data["edit_tinggiBadan"]);

    // upload gambar
    $gambar = uploadStunting();

    $status_gizi_bb_u = htmlspecialchars($data["status_gizi_bb_u"]);
    $status_gizi_tb_u = htmlspecialchars($data["status_gizi_tb_u"]);
    $status_gizi_imt_u = htmlspecialchars($data["status_gizi_imt_u"]);

    // INDIKATOR LAYANAN
    $pemberian_imunisasi_dasar = htmlspecialchars($data["pemberian_imunisasi_dasar"]);
    $pengukuran_berat_badan = htmlspecialchars($data["pengukuran_berat_badan"]);
    $pengukuran_tinggi_badan = htmlspecialchars($data["pengukuran_tinggi_badan"]);
    $konseling_gizi_bagi_ortu = htmlspecialchars($data["konseling_gizi_bagi_ortu"]);
    $kunjungan_rumah = htmlspecialchars($data["kunjungan_rumah"]);
    $kepemilikan_akses_air_bersih = htmlspecialchars($data["kepemilikan_akses_air_bersih"]);
    $kepemilikan_jamban_sehat = htmlspecialchars($data["kepemilikan_jamban_sehat"]);
    $akta_lahir  = htmlspecialchars($data["akta_lahir"]);
    $jaminan_kesehatan = htmlspecialchars($data["jaminan_kesehatan"]);
    $pengasuhan_paud = htmlspecialchars($data["pengasuhan_paud"]);

    // TINGKAT KONVERGENSI INDIKATOR
    $jumlah_diterima_lengkap = htmlspecialchars($data["jumlah_diterima_lengkap"]);
    $jumlah_seharusnya = htmlspecialchars($data["jumlah_seharusnya"]);
    $presentase = htmlspecialchars($data["presentase"]);

    // BULAN PEMERIKSAAN
    $bulan_pemeriksaan = htmlspecialchars($data["edit_bulan_pemeriksaan"]);


    $query = "UPDATE stunting SET id_kia = '$kia', nama = '$nama', umur = '$umur', jenis_kelamin = '$jenis_kelamin', berat_badan = '$berat_badan', tinggi_badan = '$tinggi_badan', gambar = '$gambar', status_gizi_bb_u = '$status_gizi_bb_u', status_gizi_tb_u = '$status_gizi_tb_u', status_gizi_imt_u = '$status_gizi_imt_u', pemberian_imunisasi_dasar = '$pemberian_imunisasi_dasar', pengukuran_berat_badan = '$pengukuran_berat_badan', pengukuran_tinggi_badan = '$pengukuran_tinggi_badan', konseling_gizi_bagi_ortu = '$konseling_gizi_bagi_ortu', kunjungan_rumah = '$kunjungan_rumah', kepemilikan_akses_air_bersih = '$kepemilikan_akses_air_bersih', kepemilikan_jamban_sehat = '$kepemilikan_jamban_sehat', akta_lahir = '$akta_lahir', jaminan_kesehatan = '$jaminan_kesehatan', pengasuhan_paud = '$pengasuhan_paud', jumlah_diterima_lengkap = '$jumlah_diterima_lengkap', jumlah_seharusnya = '$jumlah_seharusnya', presentase = '$presentase', bulan_pemeriksaan = '$bulan_pemeriksaan' WHERE id = $id ";

    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

// MENAMPILKAN TABEL DI REKAP
function queryMaster($query)
{
    global $conn;
    $result = mysqli_query($conn, $query);
    $rows = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    return $rows;
}

// MENYIMPAN REKAP DATA STUNTING
function rekapData($data)
{
    $tahun = date('Y');

    global $conn;
    $query =  "CREATE TABLE rekap_stunting_" . $tahun . "  (
        id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        id_kia VARCHAR(255) NOT NULL,
        nama VARCHAR(35) NOT NULL,
        umur TINYINT(4) NOT NULL,
        jenis_kelamin ENUM('Laki-laki', 'Perempuan') NOT NULL,
        berat_badan FLOAT NOT NULL,
        tinggi_badan FLOAT NOT NULL,
        id_petugas VARCHAR(11) NOT NULL,
        status_gizi_bb_u VARCHAR(40) NOT NULL,
        status_gizi_tb_u VARCHAR(20) NOT NULL,
        status_gizi_imt_u VARCHAR(20) NOT NULL,
        pemberian_imunisasi_dasar ENUM('Y', 'T') NOT NULL,
        pengukuran_berat_badan ENUM('Y', 'T') NOT NULL,
        pengukuran_tinggi_badan ENUM('Y', 'T') NOT NULL,
        konseling_gizi_bagi_ortu ENUM('Y', 'T') NOT NULL,
        kunjungan_rumah ENUM('Y', 'T') NOT NULL,
        kepemilikan_akses_air_bersih ENUM('Y', 'T') NOT NULL,
        kepemilikan_jamban_sehat ENUM('Y', 'T') NOT NULL,
        akta_lahir ENUM('Y', 'T') NOT NULL,
        jaminan_kesehatan ENUM('Y', 'T') NOT NULL,
        pengasuhan_paud ENUM('Y', 'T') NOT NULL,
        jumlah_diterima_lengkap INT(2) NOT NULL,
        jumlah_seharusnya INT(2) NOT NULL,
        presentase VARCHAR(4) NOT NULL,
        bulan_pemeriksaan VARCHAR (30) NOT NULL,
        tanggal_data TIMESTAMP
        )";

    $copyTable = "INSERT INTO rekap_stunting_" . $tahun . "(`id`, `id_kia`, `nama`, `umur`, `jenis_kelamin`, `berat_badan`, `tinggi_badan`, `id_petugas` ,`status_gizi_bb_u`, `status_gizi_tb_u`, `status_gizi_imt_u`, `pemberian_imunisasi_dasar`, `pengukuran_berat_badan`, `pengukuran_tinggi_badan`, `konseling_gizi_bagi_ortu`, `kunjungan_rumah`, `kepemilikan_akses_air_bersih`, `kepemilikan_jamban_sehat`, `akta_lahir`, `jaminan_kesehatan`, `pengasuhan_paud`, `jumlah_diterima_lengkap`, `jumlah_seharusnya`, `presentase`, `bulan_pemeriksaan`, `tanggal_data`) SELECT `id`, `id_kia`, `nama`, `umur`, `jenis_kelamin`, `berat_badan`, `tinggi_badan`, `id_petugas`, `status_gizi_bb_u`, `status_gizi_tb_u`, `status_gizi_imt_u`, `pemberian_imunisasi_dasar`, `pengukuran_berat_badan`, `pengukuran_tinggi_badan`, `konseling_gizi_bagi_ortu`, `kunjungan_rumah`, `kepemilikan_akses_air_bersih`, `kepemilikan_jamban_sehat`, `akta_lahir`, `jaminan_kesehatan`, `pengasuhan_paud`, `jumlah_diterima_lengkap`, `jumlah_seharusnya`, `presentase`, `bulan_pemeriksaan` , `tanggal_data` FROM `silandas`.`stunting`";

    $foreignIdKia = "ALTER TABLE `rekap_stunting_" . $tahun . "` ADD FOREIGN KEY (`id_kia`) REFERENCES `kia_anak`(`id_kia`) ON DELETE RESTRICT ON UPDATE RESTRICT; ";
    $foreignIdPetugas = "ALTER TABLE `rekap_stunting_" . $tahun . "` ADD FOREIGN KEY (`id_petugas`) REFERENCES `petugas`(`id_petugas`) ON DELETE RESTRICT ON UPDATE RESTRICT; ";

    // mysqli_query($conn, $query);
    mysqli_query($conn, $copyTable);
    mysqli_query($conn, $foreignIdKia);
    mysqli_query($conn, $foreignIdPetugas);

    return $data;
}

// GRAFIK PERORANGAN
function GrafikPerorangan($data)
{
    $tahun = date('Y');
    $bulan = date('m');

    // BIODATA
    $kia = htmlspecialchars($data["kia"]);
    $nama = htmlspecialchars($data["nama"]);
    $jenis_kelamin = htmlspecialchars($data["jenis_kelamin"]);
    $bulan_pemeriksaan = htmlspecialchars($data["bulan_pemeriksaan"]);
    $tinggi_badan = htmlspecialchars($data["tinggi_badan"]);

    global $conn;

    // 
    $cekQuery = "SELECT * FROM grafik_perorangan_stunting WHERE id_kia = '$kia'";
    $cekResult = mysqli_query($conn, $cekQuery);
    $row = mysqli_fetch_assoc($cekResult);

    if ($row <= 0) {
        $query = "INSERT INTO grafik_perorangan_stunting (id_kia, nama, jenis_kelamin) VALUES ('$kia', '$nama', '$jenis_kelamin')";
        mysqli_query($conn, $query);
    }

    if ($bulan_pemeriksaan == '01') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_jan = '$tinggi_badan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '02') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_feb = '$tinggi_badan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '03') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_mar = '$tinggi_badan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '04') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_apr = '$tinggi_badan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '05') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_mei = '$tinggi_badan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '06') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_jun = '$tinggi_badan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '07') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_jul = '$tinggi_badan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '08') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_agu = '$tinggi_badan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '09') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_sep = '$tinggi_badan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '10') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_okt = '$tinggi_badan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '11') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_nov = '$tinggi_badan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '12') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_des = '$tinggi_badan' WHERE id_kia = '$kia'";
    };
    mysqli_query($conn, $queryUpdate);


    // mysqli_query($conn, $foreignIdPetugas);

    return $data;
}

// UPDATE DATA STUNTING GRAFIK PERORANGAN
// UPDATE DATA STUNTING GRAFIK PERORANGAN
function ubahStuntingGrafikPerorangan($data)
{
    global $conn;

    // AMBIL DATA DARI TIAP ELEMEN FORM

    // BIODATA
    $kia = htmlspecialchars($data["edit_kia"]);
    $nama = htmlspecialchars($data["edit_nama"]);
    $umur = htmlspecialchars($data["edit_umur"]);
    $jenis_kelamin = htmlspecialchars($data["edit_jk"]);
    $berat_badan = htmlspecialchars($data["edit_beratBadan"]);
    $tinggi_badan = htmlspecialchars($data["edit_tinggiBadan"]);

    $bulan_pemeriksaan = htmlspecialchars($data["edit_bulan_pemeriksaan"]);

    if ($bulan_pemeriksaan == '01') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET id_kia = '$kia', nama = '$nama', umur = '$umur', jenis_kelamin = '$jenis_kelamin', berat_badan = '$berat_badan', p_jan = '$tinggi_badan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '02') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET id_kia = '$kia', nama = '$nama', umur = '$umur', jenis_kelamin = '$jenis_kelamin', berat_badan = '$berat_badan', p_feb = '$tinggi_badan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '03') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET id_kia = '$kia', nama = '$nama', umur = '$umur', jenis_kelamin = '$jenis_kelamin', berat_badan = '$berat_badan', p_mar = '$tinggi_badan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '04') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET id_kia = '$kia', nama = '$nama', umur = '$umur', jenis_kelamin = '$jenis_kelamin', berat_badan = '$berat_badan', p_apr = '$tinggi_badan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '05') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET id_kia = '$kia', nama = '$nama', umur = '$umur', jenis_kelamin = '$jenis_kelamin', berat_badan = '$berat_badan', p_mei = '$tinggi_badan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '06') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET id_kia = '$kia', nama = '$nama', umur = '$umur', jenis_kelamin = '$jenis_kelamin', berat_badan = '$berat_badan', p_jun = '$tinggi_badan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '07') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET id_kia = '$kia', nama = '$nama', umur = '$umur', jenis_kelamin = '$jenis_kelamin', berat_badan = '$berat_badan', p_jul = '$tinggi_badan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '08') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET id_kia = '$kia', nama = '$nama', umur = '$umur', jenis_kelamin = '$jenis_kelamin', berat_badan = '$berat_badan', p_agu = '$tinggi_badan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '09') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET id_kia = '$kia', nama = '$nama', umur = '$umur', jenis_kelamin = '$jenis_kelamin', berat_badan = '$berat_badan', p_sep = '$tinggi_badan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '10') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET id_kia = '$kia', nama = '$nama', umur = '$umur', jenis_kelamin = '$jenis_kelamin', berat_badan = '$berat_badan', p_okt = '$tinggi_badan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '11') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET id_kia = '$kia', nama = '$nama', umur = '$umur', jenis_kelamin = '$jenis_kelamin', berat_badan = '$berat_badan', p_nov = '$tinggi_badan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '12') {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET id_kia = '$kia', nama = '$nama', umur = '$umur', jenis_kelamin = '$jenis_kelamin', berat_badan = '$berat_badan', p_des = '$tinggi_badan' WHERE id_kia = $kia ";
    };

    mysqli_query($conn, $queryUpdate);
    return mysqli_affected_rows($conn);
}

// hapus grafik stunting perorangan
function hapusGrafikStuntingPerorangan($id_kia, $tinggi_badan)
{
    global $conn;

    $cekQuery = "SELECT * FROM grafik_perorangan_stunting WHERE id_kia = $id_kia";
    $cekResult = mysqli_query($conn, $cekQuery);
    $row = mysqli_fetch_assoc($cekResult);

    if ($row["p_jan"] == $tinggi_badan) {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_jan = 0 WHERE id_kia = $id_kia";
    } elseif ($row["p_feb"] == $tinggi_badan) {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_feb = 0 WHERE id_kia = $id_kia";
    } elseif ($row["p_mar"] == $tinggi_badan) {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_mar = 0 WHERE id_kia = $id_kia";
    } elseif ($row["p_apr"] == $tinggi_badan) {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_apr = 0 WHERE id_kia = $id_kia";
    } elseif ($row["p_mei"] == $tinggi_badan) {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_mei = 0 WHERE id_kia = $id_kia";
    } elseif ($row["p_jun"] == $tinggi_badan) {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_jun = 0 WHERE id_kia = $id_kia";
    } elseif ($row["p_jul"] == $tinggi_badan) {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_jul = 0 WHERE id_kia = $id_kia";
    } elseif ($row["p_agu"] == $tinggi_badan) {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_agu = 0 WHERE id_kia = $id_kia";
    } elseif ($row["p_sep"] == $tinggi_badan) {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_sep = 0 WHERE id_kia = $id_kia";
    } elseif ($row["p_okt"] == $tinggi_badan) {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_okt = 0 WHERE id_kia = $id_kia";
    } elseif ($row["p_nov"] == $tinggi_badan) {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_nov = 0 WHERE id_kia = $id_kia";
    } elseif ($row["p_des"] == $tinggi_badan) {
        $queryUpdate = "UPDATE grafik_perorangan_stunting SET p_des = 0 WHERE id_kia = $id_kia";
    }

    mysqli_query($conn, $queryUpdate);

    return mysqli_affected_rows($conn);
}

// GRAFIK PERORANGAN HAMIL
function GrafikPeroranganHamil($data)
{
    $tahun = date('Y');
    $bulan = date('m');

    // BIODATA
    $kia = htmlspecialchars($data["kia"]);
    $nama = htmlspecialchars($data["nama"]);
    $bulan_pemeriksaan = htmlspecialchars($data["bulan_pemeriksaan"]);
    $lingkar_lengan = htmlspecialchars($data["lingkar_lengan"]);

    global $conn;

    // 
    $cekQuery = "SELECT * FROM grafik_perorangan_hamil WHERE id_kia = '$kia'";
    $cekResult = mysqli_query($conn, $cekQuery);
    $row = mysqli_fetch_assoc($cekResult);

    if ($row <= 0) {
        $query = "INSERT INTO grafik_perorangan_hamil (id_kia, nama) VALUES ('$kia', '$nama')";
        mysqli_query($conn, $query);
    }

    if ($bulan_pemeriksaan == '01') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_jan = '$lingkar_lengan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '02') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_feb = '$lingkar_lengan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '03') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_mar = '$lingkar_lengan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '04') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_apr = '$lingkar_lengan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '05') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_mei = '$lingkar_lengan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '06') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_jun = '$lingkar_lengan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '07') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_jul = '$lingkar_lengan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '08') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_agu = '$lingkar_lengan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '09') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_sep = '$lingkar_lengan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '10') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_okt = '$lingkar_lengan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '11') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_nov = '$lingkar_lengan' WHERE id_kia = '$kia'";
    } elseif ($bulan_pemeriksaan == '12') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_des = '$lingkar_lengan' WHERE id_kia = '$kia'";
    };
    mysqli_query($conn, $queryUpdate);

    return $data;
}

// HAPUS GRAFIK PERORANGAN HAMIL
function hapusGrafikHamilPerorangan($id_kia, $lingkar_lengan)
{
    global $conn;
    $cekQuery = "SELECT * FROM grafik_perorangan_hamil WHERE id_kia = $id_kia";
    $cekResult = mysqli_query($conn, $cekQuery);
    $row = mysqli_fetch_assoc($cekResult);

    if ($row["p_jan"] == $lingkar_lengan) {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_jan = 0 WHERE id_kia = $id_kia";
    } else if ($row["p_feb"] == $lingkar_lengan) {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_feb = 0 WHERE id_kia = $id_kia";
    } else if ($row["p_mar"] == $lingkar_lengan) {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_mar = 0 WHERE id_kia = $id_kia";
    } else if ($row["p_apr"] == $lingkar_lengan) {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_apr = 0 WHERE id_kia = $id_kia";
    } else if ($row["p_mei"] == $lingkar_lengan) {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_mei = 0 WHERE id_kia = $id_kia";
    } else if ($row["p_jun"] == $lingkar_lengan) {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_jun = 0 WHERE id_kia = $id_kia";
    } else if ($row["p_jul"] == $lingkar_lengan) {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_jul = 0 WHERE id_kia = $id_kia";
    } else if ($row["p_agu"] == $lingkar_lengan) {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_agu = 0 WHERE id_kia = $id_kia";
    } else if ($row["p_sep"] == $lingkar_lengan) {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_sep = 0 WHERE id_kia = $id_kia";
    } else if ($row["p_okt"] == $lingkar_lengan) {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_okt = 0 WHERE id_kia = $id_kia";
    } else if ($row["p_nov"] == $lingkar_lengan) {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_nov = 0 WHERE id_kia = $id_kia";
    } else if ($row["p_des"] == $lingkar_lengan) {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET p_des = 0 WHERE id_kia = $id_kia";
    }

    mysqli_query($conn, $queryUpdate);
    return mysqli_affected_rows($conn);
}

// UPDATE DATA STUNTING GRAFIK PERORANGAN
function ubahStuntingGrafikHamil($data)
{
    global $conn;

    // AMBIL DATA DARI TIAP ELEMEN FORM

    // BIODATA
    $kia = htmlspecialchars($data["kia"]);
    $nama = htmlspecialchars($data["nama"]);
    $umur = htmlspecialchars($data["umur"]);
    $usia_kehamilan = htmlspecialchars($data["edit_usia_kehamilan"]);
    $lingkar_lengan = htmlspecialchars($data["lingkar_lengan"]);

    $bulan_pemeriksaan = htmlspecialchars($data["edit_bulan_pemeriksaan"]);

    if ($bulan_pemeriksaan == '01') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET id_kia = '$kia', nama = '$nama', umur = '$umur', lingkar_lengan = '$lingkar_lengan', p_jan = '$lingkar_lengan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '02') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET id_kia = '$kia', nama = '$nama', umur = '$umur', lingkar_lengan = '$lingkar_lengan', p_feb = '$lingkar_lengan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '03') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET id_kia = '$kia', nama = '$nama', umur = '$umur', lingkar_lengan = '$lingkar_lengan', p_mar = '$lingkar_lengan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '04') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET id_kia = '$kia', nama = '$nama', umur = '$umur', lingkar_lengan = '$lingkar_lengan', p_apr = '$lingkar_lengan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '05') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET id_kia = '$kia', nama = '$nama', umur = '$umur', lingkar_lengan = '$lingkar_lengan', p_mei = '$lingkar_lengan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '06') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET id_kia = '$kia', nama = '$nama', umur = '$umur', lingkar_lengan = '$lingkar_lengan', p_jun = '$lingkar_lengan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '07') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET id_kia = '$kia', nama = '$nama', umur = '$umur', lingkar_lengan = '$lingkar_lengan', p_jul = '$lingkar_lengan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '08') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET id_kia = '$kia', nama = '$nama', umur = '$umur', lingkar_lengan = '$lingkar_lengan', p_agu = '$lingkar_lengan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '09') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET id_kia = '$kia', nama = '$nama', umur = '$umur', lingkar_lengan = '$lingkar_lengan', p_sep = '$lingkar_lengan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '10') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET id_kia = '$kia', nama = '$nama', umur = '$umur', lingkar_lengan = '$lingkar_lengan', p_okt = '$lingkar_lengan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '11') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET id_kia = '$kia', nama = '$nama', umur = '$umur', lingkar_lengan = '$lingkar_lengan', p_nov = '$lingkar_lengan' WHERE id_kia = $kia ";
    } elseif ($bulan_pemeriksaan == '12') {
        $queryUpdate = "UPDATE grafik_perorangan_hamil SET id_kia = '$kia', nama = '$nama', umur = '$umur', lingkar_lengan = '$lingkar_lengan', p_des = '$lingkar_lengan' WHERE id_kia = $kia ";
    };

    mysqli_query($conn, $queryUpdate);
    return mysqli_affected_rows($conn);
}

// MENGHAPUS REKAP DATA STUNTING
function hapusRekapStunting($id)
{
    $tahun = date('Y');

    global $conn;
    mysqli_query($conn, "DELETE FROM rekap_stunting_" . $tahun . " WHERE id = $id");
    return mysqli_affected_rows($conn);
}

// MENGHAPUS REKAP DATA Hamil
function hapusRekapHamil($id)
{
    $tahun = date('Y');

    global $conn;
    mysqli_query($conn, "DELETE FROM rekap_hamil_" . $tahun . " WHERE id = $id");
    return mysqli_affected_rows($conn);
}


// MENGHAPUS DATABASE STUNTING
function hapusStunting($id)
{
    global $conn;
    mysqli_query($conn, "DELETE FROM stunting WHERE id = $id");
    return mysqli_affected_rows($conn);
}

//  MENGHAPUS SEMUA ISI TABEL STUNTING
function hapusDataStunting($hapusDataStunting)
{
    global $conn;
    mysqli_query($conn, $hapusDataStunting);
}

// MENYIMPAN REKAP DATA STUNTING
function rekapDataHamil($data)
{
    $tahun = date('Y');

    global $conn;
    $query =  "CREATE TABLE rekap_hamil_" . $tahun . "  (
        id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        id_kia VARCHAR(255) NOT NULL,
        nama VARCHAR(35) NOT NULL,
        umur INT(2) NOT NULL,
        id_petugas VARCHAR (11) NOT NULL,
        status_kehamilan VARCHAR(15) NOT NULL,
        usia_kehamilan INT(2) NOT NULL,
        tanggal_melahirkan DATE NOT NULL,
        lingkar_lengan FLOAT NOT NULL,
        pemeriksaan_kehamilan ENUM('Y','T') NOT NULL,
        dapat_konsumsi_pil_fe ENUM('Y','T') NOT NULL,
        pemeriksaan_nias ENUM('Y','T') NOT NULL,
        konseling_gizi ENUM('Y','T') NOT NULL,
        kunjungan_rumah ENUM('Y','T') NOT NULL,
        kepemilikan_akses_air_bersih ENUM('Y','T') NOT NULL,
        kepemilikan_jamban ENUM('Y','T') NOT NULL,
        jaminan_kesehatan ENUM('Y','T') NOT NULL,
        jumlah_diterima_lengkap INT(2) NOT NULL,
        jumlah_seharusnya INT(2) NOT NULL,
        presentase VARCHAR(3) NOT NULL,
        bulan_pemeriksaan VARCHAR(50) NOT NULL,
        tanggal_data TIMESTAMP NOT NULL
        )";

    $copyTable = "INSERT INTO rekap_hamil_" . $tahun . "(`id`, `id_kia`, `nama`, `umur`, `id_petugas`,`status_kehamilan`, `usia_kehamilan`, `tanggal_melahirkan`, `lingkar_lengan`, `pemeriksaan_kehamilan`, `dapat_konsumsi_pil_fe`, `pemeriksaan_nias`, `konseling_gizi`, `kunjungan_rumah`, `kepemilikan_akses_air_bersih`, `kepemilikan_jamban`, `jaminan_kesehatan`, `jumlah_diterima_lengkap`, `jumlah_seharusnya`, `presentase`, `bulan_pemeriksaan`, `tanggal_data`) SELECT `id`, `id_kia`, `nama`, `umur`, `id_petugas`, `status_kehamilan`, `usia_kehamilan`, `tanggal_melahirkan`, `lingkar_lengan`, `pemeriksaan_kehamilan`, `dapat_konsumsi_pil_fe`, `pemeriksaan_nias`, `konseling_gizi`, `kunjungan_rumah`, `kepemilikan_akses_air_bersih`, `kepemilikan_jamban`, `jaminan_kesehatan`, `jumlah_diterima_lengkap`, `jumlah_seharusnya`, `presentase`, `bulan_pemeriksaan`, `tanggal_data` FROM `silandas`.`hamil`";

    $foreignIdKia = "ALTER TABLE `rekap_hamil_" . $tahun . "` ADD FOREIGN KEY (`id_kia`) REFERENCES `kia_hamil`(`id_kia`) ON DELETE RESTRICT ON UPDATE RESTRICT; ";
    $foreignIdPetugas = "ALTER TABLE `rekap_hamil_" . $tahun . "` ADD FOREIGN KEY (`id_petugas`) REFERENCES `petugas`(`id_petugas`) ON DELETE RESTRICT ON UPDATE RESTRICT; ";

    // mysqli_query($conn, $query);
    mysqli_query($conn, $copyTable);
    mysqli_query($conn, $foreignIdKia);
    mysqli_query($conn, $foreignIdPetugas);

    return $data;
}

//  MENGHAPUS SEMUA ISI TABEL HAMIL
function hapusDataHamil($hapusDataHamil)
{
    global $conn;
    mysqli_query($conn, $hapusDataHamil);
}

// MENAMPILKAN EDIT DETAIL KIA ANAK
function editKiaAnak($detail)
{
    global $conn;
    $result = mysqli_query($conn, $detail);
    $row = mysqli_fetch_assoc($result);

    return $row;
}

// MENAMPILKAN EDIT DETAIL KIA IBU
function editKiaIbu($detail)
{
    global $conn;
    $result = mysqli_query($conn, $detail);
    $row = mysqli_fetch_assoc($result);

    return $row;
}

// MENAMPILKAN DETAIL HAMIL
function detailHamil($detail)
{
    global $conn;
    $result = mysqli_query($conn, $detail);
    $row = mysqli_fetch_assoc($result);

    return $row;
}

// MENCETAK DATA HAMIL PADA PAGE CETAK DATA
function cetakHamil($cetak)
{
    global $conn;
    $result = mysqli_query($conn, $cetak);
    $row = mysqli_fetch_assoc($result);

    return $row;
}

// MENAMBAH DATA HAMIL
function tambahHamil($data)
{
    global $conn;

    // AMBIL DATA DARI TIAP EMELEN FORM

    // BIODATA
    $kia = htmlspecialchars($data["kia"]);
    $nama = htmlspecialchars($data["nama"]);
    $umur = htmlspecialchars($data["umur"]);

    $gambar = uploadHamil();

    $id_petugas = htmlspecialchars($data['id_petugas']);

    $status_kehamilan = htmlspecialchars($data["status_kehamilan"]);
    $usia_kehamilan = htmlspecialchars($data["usia_kehamilan"]);
    $tanggal_melahirkan = htmlspecialchars($data["tanggal_melahirkan"]);
    $lingkar_lengan = htmlspecialchars($data["lingkar_lengan"]);

    // STATUS PENERIMAAN INDIKATOR
    $pemeriksaan_kehamilan = htmlspecialchars($data["pemeriksaan_kehamilan"]);
    $dapat_konsumsi_pil_fe = htmlspecialchars($data["dapat_konsumsi_pil_fe"]);
    $pemeriksaan_nias = htmlspecialchars($data["pemeriksaan_nias"]);
    $konseling_gizi = htmlspecialchars($data["konseling_gizi"]);
    $kunjungan_rumah = htmlspecialchars($data["kunjungan_rumah"]);
    $kepemilikan_akses_air_bersih = htmlspecialchars($data["kepemilikan_akses_air_bersih"]);
    $kepemilikan_jamban = htmlspecialchars($data["kepemilikan_jamban"]);
    $jaminan_kesehatan = htmlspecialchars($data["jaminan_kesehatan"]);

    // TINGKAT KONVERGENSI INDIKATOR
    $jumlah_diterima_lengkap = htmlspecialchars($data["jumlah_diterima_lengkap"]);
    $jumlah_seharusnya = htmlspecialchars($data["jumlah_seharusnya"]);
    $presentase = htmlspecialchars($data["presentase"]);
    $bulan_pemeriksaan = htmlspecialchars($data["bulan_pemeriksaan"]);

    $query = "INSERT INTO hamil VALUE ('', '$kia', '$nama', '$umur', '$gambar', '$id_petugas','$status_kehamilan', '$usia_kehamilan', '$tanggal_melahirkan', '$lingkar_lengan', '$pemeriksaan_kehamilan', '$dapat_konsumsi_pil_fe', '$pemeriksaan_nias', '$konseling_gizi', '$kunjungan_rumah', '$kepemilikan_akses_air_bersih', '$kepemilikan_jamban', '$jaminan_kesehatan', '$jumlah_diterima_lengkap', '$jumlah_seharusnya', '$presentase', '$bulan_pemeriksaan' , '')";

    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

// UPLOAD GAMBAR HAMIL
function uploadHamil()
{
    $namaFile = $_FILES['foto']['name'];
    $tmpFile = $_FILES['foto']['tmp_name'];
    $errorFile = $_FILES['foto']['error'];
    $sizeFile = $_FILES['foto']['size'];

    // cek apakah gambar di up
    if ($errorFile === 4) {
        $imageDefault = 'profil.jpg';
        return $imageDefault;
    }

    // cek apakah gambar yg di up atau bukan
    $extensionsImg = ['jpg', 'png', 'jpeg'];
    $extensionsImgUp = explode('.', $namaFile);
    $extensionsImgUp = strtolower(end($extensionsImgUp));
    if (!in_array($extensionsImgUp, $extensionsImg)) {
        echo "<script>
                alert ('File yang anda unggah bukan IMG!');
        </script>";
        return false;
    }

    // cek ukuran gambar
    if ($sizeFile >= 6500000) {
        echo "<script>
                alert ('File Yang Anda Unggah Terlalu Besar');
        </script>";
        return false;
    }

    // gambar siap di upload
    move_uploaded_file($tmpFile, 'img/profil/' . $namaFile);

    return $namaFile;
}

// UPDATE TABEL HAMIL
function ubahHamil($data)
{
    global $conn;

    // AMBIL DATA DARI TIAP EMELEN FORM

    // BIODATA
    $id = htmlspecialchars($data["edit_id"]);
    $kia = htmlspecialchars($data["kia"]);
    $nama = htmlspecialchars($data["nama"]);
    $umur = htmlspecialchars($data["umur"]);

    $gambar = uploadHamil();

    $status_kehamilan = htmlspecialchars($data["edit_status_kehamilan"]);
    $usia_kehamilan = htmlspecialchars($data["edit_usia_kehamilan"]);
    $tanggal_melahirkan = htmlspecialchars($data["tanggal_melahirkan"]);
    $lingkar_lengan = htmlspecialchars($data["lingkar_lengan"]);

    // STATUS PENERIMAAN INDIKATOR
    $pemeriksaan_kehamilan = htmlspecialchars($data["pemeriksaan_kehamilan"]);
    $dapat_konsumsi_pil_fe = htmlspecialchars($data["dapat_konsumsi_pil_fe"]);
    $pemeriksaan_nias = htmlspecialchars($data["pemeriksaan_nias"]);
    $konseling_gizi = htmlspecialchars($data["konseling_gizi"]);
    $kunjungan_rumah = htmlspecialchars($data["kunjungan_rumah"]);
    $kepemilikan_akses_air_bersih = htmlspecialchars($data["kepemilikan_akses_air_bersih"]);
    $kepemilikan_jamban = htmlspecialchars($data["kepemilikan_jamban"]);
    $jaminan_kesehatan = htmlspecialchars($data["jaminan_kesehatan"]);

    // TINGKAT KONVERGENSI INDIKATOR
    $jumlah_diterima_lengkap = htmlspecialchars($data["jumlah_diterima_lengkap"]);
    $jumlah_seharusnya = htmlspecialchars($data["jumlah_seharusnya"]);
    $presentase = htmlspecialchars($data["presentase"]);
    $bulan_pemeriksaan = htmlspecialchars($data["edit_bulan_pemeriksaan"]);

    $query = "UPDATE hamil SET id_kia = '$kia', nama = '$nama', umur = '$umur',  gambar = '$gambar', status_kehamilan = '$status_kehamilan', usia_kehamilan = '$usia_kehamilan', tanggal_melahirkan = '$tanggal_melahirkan', lingkar_lengan = '$lingkar_lengan', pemeriksaan_kehamilan = '$pemeriksaan_kehamilan', dapat_konsumsi_pil_fe = '$dapat_konsumsi_pil_fe', pemeriksaan_nias = '$pemeriksaan_nias', konseling_gizi = '$konseling_gizi', kunjungan_rumah = '$kunjungan_rumah', kepemilikan_akses_air_bersih = '$kepemilikan_akses_air_bersih', kepemilikan_jamban = '$kepemilikan_jamban', jaminan_kesehatan = '$jaminan_kesehatan', jumlah_diterima_lengkap = '$jumlah_diterima_lengkap', jumlah_seharusnya = '$jumlah_seharusnya', presentase = '$presentase', bulan_pemeriksaan = '$bulan_pemeriksaan' WHERE id = $id ";

    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

// MELAKUKAN PENCARIAN PADA TABEL HAMIL
function cariHamil($keyword)
{
    $query = "SELECT * FROM hamil WHERE
            kia LIKE '%$keyword%' OR
            nama LIKE '%$keyword%' OR
            umur LIKE '%$keyword%' OR
            status_Kehamilan LIKE '%$keyword%' OR
            usia_kehamilan LIKE '%$keyword%' 
    ";

    return query($query);
}

// MENGHAPUS DATABASE HAMIL
function hapusHamil($id)
{
    global $conn;
    mysqli_query($conn, "DELETE FROM hamil WHERE id = $id");
    return mysqli_affected_rows($conn);
}

function register($data)
{
    global $conn;

    $username = strtolower(stripslashes($data["username"]));
    $email = strtolower(stripslashes($data["email"]));
    $hakAkses = htmlspecialchars($data['akses']);
    $password = mysqli_real_escape_string($conn, $data["password"]);
    $confirm_password = mysqli_real_escape_string($conn, $data["confirm_password"]);

    // cek same username

    $result = mysqli_query($conn, "SELECT username FROM user WHERE username = '$username'");

    if (mysqli_fetch_assoc($result)) {
        echo "<script>
            alert ('GAGAL username telah terdaftar!');
        </scrip>";
        return false;
    }

    // confirm password

    if ($password !== $confirm_password) {
        echo "<script>
            alert('Password dan Confirm Password Tidak Sesuai!')
        </script>";
        return false;
    }

    // encrypt password
    $password = password_hash($password, PASSWORD_DEFAULT);

    // insert user to db
    mysqli_query($conn, "INSERT INTO user VALUES ('', '$username', '$email', '$hakAkses' , '$password')");

    return mysqli_affected_rows($conn);
}

// edit data register
function editRegister($data)
{
    global $conn;

    $id = htmlspecialchars($data['id']);
    $username = strtolower(stripslashes($data["username"]));
    $email = strtolower(stripslashes($data["email"]));
    $hakAkses = htmlspecialchars($data['akses']);
    $password = mysqli_real_escape_string($conn, $data["password"]);
    $confirm_password = mysqli_real_escape_string($conn, $data["confirm_password"]);

    // confirm password

    if ($password !== $confirm_password) {
        echo "<script>
            alert('Password dan Confirm Password Tidak Sesuai!')
        </script>";
        return false;
    }

    // encrypt password
    $password = password_hash($password, PASSWORD_DEFAULT);

    // insert user to db
    $query = "UPDATE user SET username = '$username', email = '$email', hak_akses = '$hakAkses', password = '$password' WHERE id = $id";

    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

function tambahKiaAnak($data)
{
    global $conn;

    // AMBIL DATA DARI TIAP ELEMEN FORM

    // BIODATA
    $kia = htmlspecialchars($data["kia"]);
    $namaAnak = htmlspecialchars($data["nama_anak"]);
    $nikAnak = htmlspecialchars($data["nik_anak"]);
    $namaIbu = htmlspecialchars($data["nama_ibu"]);
    $nikIbu = htmlspecialchars($data["nik_ibu"]);
    $tanggalBuku = htmlspecialchars($data["tanggal_buku"]);
    $kabupaten = htmlspecialchars($data["kabupaten"]);

    $query = "INSERT INTO kia_anak VALUE ('$kia', '$namaAnak', '$nikAnak', '$namaIbu', '$nikIbu', '$tanggalBuku', '$kabupaten')";

    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

// TAMBAH KIA IBU
function tambahKiaIbu($data)
{
    global $conn;

    // AMBIL DATA DARI TIAP ELEMEN FORM

    // BIODATA
    $kia = htmlspecialchars($data["kia"]);
    $namaIbu = htmlspecialchars($data["nama"]);
    $nikIbu = htmlspecialchars($data["nik_ibu"]);
    $umurIbu = htmlspecialchars($data["umur_ibu"]);
    $tanggalBuku = htmlspecialchars($data["tanggal_buku"]);
    $kabupaten = htmlspecialchars($data["kabupaten"]);

    $query = "INSERT INTO kia_hamil VALUE ('$kia', '$namaIbu', '$nikIbu', '$umurIbu' ,'$tanggalBuku', '$kabupaten')";

    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

// UBAH KIA ANAK
function ubahKiaAnak($data)
{
    global $conn;

    // AMBIL DATA DARI TIAP ELEMEN FORM

    // BIODATA
    $kia = htmlspecialchars($data["kia"]);
    $namaAnak = htmlspecialchars($data["nama_anak"]);
    $nikAnak = htmlspecialchars($data["nik_anak"]);
    $namaIbu = htmlspecialchars($data["nama_ibu"]);
    $nikIbu = htmlspecialchars($data["nik_ibu"]);
    $tanggalBuku = htmlspecialchars($data["tanggal_buku"]);
    $kabupaten = htmlspecialchars($data["kabupaten"]);

    $query = "UPDATE kia_anak SET id_kia = '$kia', nama_anak = '$namaAnak', nik_anak = '$nikAnak', nama_ibu = '$namaIbu', nik_ibu = '$nikIbu', tanggal_buku = '$tanggalBuku', kabupaten = '$kabupaten' WHERE id_kia = $kia ";

    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

// UBAH KIA IBU
function ubahKiaIbu($data)
{
    global $conn;

    // AMBIL DATA DARI TIAP ELEMEN FORM

    // BIODATA
    $kia = htmlspecialchars($data["kia"]);
    $namaIbu = htmlspecialchars($data["nama"]);
    $nikIbu = htmlspecialchars($data["nik_ibu"]);
    $umurIbu = htmlspecialchars($data["umur_ibu"]);
    $tanggalBuku = htmlspecialchars($data["tanggal_buku"]);
    $kabupaten = htmlspecialchars($data["kabupaten"]);

    $query = "UPDATE kia_hamil SET id_kia = '$kia', nama = '$namaIbu', nik = '$nikIbu', umur = '$umurIbu', tanggal_buku = '$tanggalBuku', kabupaten = '$kabupaten' WHERE id_kia = $kia";

    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

// MENGHAPUS KIA IBU & ANAK
function hapusKiaIbu($id)
{
    global $conn;
    mysqli_query($conn, "DELETE FROM kia_hamil WHERE id_kia = $id");
    return mysqli_affected_rows($conn);
}

// MENGHAPUS KIA IBU & ANAK
function hapusKiaAnak($id)
{
    global $conn;
    mysqli_query($conn, "DELETE FROM kia_anak WHERE id_kia = $id");
    return mysqli_affected_rows($conn);
}

// edit data user
function editUser($detail)
{
    global $conn;
    $result = mysqli_query($conn, $detail);
    $row = mysqli_fetch_assoc($result);

    return $row;
}

// menghapus USER
function hapusUser($id)
{
    global $conn;
    mysqli_query($conn, "DELETE FROM user WHERE id = $id");
    return mysqli_affected_rows($conn);
}

// tambah pegawai
function tambahPegawai($data)
{
    global $conn;

    $id = htmlspecialchars($data['id']);
    $nama = htmlspecialchars($data['nama']);
    $jabatan = htmlspecialchars($data['jabatan']);

    $query = "INSERT INTO petugas VALUE ('$id', '$nama', '$jabatan')";

    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

// edit data pegawai
function editPegawai($detail)
{
    global $conn;
    $result = mysqli_query($conn, $detail);
    $row = mysqli_fetch_assoc($result);

    return $row;
}

// menampilkan foreign stunting
function foreignStunting($detail)
{
    global $conn;
    $result = mysqli_query($conn, $detail);
    $row = mysqli_fetch_assoc($result);

    return $row;
}


// ubah data pegawai
function ubahPetugas($data)
{
    global $conn;

    $id = htmlspecialchars($data['id']);
    $nama = htmlspecialchars($data['nama']);
    $jabatan = htmlspecialchars($data['jabatan']);

    $query = "UPDATE petugas SET nama = '$nama', jabatan = '$jabatan' WHERE id_petugas = $id ";

    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

// menghapus USER
function hapusPetugas($id)
{
    global $conn;
    mysqli_query($conn, "DELETE FROM petugas WHERE id_petugas = $id");
    return mysqli_affected_rows($conn);
}

// edit data PETUGAS
function editPetugas($detail)
{
    global $conn;
    $result = mysqli_query($conn, $detail);
    $row = mysqli_fetch_assoc($result);

    return $row;
}


function tambahDataMakanan($data)
{
    global $conn;

    $kia = ($data['kia']);
    $nama_bayi = ($data['nama_bayi']);
    $nama_ortu = ($data['nama_ortu']);
    $makanan_tambahan = ($data['makanan_tambahan']);
    $tanggal = ($data['tanggal']);
    $volume = ($data['volume']);


    $query = "INSERT INTO tambahan_makanan VALUES ('', '$kia', '$nama_bayi', '$nama_ortu', '$makanan_tambahan', '$tanggal', '$volume')";

    mysqli_query($conn, $query);

    return mysqli_affected_rows($conn);
}

function editDataMakanan($data)
{
    global $conn;

    $result = mysqli_query($conn, $data);
    $row = mysqli_fetch_assoc($result);

    return $row;
}

function ubahData($data)
{
    global $conn;

    $id = ($data['id']);
    $kia = ($data['kia']);
    $nama_bayi = ($data['nama_bayi']);
    $nama_ortu = ($data['nama_ortu']);
    $makanan_tambahan = ($data['makanan_tambahan']);
    $tanggal = ($data['tanggal']);
    $volume = ($data['volume']);

    $query = "UPDATE tambahan_makanan SET id_kia = '$kia', nama_bayi = '$nama_bayi', nama_ortu = '$nama_ortu', makanan_tambahan = '$makanan_tambahan', tanggal = '$tanggal', volume = '$volume' WHERE id = '$id'";

    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

function hapusTambahanMakanan($data)
{
    global $conn;

    $query = "DELETE FROM tambahan_makanan WHERE id = '$data'";
    mysqli_query($conn, $query);

    return mysqli_affected_rows($conn);
}
