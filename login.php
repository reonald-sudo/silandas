<script src="js/jquery.js"></script>
<script src="sweetalert2-11.3.4/package/dist/sweetalert2.all.min.js"></script>

<?php
session_start();
require 'link.php';
require 'functions.php';

// cek cookie
if (isset($_COOKIE['dump']) && ($_COOKIE['nama'])) {
    $dump = $_COOKIE['dump'];
    $nama = $_COOKIE['nama'];

    // ambil username by id
    $result = mysqli_query($conn, "SELECT username FROM user WHERE id = '$dump'");
    $row = mysqli_fetch_assoc($result);

    // cek cookie dan username
    if ($nama === hash('gost-crypto', $row['username'])) {
        $_SESSION['login'] = true;
    }
}

if (isset($_SESSION['login'])) {
    header('Location:index.php');
    exit;
}

if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];


    $result = mysqli_query($conn, "SELECT * FROM user WHERE username = '$username'");

    // cek username
    if (mysqli_num_rows($result) === 1) {

        // cek password
        $row = mysqli_fetch_assoc($result);

        // variabel
        $_SESSION['username'] = $row['username'];
        $_SESSION['password'] = $row['password'];
        $_SESSION['hak_akses'] = $row['hak_akses'];

        if (password_verify($password, $row['password'])) {

            // set session
            $_SESSION['login'] = true;

            // cek remember me
            if (isset($_POST['remember'])) {

                // buat cookie
                setcookie('dump', hash('gost-crypto', $row['id']), time() + 120);
                setcookie('nama', hash('gost-crypto', $row['username']), time() + 120);
            }

            // cek hak akses
            if ($row['hak_akses'] === 'sekdes') {
                echo "
                <script>
                document.location.href = 'dashboard.php';
                </script>
                ";
            } else if ($row['hak_akses'] === 'petugas') {
                echo "
                <script>
                document.location.href = 'index.php';
                </script>
                ";
            } else if ($row['hak_akses'] === 'pambakal') {
                echo "
                <script>
                document.location.href = 'dashboardPimpinan.php';
                </script>
                ";
            } else if ($row['hak_akses'] === 'dokter') {
                echo "
                <script>
                document.location.href ='dashboardDokter.php';
                </script>";
            } else if ($row['hak_akses'] === 'puskesmas') {
                echo "
                <script>
                document.location.href = 'dashboardPuskesmas.php';
                </script>
                ";
            }

            exit;
        }
    }

    $error = true;
}

?>

<body style="background-image: url(img/balai_rev.JPG);" class="bg">
    <form class="login" method="post" action="">
        <h3 align="center" style="color: #4A5568;" class="mb-4">SiLandas Login</h3>

        <?php if (isset($error)) : ?>
            <p style="color: red; font-style: italic;">Username / Password Salah</p>
        <?php endif; ?>

        <input type="text" placeholder="Username" id="username" name="username" autofocus autocomplete="off">
        <input type="password" placeholder="Password" id="password" name="password">

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="remember" name="remember">
            <label class="form-check-label" for="remember">
                Ingat Saya
            </label>
        </div>

        <button style="width: 100%;" class="mb-2" id="login" name="login"><img src="img/icon/padlock.png" class="iconTable" alt="" style="margin-right: 5px;">Sign In</button>
        <p align="left">Belum punya akun? <a href="signup.php" style="color: black;">Sign Up</a></p>
        <style>
            body {
                background-color: #d6ddd5;
                font-family: 'Manrope', sans-serif;
            }

            .login {
                overflow: hidden;
                background-color: #F8F9FA;
                padding: 40px 30px 30px 30px;
                border-radius: 10px;
                position: absolute;
                top: 50%;
                left: 50%;
                width: 450px;
                -webkit-transform: translate(-50%, -50%);
                -moz-transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%);
                -o-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                -webkit-transition: -webkit-transform 300ms, box-shadow 300ms;
                -moz-transition: -moz-transform 300ms, box-shadow 300ms;
                transition: transform 300ms, box-shadow 300ms;
                box-shadow: 5px 10px 10px rgba(2, 128, 144, 0.2);
            }

            .login::before,
            .login::after {
                content: "";
                position: absolute;
                width: 600px;
                height: 600px;
                border-top-left-radius: 40%;
                border-top-right-radius: 45%;
                border-bottom-left-radius: 35%;
                border-bottom-right-radius: 40%;
                z-index: -1;
            }

            .login::before {
                left: 40%;
                bottom: -80%;
                background-color: rgba(69, 105, 144, 0.15);
                -webkit-animation: wawes 6s infinite linear;
                -moz-animation: wawes 6s infinite linear;
                animation: wawes 6s infinite linear;
            }

            .login::after {
                left: 35%;
                bottom: -95%;
                background-color: rgba(2, 128, 144, 0.2);
                -webkit-animation: wawes 7s infinite;
                -moz-animation: wawes 7s infinite;
                animation: wawes 7s infinite;
            }

            .login>input {
                font-family: 'Manrope', sans-serif;
                display: block;
                border-radius: 5px;
                font-size: 16px;
                background: white;
                width: 100%;
                border: 0;
                padding: 10px 10px;
                margin: 15px -10px;
            }

            .login>button {
                font-family: 'Manrope', sans-serif;
                cursor: pointer;
                color: #fff;
                font-size: 16px;
                width: 80px;
                border: 0;
                padding: 10px 0;
                margin-top: 10px;
                margin-left: -5px;
                border-radius: 5px;
                background-color: #4A5568;
                -webkit-transition: background-color 300ms;
                -moz-transition: background-color 300ms;
                transition: background-color 300ms;
            }

            .login>button:hover {
                background-color: #4A5569;
            }

            @-webkit-keyframes wawes {
                from {
                    -webkit-transform: rotate(0);
                }

                to {
                    -webkit-transform: rotate(360deg);
                }
            }

            @-moz-keyframes wawes {
                from {
                    -moz-transform: rotate(0);
                }

                to {
                    -moz-transform: rotate(360deg);
                }
            }

            @keyframes wawes {
                from {
                    -webkit-transform: rotate(0);
                    -moz-transform: rotate(0);
                    -ms-transform: rotate(0);
                    -o-transform: rotate(0);
                    transform: rotate(0);
                }

                to {
                    -webkit-transform: rotate(360deg);
                    -moz-transform: rotate(360deg);
                    -ms-transform: rotate(360deg);
                    -o-transform: rotate(360deg);
                    transform: rotate(360deg);
                }
            }

            /* a {
                text-decoration: none;
                color: rgba(255, 255, 255, 0.6);
                position: absolute;
                right: 10px;
                bottom: 10px;
                font-size: 12px;
            } */
        </style>
    </form>
    <h1 align="center" style="font-family: 'Roboto Slab', serif; color: #4A5568;"></h1>
</body>