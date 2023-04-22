<?php

include 'functions.php';
$id = $_GET['id'];

$edit = editDataMakanan("SELECT * FROM tambahan_makanan WHERE id = $id");

if (isset($_POST['ubah'])) {
    if (ubahData($_POST) > 0) {
        echo "
        <script>
        alert('Data Berhasil Diubah');
        location.href = 'tambahanMakanan.php';
        </script>
        ";
    } else {
        echo "
        <script>
        alert ('Data Gagal Diubah');
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

    <h1 align="center">EDIT DATA TAMBAHAN MAKANAN</h1>

    <form action="" method="POST">
        <div style="display: none;">
            <input type="text" name="id" id="id" value="<?= $edit['id'] ?>">
        </div>
        <div>
            <label for="kia">KIA</label>
            <input type="text" name="kia" id="kia" value="<?= $edit['id_kia'] ?>">
        </div>
        <div>
            <label for="nama_bayi">Nama bayi</label>
            <input type="text" name="nama_bayi" id="nama_bayi" value="<?= $edit['nama_bayi'] ?>">
        </div>
        <div>
            <label for="nama_ortu">Nama Orang Tua</label>
            <input type="text" name="nama_ortu" id="nama_ortu" value="<?= $edit['nama_ortu'] ?>">
        </div>
        <div>
            <label for="makanan_tambahan">Makanan Tambahan</label>
            <select name="makanan_tambahan" id="makanan_tambahan">
                <option selected value="<?= $edit['makanan_tambahan'] ?>"><?= $edit['makanan_tambahan'] ?></option>
                <option value="Susu Rendah Lemak">Susu Rendah Lemak</option>
                <option value="Vit A">Vit A</option>
                <option value="Vit B">Vit C</option>
                <option value="Pil Penambah Darah">Pil Penambah Darah</option>
                <option value="Pil Penambah Nafsu Makan">Pil Penambah Nafsu Makan</option>
                <option value="Susu SGM">Susu SGM</option>
                <option value="Susu Protein">Susu Protein</option>
            </select>
        </div>
        <div>
            <label for="tanggal">Tanggal</label>
            <input type="date" name="tanggal" id="tanggal" value="<?= $edit['tanggal'] ?>">
        </div>
        <div>
            <label for="volume">Volume</label>
            <input type="text" name="volume" id="volume" value="<?= $edit['volume'] ?>">
        </div>
        <br>

        <div>
            <button type="submit" name="ubah" id="ubah">Ubah</button>
            <a href="editMakananTambahan.php">Batal</a>
            <a href="tambahanMakanan.php">Kembali</a>
        </div>
    </form>
</body>

</html>