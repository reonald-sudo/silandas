<script src="js/jquery.js"></script>

<?php include 'functions.php';

$tambahanMakanan = query("SELECT * FROM tambahan_makanan");

if (isset($_POST['simpan'])) {
    if (tambahDataMakanan($_POST) > 0) {
        echo "
        <script>
        alert ('Data Berhasil Disimpan');
        location.href = 'tambahanMakanan.php';
        </script>
        ";
    } else {
        echo "
        <script>
        alert ('Data Gagal Disimpan');
        </script>
        ";
    }
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <style>
        table,
        td {
            border: 1px solid black;
        }

        thead {
            font-weight: bold;
        }
    </style>

    <h1 align="center">TABEL PENAMBAHAN MAKANAN BAYI</h3>
        <h3>
            <marquee behavior="" direction="" style="color: red;">M.REONALD (18630742)</marquee>
        </h3>


        <a href="cetakTambahanMakanan.php">Cetak</a>
        <br>

        <table>
            <thead>
                <td>No</td>
                <td>No KIA</td>
                <td>Nama Bayi</td>
                <td>Nama Orang Tua</td>
                <td>Makanan Tambahan</td>
                <td>Tanggal</td>
                <td>Volume</td>
                <td>Opsi</td>
            </thead>

            <tbody>
                <tr>
                    <?php $i = 1; ?>
                    <?php foreach ($tambahanMakanan as $row) : ?>
                        <td><?= $i ?></td>
                        <td><?= $row['id_kia'] ?></td>
                        <td><?= $row['nama_bayi'] ?></td>
                        <td><?= $row['nama_ortu'] ?></td>
                        <td><?= $row['makanan_tambahan'] ?></td>
                        <td><?= $row['tanggal'] ?></td>
                        <td><?= $row['volume'] ?></td>
                        <td>
                            <a href="editMakananTambahan.php?id=<?= $row['id'] ?>">Edit</a>
                            <a href="hapusMakananTambahan.php?id=<?= $row['id'] ?>">Hapus</a>
                        </td>
                </tr>
            </tbody>
            <?php $i++; ?>
        <?php endforeach; ?>
        </table>

        <br>
        <br>

        <form action="" method="POST">
            <div>
                <label for="kia">KIA</label>
                <input type="text" name="kia" id="kia" onkeyup="autoFillKiaAnak()">
            </div>
            <div>
                <label for="nama_bayi">Nama bayi</label>
                <input type="text" name="nama_bayi" id="nama" readonly>
            </div>
            <div>
                <label for="nama_ortu">Nama Orang Tua</label>
                <input type="text" name="nama_ortu" id="nama_ortu" readonly>
            </div>
            <div>
                <label for="makanan_tambahan">Makanan Tambahan</label>
                <select name="makanan_tambahan" id="makanan_tambahan">
                    <option selected>-- PILIH --</option>
                    <option value="Susu Rendah Lemak">Susu Rendah Lemak</option>
                    <option value="Vit A">Vit A</option>
                    <option value="Vit B">Vit C</option>
                    <option value="Pil Penambah Darah">Pil Penambah Darah</option>
                    <option value="Pil Penambah Nafsu Makan">Pil Penambah Nafsu Makan</option>
                    <option value="Susu SGM">Susu SGM</option>
                    <option value="Susu Protein">Susu Protein</option>
                </select>
                <!-- <input type="text" name="makanan_tambahan" id="makanan_tambahan"> -->
            </div>
            <div>
                <label for="tanggal">Tanggal</label>
                <input type="date" name="tanggal" id="tanggal">
            </div>
            <div>
                <label for="volume">Volume</label>
                <input type="text" name="volume" id="volume">
            </div>
            <br>

            <div>
                <button type="submit" name="simpan" id="simpan">Simpan</button>
                <a href="tambahanMakanan.php">Batal</a>
                <a href="index.php">Kembali</a>
            </div>
        </form>

</body>

<script>
    $(document).ready(function() {
        $
    });
</script>

<script src="js/autoFillKiaAnak.js"></script>
<script src="js/validation.js"></script>

</html>