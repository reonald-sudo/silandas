-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20220923.e9bc74b33a
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2022 at 01:46 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `silandas`
--

-- --------------------------------------------------------

--
-- Table structure for table `dokter`
--

CREATE TABLE `dokter` (
  `nip` int(25) NOT NULL,
  `nama` varchar(35) NOT NULL,
  `alamat` varchar(35) NOT NULL,
  `no_telp` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dokter`
--

INSERT INTO `dokter` (`nip`, `nama`, `alamat`, `no_telp`) VALUES
(52463177, 'Farid', 'Pekauman', '051177625312'),
(217366788, 'Hartono', 'Banjarmasin', '087665261'),
(312377238, 'Puspita', 'Sungai Landas', '0888776655421'),
(467582981, 'Dewi', 'Sungai Alang', '0989992776457'),
(777638220, 'Fabio', 'Banjarbaru', '088728654218');

-- --------------------------------------------------------

--
-- Table structure for table `grafik_perorangan_hamil`
--

CREATE TABLE `grafik_perorangan_hamil` (
  `id` int(10) NOT NULL,
  `id_kia` varchar(10) NOT NULL,
  `nama` varchar(25) NOT NULL,
  `umur` int(11) NOT NULL,
  `lingkar_lengan` float NOT NULL,
  `p_jan` int(5) NOT NULL DEFAULT 0,
  `p_feb` int(5) NOT NULL DEFAULT 0,
  `p_mar` int(5) NOT NULL DEFAULT 0,
  `p_apr` int(5) NOT NULL DEFAULT 0,
  `p_mei` int(5) NOT NULL DEFAULT 0,
  `p_jun` int(5) NOT NULL DEFAULT 0,
  `p_jul` int(5) NOT NULL DEFAULT 0,
  `p_agu` int(5) NOT NULL DEFAULT 0,
  `p_sep` int(5) NOT NULL DEFAULT 0,
  `p_okt` int(5) NOT NULL DEFAULT 0,
  `p_nov` int(5) NOT NULL DEFAULT 0,
  `p_des` int(5) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grafik_perorangan_hamil`
--

INSERT INTO `grafik_perorangan_hamil` (`id`, `id_kia`, `nama`, `umur`, `lingkar_lengan`, `p_jan`, `p_feb`, `p_mar`, `p_apr`, `p_mei`, `p_jun`, `p_jul`, `p_agu`, `p_sep`, `p_okt`, `p_nov`, `p_des`) VALUES
(26, '0001', 'Dwi', 0, 0, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `grafik_perorangan_stunting`
--

CREATE TABLE `grafik_perorangan_stunting` (
  `id` int(11) UNSIGNED NOT NULL,
  `id_kia` varchar(255) NOT NULL,
  `nama` varchar(35) NOT NULL,
  `umur` int(5) NOT NULL,
  `jenis_kelamin` enum('Laki-laki','Perempuan') NOT NULL,
  `berat_badan` float NOT NULL,
  `p_jan` varchar(5) DEFAULT '0',
  `p_feb` varchar(5) DEFAULT '0',
  `p_mar` varchar(5) DEFAULT '0',
  `p_apr` varchar(5) DEFAULT '0',
  `p_mei` varchar(5) DEFAULT '0',
  `p_jun` varchar(5) DEFAULT '0',
  `p_jul` varchar(5) DEFAULT '0',
  `p_agu` varchar(5) DEFAULT '0',
  `p_sep` varchar(5) DEFAULT '0',
  `p_okt` varchar(5) DEFAULT '0',
  `p_nov` varchar(5) DEFAULT '0',
  `p_des` varchar(5) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grafik_perorangan_stunting`
--

INSERT INTO `grafik_perorangan_stunting` (`id`, `id_kia`, `nama`, `umur`, `jenis_kelamin`, `berat_badan`, `p_jan`, `p_feb`, `p_mar`, `p_apr`, `p_mei`, `p_jun`, `p_jul`, `p_agu`, `p_sep`, `p_okt`, `p_nov`, `p_des`) VALUES
(51, '0001', 'Reonald', 0, 'Laki-laki', 0, '77', '6', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');

-- --------------------------------------------------------

--
-- Table structure for table `hamil`
--

CREATE TABLE `hamil` (
  `id` int(11) NOT NULL,
  `id_kia` varchar(255) NOT NULL,
  `nama` varchar(35) NOT NULL,
  `umur` int(2) NOT NULL,
  `gambar` varchar(150) NOT NULL,
  `id_petugas` varchar(50) NOT NULL,
  `status_kehamilan` varchar(15) NOT NULL,
  `usia_kehamilan` int(2) NOT NULL,
  `tanggal_melahirkan` date DEFAULT NULL,
  `lingkar_lengan` float NOT NULL,
  `pemeriksaan_kehamilan` enum('Y','T') NOT NULL,
  `dapat_konsumsi_pil_fe` enum('Y','T') NOT NULL,
  `pemeriksaan_nias` enum('Y','T') NOT NULL,
  `konseling_gizi` enum('Y','T') NOT NULL,
  `kunjungan_rumah` enum('Y','T') NOT NULL,
  `kepemilikan_akses_air_bersih` enum('Y','T') NOT NULL,
  `kepemilikan_jamban` enum('Y','T') NOT NULL,
  `jaminan_kesehatan` enum('Y','T') NOT NULL,
  `jumlah_diterima_lengkap` int(2) NOT NULL,
  `jumlah_seharusnya` int(2) NOT NULL,
  `presentase` varchar(5) NOT NULL,
  `bulan_pemeriksaan` varchar(50) NOT NULL,
  `tanggal_data` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kia_anak`
--

CREATE TABLE `kia_anak` (
  `id_kia` varchar(50) NOT NULL,
  `nama_anak` varchar(50) NOT NULL,
  `nik_anak` bigint(20) NOT NULL,
  `nama_ibu` varchar(50) NOT NULL,
  `nik_ibu` bigint(50) NOT NULL,
  `tanggal_buku` varchar(50) NOT NULL,
  `kabupaten` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kia_anak`
--

INSERT INTO `kia_anak` (`id_kia`, `nama_anak`, `nik_anak`, `nama_ibu`, `nik_ibu`, `tanggal_buku`, `kabupaten`) VALUES
('0001', 'Reonald', 82742, 'Sri', 29485, '2022-08-19', 'Banjar'),
('0002', 'Budi', 283704, 'Aspuji', 928404, '2022-08-16', 'Banjar');

-- --------------------------------------------------------

--
-- Table structure for table `kia_hamil`
--

CREATE TABLE `kia_hamil` (
  `id_kia` varchar(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `nik` bigint(50) NOT NULL,
  `umur` int(5) NOT NULL,
  `tanggal_buku` varchar(50) NOT NULL,
  `kabupaten` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kia_hamil`
--

INSERT INTO `kia_hamil` (`id_kia`, `nama`, `nik`, `umur`, `tanggal_buku`, `kabupaten`) VALUES
('0001', 'Dwi', 29834, 27, '2022-08-19', 'Banjar');

-- --------------------------------------------------------

--
-- Table structure for table `kpm_beresiko_hamil`
--

CREATE TABLE `kpm_beresiko_hamil` (
  `id` int(11) NOT NULL,
  `id_kia` int(11) NOT NULL,
  `nama` int(11) NOT NULL,
  `umur` int(11) NOT NULL,
  `status_kehamilan` int(11) NOT NULL,
  `usia_kehamilan` int(11) NOT NULL,
  `lingkar_lengan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kpm_resiko`
--

CREATE TABLE `kpm_resiko` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `obat_logistik`
--

CREATE TABLE `obat_logistik` (
  `id_obat` varchar(25) NOT NULL,
  `obat_logistik` varchar(100) NOT NULL,
  `stok` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `obat_logistik`
--

INSERT INTO `obat_logistik` (`id_obat`, `obat_logistik`, `stok`) VALUES
('9214522', 'Tembaga', 39),
('9219231', 'OXY', 18),
('9224168', 'Varian Produk SGM Eksplor Pro-gress Maxx dengan IronC', 80),
('9224654', 'Digoxin', 44),
('9225816', 'Vasopressin', 66),
('9228195', 'Mometasone Furoate', 77),
('9256163', 'Cortisone', 21),
('9257568', 'Scott?s Emulsion', 77),
('9259262', 'Vaksin Influenza', 58),
('9259683', 'Diphencyprone (DPCP)', 96),
('927781', 'Fosinopril', 1),
('9278768', 'Kortikosteroid', 52),
('9280667', 'NUVO Hand Sanitizer dan Hand Soap', 73),
('9288524', 'Vitamin C', 97),
('9307946', 'Calcium D Redoxon (CDR)', 77),
('9317138', 'Metamfetamin', 68),
('931888', 'Tamoxifen', 65),
('9323476', 'Fluconazole', 24),
('9335385', 'Cefoperazone', 67),
('9342924', 'Oseltamivir', 46),
('9348724', 'Obat Digestan', 15),
('9350827', 'Noscapine', 33),
('935184', 'Tetracycline Hcl', 87),
('9362261', 'Spiramycin', 37),
('9372550', 'Bromocriptine', 25),
('9384964', 'SGM Eksplor Soya Pro-gress Maxx dengan Iron C', 8),
('9386858', 'Karbon Aktif', 77),
('9397146', 'Omeprazole', 30),
('9400861', 'Baby&Me Organic', 50),
('9401334', 'Astemizole', 28),
('9404442', 'Diazepam', 68),
('9405513', 'Stavudine', 32),
('9406120', 'Vitamin E', 67),
('9423181', 'Indoramin', 21),
('9428121', 'Nitrogen Oksida', 34),
('9429307', 'Modafinil', 95),
('9435503', 'Dipyridamole', 98),
('9442455', 'Letrozole', 69),
('9445934', 'Entecavir', 2),
('9455304', 'Miconazole', 67),
('946546', 'Natrium Picosulfat', 18),
('9467253', 'Ulipristal', 49),
('9468761', 'Fondaparinux', 6),
('9474462', 'Lutein', 81),
('9483897', 'Cefaclor', 61),
('9494748', 'Clonidine', 64),
('9503948', 'Minoxidil', 77),
('9506623', 'Thiopental', 5),
('9522505', 'Naftifine', 48),
('9527981', 'Nitrogliserin', 16),
('9556849', 'Tapentadol', 35),
('9574444', 'Galantamine', 95),
('9591683', 'Golimumab', 51),
('9615477', 'Budesonide', 72),
('9620005', 'Isoxsuprine', 5),
('9630840', 'Mivacurium', 68),
('9641660', 'Sulfasalazine', 26),
('9647799', 'Desoximetasone', 77),
('9677390', 'Biotin', 80),
('9686013', 'Avifavir', 76),
('9689686', 'Obat Golongan Tetracycline', 47),
('9704494', 'Vaksin Polio', 15),
('9725762', 'Makrolid', 40),
('9733218', 'Selegiline', 92),
('9735554', 'Nonsteroidal Anti-inflammatory Drugs (NSAID)', 77),
('9745539', 'Antidepresan Trisiklik', 52),
('9772362', 'Sakatonik Liver', 59),
('9783373', 'New Diatabs', 55),
('9784990', 'Salmeterol', 87),
('9792031', 'Clozapine', 56),
('9802452', 'Bleomycin', 83),
('9802618', 'Primidone', 80),
('980556', 'Kalsium Glukonat', 50),
('9814062', 'Ketamine', 79),
('9817859', 'Sildenafil', 18),
('9842588', 'Hydrocortisone', 14),
('9882855', 'Danazol', 19),
('9885104', 'Donepezil', 41),
('9900641', 'Fluocinolone', 16),
('9907123', 'Kafein', 88),
('9907926', 'Irinotecan', 88),
('9920543', 'Bacitracin', 17),
('9926401', 'Octreotide', 93),
('9926707', 'Acyclovir Tablet', 62),
('9933212', 'Tolnaftate', 80),
('9966892', 'Ipratropium', 99),
('id_obat', 'nama_obat', 0);

-- --------------------------------------------------------

--
-- Table structure for table `petugas`
--

CREATE TABLE `petugas` (
  `id_petugas` varchar(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `jabatan` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `petugas`
--

INSERT INTO `petugas` (`id_petugas`, `nama`, `jabatan`) VALUES
('63004938', 'Paris', 'Kaur PM'),
('63004941', 'Umar', 'Kaur PM'),
('63005001', 'Firda', 'Petugas'),
('63005006', 'Semes', 'Petugas'),
('63005012', 'vio', 'Petugas'),
('63005026', 'rinaldi', 'Petugas'),
('63005058', 'Bobi', 'Petugas');

-- --------------------------------------------------------

--
-- Table structure for table `rekap_hamil_2022`
--

CREATE TABLE `rekap_hamil_2022` (
  `id` int(11) UNSIGNED NOT NULL,
  `id_kia` varchar(255) NOT NULL,
  `nama` varchar(35) NOT NULL,
  `umur` int(2) NOT NULL,
  `id_petugas` varchar(11) NOT NULL,
  `status_kehamilan` varchar(15) NOT NULL,
  `usia_kehamilan` int(2) NOT NULL,
  `tanggal_melahirkan` date NOT NULL,
  `lingkar_lengan` float NOT NULL,
  `pemeriksaan_kehamilan` enum('Y','T') NOT NULL,
  `dapat_konsumsi_pil_fe` enum('Y','T') NOT NULL,
  `pemeriksaan_nias` enum('Y','T') NOT NULL,
  `konseling_gizi` enum('Y','T') NOT NULL,
  `kunjungan_rumah` enum('Y','T') NOT NULL,
  `kepemilikan_akses_air_bersih` enum('Y','T') NOT NULL,
  `kepemilikan_jamban` enum('Y','T') NOT NULL,
  `jaminan_kesehatan` enum('Y','T') NOT NULL,
  `jumlah_diterima_lengkap` int(2) NOT NULL,
  `jumlah_seharusnya` int(2) NOT NULL,
  `presentase` varchar(3) NOT NULL,
  `bulan_pemeriksaan` varchar(50) NOT NULL,
  `tanggal_data` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rekap_hamil_2022`
--

INSERT INTO `rekap_hamil_2022` (`id`, `id_kia`, `nama`, `umur`, `id_petugas`, `status_kehamilan`, `usia_kehamilan`, `tanggal_melahirkan`, `lingkar_lengan`, `pemeriksaan_kehamilan`, `dapat_konsumsi_pil_fe`, `pemeriksaan_nias`, `konseling_gizi`, `kunjungan_rumah`, `kepemilikan_akses_air_bersih`, `kepemilikan_jamban`, `jaminan_kesehatan`, `jumlah_diterima_lengkap`, `jumlah_seharusnya`, `presentase`, `bulan_pemeriksaan`, `tanggal_data`) VALUES
(120, '0001', 'Dwi', 27, '63004941', 'N', 6, '2022-11-10', 27, 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 8, 8, '100', '01', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `rekap_hamil_2023`
--

CREATE TABLE `rekap_hamil_2023` (
  `id` int(11) UNSIGNED NOT NULL,
  `id_kia` varchar(255) NOT NULL,
  `nama` varchar(35) NOT NULL,
  `umur` int(2) NOT NULL,
  `id_petugas` varchar(11) NOT NULL,
  `status_kehamilan` varchar(15) NOT NULL,
  `usia_kehamilan` int(2) NOT NULL,
  `tanggal_melahirkan` date NOT NULL,
  `lingkar_lengan` float NOT NULL,
  `pemeriksaan_kehamilan` enum('Y','T') NOT NULL,
  `dapat_konsumsi_pil_fe` enum('Y','T') NOT NULL,
  `pemeriksaan_nias` enum('Y','T') NOT NULL,
  `konseling_gizi` enum('Y','T') NOT NULL,
  `kunjungan_rumah` enum('Y','T') NOT NULL,
  `kepemilikan_akses_air_bersih` enum('Y','T') NOT NULL,
  `kepemilikan_jamban` enum('Y','T') NOT NULL,
  `jaminan_kesehatan` enum('Y','T') NOT NULL,
  `jumlah_diterima_lengkap` int(2) NOT NULL,
  `jumlah_seharusnya` int(2) NOT NULL,
  `presentase` varchar(3) NOT NULL,
  `bulan_pemeriksaan` varchar(50) NOT NULL,
  `tanggal_data` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rekap_hamil_2024`
--

CREATE TABLE `rekap_hamil_2024` (
  `id` int(11) UNSIGNED NOT NULL,
  `id_kia` varchar(255) NOT NULL,
  `nama` varchar(35) NOT NULL,
  `umur` int(2) NOT NULL,
  `id_petugas` varchar(11) NOT NULL,
  `status_kehamilan` varchar(15) NOT NULL,
  `usia_kehamilan` int(2) NOT NULL,
  `tanggal_melahirkan` date NOT NULL,
  `lingkar_lengan` float NOT NULL,
  `pemeriksaan_kehamilan` enum('Y','T') NOT NULL,
  `dapat_konsumsi_pil_fe` enum('Y','T') NOT NULL,
  `pemeriksaan_nias` enum('Y','T') NOT NULL,
  `konseling_gizi` enum('Y','T') NOT NULL,
  `kunjungan_rumah` enum('Y','T') NOT NULL,
  `kepemilikan_akses_air_bersih` enum('Y','T') NOT NULL,
  `kepemilikan_jamban` enum('Y','T') NOT NULL,
  `jaminan_kesehatan` enum('Y','T') NOT NULL,
  `jumlah_diterima_lengkap` int(2) NOT NULL,
  `jumlah_seharusnya` int(2) NOT NULL,
  `presentase` varchar(3) NOT NULL,
  `bulan_pemeriksaan` varchar(50) NOT NULL,
  `tanggal_data` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rekap_hamil_2025`
--

CREATE TABLE `rekap_hamil_2025` (
  `id` int(11) UNSIGNED NOT NULL,
  `id_kia` varchar(255) NOT NULL,
  `nama` varchar(35) NOT NULL,
  `umur` int(2) NOT NULL,
  `id_petugas` varchar(11) NOT NULL,
  `status_kehamilan` varchar(15) NOT NULL,
  `usia_kehamilan` int(2) NOT NULL,
  `tanggal_melahirkan` date NOT NULL,
  `lingkar_lengan` float NOT NULL,
  `pemeriksaan_kehamilan` enum('Y','T') NOT NULL,
  `dapat_konsumsi_pil_fe` enum('Y','T') NOT NULL,
  `pemeriksaan_nias` enum('Y','T') NOT NULL,
  `konseling_gizi` enum('Y','T') NOT NULL,
  `kunjungan_rumah` enum('Y','T') NOT NULL,
  `kepemilikan_akses_air_bersih` enum('Y','T') NOT NULL,
  `kepemilikan_jamban` enum('Y','T') NOT NULL,
  `jaminan_kesehatan` enum('Y','T') NOT NULL,
  `jumlah_diterima_lengkap` int(2) NOT NULL,
  `jumlah_seharusnya` int(2) NOT NULL,
  `presentase` varchar(3) NOT NULL,
  `bulan_pemeriksaan` varchar(50) NOT NULL,
  `tanggal_data` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rekap_stunting_2022`
--

CREATE TABLE `rekap_stunting_2022` (
  `id` int(11) UNSIGNED NOT NULL,
  `id_kia` varchar(255) NOT NULL,
  `nama` varchar(35) NOT NULL,
  `umur` tinyint(4) NOT NULL,
  `jenis_kelamin` enum('Laki-laki','Perempuan') NOT NULL,
  `berat_badan` float NOT NULL,
  `tinggi_badan` float NOT NULL,
  `id_petugas` varchar(11) NOT NULL,
  `status_gizi_bb_u` varchar(40) NOT NULL,
  `status_gizi_tb_u` varchar(20) NOT NULL,
  `status_gizi_imt_u` varchar(20) NOT NULL,
  `pemberian_imunisasi_dasar` enum('Y','T') NOT NULL,
  `pengukuran_berat_badan` enum('Y','T') NOT NULL,
  `pengukuran_tinggi_badan` enum('Y','T') NOT NULL,
  `konseling_gizi_bagi_ortu` enum('Y','T') NOT NULL,
  `kunjungan_rumah` enum('Y','T') NOT NULL,
  `kepemilikan_akses_air_bersih` enum('Y','T') NOT NULL,
  `kepemilikan_jamban_sehat` enum('Y','T') NOT NULL,
  `akta_lahir` enum('Y','T') NOT NULL,
  `jaminan_kesehatan` enum('Y','T') NOT NULL,
  `pengasuhan_paud` enum('Y','T') NOT NULL,
  `jumlah_diterima_lengkap` int(2) NOT NULL,
  `jumlah_seharusnya` int(2) NOT NULL,
  `presentase` varchar(4) NOT NULL,
  `bulan_pemeriksaan` varchar(30) NOT NULL,
  `tanggal_data` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rekap_stunting_2022`
--

INSERT INTO `rekap_stunting_2022` (`id`, `id_kia`, `nama`, `umur`, `jenis_kelamin`, `berat_badan`, `tinggi_badan`, `id_petugas`, `status_gizi_bb_u`, `status_gizi_tb_u`, `status_gizi_imt_u`, `pemberian_imunisasi_dasar`, `pengukuran_berat_badan`, `pengukuran_tinggi_badan`, `konseling_gizi_bagi_ortu`, `kunjungan_rumah`, `kepemilikan_akses_air_bersih`, `kepemilikan_jamban_sehat`, `akta_lahir`, `jaminan_kesehatan`, `pengasuhan_paud`, `jumlah_diterima_lengkap`, `jumlah_seharusnya`, `presentase`, `bulan_pemeriksaan`, `tanggal_data`) VALUES
(352, '0001', 'Reonald', 7, 'Laki-laki', 9, 77, '63005001', 'Berat Badan Normal', 'Tinggi', 'Gizi Baik', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 10, 10, '100%', '01', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `rekap_stunting_2023`
--

CREATE TABLE `rekap_stunting_2023` (
  `id` int(11) UNSIGNED NOT NULL,
  `id_kia` varchar(255) NOT NULL,
  `nama` varchar(35) NOT NULL,
  `umur` tinyint(4) NOT NULL,
  `jenis_kelamin` enum('Laki-laki','Perempuan') NOT NULL,
  `berat_badan` float NOT NULL,
  `tinggi_badan` float NOT NULL,
  `id_petugas` varchar(11) NOT NULL,
  `status_gizi_bb_u` varchar(40) NOT NULL,
  `status_gizi_tb_u` varchar(20) NOT NULL,
  `status_gizi_imt_u` varchar(20) NOT NULL,
  `pemberian_imunisasi_dasar` enum('Y','T') NOT NULL,
  `pengukuran_berat_badan` enum('Y','T') NOT NULL,
  `pengukuran_tinggi_badan` enum('Y','T') NOT NULL,
  `konseling_gizi_bagi_ortu` enum('Y','T') NOT NULL,
  `kunjungan_rumah` enum('Y','T') NOT NULL,
  `kepemilikan_akses_air_bersih` enum('Y','T') NOT NULL,
  `kepemilikan_jamban_sehat` enum('Y','T') NOT NULL,
  `akta_lahir` enum('Y','T') NOT NULL,
  `jaminan_kesehatan` enum('Y','T') NOT NULL,
  `pengasuhan_paud` enum('Y','T') NOT NULL,
  `jumlah_diterima_lengkap` int(2) NOT NULL,
  `jumlah_seharusnya` int(2) NOT NULL,
  `presentase` varchar(4) NOT NULL,
  `bulan_pemeriksaan` varchar(30) NOT NULL,
  `tanggal_data` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rekap_stunting_2024`
--

CREATE TABLE `rekap_stunting_2024` (
  `id` int(11) UNSIGNED NOT NULL,
  `id_kia` varchar(255) NOT NULL,
  `nama` varchar(35) NOT NULL,
  `umur` tinyint(4) NOT NULL,
  `jenis_kelamin` enum('Laki-laki','Perempuan') NOT NULL,
  `berat_badan` float NOT NULL,
  `tinggi_badan` float NOT NULL,
  `id_petugas` varchar(11) NOT NULL,
  `status_gizi_bb_u` varchar(40) NOT NULL,
  `status_gizi_tb_u` varchar(20) NOT NULL,
  `status_gizi_imt_u` varchar(20) NOT NULL,
  `pemberian_imunisasi_dasar` enum('Y','T') NOT NULL,
  `pengukuran_berat_badan` enum('Y','T') NOT NULL,
  `pengukuran_tinggi_badan` enum('Y','T') NOT NULL,
  `konseling_gizi_bagi_ortu` enum('Y','T') NOT NULL,
  `kunjungan_rumah` enum('Y','T') NOT NULL,
  `kepemilikan_akses_air_bersih` enum('Y','T') NOT NULL,
  `kepemilikan_jamban_sehat` enum('Y','T') NOT NULL,
  `akta_lahir` enum('Y','T') NOT NULL,
  `jaminan_kesehatan` enum('Y','T') NOT NULL,
  `pengasuhan_paud` enum('Y','T') NOT NULL,
  `jumlah_diterima_lengkap` int(2) NOT NULL,
  `jumlah_seharusnya` int(2) NOT NULL,
  `presentase` varchar(4) NOT NULL,
  `bulan_pemeriksaan` varchar(30) NOT NULL,
  `tanggal_data` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rekap_stunting_2025`
--

CREATE TABLE `rekap_stunting_2025` (
  `id` int(11) UNSIGNED NOT NULL,
  `id_kia` varchar(255) NOT NULL,
  `nama` varchar(35) NOT NULL,
  `umur` tinyint(4) NOT NULL,
  `jenis_kelamin` enum('Laki-laki','Perempuan') NOT NULL,
  `berat_badan` float NOT NULL,
  `tinggi_badan` float NOT NULL,
  `id_petugas` varchar(11) NOT NULL,
  `status_gizi_bb_u` varchar(40) NOT NULL,
  `status_gizi_tb_u` varchar(20) NOT NULL,
  `status_gizi_imt_u` varchar(20) NOT NULL,
  `pemberian_imunisasi_dasar` enum('Y','T') NOT NULL,
  `pengukuran_berat_badan` enum('Y','T') NOT NULL,
  `pengukuran_tinggi_badan` enum('Y','T') NOT NULL,
  `konseling_gizi_bagi_ortu` enum('Y','T') NOT NULL,
  `kunjungan_rumah` enum('Y','T') NOT NULL,
  `kepemilikan_akses_air_bersih` enum('Y','T') NOT NULL,
  `kepemilikan_jamban_sehat` enum('Y','T') NOT NULL,
  `akta_lahir` enum('Y','T') NOT NULL,
  `jaminan_kesehatan` enum('Y','T') NOT NULL,
  `pengasuhan_paud` enum('Y','T') NOT NULL,
  `jumlah_diterima_lengkap` int(2) NOT NULL,
  `jumlah_seharusnya` int(2) NOT NULL,
  `presentase` varchar(4) NOT NULL,
  `bulan_pemeriksaan` varchar(30) NOT NULL,
  `tanggal_data` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `stunting`
--

CREATE TABLE `stunting` (
  `id` int(11) NOT NULL,
  `id_kia` varchar(50) NOT NULL,
  `nama` varchar(35) NOT NULL,
  `umur` tinyint(4) NOT NULL,
  `jenis_kelamin` enum('Laki-laki','Perempuan') NOT NULL,
  `berat_badan` float NOT NULL,
  `tinggi_badan` float NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `id_petugas` varchar(50) NOT NULL,
  `status_gizi_bb_u` varchar(40) NOT NULL,
  `status_gizi_tb_u` varchar(20) NOT NULL,
  `status_gizi_imt_u` varchar(20) NOT NULL,
  `pemberian_imunisasi_dasar` enum('Y','T') NOT NULL,
  `pengukuran_berat_badan` enum('Y','T') NOT NULL,
  `pengukuran_tinggi_badan` enum('Y','T') NOT NULL,
  `konseling_gizi_bagi_ortu` enum('Y','T') NOT NULL,
  `kunjungan_rumah` enum('Y','T') NOT NULL,
  `kepemilikan_akses_air_bersih` enum('Y','T') NOT NULL,
  `kepemilikan_jamban_sehat` enum('Y','T') NOT NULL,
  `akta_lahir` enum('Y','T') NOT NULL,
  `jaminan_kesehatan` enum('Y','T') NOT NULL,
  `pengasuhan_paud` enum('Y','T') NOT NULL,
  `jumlah_diterima_lengkap` int(2) NOT NULL,
  `jumlah_seharusnya` int(2) NOT NULL,
  `presentase` varchar(4) NOT NULL,
  `bulan_pemeriksaan` varchar(30) NOT NULL,
  `tanggal_data` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stunting`
--

INSERT INTO `stunting` (`id`, `id_kia`, `nama`, `umur`, `jenis_kelamin`, `berat_badan`, `tinggi_badan`, `gambar`, `id_petugas`, `status_gizi_bb_u`, `status_gizi_tb_u`, `status_gizi_imt_u`, `pemberian_imunisasi_dasar`, `pengukuran_berat_badan`, `pengukuran_tinggi_badan`, `konseling_gizi_bagi_ortu`, `kunjungan_rumah`, `kepemilikan_akses_air_bersih`, `kepemilikan_jamban_sehat`, `akta_lahir`, `jaminan_kesehatan`, `pengasuhan_paud`, `jumlah_diterima_lengkap`, `jumlah_seharusnya`, `presentase`, `bulan_pemeriksaan`, `tanggal_data`) VALUES
(353, '0001', 'Reonald', 6, 'Laki-laki', 6, 6, 'profil.jpg', '63005001', 'Berat Badan Kurang', 'Sangat Pendek', 'Gizi Buruk', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 10, 10, '100%', '02', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tambahan_makanan`
--

CREATE TABLE `tambahan_makanan` (
  `id` int(11) NOT NULL,
  `id_kia` varchar(50) NOT NULL,
  `nama_bayi` varchar(50) NOT NULL,
  `nama_ortu` varchar(50) NOT NULL,
  `makanan_tambahan` varchar(50) NOT NULL,
  `tanggal` date NOT NULL,
  `volume` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tambahan_makanan`
--

INSERT INTO `tambahan_makanan` (`id`, `id_kia`, `nama_bayi`, `nama_ortu`, `makanan_tambahan`, `tanggal`, `volume`) VALUES
(1, '14726', 'Sasmi', 'Susi', 'Susu rendah lemak', '2022-08-19', '8 scoop'),
(2, '376490', 'Abdi', 'Asih', 'Glukosa', '2022-08-28', '13 bungkus'),
(9, '0001', 'Reonald', 'Sri', 'Pil Penambah Darah', '2022-08-17', '5 bungkus');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(10) NOT NULL,
  `email` varchar(40) NOT NULL,
  `hak_akses` varchar(10) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `hak_akses`, `password`) VALUES
(1, 'admin', '', 'sekdes', '$2y$10$gpCws09gdDFbF2Qkq16fYecrL8m/bTnMNAOR4Y.Soym26DO6ohgJW'),
(9, 'reonald', 'reonaldproject@gmail.com', 'petugas', 'reonald'),
(11, 'rere3', 'rere2@gmail.com', 'petugas', '$2y$10$/Wlq9amRQujR0YPF9/XRwuwXv5Ca/vv7vnutzOLJgbWcxBeJmRGmK'),
(14, 'semes', 'semes@gmail.com', 'petugas', '$2y$10$SjrbXJ7A4hWwDoLMcwfRiuYbkdYVlrpO3PLKBKp1zOjNl8koma8n6'),
(16, 'user', 'user', 'petugas', '$2y$10$NWr2g7XSpdTDw3eAE9BsHOluuy2vwq9hK.p.FB/ZIek9W7bKYYiOa'),
(17, 'febri', 'febrida@gmail.com', 'sekdes', '$2y$10$5Mnibhy85NBT5165xq13HepJXkyR7uhL3EvbxLkfyppnEmaAEbX2y'),
(18, 'fatma', 'fatmabanjar@gmail.com', 'petugas', '$2y$10$4QtuBDBzuZVNIg57B2ze4eHZ2yMKpAxZJV1KkNkdldIq2/fYVIR4q'),
(19, 'pambakal', 'pambakalsungailandas@gmail.com', 'pambakal', '$2y$10$zExa.r5Q/NJTaWxmtYAWROJeUEgpajWcXusqUlLavVXa.PRqG/wiG'),
(21, 'dokter', 'doktersungailandas@gmail.com', 'dokter', '$2y$10$7TbXESRCc5smkViDEm5lVOSq5Ge2ovavAKD7L61ikSTLXwv.N8vfO'),
(22, 'puskesmas', 'puskesmassungailandas@gmail.com', 'puskesmas', '$2y$10$QqCs8OxSlJSR9dBPhU0wwOfpWH1EmpBDB9jMA/9n.j6ZqVDmhI/Dq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dokter`
--
ALTER TABLE `dokter`
  ADD PRIMARY KEY (`nip`);

--
-- Indexes for table `grafik_perorangan_hamil`
--
ALTER TABLE `grafik_perorangan_hamil`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `grafik_perorangan_stunting`
--
ALTER TABLE `grafik_perorangan_stunting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hamil`
--
ALTER TABLE `hamil`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kia` (`id_kia`),
  ADD KEY `hamil_ibfk_1` (`id_petugas`);

--
-- Indexes for table `kia_anak`
--
ALTER TABLE `kia_anak`
  ADD PRIMARY KEY (`id_kia`);

--
-- Indexes for table `kia_hamil`
--
ALTER TABLE `kia_hamil`
  ADD PRIMARY KEY (`id_kia`);

--
-- Indexes for table `kpm_resiko`
--
ALTER TABLE `kpm_resiko`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `obat_logistik`
--
ALTER TABLE `obat_logistik`
  ADD PRIMARY KEY (`id_obat`);

--
-- Indexes for table `petugas`
--
ALTER TABLE `petugas`
  ADD PRIMARY KEY (`id_petugas`);

--
-- Indexes for table `rekap_hamil_2022`
--
ALTER TABLE `rekap_hamil_2022`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kia` (`id_kia`),
  ADD KEY `id_petugas` (`id_petugas`);

--
-- Indexes for table `rekap_hamil_2023`
--
ALTER TABLE `rekap_hamil_2023`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kia` (`id_kia`),
  ADD KEY `id_petugas` (`id_petugas`);

--
-- Indexes for table `rekap_hamil_2024`
--
ALTER TABLE `rekap_hamil_2024`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kia` (`id_kia`),
  ADD KEY `id_petugas` (`id_petugas`);

--
-- Indexes for table `rekap_hamil_2025`
--
ALTER TABLE `rekap_hamil_2025`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kia` (`id_kia`),
  ADD KEY `id_petugas` (`id_petugas`);

--
-- Indexes for table `rekap_stunting_2022`
--
ALTER TABLE `rekap_stunting_2022`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kia` (`id_kia`),
  ADD KEY `id_petugas` (`id_petugas`);

--
-- Indexes for table `rekap_stunting_2023`
--
ALTER TABLE `rekap_stunting_2023`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kia` (`id_kia`),
  ADD KEY `id_petugas` (`id_petugas`);

--
-- Indexes for table `rekap_stunting_2024`
--
ALTER TABLE `rekap_stunting_2024`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kia` (`id_kia`),
  ADD KEY `id_petugas` (`id_petugas`);

--
-- Indexes for table `rekap_stunting_2025`
--
ALTER TABLE `rekap_stunting_2025`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kia` (`id_kia`),
  ADD KEY `id_petugas` (`id_petugas`);

--
-- Indexes for table `stunting`
--
ALTER TABLE `stunting`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_petugas` (`id_petugas`),
  ADD KEY `id_kia` (`id_kia`);

--
-- Indexes for table `tambahan_makanan`
--
ALTER TABLE `tambahan_makanan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `grafik_perorangan_hamil`
--
ALTER TABLE `grafik_perorangan_hamil`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `grafik_perorangan_stunting`
--
ALTER TABLE `grafik_perorangan_stunting`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `hamil`
--
ALTER TABLE `hamil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT for table `kpm_resiko`
--
ALTER TABLE `kpm_resiko`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rekap_hamil_2022`
--
ALTER TABLE `rekap_hamil_2022`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT for table `rekap_hamil_2023`
--
ALTER TABLE `rekap_hamil_2023`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rekap_hamil_2024`
--
ALTER TABLE `rekap_hamil_2024`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rekap_hamil_2025`
--
ALTER TABLE `rekap_hamil_2025`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rekap_stunting_2022`
--
ALTER TABLE `rekap_stunting_2022`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=353;

--
-- AUTO_INCREMENT for table `rekap_stunting_2023`
--
ALTER TABLE `rekap_stunting_2023`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=250;

--
-- AUTO_INCREMENT for table `rekap_stunting_2024`
--
ALTER TABLE `rekap_stunting_2024`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rekap_stunting_2025`
--
ALTER TABLE `rekap_stunting_2025`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stunting`
--
ALTER TABLE `stunting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=354;

--
-- AUTO_INCREMENT for table `tambahan_makanan`
--
ALTER TABLE `tambahan_makanan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `hamil`
--
ALTER TABLE `hamil`
  ADD CONSTRAINT `hamil_ibfk_1` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `hamil_ibfk_2` FOREIGN KEY (`id_kia`) REFERENCES `kia_hamil` (`id_kia`);

--
-- Constraints for table `rekap_hamil_2022`
--
ALTER TABLE `rekap_hamil_2022`
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_1` FOREIGN KEY (`id_kia`) REFERENCES `kia_hamil` (`id_kia`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_10` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_11` FOREIGN KEY (`id_kia`) REFERENCES `kia_hamil` (`id_kia`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_12` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_13` FOREIGN KEY (`id_kia`) REFERENCES `kia_hamil` (`id_kia`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_14` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_15` FOREIGN KEY (`id_kia`) REFERENCES `kia_hamil` (`id_kia`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_16` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_17` FOREIGN KEY (`id_kia`) REFERENCES `kia_hamil` (`id_kia`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_18` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_19` FOREIGN KEY (`id_kia`) REFERENCES `kia_hamil` (`id_kia`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_2` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_20` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_21` FOREIGN KEY (`id_kia`) REFERENCES `kia_hamil` (`id_kia`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_22` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_23` FOREIGN KEY (`id_kia`) REFERENCES `kia_hamil` (`id_kia`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_24` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_25` FOREIGN KEY (`id_kia`) REFERENCES `kia_hamil` (`id_kia`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_26` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_27` FOREIGN KEY (`id_kia`) REFERENCES `kia_hamil` (`id_kia`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_28` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_3` FOREIGN KEY (`id_kia`) REFERENCES `kia_hamil` (`id_kia`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_4` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_5` FOREIGN KEY (`id_kia`) REFERENCES `kia_hamil` (`id_kia`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_6` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_7` FOREIGN KEY (`id_kia`) REFERENCES `kia_hamil` (`id_kia`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_8` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_hamil_2022_ibfk_9` FOREIGN KEY (`id_kia`) REFERENCES `kia_hamil` (`id_kia`);

--
-- Constraints for table `rekap_stunting_2022`
--
ALTER TABLE `rekap_stunting_2022`
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_1` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_10` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_100` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_101` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_102` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_103` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_104` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_105` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_106` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_107` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_108` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_109` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_11` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_110` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_111` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_112` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_113` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_114` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_115` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_116` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_117` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_118` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_119` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_12` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_120` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_121` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_122` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_123` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_124` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_125` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_126` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_127` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_128` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_13` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_14` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_15` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_16` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_17` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_18` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_19` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_2` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_20` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_21` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_22` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_23` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_24` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_25` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_26` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_27` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_28` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_29` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_3` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_30` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_31` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_32` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_33` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_34` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_35` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_36` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_37` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_38` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_39` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_4` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_40` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_41` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_42` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_43` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_44` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_45` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_46` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_47` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_48` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_49` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_5` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_50` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_51` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_52` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_53` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_54` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_55` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_56` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_57` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_58` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_59` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_6` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_60` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_61` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_62` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_63` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_64` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_65` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_66` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_67` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_68` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_69` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_7` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_70` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_71` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_72` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_73` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_74` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_75` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_76` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_77` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_78` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_79` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_8` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_80` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_81` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_82` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_83` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_84` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_85` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_86` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_87` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_88` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_89` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_9` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_90` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_91` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_92` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_93` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_94` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_95` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_96` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_97` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_98` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `rekap_stunting_2022_ibfk_99` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`);

--
-- Constraints for table `stunting`
--
ALTER TABLE `stunting`
  ADD CONSTRAINT `stunting_ibfk_1` FOREIGN KEY (`id_petugas`) REFERENCES `petugas` (`id_petugas`),
  ADD CONSTRAINT `stunting_ibfk_2` FOREIGN KEY (`id_kia`) REFERENCES `kia_anak` (`id_kia`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
