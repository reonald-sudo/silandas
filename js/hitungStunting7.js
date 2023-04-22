function hitungStunting() {

    let umur = document.getElementById('umur').value;
    let berat_badan = document.getElementById('berat_badan').value;
    let tinggi_badan = document.getElementById('tinggi_badan').value;
    let status_gizi_bb_u = document.getElementById('status_gizi_bb_u');
    let status_gizi_tb_u = document.getElementById('status_gizi_tb_u');
    let status_gizi_imt_u = document.getElementById('status_gizi_imt_u');


    // UMUR 0 LAKI - LAKI
    // <-3 SD & < -3 SD
    if ((umur == 0) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 1.9) && (tinggi_badan >= 0 && tinggi_badan <= 44.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 1.9) && (tinggi_badan >= 44.2 && tinggi_badan <= 46)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 1.9) && (tinggi_badan >= 46.1 && tinggi_badan <= 55.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 1.9) && (tinggi_badan >= 55.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 2 && berat_badan <= 2.4) && (tinggi_badan >= 0 && tinggi_badan <= 44.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd -2 SD 
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 2 && berat_badan <= 2.4) && (tinggi_badan >= 44.2 && tinggi_badan <= 46)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 2 && berat_badan <= 2.4) && (tinggi_badan >= 46.1 && tinggi_badan <= 55.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 2 && berat_badan <= 2.4) && (tinggi_badan >= 55.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 2.5 && berat_badan <= 3.9) && (tinggi_badan >= 0 && tinggi_badan <= 44.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 2.5 && berat_badan <= 3.9) && (tinggi_badan >= 44.2 && tinggi_badan <= 46)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 2.5 && berat_badan <= 3.9) && (tinggi_badan >= 46.1 && tinggi_badan <= 55.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 2.5 && berat_badan <= 3.9) && (tinggi_badan >= 55.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 4) && (tinggi_badan >= 0 && tinggi_badan <= 44.1)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 4) && (tinggi_badan >= 44.2 && tinggi_badan <= 46)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 4) && (tinggi_badan >= 46.1 && tinggi_badan <= 55.6)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 4) && (tinggi_badan >= 55.7)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // -------------------------------------------------------------------------------------------

    // UMUR 1 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 2.8) && (tinggi_badan >= 0 && tinggi_badan <= 48.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 2.8) && (tinggi_badan >= 48.9 && tinggi_badan <= 50.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 2.8) && (tinggi_badan >= 50.8 && tinggi_badan <= 60.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 2.8) && (tinggi_badan >= 60.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 2.9 && berat_badan <= 3.3) && (tinggi_badan >= 0 && tinggi_badan <= 48.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 2.9 && berat_badan <= 3.3) && (tinggi_badan >= 48.9 && tinggi_badan <= 50.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 2.9 && berat_badan <= 3.3) && (tinggi_badan >= 50.8 && tinggi_badan <= 60.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 2.9 && berat_badan <= 3.3) && (tinggi_badan >= 60.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 3.4 && berat_badan <= 5.1) && (tinggi_badan >= 0 && tinggi_badan <= 48.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 3.4 && berat_badan <= 5.1) && (tinggi_badan >= 48.9 && tinggi_badan <= 50.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 3.4 && berat_badan <= 5.1) && (tinggi_badan >= 50.8 && tinggi_badan <= 60.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 3.4 && berat_badan <= 5.1) && (tinggi_badan >= 60.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.2) && (tinggi_badan >= 0 && tinggi_badan <= 48.8)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.2) && (tinggi_badan >= 48.9 && tinggi_badan <= 50.7)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.2) && (tinggi_badan >= 50.8 && tinggi_badan <= 60.6)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.2) && (tinggi_badan >= 60.7)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // -------------------------------------------------------------------------------------------
    // UMUR 2 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 3.8) && (tinggi_badan >= 0 && tinggi_badan <= 52.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 3.8) && (tinggi_badan >= 52.4 && tinggi_badan <= 54.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 3.8) && (tinggi_badan >= 54.4 && tinggi_badan <= 64.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 3.8) && (tinggi_badan >= 64.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 3.8 && berat_badan <= 4.2) && (tinggi_badan >= 0 && tinggi_badan <= 52.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 3.8 && berat_badan <= 4.2) && (tinggi_badan >= 52.4 && tinggi_badan <= 54.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 3.8 && berat_badan <= 4.2) && (tinggi_badan >= 54.4 && tinggi_badan <= 64.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 3.8 && berat_badan <= 4.2) && (tinggi_badan >= 64.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 4.3 && berat_badan <= 6.3) && (tinggi_badan >= 0 && tinggi_badan <= 52.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 4.3 && berat_badan <= 6.3) && (tinggi_badan >= 52.4 && tinggi_badan <= 54.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 4.3 && berat_badan <= 6.3) && (tinggi_badan >= 54.4 && tinggi_badan <= 64.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 4.3 && berat_badan <= 6.3) && (tinggi_badan >= 64.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.4) && (tinggi_badan >= 0 && tinggi_badan <= 52.3)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.4) && (tinggi_badan >= 52.4 && tinggi_badan <= 54.3)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.4) && (tinggi_badan >= 54.4 && tinggi_badan <= 64.4)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.4) && (tinggi_badan >= 64.5)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // -------------------------------------------------------------------------------------------
    // UMUR 3 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 4.3) && (tinggi_badan >= 0 && tinggi_badan <= 55.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 4.3) && (tinggi_badan >= 55.3 && tinggi_badan <= 57.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 4.3) && (tinggi_badan >= 57.3 && tinggi_badan <= 67.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 4.3) && (tinggi_badan >= 67.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 4.4 && berat_badan <= 4.9) && (tinggi_badan >= 0 && tinggi_badan <= 55.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 4.4 && berat_badan <= 4.9) && (tinggi_badan >= 55.3 && tinggi_badan <= 57.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 4.4 && berat_badan <= 4.9) && (tinggi_badan >= 57.3 && tinggi_badan <= 67.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 4.4 && berat_badan <= 4.9) && (tinggi_badan >= 67.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5 && berat_badan <= 7.2) && (tinggi_badan >= 0 && tinggi_badan <= 55.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5 && berat_badan <= 7.2) && (tinggi_badan >= 55.3 && tinggi_badan <= 57.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5 && berat_badan <= 7.2) && (tinggi_badan >= 57.3 && tinggi_badan <= 67.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5 && berat_badan <= 7.2) && (tinggi_badan >= 67.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.6) && (tinggi_badan >= 0 && tinggi_badan <= 57.5)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.6) && (tinggi_badan >= 57.6 && tinggi_badan <= 59.6)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.6) && (tinggi_badan >= 59.7 && tinggi_badan <= 70.1
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.6) && (tinggi_badan >= 67.7)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // -------------------------------------------------------------------------------------------
    // UMUR 4 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 4.8) && (tinggi_badan >= 0 && tinggi_badan <= 57.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 4.8) && (tinggi_badan >= 57.6 && tinggi_badan <= 59.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 4.8) && (tinggi_badan >= 59.7 && tinggi_badan <= 70.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 4.8) && (tinggi_badan >= 70.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 4.9 && berat_badan <= 5.5) && (tinggi_badan >= 0 && tinggi_badan <= 57.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 4.9 && berat_badan <= 5.5) && (tinggi_badan >= 57.6 && tinggi_badan <= 59.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 4.9 && berat_badan <= 5.5) && (tinggi_badan >= 59.7 && tinggi_badan <= 70.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 4.9 && berat_badan <= 5.5) && (tinggi_badan >= 70.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.6 && berat_badan <= 7.8) && (tinggi_badan >= 0 && tinggi_badan <= 57.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.6 && berat_badan <= 7.8) && (tinggi_badan >= 57.6 && tinggi_badan <= 59.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.6 && berat_badan <= 7.8) && (tinggi_badan >= 59.7 && tinggi_badan <= 70.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.6 && berat_badan <= 7.8) && (tinggi_badan >= 70.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.9) && (tinggi_badan >= 0 && tinggi_badan <= 57.5)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.9) && (tinggi_badan >= 57.6 && tinggi_badan <= 59.6)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.9) && (tinggi_badan >= 59.7 && tinggi_badan <= 70.1
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.9) && (tinggi_badan >= 70.2)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // -------------------------------------------------------------------------------------------
    // UMUR 5 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 5.2) && (tinggi_badan >= 0 && tinggi_badan <= 59.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 5.2) && (tinggi_badan >= 59.6 && tinggi_badan <= 61.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 5.2) && (tinggi_badan >= 61.7 && tinggi_badan <= 72.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 5.2) && (tinggi_badan >= 72.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.3 && berat_badan <= 5.9) && (tinggi_badan >= 0 && tinggi_badan <= 59.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.3 && berat_badan <= 5.9) && (tinggi_badan >= 59.6 && tinggi_badan <= 61.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.3 && berat_badan <= 5.9) && (tinggi_badan >= 61.7 && tinggi_badan <= 72.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.3 && berat_badan <= 5.9) && (tinggi_badan >= 72.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6 && berat_badan <= 8.4) && (tinggi_badan >= 0 && tinggi_badan <= 59.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6 && berat_badan <= 8.4) && (tinggi_badan >= 59.6 && tinggi_badan <= 61.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6 && berat_badan <= 8.4) && (tinggi_badan >= 61.7 && tinggi_badan <= 72.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6 && berat_badan <= 8.4) && (tinggi_badan >= 72.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.5) && (tinggi_badan >= 0 && tinggi_badan <= 59.5)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.5) && (tinggi_badan >= 59.6 && tinggi_badan <= 61.6)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.5) && (tinggi_badan >= 61.7 && tinggi_badan <= 72.2
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.5) && (tinggi_badan >= 72.3)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // -------------------------------------------------------------------------------------------
    // UMUR 6 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 5.6) && (tinggi_badan >= 0 && tinggi_badan <= 61.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 5.6) && (tinggi_badan >= 61.2 && tinggi_badan <= 63.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 5.6) && (tinggi_badan >= 63.3 && tinggi_badan <= 74)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 5.6) && (tinggi_badan >= 74.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.7 && berat_badan <= 6.3) && (tinggi_badan >= 0 && tinggi_badan <= 61.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.7 && berat_badan <= 6.3) && (tinggi_badan >= 61.2 && tinggi_badan <= 63.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.7 && berat_badan <= 6.3) && (tinggi_badan >= 63.3 && tinggi_badan <= 74)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.7 && berat_badan <= 6.3) && (tinggi_badan >= 74.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.4 && berat_badan <= 8.8) && (tinggi_badan >= 0 && tinggi_badan <= 61.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.4 && berat_badan <= 8.8) && (tinggi_badan >= 61.2 && tinggi_badan <= 63.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.4 && berat_badan <= 8.8) && (tinggi_badan >= 63.3 && tinggi_badan <= 74)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.4 && berat_badan <= 8.8) && (tinggi_badan >= 74.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.9) && (tinggi_badan >= 0 && tinggi_badan <= 61.1)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.9) && (tinggi_badan >= 61.2 && tinggi_badan <= 63.2)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.9) && (tinggi_badan >= 63.3 && tinggi_badan <= 74
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.9) && (tinggi_badan >= 74.1)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 7 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 5.8) && (tinggi_badan >= 0 && tinggi_badan <= 62.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 5.8) && (tinggi_badan >= 62.7 && tinggi_badan <= 64.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 5.8) && (tinggi_badan >= 64.8 && tinggi_badan <= 75.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 5.8) && (tinggi_badan >= 75.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.9 && berat_badan <= 6.6) && (tinggi_badan >= 0 && tinggi_badan <= 62.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.9 && berat_badan <= 6.6) && (tinggi_badan >= 62.7 && tinggi_badan <= 64.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.9 && berat_badan <= 6.6) && (tinggi_badan >= 64.8 && tinggi_badan <= 75.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 5.9 && berat_badan <= 6.6) && (tinggi_badan >= 75.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.7 && berat_badan <= 9.2) && (tinggi_badan >= 0 && tinggi_badan <= 62.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.7 && berat_badan <= 9.2) && (tinggi_badan >= 62.7 && tinggi_badan <= 64.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.7 && berat_badan <= 9.2) && (tinggi_badan >= 64.8 && tinggi_badan <= 75.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.7 && berat_badan <= 9.2) && (tinggi_badan >= 75.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.3) && (tinggi_badan >= 0 && tinggi_badan <= 62.6)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.3) && (tinggi_badan >= 62.7 && tinggi_badan <= 64.7)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.3) && (tinggi_badan >= 64.8 && tinggi_badan <= 75.7
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.3) && (tinggi_badan >= 75.8)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 8 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.1) && (tinggi_badan >= 0 && tinggi_badan <= 63.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.1) && (tinggi_badan >= 64 && tinggi_badan <= 66.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.1) && (tinggi_badan >= 66.2 && tinggi_badan <= 77.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.1) && (tinggi_badan >= 77.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.2 && berat_badan <= 6.8) && (tinggi_badan >= 0 && tinggi_badan <= 63.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.2 && berat_badan <= 6.8) && (tinggi_badan >= 64 && tinggi_badan <= 66.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.2 && berat_badan <= 6.8) && (tinggi_badan >= 66.2 && tinggi_badan <= 77.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.2 && berat_badan <= 6.8) && (tinggi_badan >= 77.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.9 && berat_badan <= 9.6) && (tinggi_badan >= 0 && tinggi_badan <= 63.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.9 && berat_badan <= 9.6) && (tinggi_badan >= 64 && tinggi_badan <= 66.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.9 && berat_badan <= 9.6) && (tinggi_badan >= 66.2 && tinggi_badan <= 77.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.9 && berat_badan <= 9.6) && (tinggi_badan >= 77.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.7) && (tinggi_badan >= 0 && tinggi_badan <= 63.9)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.7) && (tinggi_badan >= 64 && tinggi_badan <= 66.1)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.7) && (tinggi_badan >= 66.2 && tinggi_badan <= 77.2
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.7) && (tinggi_badan >= 77.3)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 9 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.3) && (tinggi_badan >= 0 && tinggi_badan <= 65.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.3) && (tinggi_badan >= 65.2 && tinggi_badan <= 67.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.3) && (tinggi_badan >= 67.5 && tinggi_badan <= 78.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.3) && (tinggi_badan >= 78.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.4 && berat_badan <= 7) && (tinggi_badan >= 0 && tinggi_badan <= 65.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.4 && berat_badan <= 7) && (tinggi_badan >= 65.2 && tinggi_badan <= 67.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.4 && berat_badan <= 7) && (tinggi_badan >= 67.5 && tinggi_badan <= 78.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.4 && berat_badan <= 7) && (tinggi_badan >= 78.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.1 && berat_badan <= 9.9) && (tinggi_badan >= 0 && tinggi_badan <= 65.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.1 && berat_badan <= 9.9) && (tinggi_badan >= 65.2 && tinggi_badan <= 67.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.1 && berat_badan <= 9.9) && (tinggi_badan >= 67.5 && tinggi_badan <= 78.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.1 && berat_badan <= 9.9) && (tinggi_badan >= 78.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 10) && (tinggi_badan >= 0 && tinggi_badan <= 65.1)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 10) && (tinggi_badan >= 65.2 && tinggi_badan <= 67.4)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 10) && (tinggi_badan >= 67.5 && tinggi_badan <= 78.7
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 10) && (tinggi_badan >= 78.8)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 10 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.5) && (tinggi_badan >= 0 && tinggi_badan <= 66.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.5) && (tinggi_badan >= 66.4 && tinggi_badan <= 68.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.5) && (tinggi_badan >= 68.7 && tinggi_badan <= 80.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.5) && (tinggi_badan >= 80.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.6 && berat_badan <= 7.3) && (tinggi_badan >= 0 && tinggi_badan <= 66.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.6 && berat_badan <= 7.3) && (tinggi_badan >= 66.4 && tinggi_badan <= 68.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.6 && berat_badan <= 7.3) && (tinggi_badan >= 68.7 && tinggi_badan <= 80.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.6 && berat_badan <= 7.3) && (tinggi_badan >= 80.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.4 && berat_badan <= 10.2) && (tinggi_badan >= 0 && tinggi_badan <= 66.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.4 && berat_badan <= 10.2) && (tinggi_badan >= 66.4 && tinggi_badan <= 68.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.4 && berat_badan <= 10.2) && (tinggi_badan >= 68.7 && tinggi_badan <= 80.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.4 && berat_badan <= 10.2) && (tinggi_badan >= 80.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 10.3) && (tinggi_badan >= 0 && tinggi_badan <= 66.3)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 10.3) && (tinggi_badan >= 66.4 && tinggi_badan <= 68.6)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 10.3) && (tinggi_badan >= 68.7 && tinggi_badan <= 80.1
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 10.3) && (tinggi_badan >= 80.2)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 11 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.7) && (tinggi_badan >= 0 && tinggi_badan <= 67.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.7) && (tinggi_badan >= 67.6 && tinggi_badan <= 69.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.7) && (tinggi_badan >= 69.9 && tinggi_badan <= 81.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.7) && (tinggi_badan >= 81.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.8 && berat_badan <= 7.5) && (tinggi_badan >= 0 && tinggi_badan <= 67.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.8 && berat_badan <= 7.5) && (tinggi_badan >= 67.6 && tinggi_badan <= 69.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.8 && berat_badan <= 7.5) && (tinggi_badan >= 69.9 && tinggi_badan <= 81.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.8 && berat_badan <= 7.5) && (tinggi_badan >= 81.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.6 && berat_badan <= 10.5) && (tinggi_badan >= 0 && tinggi_badan <= 67.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.6 && berat_badan <= 10.5) && (tinggi_badan >= 67.6 && tinggi_badan <= 69.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.6 && berat_badan <= 10.5) && (tinggi_badan >= 68.9 && tinggi_badan <= 81.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.6 && berat_badan <= 10.5) && (tinggi_badan >= 81.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 10.6) && (tinggi_badan >= 0 && tinggi_badan <= 67.5)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 10.6) && (tinggi_badan >= 67.6 && tinggi_badan <= 69.8)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 10.6) && (tinggi_badan >= 69.9 && tinggi_badan <= 81.5
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 10.6) && (tinggi_badan >= 81.6)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 12 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.8) && (tinggi_badan >= 0 && tinggi_badan <= 68.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.8) && (tinggi_badan >= 68.6 && tinggi_badan <= 70.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.8) && (tinggi_badan >= 71 && tinggi_badan <= 82.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 6.8) && (tinggi_badan >= 83)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.9 && berat_badan <= 7.6) && (tinggi_badan >= 0 && tinggi_badan <= 68.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.9 && berat_badan <= 7.6) && (tinggi_badan >= 68.6 && tinggi_badan <= 70.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.9 && berat_badan <= 7.6) && (tinggi_badan >= 71 && tinggi_badan <= 82.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 6.9 && berat_badan <= 7.6) && (tinggi_badan >= 83)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.7 && berat_badan <= 10.8) && (tinggi_badan >= 0 && tinggi_badan <= 68.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.7 && berat_badan <= 10.8) && (tinggi_badan >= 68.6 && tinggi_badan <= 70.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.7 && berat_badan <= 10.8) && (tinggi_badan >= 71 && tinggi_badan <= 82.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.7 && berat_badan <= 10.8) && (tinggi_badan >= 83)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 10.9) && (tinggi_badan >= 0 && tinggi_badan <= 68.5)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 10.9) && (tinggi_badan >= 68.6 && tinggi_badan <= 70.9)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 10.9) && (tinggi_badan >= 71 && tinggi_badan <= 82.9
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 10.9) && (tinggi_badan >= 83)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 13 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7) && (tinggi_badan >= 0 && tinggi_badan <= 69.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7) && (tinggi_badan >= 69.6 && tinggi_badan <= 72)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7) && (tinggi_badan >= 72.1 && tinggi_badan <= 84.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7) && (tinggi_badan >= 84.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.1 && berat_badan <= 7.8) && (tinggi_badan >= 0 && tinggi_badan <= 69.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.1 && berat_badan <= 7.8) && (tinggi_badan >= 69.6 && tinggi_badan <= 72)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.1 && berat_badan <= 7.8) && (tinggi_badan >= 72.1 && tinggi_badan <= 84.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.1 && berat_badan <= 7.8) && (tinggi_badan >= 84.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.9 && berat_badan <= 11) && (tinggi_badan >= 0 && tinggi_badan <= 69.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.9 && berat_badan <= 11) && (tinggi_badan >= 69.6 && tinggi_badan <= 72)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.9 && berat_badan <= 11) && (tinggi_badan >= 72.1 && tinggi_badan <= 84.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.9 && berat_badan <= 11) && (tinggi_badan >= 84.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 11.1) && (tinggi_badan >= 0 && tinggi_badan <= 69.5)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 11.1) && (tinggi_badan >= 69.6 && tinggi_badan <= 72)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 11.1) && (tinggi_badan >= 72.1 && tinggi_badan <= 84.2
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 11.1) && (tinggi_badan >= 84.3)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
     //-------------------------------------------------------------------------------------------
    // UMUR 14 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.1) && (tinggi_badan >= 0 && tinggi_badan <= 70.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.1) && (tinggi_badan >= 70.2 && tinggi_badan <= 73)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.1) && (tinggi_badan >= 73.1 && tinggi_badan <= 85.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.1) && (tinggi_badan >= 85.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.2 && berat_badan <= 8) && (tinggi_badan >= 0 && tinggi_badan <= 70.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.2 && berat_badan <= 8) && (tinggi_badan >= 70.2 && tinggi_badan <= 73)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.2 && berat_badan <= 8) && (tinggi_badan >= 73.1 && tinggi_badan <= 85.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.2 && berat_badan <= 8) && (tinggi_badan >= 85.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.1 && berat_badan <= 11.3) && (tinggi_badan >= 0 && tinggi_badan <= 70.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.1 && berat_badan <= 11.3) && (tinggi_badan >= 70.2 && tinggi_badan <= 73)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.1 && berat_badan <= 11.3) && (tinggi_badan >= 73.1 && tinggi_badan <= 85.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.1 && berat_badan <= 11.3) && (tinggi_badan >= 85.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 11.4) && (tinggi_badan >= 0 && tinggi_badan <= 70.1)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 11.1) && (tinggi_badan >= 70.2 && tinggi_badan <= 73)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 11.1) && (tinggi_badan >= 73.1 && tinggi_badan <= 85.5
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 11.1) && (tinggi_badan >= 85.6)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 15 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.3) && (tinggi_badan >= 0 && tinggi_badan <= 71.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.3) && (tinggi_badan >= 71.6 && tinggi_badan <= 74)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.3) && (tinggi_badan >= 74.1 && tinggi_badan <= 86.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.3) && (tinggi_badan >= 86.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.4 && berat_badan <= 8.2) && (tinggi_badan >= 0 && tinggi_badan <= 71.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.4 && berat_badan <= 8.2) && (tinggi_badan >= 71.6 && tinggi_badan <= 74)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.4 && berat_badan <= 8.2) && (tinggi_badan >= 74.1 && tinggi_badan <= 86.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.4 && berat_badan <= 8.2) && (tinggi_badan >= 86.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.3 && berat_badan <= 11.5) && (tinggi_badan >= 0 && tinggi_badan <= 71.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.3 && berat_badan <= 11.5) && (tinggi_badan >= 71.6 && tinggi_badan <= 74)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.3 && berat_badan <= 11.5) && (tinggi_badan >= 74.1 && tinggi_badan <= 86.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.3 && berat_badan <= 11.5) && (tinggi_badan >= 86.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 11.6) && (tinggi_badan >= 0 && tinggi_badan <= 71.5)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 11.6) && (tinggi_badan >= 71.6 && tinggi_badan <= 74)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 11.6) && (tinggi_badan >= 74.1 && tinggi_badan <= 86.7
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 11.6) && (tinggi_badan >= 86.8)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 16 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.4) && (tinggi_badan >= 0 && tinggi_badan <= 72.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.4) && (tinggi_badan >= 72.5 && tinggi_badan <= 74.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.4) && (tinggi_badan >= 75 && tinggi_badan <= 88)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.4) && (tinggi_badan >= 88.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.5 && berat_badan <= 8.3) && (tinggi_badan >= 0 && tinggi_badan <= 72.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.5 && berat_badan <= 8.3) && (tinggi_badan >= 72.5 && tinggi_badan <= 74.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.5 && berat_badan <= 8.3) && (tinggi_badan >= 75 && tinggi_badan <= 88)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.5 && berat_badan <= 8.3) && (tinggi_badan >= 88.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.4 && berat_badan <= 11.7) && (tinggi_badan >= 0 && tinggi_badan <= 72.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.4 && berat_badan <= 11.7) && (tinggi_badan >= 72.5 && tinggi_badan <= 74.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.4 && berat_badan <= 11.7) && (tinggi_badan >= 75 && tinggi_badan <= 88)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.4 && berat_badan <= 11.7) && (tinggi_badan >= 88.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 11.8) && (tinggi_badan >= 0 && tinggi_badan <= 72.4)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 11.8) && (tinggi_badan >= 72.5 && tinggi_badan <= 74.9)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 11.8) && (tinggi_badan >= 75 && tinggi_badan <= 88
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 11.8) && (tinggi_badan >= 88.1)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 17 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.6) && (tinggi_badan >= 0 && tinggi_badan <= 73.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.6) && (tinggi_badan >= 73.3 && tinggi_badan <= 75.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.6) && (tinggi_badan >= 76 && tinggi_badan <= 89.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    } 
    // <-3 SD & > +3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.6) && (tinggi_badan >= 89.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.7 && berat_badan <= 8.5) && (tinggi_badan >= 0 && tinggi_badan <= 73.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.7 && berat_badan <= 8.5) && (tinggi_badan >= 73.3 && tinggi_badan <= 75.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.7 && berat_badan <= 8.5) && (tinggi_badan >= 76 && tinggi_badan <= 89.2))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.7 && berat_badan <= 8.5) && (tinggi_badan >= 89.3))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.6 && berat_badan <= 12) && (tinggi_badan >= 0 && tinggi_badan <= 73.2))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.6 && berat_badan <= 12) && (tinggi_badan >= 73.3 && tinggi_badan <= 75.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.6 && berat_badan <= 12) && (tinggi_badan >= 76 && tinggi_badan <= 89.2))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.6 && berat_badan <= 12) && (tinggi_badan >= 89.3))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 12.1) && (tinggi_badan >= 0 && tinggi_badan <= 73.2))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 12.1) && (tinggi_badan >= 73.3 && tinggi_badan <= 75.9))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 12.1) && (tinggi_badan >= 76 && tinggi_badan <= 89.2))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 12.1) && (tinggi_badan >= 89.3))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 18 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.7) && (tinggi_badan >= 0 && tinggi_badan <= 74.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.7) && (tinggi_badan >= 74.2 && tinggi_badan <= 76.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.7) && (tinggi_badan >= 76.9 && tinggi_badan <= 90.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    } 
    // <-3 SD & > +3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.7) && (tinggi_badan >= 90.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.8 && berat_badan <= 9.7) && (tinggi_badan >= 0 && tinggi_badan <= 74.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.8 && berat_badan <= 9.7) && (tinggi_badan >= 74.2 && tinggi_badan <= 76.8))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.8 && berat_badan <= 9.7) && (tinggi_badan >= 76.9 && tinggi_badan <= 90.4))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 7.8 && berat_badan <= 9.7) && (tinggi_badan >= 90.5))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.8 && berat_badan <= 12.2) && (tinggi_badan >= 0 && tinggi_badan <= 74.1))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.8 && berat_badan <= 12.2) && (tinggi_badan >= 74.2 && tinggi_badan <= 76.8))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.8 && berat_badan <= 12.2) && (tinggi_badan >= 76.9 && tinggi_badan <= 90.4))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.8 && berat_badan <= 12.2) && (tinggi_badan >= 90.5))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 12.3) && (tinggi_badan >= 0 && tinggi_badan <= 74.1))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 12.3) && (tinggi_badan >= 74.2 && tinggi_badan <= 76.8))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 12.3) && (tinggi_badan >= 76.9 && tinggi_badan <= 90.4))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 12.3) && (tinggi_badan >= 90.5))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 19 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.9) && (tinggi_badan >= 0 && tinggi_badan <= 74.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.9) && (tinggi_badan >= 75 && tinggi_badan <= 77.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.9) && (tinggi_badan >= 77.7 && tinggi_badan <= 91.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    } 
    // <-3 SD & > +3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 7.9) && (tinggi_badan >= 91.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8 && berat_badan <= 8.8) && (tinggi_badan >= 0 && tinggi_badan <= 74.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8 && berat_badan <= 8.8) && (tinggi_badan >= 75 && tinggi_badan <= 77.6))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8 && berat_badan <= 8.8) && (tinggi_badan >= 77.7 && tinggi_badan <= 91.5))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8 && berat_badan <= 8.8) && (tinggi_badan >= 91.6))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.9 && berat_badan <= 12.5) && (tinggi_badan >= 0 && tinggi_badan <= 74.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.9 && berat_badan <= 12.5) && (tinggi_badan >= 75 && tinggi_badan <= 77.6))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.9 && berat_badan <= 12.5) && (tinggi_badan >= 77.7 && tinggi_badan <= 91.5))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.9 && berat_badan <= 12.5) && (tinggi_badan >= 91.6))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 12.6) && (tinggi_badan >= 0 && tinggi_badan <= 74.9))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 12.6) && (tinggi_badan >= 75 && tinggi_badan <= 77.6))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 12.6) && (tinggi_badan >= 77.7 && tinggi_badan <= 91.5))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 12.6) && (tinggi_badan >= 91.6))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 20 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8) && (tinggi_badan >= 0 && tinggi_badan <= 75.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8) && (tinggi_badan >= 75.8 && tinggi_badan <= 78.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8) && (tinggi_badan >= 78.6 && tinggi_badan <= 92.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    } 
    // <-3 SD & > +3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8) && (tinggi_badan >= 92.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.1 && berat_badan <= 9) && (tinggi_badan >= 0 && tinggi_badan <= 75.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.1 && berat_badan <= 9) && (tinggi_badan >= 75.8 && tinggi_badan <= 78.5))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.1 && berat_badan <= 9) && (tinggi_badan >= 78.6 && tinggi_badan <= 92.6))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.1 && berat_badan <= 9) && (tinggi_badan >= 92.7))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.1 && berat_badan <= 12.7) && (tinggi_badan >= 0 && tinggi_badan <= 75.7))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.1 && berat_badan <= 12.7) && (tinggi_badan >= 75.8 && tinggi_badan <= 78.5))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.1 && berat_badan <= 12.7) && (tinggi_badan >= 78.6 && tinggi_badan <= 92.6))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.1 && berat_badan <= 12.7) && (tinggi_badan >= 92.7))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 12.8) && (tinggi_badan >= 0 && tinggi_badan <= 75.7))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 12.8) && (tinggi_badan >= 75.8 && tinggi_badan <= 78.5))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 12.8) && (tinggi_badan >= 78.6 && tinggi_badan <= 92.6))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 12.8) && (tinggi_badan >= 92.7))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 21 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8.1) && (tinggi_badan >= 0 && tinggi_badan <= 76.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8) && (tinggi_badan >= 76.5 && tinggi_badan <= 79.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8) && (tinggi_badan >= 79.4 && tinggi_badan <= 93.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    } 
    // <-3 SD & > +3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8) && (tinggi_badan >= 93.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.2 && berat_badan <= 9.1) && (tinggi_badan >= 0 && tinggi_badan <= 76.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.2 && berat_badan <= 9.1) && (tinggi_badan >= 76.5 && tinggi_badan <= 79.3))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.2 && berat_badan <= 9.1) && (tinggi_badan >= 79.4 && tinggi_badan <= 93.8))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.2 && berat_badan <= 9.1) && (tinggi_badan >= 93.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.2 && berat_badan <= 12.9) && (tinggi_badan >= 0 && tinggi_badan <= 76.4))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.2 && berat_badan <= 12.9) && (tinggi_badan >= 76.5 && tinggi_badan <= 79.3))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.2 && berat_badan <= 12.9) && (tinggi_badan >= 79.4 && tinggi_badan <= 93.8))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.2 && berat_badan <= 12.9) && (tinggi_badan >= 93.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 13) && (tinggi_badan >= 0 && tinggi_badan <= 76.4))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 13) && (tinggi_badan >= 76.5 && tinggi_badan <= 79.3))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 13) && (tinggi_badan >= 79.4 && tinggi_badan <= 93.8))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 13) && (tinggi_badan >= 93.9))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 22 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8.3) && (tinggi_badan >= 0 && tinggi_badan <= 77.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8.3) && (tinggi_badan >= 77.2 && tinggi_badan <= 80.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8.3) && (tinggi_badan >= 80.2 && tinggi_badan <= 94.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    } 
    // <-3 SD & > +3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8.3) && (tinggi_badan >= 95)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.4 && berat_badan <= 9.3) && (tinggi_badan >= 0 && tinggi_badan <= 77.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.4 && berat_badan <= 9.3) && (tinggi_badan >= 77.2 && tinggi_badan <= 80.1))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.4 && berat_badan <= 9.3) && (tinggi_badan >= 80.2 && tinggi_badan <= 94.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.4 && berat_badan <= 9.3) && (tinggi_badan >= 95))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.4 && berat_badan <= 13.2) && (tinggi_badan >= 0 && tinggi_badan <= 77.1))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.4 && berat_badan <= 13.2) && (tinggi_badan >= 77.2 && tinggi_badan <= 80.1))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.4 && berat_badan <= 13.2) && (tinggi_badan >= 80.2 && tinggi_badan <= 94.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.4 && berat_badan <= 13.2) && (tinggi_badan >= 95))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 13.3) && (tinggi_badan >= 0 && tinggi_badan <= 77.1))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 13.3) && (tinggi_badan >= 77.2 && tinggi_badan <= 80.1))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 13.3) && (tinggi_badan >= 80.2 && tinggi_badan <= 94.9))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 13.3) && (tinggi_badan >= 95))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 23 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8.4) && (tinggi_badan >= 0 && tinggi_badan <= 77.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8.4) && (tinggi_badan >= 78 && tinggi_badan <= 80.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8.4) && (tinggi_badan >= 81 && tinggi_badan <= 95.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    } 
    // <-3 SD & > +3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8.4) && (tinggi_badan >= 96)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.5 && berat_badan <= 9.4) && (tinggi_badan >= 0 && tinggi_badan <= 77.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.5 && berat_badan <= 9.4) && (tinggi_badan >= 78 && tinggi_badan <= 80.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.5 && berat_badan <= 9.4) && (tinggi_badan >= 81 && tinggi_badan <= 95.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.5 && berat_badan <= 9.4) && (tinggi_badan >= 96))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.5 && berat_badan <= 13.4) && (tinggi_badan >= 0 && tinggi_badan <= 77.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.5 && berat_badan <= 13.4) && (tinggi_badan >= 78 && tinggi_badan <= 80.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.5 && berat_badan <= 13.4) && (tinggi_badan >= 81 && tinggi_badan <= 95.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.5 && berat_badan <= 13.4) && (tinggi_badan >= 96))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 13.5) && (tinggi_badan >= 0 && tinggi_badan <= 77.9))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 13.5) && (tinggi_badan >= 78 && tinggi_badan <= 80.9))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 13.5) && (tinggi_badan >= 81 && tinggi_badan <= 95.9))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 13.5) && (tinggi_badan >= 96))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 24 LAKI - LAKI
    // <-3 SD & < -3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8.5) && (tinggi_badan >= 0 && tinggi_badan <= 78.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8.5) && (tinggi_badan >= 78.7 && tinggi_badan <= 81.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8.5) && (tinggi_badan >= 81.7 && tinggi_badan <= 97)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    } 
    // <-3 SD & > +3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 0 && berat_badan <= 8.5) && (tinggi_badan >= 97)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.6 && berat_badan <= 9.6) && (tinggi_badan >= 0 && tinggi_badan <= 78.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.6 && berat_badan <= 9.6) && (tinggi_badan >= 78.7 && tinggi_badan <= 81.6))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.6 && berat_badan <= 9.6) && (tinggi_badan >= 81.7 && tinggi_badan <= 97))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 8.6 && berat_badan <= 9.6) && (tinggi_badan >= 97.1))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.7 && berat_badan <= 13.6) && (tinggi_badan >= 0 && tinggi_badan <= 78.6))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.7 && berat_badan <= 13.6) && (tinggi_badan >= 78.7 && tinggi_badan <= 81.6))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.7 && berat_badan <= 13.6) && (tinggi_badan >= 81.7 && tinggi_badan <= 97))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 9.7 && berat_badan <= 13.6) && (tinggi_badan >= 97.1))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 13.7) && (tinggi_badan >= 0 && tinggi_badan <= 78.6))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 13.7) && (tinggi_badan >= 78.7 && tinggi_badan <= 81.6))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 13.7) && (tinggi_badan >= 81.7 && tinggi_badan <= 97))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_laki_laki").checked) && (berat_badan >= 13.7) && (tinggi_badan >= 97.1))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // UMUR 0 PEREMPUAN
    // <-3 SD & < -3 SD
    if ((umur == 0) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 1.9) && (tinggi_badan >= 0 && tinggi_badan <= 43.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 1.9) && (tinggi_badan >= 43.6 && tinggi_badan <= 45.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 1.9) && (tinggi_badan >= 45.4 && tinggi_badan <= 54.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 1.9) && (tinggi_badan >= 54.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 2 && berat_badan <= 2.3) && (tinggi_badan >= 0 && tinggi_badan <= 43.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd -2 SD 
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 2 && berat_badan <= 2.3) && (tinggi_badan >= 43.6 && tinggi_badan <= 45.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 2 && berat_badan <= 2.3) && (tinggi_badan >= 45.4 && tinggi_badan <= 54.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 2 && berat_badan <= 2.3) && (tinggi_badan >= 54.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 2.4 && berat_badan <= 3.7) && (tinggi_badan >= 0 && tinggi_badan <= 43.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 2.4 && berat_badan <= 3.7) && (tinggi_badan >= 43.6 && tinggi_badan <= 45.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 2.4 && berat_badan <= 3.7) && (tinggi_badan >= 45.4 && tinggi_badan <= 54.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 2.4 && berat_badan <= 3.7) && (tinggi_badan >= 54.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 3.8) && (tinggi_badan >= 0 && tinggi_badan <= 43.5)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 3.8) && (tinggi_badan >= 43.6 && tinggi_badan <= 45.3)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 3.8) && (tinggi_badan >= 45.4 && tinggi_badan <= 54.7)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 0) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 3.8) && (tinggi_badan >= 54.8)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
        // UMUR 1 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 2.6) && (tinggi_badan >= 0 && tinggi_badan <= 47.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 2.6) && (tinggi_badan >= 47.8 && tinggi_badan <= 49.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 2.6) && (tinggi_badan >= 49.8 && tinggi_badan <= 59.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 2.6) && (tinggi_badan >= 59.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 2.7 && berat_badan <= 3.1) && (tinggi_badan >= 0 && tinggi_badan <= 47.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 2.7 && berat_badan <= 3.1) && (tinggi_badan >= 47.8 && tinggi_badan <= 49.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 2.7 && berat_badan <= 3.1) && (tinggi_badan >= 49.8 && tinggi_badan <= 59.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 2.7 && berat_badan <= 3.1) && (tinggi_badan >= 59.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 3.2 && berat_badan <= 4.8) && (tinggi_badan >= 0 && tinggi_badan <= 47.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 3.2 && berat_badan <= 4.8) && (tinggi_badan >= 47.8 && tinggi_badan <= 49.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 3.2 && berat_badan <= 4.8) && (tinggi_badan >= 49.8 && tinggi_badan <= 59.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 3.2 && berat_badan <= 4.8) && (tinggi_badan >= 59.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4.9) && (tinggi_badan >= 0 && tinggi_badan <= 47.7)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4.9) && (tinggi_badan >= 47.8 && tinggi_badan <= 49.7)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4.9) && (tinggi_badan >= 49.8 && tinggi_badan <= 59.5)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 1) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4.9) && (tinggi_badan >= 59.6)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // -------------------------------------------------------------------------------------------
    // UMUR 2 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 3.3) && (tinggi_badan >= 0 && tinggi_badan <= 50.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 3.3) && (tinggi_badan >= 51 && tinggi_badan <= 52.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 3.3) && (tinggi_badan >= 53 && tinggi_badan <= 63.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 3.3) && (tinggi_badan >= 63.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 3.4 && berat_badan <= 3.8) && (tinggi_badan >= 0 && tinggi_badan <= 50.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 3.4 && berat_badan <= 3.8) && (tinggi_badan >= 51 && tinggi_badan <= 52.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 3.4 && berat_badan <= 3.8) && (tinggi_badan >= 53 && tinggi_badan <= 63.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 3.4 && berat_badan <= 3.8) && (tinggi_badan >= 63.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 3.9 && berat_badan <= 5.8) && (tinggi_badan >= 0 && tinggi_badan <= 50.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 3.9 && berat_badan <= 5.8) && (tinggi_badan >= 51 && tinggi_badan <= 52.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 3.9 && berat_badan <= 5.8) && (tinggi_badan >= 53 && tinggi_badan <= 63.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 3.9 && berat_badan <= 5.8) && (tinggi_badan >= 63.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.9) && (tinggi_badan >= 0 && tinggi_badan <= 50.9)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.9) && (tinggi_badan >= 51 && tinggi_badan <= 52.9)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.9) && (tinggi_badan >= 53 && tinggi_badan <= 63.2)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 2) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.9) && (tinggi_badan >= 63.3,ss)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // -------------------------------------------------------------------------------------------
    // UMUR 3 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 3.9) && (tinggi_badan >= 0 && tinggi_badan <= 53.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 3.9) && (tinggi_badan >= 53.5 && tinggi_badan <= 55.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 3.9) && (tinggi_badan >= 55.6 && tinggi_badan <= 66.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 3.9) && (tinggi_badan >= 66.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4 && berat_badan <= 4.4) && (tinggi_badan >= 0 && tinggi_badan <= 53.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4 && berat_badan <= 4.4) && (tinggi_badan >= 53.5 && tinggi_badan <= 55.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4 && berat_badan <= 4.4) && (tinggi_badan >= 55.6 && tinggi_badan <= 63.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4 && berat_badan <= 4.4) && (tinggi_badan >= 63.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4.5 && berat_badan <= 6.6) && (tinggi_badan >= 0 && tinggi_badan <= 53.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4.5 && berat_badan <= 6.6) && (tinggi_badan >= 53.5 && tinggi_badan <= 55.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4.5 && berat_badan <= 6.6) && (tinggi_badan >= 55.6 && tinggi_badan <= 63.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4.5 && berat_badan <= 6.6) && (tinggi_badan >= 63.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.7) && (tinggi_badan >= 0 && tinggi_badan <= 53.4)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.7) && (tinggi_badan >= 53.5 && tinggi_badan <= 55.5)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.7) && (tinggi_badan >= 55.6 && tinggi_badan <= 63.2)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 3) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.7) && (tinggi_badan >= 63.3)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // -------------------------------------------------------------------------------------------
    // UMUR 4 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 4.3) && (tinggi_badan >= 0 && tinggi_badan <= 55.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 4.3) && (tinggi_badan >= 55.6 && tinggi_badan <= 57.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 4.3) && (tinggi_badan >= 57.8 && tinggi_badan <= 68.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 4.3) && (tinggi_badan >= 68.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4.4 && berat_badan <= 4.9) && (tinggi_badan >= 0 && tinggi_badan <= 55.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4.4 && berat_badan <= 4.9) && (tinggi_badan >= 55.6 && tinggi_badan <= 57.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4.4 && berat_badan <= 4.9) && (tinggi_badan >= 57.8 && tinggi_badan <= 68.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4.4 && berat_badan <= 4.9) && (tinggi_badan >= 68.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5 && berat_badan <= 7.3) && (tinggi_badan >= 0 && tinggi_badan <= 55.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5 && berat_badan <= 7.3) && (tinggi_badan >= 55.6 && tinggi_badan <= 57.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5 && berat_badan <= 7.3) && (tinggi_badan >= 57.8 && tinggi_badan <= 68.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5 && berat_badan <= 7.3) && (tinggi_badan >= 68.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.4) && (tinggi_badan >= 0 && tinggi_badan <= 55.5)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.4) && (tinggi_badan >= 55.6 && tinggi_badan <= 57.7)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.4) && (tinggi_badan >= 57.8 && tinggi_badan <= 68.6
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 4) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.4) && (tinggi_badan >= 68.7)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // -------------------------------------------------------------------------------------------
    // UMUR 5 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 4.7) && (tinggi_badan >= 0 && tinggi_badan <= 57.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 4.7) && (tinggi_badan >= 57.4 && tinggi_badan <= 59.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 4.7) && (tinggi_badan >= 59.6 && tinggi_badan <= 70.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 4.7) && (tinggi_badan >= 70.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4.8 && berat_badan <= 5.3) && (tinggi_badan >= 0 && tinggi_badan <= 57.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4.8 && berat_badan <= 5.3) && (tinggi_badan >= 57.4 && tinggi_badan <= 59.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4.8 && berat_badan <= 5.3) && (tinggi_badan >= 59.6 && tinggi_badan <= 70.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 4.8 && berat_badan <= 5.3) && (tinggi_badan >= 70.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.4 && berat_badan <= 7.8) && (tinggi_badan >= 0 && tinggi_badan <= 57.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.4 && berat_badan <= 7.8) && (tinggi_badan >= 57.4 && tinggi_badan <= 59.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.4 && berat_badan <= 7.8) && (tinggi_badan >= 59.6 && tinggi_badan <= 70.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.4 && berat_badan <= 7.8) && (tinggi_badan >= 70.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.9) && (tinggi_badan >= 0 && tinggi_badan <= 57.3)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.9) && (tinggi_badan >= 57.4 && tinggi_badan <= 59.5)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.9) && (tinggi_badan >= 59.6 && tinggi_badan <= 70.7
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 5) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.9) && (tinggi_badan >= 70.8)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // -------------------------------------------------------------------------------------------
    // UMUR 6 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5) && (tinggi_badan >= 0 && tinggi_badan <= 58.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5) && (tinggi_badan >= 58.9 && tinggi_badan <= 61.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5) && (tinggi_badan >= 61.2 && tinggi_badan <= 72.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5) && (tinggi_badan >= 72.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.1 && berat_badan <= 5.6) && (tinggi_badan >= 0 && tinggi_badan <= 58.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.1 && berat_badan <= 5.6) && (tinggi_badan >= 58.9 && tinggi_badan <= 61.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.1 && berat_badan <= 5.6) && (tinggi_badan >= 61.2 && tinggi_badan <= 72.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.1 && berat_badan <= 5.6) && (tinggi_badan >= 72.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.7 && berat_badan <= 8.2) && (tinggi_badan >= 0 && tinggi_badan <= 58.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.7 && berat_badan <= 8.2) && (tinggi_badan >= 58.9 && tinggi_badan <= 61.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.7 && berat_badan <= 8.2) && (tinggi_badan >= 61.2 && tinggi_badan <= 72.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.7 && berat_badan <= 8.2) && (tinggi_badan >= 72.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.3) && (tinggi_badan >= 0 && tinggi_badan <= 58.8)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.3) && (tinggi_badan >= 58.9 && tinggi_badan <= 61.1)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.3) && (tinggi_badan >= 61.2 && tinggi_badan <= 72.5
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 6) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.3) && (tinggi_badan >= 72.6)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 7 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5.2) && (tinggi_badan >= 0 && tinggi_badan <= 60.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5.2) && (tinggi_badan >= 60.3 && tinggi_badan <= 62.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5.2) && (tinggi_badan >= 62.7 && tinggi_badan <= 74.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5.2) && (tinggi_badan >= 74.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.3 && berat_badan <= 5.9) && (tinggi_badan >= 0 && tinggi_badan <= 60.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.3 && berat_badan <= 5.9) && (tinggi_badan >= 60.3 && tinggi_badan <= 62.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.3 && berat_badan <= 5.9) && (tinggi_badan >= 62.7 && tinggi_badan <= 74.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.3 && berat_badan <= 5.9) && (tinggi_badan >= 74.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6 && berat_badan <= 8.6) && (tinggi_badan >= 0 && tinggi_badan <= 60.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6 && berat_badan <= 8.6) && (tinggi_badan >= 60.3 && tinggi_badan <= 62.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6 && berat_badan <= 8.6) && (tinggi_badan >= 62.7 && tinggi_badan <= 74.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6 && berat_badan <= 8.6) && (tinggi_badan >= 74.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.7) && (tinggi_badan >= 0 && tinggi_badan <= 60.2)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.7) && (tinggi_badan >= 60.3 && tinggi_badan <= 62.6)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.7) && (tinggi_badan >= 62.7 && tinggi_badan <= 74.2
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 7) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.7) && (tinggi_badan >= 74.3)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 8 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5.5) && (tinggi_badan >= 0 && tinggi_badan <= 61.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5.5) && (tinggi_badan >= 61.7 && tinggi_badan <= 63.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5.5) && (tinggi_badan >= 64 && tinggi_badan <= 75.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5.5) && (tinggi_badan >= 75.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.6 && berat_badan <= 6.2) && (tinggi_badan >= 0 && tinggi_badan <= 61.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.6 && berat_badan <= 6.2) && (tinggi_badan >= 61.7 && tinggi_badan <= 63.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.6 && berat_badan <= 6.2) && (tinggi_badan >= 64 && tinggi_badan <= 75.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.6 && berat_badan <= 6.2) && (tinggi_badan >= 75.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.3 && berat_badan <= 9) && (tinggi_badan >= 0 && tinggi_badan <= 61.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.3 && berat_badan <= 9) && (tinggi_badan >= 61.7 && tinggi_badan <= 63.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.3 && berat_badan <= 9) && (tinggi_badan >= 64 && tinggi_badan <= 75.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.3 && berat_badan <= 9) && (tinggi_badan >= 75.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 9.1) && (tinggi_badan >= 0 && tinggi_badan <= 61.6)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 9.1) && (tinggi_badan >= 61.7 && tinggi_badan <= 63.9)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 9.1) && (tinggi_badan >= 64 && tinggi_badan <= 75.8
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 8) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 9.1) && (tinggi_badan >= 75.9)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 9 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5.7) && (tinggi_badan >= 0 && tinggi_badan <= 62.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5.7) && (tinggi_badan >= 62.9 && tinggi_badan <= 65.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5.7) && (tinggi_badan >= 65.4 && tinggi_badan <= 77.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5.7) && (tinggi_badan >= 77.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.8 && berat_badan <= 6.4) && (tinggi_badan >= 0 && tinggi_badan <= 62.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.8 && berat_badan <= 6.4) && (tinggi_badan >= 62.9 && tinggi_badan <= 65.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.8 && berat_badan <= 6.4) && (tinggi_badan >= 65.4 && tinggi_badan <= 77.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.8 && berat_badan <= 6.4) && (tinggi_badan >= 77.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.5 && berat_badan <= 9.3) && (tinggi_badan >= 0 && tinggi_badan <= 62.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.5 && berat_badan <= 9.3) && (tinggi_badan >= 62.9 && tinggi_badan <= 65.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.5 && berat_badan <= 9.3) && (tinggi_badan >= 65.4 && tinggi_badan <= 77.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.5 && berat_badan <= 9.3) && (tinggi_badan >= 77.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 9.4) && (tinggi_badan >= 0 && tinggi_badan <= 62.8)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 9.4) && (tinggi_badan >= 62.8 && tinggi_badan <= 65.3)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 9.4) && (tinggi_badan >= 65.4 && tinggi_badan <= 77.4
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 9) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 9.4) && (tinggi_badan >= 77.5)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 10 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5.8) && (tinggi_badan >= 0 && tinggi_badan <= 64)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5.8) && (tinggi_badan >= 64.1 && tinggi_badan <= 66.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5.8) && (tinggi_badan >= 66.5 && tinggi_badan <= 78.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 5.8) && (tinggi_badan >= 79)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.9 && berat_badan <= 6.6) && (tinggi_badan >= 0 && tinggi_badan <= 64)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.9 && berat_badan <= 6.6) && (tinggi_badan >= 64.1 && tinggi_badan <= 66.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.9 && berat_badan <= 6.6) && (tinggi_badan >= 66.5 && tinggi_badan <= 78.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 5.9 && berat_badan <= 6.6) && (tinggi_badan >= 79)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.7 && berat_badan <= 9.6) && (tinggi_badan >= 0 && tinggi_badan <= 64)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.7 && berat_badan <= 9.6) && (tinggi_badan >= 64.1 && tinggi_badan <= 66.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.7 && berat_badan <= 9.6) && (tinggi_badan >= 66.5 && tinggi_badan <= 78.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.7 && berat_badan <= 9.6) && (tinggi_badan >= 79)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 9.7) && (tinggi_badan >= 0 && tinggi_badan <= 64)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 9.7) && (tinggi_badan >= 64.1 && tinggi_badan <= 66.4)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 9.7) && (tinggi_badan >= 66.5 && tinggi_badan <= 78.9
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 10) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 9.7) && (tinggi_badan >= 79)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 11 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6) && (tinggi_badan >= 0 && tinggi_badan <= 65.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6) && (tinggi_badan >= 65.2 && tinggi_badan <= 67.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6) && (tinggi_badan >= 67.7 && tinggi_badan <= 80.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6) && (tinggi_badan >= 80.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.1 && berat_badan <= 6.8) && (tinggi_badan >= 0 && tinggi_badan <= 65.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.1 && berat_badan <= 6.8) && (tinggi_badan >= 65.2 && tinggi_badan <= 67.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.1 && berat_badan <= 6.8) && (tinggi_badan >= 67.7 && tinggi_badan <= 80.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.1 && berat_badan <= 6.8) && (tinggi_badan >= 80.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.9 && berat_badan <= 9.9) && (tinggi_badan >= 0 && tinggi_badan <= 65.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.9 && berat_badan <= 9.9) && (tinggi_badan >= 65.2 && tinggi_badan <= 67.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.9 && berat_badan <= 9.9) && (tinggi_badan >= 67.7 && tinggi_badan <= 80.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.9 && berat_badan <= 9.9) && (tinggi_badan >= 80.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 10) && (tinggi_badan >= 0 && tinggi_badan <= 65.1)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 10) && (tinggi_badan >= 65.2 && tinggi_badan <= 67.6)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 10) && (tinggi_badan >= 67.7 && tinggi_badan <= 80.3
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 11) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 10) && (tinggi_badan >= 80.4)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 12 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.2) && (tinggi_badan >= 0 && tinggi_badan <= 66.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.2) && (tinggi_badan >= 66.3 && tinggi_badan <= 68.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.2) && (tinggi_badan >= 68.9 && tinggi_badan <= 81.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.2) && (tinggi_badan >= 81.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.3 && berat_badan <= 6.9) && (tinggi_badan >= 0 && tinggi_badan <= 66.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.3 && berat_badan <= 6.9) && (tinggi_badan >= 66.3 && tinggi_badan <= 68.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.3 && berat_badan <= 6.9) && (tinggi_badan >= 68.9 && tinggi_badan <= 81.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.3 && berat_badan <= 6.9) && (tinggi_badan >= 81.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7 && berat_badan <= 10.1) && (tinggi_badan >= 0 && tinggi_badan <= 66.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7 && berat_badan <= 10.1) && (tinggi_badan >= 66.3 && tinggi_badan <= 68.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7 && berat_badan <= 10.1) && (tinggi_badan >= 68.9 && tinggi_badan <= 81.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7 && berat_badan <= 10.1) && (tinggi_badan >= 81.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 10.2) && (tinggi_badan >= 0 && tinggi_badan <= 66.2)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 10.9) && (tinggi_badan >= 66.3 && tinggi_badan <= 68.8)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 10.9) && (tinggi_badan >= 68.9 && tinggi_badan <= 81.7)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 12) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 10.9) && (tinggi_badan >= 81.8)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 13 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.3) && (tinggi_badan >= 0 && tinggi_badan <= 67.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.3) && (tinggi_badan >= 67.3 && tinggi_badan <= 69.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.3) && (tinggi_badan >= 70 && tinggi_badan <= 83.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.3) && (tinggi_badan >= 83.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.4 && berat_badan <= 7.1) && (tinggi_badan >= 0 && tinggi_badan <= 67.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.4 && berat_badan <= 7.1) && (tinggi_badan >= 67.3 && tinggi_badan <= 69.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.4 && berat_badan <= 7.1) && (tinggi_badan >= 70 && tinggi_badan <= 83.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.4 && berat_badan <= 7.1) && (tinggi_badan >= 83.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.2 && berat_badan <= 10.4) && (tinggi_badan >= 0 && tinggi_badan <= 67.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.2 && berat_badan <= 10.4) && (tinggi_badan >= 67.3 && tinggi_badan <= 69.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.2 && berat_badan <= 10.4) && (tinggi_badan >= 70 && tinggi_badan <= 83.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.2 && berat_badan <= 10.4) && (tinggi_badan >= 83.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 10.5) && (tinggi_badan >= 0 && tinggi_badan <= 67.2)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 10.5) && (tinggi_badan >= 67.3 && tinggi_badan <= 69.9)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 10.5) && (tinggi_badan >= 70 && tinggi_badan <= 83.1
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 13) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 10.5) && (tinggi_badan >= 83.2)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
     //-------------------------------------------------------------------------------------------
    // UMUR 14 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.5) && (tinggi_badan >= 0 && tinggi_badan <= 68.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.5) && (tinggi_badan >= 68.3 && tinggi_badan <= 70.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.5) && (tinggi_badan >= 71 && tinggi_badan <= 84.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.5) && (tinggi_badan >= 84.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.6 && berat_badan <= 7.3) && (tinggi_badan >= 0 && tinggi_badan <= 68.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.6 && berat_badan <= 7.3) && (tinggi_badan >= 68.3 && tinggi_badan <= 70.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.6 && berat_badan <= 7.3) && (tinggi_badan >= 71 && tinggi_badan <= 84.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.6 && berat_badan <= 7.3) && (tinggi_badan >= 84.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.4 && berat_badan <= 10.6) && (tinggi_badan >= 0 && tinggi_badan <= 68.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.4 && berat_badan <= 10.6) && (tinggi_badan >= 68.3 && tinggi_badan <= 70.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.4 && berat_badan <= 10.6) && (tinggi_badan >= 71 && tinggi_badan <= 84.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.4 && berat_badan <= 10.6) && (tinggi_badan >= 84.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 10.7) && (tinggi_badan >= 0 && tinggi_badan <= 68.2)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 10.7) && (tinggi_badan >= 68.3 && tinggi_badan <= 70.9)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 10.7) && (tinggi_badan >= 71 && tinggi_badan <= 84.4
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 14) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 10.7) && (tinggi_badan >= 84.5)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 15 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.6) && (tinggi_badan >= 0 && tinggi_badan <= 69.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.6) && (tinggi_badan >= 69.3 && tinggi_badan <= 71.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.6) && (tinggi_badan >= 72 && tinggi_badan <= 85.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.6) && (tinggi_badan >= 85.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.7 && berat_badan <= 7.5) && (tinggi_badan >= 0 && tinggi_badan <= 69.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.7 && berat_badan <= 7.5) && (tinggi_badan >= 69.3 && tinggi_badan <= 71.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.7 && berat_badan <= 7.5) && (tinggi_badan >= 72 && tinggi_badan <= 85.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.7 && berat_badan <= 7.5) && (tinggi_badan >= 85.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.6 && berat_badan <= 10.9) && (tinggi_badan >= 0 && tinggi_badan <= 69.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.6 && berat_badan <= 10.9) && (tinggi_badan >= 69.3 && tinggi_badan <= 71.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.6 && berat_badan <= 10.9) && (tinggi_badan >= 72 && tinggi_badan <= 85.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.6 && berat_badan <= 10.9) && (tinggi_badan >= 85.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11) && (tinggi_badan >= 0 && tinggi_badan <= 69.2)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11) && (tinggi_badan >= 69.3 && tinggi_badan <= 71.9)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11) && (tinggi_badan >= 72 && tinggi_badan <= 85.7
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 15) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11) && (tinggi_badan >= 85.8)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 16 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.8) && (tinggi_badan >= 0 && tinggi_badan <= 70.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.8) && (tinggi_badan >= 70.2 && tinggi_badan <= 72.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.8) && (tinggi_badan >= 73 && tinggi_badan <= 87)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // <-3 SD & > +3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.8) && (tinggi_badan >= 87.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.9 && berat_badan <= 7.6) && (tinggi_badan >= 0 && tinggi_badan <= 70.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.9 && berat_badan <= 7.6) && (tinggi_badan >= 70.2 && tinggi_badan <= 72.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.9 && berat_badan <= 7.6) && (tinggi_badan >= 73 && tinggi_badan <= 87)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 6.9 && berat_badan <= 7.6) && (tinggi_badan >= 87.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.7 && berat_badan <= 11.1) && (tinggi_badan >= 0 && tinggi_badan <= 70.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.7 && berat_badan <= 11.1) && (tinggi_badan >= 70.2 && tinggi_badan <= 72.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.7 && berat_badan <= 11.1) && (tinggi_badan >= 73 && tinggi_badan <= 87)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.7 && berat_badan <= 11.1) && (tinggi_badan >= 87.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11.2) && (tinggi_badan >= 0 && tinggi_badan <= 70.1)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11.2) && (tinggi_badan >= 70.2 && tinggi_badan <= 72.9)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11.2) && (tinggi_badan >= 73 && tinggi_badan <= 87
    )) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 16) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11.2) && (tinggi_badan >= 87.1)) {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 17 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.9) && (tinggi_badan >= 0 && tinggi_badan <= 71.0)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.9) && (tinggi_badan >= 71.1 && tinggi_badan <= 73.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.9) && (tinggi_badan >= 74 && tinggi_badan <= 88.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    } 
    // <-3 SD & > +3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 6.9) && (tinggi_badan >= 88.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7 && berat_badan <= 7.8) && (tinggi_badan >= 0 && tinggi_badan <= 71.0)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7 && berat_badan <= 7.8) && (tinggi_badan >= 71.1 && tinggi_badan <= 73.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7 && berat_badan <= 7.8) && (tinggi_badan >= 74 && tinggi_badan <= 88.2))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7 && berat_badan <= 7.8) && (tinggi_badan >= 88.3))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.9 && berat_badan <= 11.4) && (tinggi_badan >= 0 && tinggi_badan <= 71.0))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.9 && berat_badan <= 11.4) && (tinggi_badan >= 71.1 && tinggi_badan <= 73.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.9 && berat_badan <= 11.4) && (tinggi_badan >= 74 && tinggi_badan <= 88.2))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.9 && berat_badan <= 11.4) && (tinggi_badan >= 88.3))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11.5) && (tinggi_badan >= 0 && tinggi_badan <= 71.0))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11.5) && (tinggi_badan >= 71.1 && tinggi_badan <= 73.9))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11.5) && (tinggi_badan >= 74 && tinggi_badan <= 88.2))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 17) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11.5) && (tinggi_badan >= 88.3))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 18 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.1) && (tinggi_badan >= 0 && tinggi_badan <= 71.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.1) && (tinggi_badan >= 72 && tinggi_badan <= 74.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.1) && (tinggi_badan >= 74.9 && tinggi_badan <= 89.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    } 
    // <-3 SD & > +3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.1) && (tinggi_badan >= 89.5)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.2 && berat_badan <= 8) && (tinggi_badan >= 0 && tinggi_badan <= 71.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.2 && berat_badan <= 8) && (tinggi_badan >= 72 && tinggi_badan <= 74.8))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.2 && berat_badan <= 8) && (tinggi_badan >= 74.9 && tinggi_badan <= 89.4))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.2 && berat_badan <= 8) && (tinggi_badan >= 89.5))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.1 && berat_badan <= 11.5) && (tinggi_badan >= 0 && tinggi_badan <= 71.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.1 && berat_badan <= 11.5) && (tinggi_badan >= 72 && tinggi_badan <= 74.8))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.1 && berat_badan <= 11.5) && (tinggi_badan >= 74.9 && tinggi_badan <= 89.4))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.1 && berat_badan <= 11.5) && (tinggi_badan >= 89.5))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11.6) && (tinggi_badan >= 0 && tinggi_badan <= 71.9))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11.6) && (tinggi_badan >= 72 && tinggi_badan <= 74.8))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11.6) && (tinggi_badan >= 74.9 && tinggi_badan <= 89.4))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 18) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11.6) && (tinggi_badan >= 89.5))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 19 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.2) && (tinggi_badan >= 0 && tinggi_badan <= 72.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.2) && (tinggi_badan >= 72.8 && tinggi_badan <= 75.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.2) && (tinggi_badan >= 75.8 && tinggi_badan <= 90.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    } 
    // <-3 SD & > +3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.2) && (tinggi_badan >= 90.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.3 && berat_badan <= 8.1) && (tinggi_badan >= 0 && tinggi_badan <= 72.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.3 && berat_badan <= 8.1) && (tinggi_badan >= 72.8 && tinggi_badan <= 75.7))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.3 && berat_badan <= 8.1) && (tinggi_badan >= 75.8 && tinggi_badan <= 90.6))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.3 && berat_badan <= 8.1) && (tinggi_badan >= 90.7))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.2 && berat_badan <= 11.8) && (tinggi_badan >= 0 && tinggi_badan <= 72.7))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.2 && berat_badan <= 11.8) && (tinggi_badan >= 72.8 && tinggi_badan <= 75.7))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.2 && berat_badan <= 11.8) && (tinggi_badan >= 75.8 && tinggi_badan <= 90.6))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.2 && berat_badan <= 11.8) && (tinggi_badan >= 90.7))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11.9) && (tinggi_badan >= 0 && tinggi_badan <= 72.7))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11.9) && (tinggi_badan >= 72.8 && tinggi_badan <= 75.7))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11.9) && (tinggi_badan >= 75.8 && tinggi_badan <= 90.6))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 19) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 11.9) && (tinggi_badan >= 90.7))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 20 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.4) && (tinggi_badan >= 0 && tinggi_badan <= 73.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.4) && (tinggi_badan >= 73.7 && tinggi_badan <= 76.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.4) && (tinggi_badan >= 76.7 && tinggi_badan <= 91.7)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    } 
    // <-3 SD & > +3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.4) && (tinggi_badan >= 91.8)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.5 && berat_badan <= 8.3) && (tinggi_badan >= 0 && tinggi_badan <= 73.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.5 && berat_badan <= 8.3) && (tinggi_badan >= 73.7 && tinggi_badan <= 76.6))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.5 && berat_badan <= 8.3) && (tinggi_badan >= 76.7 && tinggi_badan <= 91.7))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.5 && berat_badan <= 8.3) && (tinggi_badan >= 91.8))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.4 && berat_badan <= 12.1) && (tinggi_badan >= 0 && tinggi_badan <= 73.6))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.4 && berat_badan <= 12.1) && (tinggi_badan >= 73.7 && tinggi_badan <= 76.6))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.4 && berat_badan <= 12.1) && (tinggi_badan >= 76.7 && tinggi_badan <= 91.7))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.4 && berat_badan <= 12.1) && (tinggi_badan >= 91.8))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.2) && (tinggi_badan >= 0 && tinggi_badan <= 73.6))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.2) && (tinggi_badan >= 73.7 && tinggi_badan <= 76.6))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.2) && (tinggi_badan >= 76.7 && tinggi_badan <= 91.7))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 20) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.2) && (tinggi_badan >= 91.8))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 21 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.5) && (tinggi_badan >= 0 && tinggi_badan <= 74.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.5) && (tinggi_badan >= 74.5 && tinggi_badan <= 77.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.5) && (tinggi_badan >= 77.5 && tinggi_badan <= 92.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    } 
    // <-3 SD & > +3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.5) && (tinggi_badan >= 93)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.6 && berat_badan <= 8.5) && (tinggi_badan >= 0 && tinggi_badan <= 74.4)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.6 && berat_badan <= 8.5) && (tinggi_badan >= 74.5 && tinggi_badan <= 77.4))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.6 && berat_badan <= 8.5) && (tinggi_badan >= 77.5 && tinggi_badan <= 92.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.6 && berat_badan <= 8.5) && (tinggi_badan >= 93))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.6 && berat_badan <= 12.3) && (tinggi_badan >= 0 && tinggi_badan <= 74.4))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.6 && berat_badan <= 12.3) && (tinggi_badan >= 74.5 && tinggi_badan <= 77.4))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.6 && berat_badan <= 12.3) && (tinggi_badan >= 77.5 && tinggi_badan <= 92.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.6 && berat_badan <= 12.3) && (tinggi_badan >= 93))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.4) && (tinggi_badan >= 0 && tinggi_badan <= 74.4))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.4) && (tinggi_badan >= 74.5 && tinggi_badan <= 77.4))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.4) && (tinggi_badan >= 77.5 && tinggi_badan <= 92.9))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 21) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.4) && (tinggi_badan >= 93))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 22 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.7) && (tinggi_badan >= 0 && tinggi_badan <= 75.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.7) && (tinggi_badan >= 75.2 && tinggi_badan <= 78.3)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.7) && (tinggi_badan >= 78.4 && tinggi_badan <= 94)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    } 
    // <-3 SD & > +3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.7) && (tinggi_badan >= 94.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.8 && berat_badan <= 8.6) && (tinggi_badan >= 0 && tinggi_badan <= 75.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.8 && berat_badan <= 8.6) && (tinggi_badan >= 75.2 && tinggi_badan <= 78.3))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.8 && berat_badan <= 8.6) && (tinggi_badan >= 78.4 && tinggi_badan <= 94))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.8 && berat_badan <= 8.6) && (tinggi_badan >= 94.1))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.7 && berat_badan <= 12.5) && (tinggi_badan >= 0 && tinggi_badan <= 75.1))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.7 && berat_badan <= 12.5) && (tinggi_badan >= 75.2 && tinggi_badan <= 78.3))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.7 && berat_badan <= 12.5) && (tinggi_badan >= 78.4 && tinggi_badan <= 94))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.7 && berat_badan <= 12.5) && (tinggi_badan >= 94.1))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.6) && (tinggi_badan >= 0 && tinggi_badan <= 75.1))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.6) && (tinggi_badan >= 75.2 && tinggi_badan <= 78.3))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.6) && (tinggi_badan >= 78.4 && tinggi_badan <= 94))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 22) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.6) && (tinggi_badan >= 94.1))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 23 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.8) && (tinggi_badan >= 0 && tinggi_badan <= 75.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.8) && (tinggi_badan >= 76 && tinggi_badan <= 79.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.8) && (tinggi_badan >= 79.2 && tinggi_badan <= 95)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    } 
    // <-3 SD & > +3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 7.8) && (tinggi_badan >= 95.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.9 && berat_badan <= 8.8) && (tinggi_badan >= 0 && tinggi_badan <= 75.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.9 && berat_badan <= 8.8) && (tinggi_badan >= 76 && tinggi_badan <= 79.1)){
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.9 && berat_badan <= 8.8) && (tinggi_badan >= 79.2 && tinggi_badan <= 95)){
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 7.9 && berat_badan <= 8.8) && (tinggi_badan >= 95.1)){
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.9 && berat_badan <= 12.8) && (tinggi_badan >= 0 && tinggi_badan <= 75.9)){
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.9 && berat_badan <= 12.8) && (tinggi_badan >= 76 && tinggi_badan <= 79.1)){
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.9 && berat_badan <= 12.8) && (tinggi_badan >= 79.2 && tinggi_badan <= 95)){
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.9 && berat_badan <= 12.8) && (tinggi_badan >= 95.1)){
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.8) && (tinggi_badan >= 0 && tinggi_badan <= 75.9)){
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.8) && (tinggi_badan >= 76 && tinggi_badan <= 79.1)){
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.8) && (tinggi_badan >= 79.2 && tinggi_badan <= 95)){
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 23) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.8) && (tinggi_badan >= 95.1)){
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    //-------------------------------------------------------------------------------------------
    // UMUR 24 PEREMPUAN
    // <-3 SD & < -3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 8) && (tinggi_badan >= 0 && tinggi_badan <= 76.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -3 SD sd < -2SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 8) && (tinggi_badan >= 76.7 && tinggi_badan <= 79.9)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    } 
    // <-3 SD & -2 SD sd + 3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 8) && (tinggi_badan >= 80 && tinggi_badan <= 96.1)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    } 
    // <-3 SD & > +3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 0 && berat_badan <= 8) && (tinggi_badan >= 96.2)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & <-3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.1 && berat_badan <= 8.9) && (tinggi_badan >= 0 && tinggi_badan <= 76.6)) {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -3 SD sd < -2 SD 
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.1 && berat_badan <= 8.9) && (tinggi_badan >= 76.7 && tinggi_badan <= 79.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
    }
    // -3 SD sd < -2 SD & -2 SD sd +3 SD 
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.1 && berat_badan <= 8.9) && (tinggi_badan >= 80 && tinggi_badan <= 96.1))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -3 SD sd < -2 SD & > +3 SD 
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 8.1 && berat_badan <= 8.9) && (tinggi_badan >= 96.2))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & < -3 SD 
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 9 && berat_badan <= 13) && (tinggi_badan >= 0 && tinggi_badan <= 76.6))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -3 SD sd <- 2 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 9 && berat_badan <= 13) && (tinggi_badan >= 76.7 && tinggi_badan <= 79.9))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
    }
    // -2 SD sd +1 SD & -2 SD sd + 3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 9 && berat_badan <= 13) && (tinggi_badan >= 80 && tinggi_badan <= 96.1))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // -2 SD sd +1 SD & > +3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 9 && berat_badan <= 13) && (tinggi_badan >= 96.2))
    {
        status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Baik");
    }
    // > +1 SD & < -3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 13.1) && (tinggi_badan >= 0 && tinggi_badan <= 76.6))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -3 SD sd < -2 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.8) && (tinggi_badan >= 76.7 && tinggi_badan <= 79.9))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Stunting");
        status_gizi_imt_u.setAttribute("value", "Obesitas");
    }
    // > +1 SD & -2 SD sd +3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.8) && (tinggi_badan >= 80 && tinggi_badan <= 96.1))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Normal");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
    // > +1 SD & > +3 SD
    else if ((umur == 24) && (document.getElementById("jenis_kelamin_perempuan").checked) && (berat_badan >= 12.8) && (tinggi_badan >= 96.2))
    {
        status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
        status_gizi_tb_u.setAttribute("value", "Tinggi");
        status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
    }
}