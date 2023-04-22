<script src="js/jquery.js"></script>
<script src="sweetalert2-11.3.4/package/dist/sweetalert2.all.min.js"></script>

<?php
require 'link.php';
require 'functions.php';

if (isset($_POST['daftar'])) {

    if (register($_POST) > 0) {
        echo "<script>
            $(document).ready(function(){

            Swal.fire({
                title: 'Berhasil Registrasi !',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Oke'
            }).then((result) => {
                if (result.isConfirmed) {
                    document.location.href = 'login.php';
                }
            })
        });
        </script>
    ";
    } else {
        mysqli_error($conn);
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Silandas | Sign Up</title>
</head>

<body style="background-color: #d6ddd5;">
    <form action="" method="POST">

        <div class="container" style="width: fit-content; position: absolute;
                top: 15%; left: 23%;">

            <div align="center">

                <div class=" row gx-0">
                    <!-- gambar -->
                    <div class="col-sm-8" style="width: fit-content; height: fit-content; border: 1px solid #dedede;">
                        <img src="img/signup.jpg" alt="" style="width: 450px;">
                    </div>

                    <div class="col-sm-4" style="background-color: white;">
                        <div style="border: 1px solid #dedede; box-shadow: 0 3px 7px rgb(0 0 0 / 0.2);">
                            <!-- judul -->
                            <p style="font-size: 20px; color: #4A5568; margin-top: 10px; font-family: 'Manrope', sans-serif;" align="center"><b>Sign Up SiLandas</b></p>
                            <!-- input -->
                            <div align="left" style="padding: 0px 15px; font-family: 'Manrope', sans-serif;">
                                <!-- username -->
                                <label for="username" class="form-label">Username</label>
                                <input type="text" name="username" id="username" class="form-control mb-3" autocomplete="off" autofocus required>
                                <!--email-->
                                <label for="email" class="form-label">Email</label>
                                <input type="email" name="email" id="email" class="form-control mb-3">
                                <!-- hidden hak-akses -->
                                <div id="hak_akses">
                                    <label for="akses" class="form-label">Hak akses</label>
                                    <input type="text" name="akses" id="akses" class="form-control mb-3" value="petugas">
                                </div>
                                <!-- pwd -->
                                <label for="password" class="form-label">Password</label>
                                <input type="password" name="password" id="password" class="form-control mb-3" required>
                                <!-- confirm pwd -->
                                <label for="confirm_password" class="form-label">Confirm Password</label>
                                <input type="password" name="confirm_password" id="confirm_password" class="form-control mb-3" required>
                                <!-- btn signup -->
                                <button type="submit" class="btn btn-primary mb-2" style="display: block; width: 100%; height: 9%;" name="daftar" id="daftar" align="center">
                                    <img src="img/icon/padlock.png" alt="" class="iconTable" style="margin-right: 5px;">Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </form>
    <script>
        $(document).ready(function() {
            let hak_akses = $('#hak_akses').hide();
        });
    </script>
</body>

</html>