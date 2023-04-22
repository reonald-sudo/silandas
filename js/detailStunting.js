$(document).ready(function () {
  let pKIA = $("#p_nik").val();
  let buttonEditModal = $("#buttonEditModal").hide();
  let idEdit = $("#id").hide();

  $("#tombol_edit").click(function () {
    buttonEditModal.click();
  });
});

// LOGIC IMT
function hitungStunting() {
  let umur = document.getElementById("edit_umur").value;
  let berat_badan = document.getElementById("edit_beratBadan").value;
  let tinggi_badan = document.getElementById("edit_tinggiBadan").value;
  let status_gizi_bb_u = document.getElementById("status_gizi_bb_u");
  let status_gizi_tb_u = document.getElementById("status_gizi_tb_u");
  let status_gizi_imt_u = document.getElementById("status_gizi_imt_u");

  // UMUR 0 LAKI - LAKI
  // <-3 SD & < -3 SD
  if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 1.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 44.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 1.9 &&
    tinggi_badan >= 44.2 &&
    tinggi_badan <= 46
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 1.9 &&
    tinggi_badan >= 46.1 &&
    tinggi_badan <= 55.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 1.9 &&
    tinggi_badan >= 55.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 2 &&
    berat_badan <= 2.4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 44.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd -2 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 2 &&
    berat_badan <= 2.4 &&
    tinggi_badan >= 44.2 &&
    tinggi_badan <= 46
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 2 &&
    berat_badan <= 2.4 &&
    tinggi_badan >= 46.1 &&
    tinggi_badan <= 55.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 2 &&
    berat_badan <= 2.4 &&
    tinggi_badan >= 55.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 2.5 &&
    berat_badan <= 3.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 44.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 2.5 &&
    berat_badan <= 3.9 &&
    tinggi_badan >= 44.2 &&
    tinggi_badan <= 46
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 2.5 &&
    berat_badan <= 3.9 &&
    tinggi_badan >= 46.1 &&
    tinggi_badan <= 55.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 2.5 &&
    berat_badan <= 3.9 &&
    tinggi_badan >= 55.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 44.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 4 &&
    tinggi_badan >= 44.2 &&
    tinggi_badan <= 46
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 4 &&
    tinggi_badan >= 46.1 &&
    tinggi_badan <= 55.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 4 &&
    tinggi_badan >= 55.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // -------------------------------------------------------------------------------------------

  // UMUR 1 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 2.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 48.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 2.8 &&
    tinggi_badan >= 48.9 &&
    tinggi_badan <= 50.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 2.8 &&
    tinggi_badan >= 50.8 &&
    tinggi_badan <= 60.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 2.8 &&
    tinggi_badan >= 60.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 2.9 &&
    berat_badan <= 3.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 48.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 2.9 &&
    berat_badan <= 3.3 &&
    tinggi_badan >= 48.9 &&
    tinggi_badan <= 50.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 2.9 &&
    berat_badan <= 3.3 &&
    tinggi_badan >= 50.8 &&
    tinggi_badan <= 60.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 2.9 &&
    berat_badan <= 3.3 &&
    tinggi_badan >= 60.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 3.4 &&
    berat_badan <= 5.1 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 48.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 3.4 &&
    berat_badan <= 5.1 &&
    tinggi_badan >= 48.9 &&
    tinggi_badan <= 50.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 3.4 &&
    berat_badan <= 5.1 &&
    tinggi_badan >= 50.8 &&
    tinggi_badan <= 60.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 3.4 &&
    berat_badan <= 5.1 &&
    tinggi_badan >= 60.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 48.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.2 &&
    tinggi_badan >= 48.9 &&
    tinggi_badan <= 50.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.2 &&
    tinggi_badan >= 50.8 &&
    tinggi_badan <= 60.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.2 &&
    tinggi_badan >= 60.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // -------------------------------------------------------------------------------------------
  // UMUR 2 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 3.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 52.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 3.8 &&
    tinggi_badan >= 52.4 &&
    tinggi_badan <= 54.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 3.8 &&
    tinggi_badan >= 54.4 &&
    tinggi_badan <= 64.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 3.8 &&
    tinggi_badan >= 64.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 3.8 &&
    berat_badan <= 4.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 52.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 3.8 &&
    berat_badan <= 4.2 &&
    tinggi_badan >= 52.4 &&
    tinggi_badan <= 54.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 3.8 &&
    berat_badan <= 4.2 &&
    tinggi_badan >= 54.4 &&
    tinggi_badan <= 64.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 3.8 &&
    berat_badan <= 4.2 &&
    tinggi_badan >= 64.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 4.3 &&
    berat_badan <= 6.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 52.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 4.3 &&
    berat_badan <= 6.3 &&
    tinggi_badan >= 52.4 &&
    tinggi_badan <= 54.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 4.3 &&
    berat_badan <= 6.3 &&
    tinggi_badan >= 54.4 &&
    tinggi_badan <= 64.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 4.3 &&
    berat_badan <= 6.3 &&
    tinggi_badan >= 64.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 52.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.4 &&
    tinggi_badan >= 52.4 &&
    tinggi_badan <= 54.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.4 &&
    tinggi_badan >= 54.4 &&
    tinggi_badan <= 64.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.4 &&
    tinggi_badan >= 64.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // -------------------------------------------------------------------------------------------
  // UMUR 3 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 4.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 55.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 4.3 &&
    tinggi_badan >= 55.3 &&
    tinggi_badan <= 57.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 4.3 &&
    tinggi_badan >= 57.3 &&
    tinggi_badan <= 67.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 4.3 &&
    tinggi_badan >= 67.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 4.4 &&
    berat_badan <= 4.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 55.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 4.4 &&
    berat_badan <= 4.9 &&
    tinggi_badan >= 55.3 &&
    tinggi_badan <= 57.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 4.4 &&
    berat_badan <= 4.9 &&
    tinggi_badan >= 57.3 &&
    tinggi_badan <= 67.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 4.4 &&
    berat_badan <= 4.9 &&
    tinggi_badan >= 67.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5 &&
    berat_badan <= 7.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 55.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5 &&
    berat_badan <= 7.2 &&
    tinggi_badan >= 55.3 &&
    tinggi_badan <= 57.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5 &&
    berat_badan <= 7.2 &&
    tinggi_badan >= 57.3 &&
    tinggi_badan <= 67.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5 &&
    berat_badan <= 7.2 &&
    tinggi_badan >= 67.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 57.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.6 &&
    tinggi_badan >= 57.6 &&
    tinggi_badan <= 59.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.6 &&
    tinggi_badan >= 59.7 &&
    tinggi_badan <= 70.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.6 &&
    tinggi_badan >= 67.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // -------------------------------------------------------------------------------------------
  // UMUR 4 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 4.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 57.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 4.8 &&
    tinggi_badan >= 57.6 &&
    tinggi_badan <= 59.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 4.8 &&
    tinggi_badan >= 59.7 &&
    tinggi_badan <= 70.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 4.8 &&
    tinggi_badan >= 70.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 4.9 &&
    berat_badan <= 5.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 57.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 4.9 &&
    berat_badan <= 5.5 &&
    tinggi_badan >= 57.6 &&
    tinggi_badan <= 59.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 4.9 &&
    berat_badan <= 5.5 &&
    tinggi_badan >= 59.7 &&
    tinggi_badan <= 70.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 4.9 &&
    berat_badan <= 5.5 &&
    tinggi_badan >= 70.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.6 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 57.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.6 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 57.6 &&
    tinggi_badan <= 59.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.6 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 59.7 &&
    tinggi_badan <= 70.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.6 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 70.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 57.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.9 &&
    tinggi_badan >= 57.6 &&
    tinggi_badan <= 59.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.9 &&
    tinggi_badan >= 59.7 &&
    tinggi_badan <= 70.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.9 &&
    tinggi_badan >= 70.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // -------------------------------------------------------------------------------------------
  // UMUR 5 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 59.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.2 &&
    tinggi_badan >= 59.6 &&
    tinggi_badan <= 61.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.2 &&
    tinggi_badan >= 61.7 &&
    tinggi_badan <= 72.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.2 &&
    tinggi_badan >= 72.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.3 &&
    berat_badan <= 5.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 59.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.3 &&
    berat_badan <= 5.9 &&
    tinggi_badan >= 59.6 &&
    tinggi_badan <= 61.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.3 &&
    berat_badan <= 5.9 &&
    tinggi_badan >= 61.7 &&
    tinggi_badan <= 72.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.3 &&
    berat_badan <= 5.9 &&
    tinggi_badan >= 72.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6 &&
    berat_badan <= 8.4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 59.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6 &&
    berat_badan <= 8.4 &&
    tinggi_badan >= 59.6 &&
    tinggi_badan <= 61.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6 &&
    berat_badan <= 8.4 &&
    tinggi_badan >= 61.7 &&
    tinggi_badan <= 72.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6 &&
    berat_badan <= 8.4 &&
    tinggi_badan >= 72.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 59.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.5 &&
    tinggi_badan >= 59.6 &&
    tinggi_badan <= 61.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.5 &&
    tinggi_badan >= 61.7 &&
    tinggi_badan <= 72.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.5 &&
    tinggi_badan >= 72.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // -------------------------------------------------------------------------------------------
  // UMUR 6 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 61.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.6 &&
    tinggi_badan >= 61.2 &&
    tinggi_badan <= 63.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.6 &&
    tinggi_badan >= 63.3 &&
    tinggi_badan <= 74
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.6 &&
    tinggi_badan >= 74.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.7 &&
    berat_badan <= 6.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 61.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.7 &&
    berat_badan <= 6.3 &&
    tinggi_badan >= 61.2 &&
    tinggi_badan <= 63.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.7 &&
    berat_badan <= 6.3 &&
    tinggi_badan >= 63.3 &&
    tinggi_badan <= 74
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.7 &&
    berat_badan <= 6.3 &&
    tinggi_badan >= 74.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.4 &&
    berat_badan <= 8.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 61.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.4 &&
    berat_badan <= 8.8 &&
    tinggi_badan >= 61.2 &&
    tinggi_badan <= 63.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.4 &&
    berat_badan <= 8.8 &&
    tinggi_badan >= 63.3 &&
    tinggi_badan <= 74
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.4 &&
    berat_badan <= 8.8 &&
    tinggi_badan >= 74.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 61.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.9 &&
    tinggi_badan >= 61.2 &&
    tinggi_badan <= 63.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.9 &&
    tinggi_badan >= 63.3 &&
    tinggi_badan <= 74
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.9 &&
    tinggi_badan >= 74.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 7 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 62.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.8 &&
    tinggi_badan >= 62.7 &&
    tinggi_badan <= 64.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.8 &&
    tinggi_badan >= 64.8 &&
    tinggi_badan <= 75.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.8 &&
    tinggi_badan >= 75.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.9 &&
    berat_badan <= 6.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 62.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.9 &&
    berat_badan <= 6.6 &&
    tinggi_badan >= 62.7 &&
    tinggi_badan <= 64.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.9 &&
    berat_badan <= 6.6 &&
    tinggi_badan >= 64.8 &&
    tinggi_badan <= 75.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 5.9 &&
    berat_badan <= 6.6 &&
    tinggi_badan >= 75.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.7 &&
    berat_badan <= 9.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 62.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.7 &&
    berat_badan <= 9.2 &&
    tinggi_badan >= 62.7 &&
    tinggi_badan <= 64.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.7 &&
    berat_badan <= 9.2 &&
    tinggi_badan >= 64.8 &&
    tinggi_badan <= 75.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.7 &&
    berat_badan <= 9.2 &&
    tinggi_badan >= 75.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 62.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.3 &&
    tinggi_badan >= 62.7 &&
    tinggi_badan <= 64.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.3 &&
    tinggi_badan >= 64.8 &&
    tinggi_badan <= 75.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.3 &&
    tinggi_badan >= 75.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 8 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.1 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 63.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.1 &&
    tinggi_badan >= 64 &&
    tinggi_badan <= 66.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.1 &&
    tinggi_badan >= 66.2 &&
    tinggi_badan <= 77.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.1 &&
    tinggi_badan >= 77.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.2 &&
    berat_badan <= 6.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 63.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.2 &&
    berat_badan <= 6.8 &&
    tinggi_badan >= 64 &&
    tinggi_badan <= 66.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.2 &&
    berat_badan <= 6.8 &&
    tinggi_badan >= 66.2 &&
    tinggi_badan <= 77.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.2 &&
    berat_badan <= 6.8 &&
    tinggi_badan >= 77.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.9 &&
    berat_badan <= 9.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 63.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.9 &&
    berat_badan <= 9.6 &&
    tinggi_badan >= 64 &&
    tinggi_badan <= 66.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.9 &&
    berat_badan <= 9.6 &&
    tinggi_badan >= 66.2 &&
    tinggi_badan <= 77.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.9 &&
    berat_badan <= 9.6 &&
    tinggi_badan >= 77.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 63.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.7 &&
    tinggi_badan >= 64 &&
    tinggi_badan <= 66.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.7 &&
    tinggi_badan >= 66.2 &&
    tinggi_badan <= 77.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.7 &&
    tinggi_badan >= 77.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 9 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 65.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.3 &&
    tinggi_badan >= 65.2 &&
    tinggi_badan <= 67.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.3 &&
    tinggi_badan >= 67.5 &&
    tinggi_badan <= 78.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.3 &&
    tinggi_badan >= 78.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.4 &&
    berat_badan <= 7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 65.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.4 &&
    berat_badan <= 7 &&
    tinggi_badan >= 65.2 &&
    tinggi_badan <= 67.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.4 &&
    berat_badan <= 7 &&
    tinggi_badan >= 67.5 &&
    tinggi_badan <= 78.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.4 &&
    berat_badan <= 7 &&
    tinggi_badan >= 78.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.1 &&
    berat_badan <= 9.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 65.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.1 &&
    berat_badan <= 9.9 &&
    tinggi_badan >= 65.2 &&
    tinggi_badan <= 67.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.1 &&
    berat_badan <= 9.9 &&
    tinggi_badan >= 67.5 &&
    tinggi_badan <= 78.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.1 &&
    berat_badan <= 9.9 &&
    tinggi_badan >= 78.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 10 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 65.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 10 &&
    tinggi_badan >= 65.2 &&
    tinggi_badan <= 67.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 10 &&
    tinggi_badan >= 67.5 &&
    tinggi_badan <= 78.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 10 &&
    tinggi_badan >= 78.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 10 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 66.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.5 &&
    tinggi_badan >= 66.4 &&
    tinggi_badan <= 68.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.5 &&
    tinggi_badan >= 68.7 &&
    tinggi_badan <= 80.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.5 &&
    tinggi_badan >= 80.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.6 &&
    berat_badan <= 7.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 66.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.6 &&
    berat_badan <= 7.3 &&
    tinggi_badan >= 66.4 &&
    tinggi_badan <= 68.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.6 &&
    berat_badan <= 7.3 &&
    tinggi_badan >= 68.7 &&
    tinggi_badan <= 80.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.6 &&
    berat_badan <= 7.3 &&
    tinggi_badan >= 80.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.4 &&
    berat_badan <= 10.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 66.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.4 &&
    berat_badan <= 10.2 &&
    tinggi_badan >= 66.4 &&
    tinggi_badan <= 68.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.4 &&
    berat_badan <= 10.2 &&
    tinggi_badan >= 68.7 &&
    tinggi_badan <= 80.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.4 &&
    berat_badan <= 10.2 &&
    tinggi_badan >= 80.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 10.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 66.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 10.3 &&
    tinggi_badan >= 66.4 &&
    tinggi_badan <= 68.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 10.3 &&
    tinggi_badan >= 68.7 &&
    tinggi_badan <= 80.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 10.3 &&
    tinggi_badan >= 80.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 11 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 67.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.7 &&
    tinggi_badan >= 67.6 &&
    tinggi_badan <= 69.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.7 &&
    tinggi_badan >= 69.9 &&
    tinggi_badan <= 81.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.7 &&
    tinggi_badan >= 81.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.8 &&
    berat_badan <= 7.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 67.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.8 &&
    berat_badan <= 7.5 &&
    tinggi_badan >= 67.6 &&
    tinggi_badan <= 69.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.8 &&
    berat_badan <= 7.5 &&
    tinggi_badan >= 69.9 &&
    tinggi_badan <= 81.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.8 &&
    berat_badan <= 7.5 &&
    tinggi_badan >= 81.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.6 &&
    berat_badan <= 10.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 67.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.6 &&
    berat_badan <= 10.5 &&
    tinggi_badan >= 67.6 &&
    tinggi_badan <= 69.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.6 &&
    berat_badan <= 10.5 &&
    tinggi_badan >= 68.9 &&
    tinggi_badan <= 81.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.6 &&
    berat_badan <= 10.5 &&
    tinggi_badan >= 81.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 10.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 67.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 10.6 &&
    tinggi_badan >= 67.6 &&
    tinggi_badan <= 69.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 10.6 &&
    tinggi_badan >= 69.9 &&
    tinggi_badan <= 81.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 10.6 &&
    tinggi_badan >= 81.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 12 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 68.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.8 &&
    tinggi_badan >= 68.6 &&
    tinggi_badan <= 70.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.8 &&
    tinggi_badan >= 71 &&
    tinggi_badan <= 82.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.8 &&
    tinggi_badan >= 83
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.9 &&
    berat_badan <= 7.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 68.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.9 &&
    berat_badan <= 7.6 &&
    tinggi_badan >= 68.6 &&
    tinggi_badan <= 70.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.9 &&
    berat_badan <= 7.6 &&
    tinggi_badan >= 71 &&
    tinggi_badan <= 82.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 6.9 &&
    berat_badan <= 7.6 &&
    tinggi_badan >= 83
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.7 &&
    berat_badan <= 10.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 68.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.7 &&
    berat_badan <= 10.8 &&
    tinggi_badan >= 68.6 &&
    tinggi_badan <= 70.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.7 &&
    berat_badan <= 10.8 &&
    tinggi_badan >= 71 &&
    tinggi_badan <= 82.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.7 &&
    berat_badan <= 10.8 &&
    tinggi_badan >= 83
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 10.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 68.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 10.9 &&
    tinggi_badan >= 68.6 &&
    tinggi_badan <= 70.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 10.9 &&
    tinggi_badan >= 71 &&
    tinggi_badan <= 82.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 10.9 &&
    tinggi_badan >= 83
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 13 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 69.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7 &&
    tinggi_badan >= 69.6 &&
    tinggi_badan <= 72
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7 &&
    tinggi_badan >= 72.1 &&
    tinggi_badan <= 84.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7 &&
    tinggi_badan >= 84.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.1 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 69.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.1 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 69.6 &&
    tinggi_badan <= 72
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.1 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 72.1 &&
    tinggi_badan <= 84.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.1 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 84.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.9 &&
    berat_badan <= 11 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 69.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.9 &&
    berat_badan <= 11 &&
    tinggi_badan >= 69.6 &&
    tinggi_badan <= 72
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.9 &&
    berat_badan <= 11 &&
    tinggi_badan >= 72.1 &&
    tinggi_badan <= 84.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.9 &&
    berat_badan <= 11 &&
    tinggi_badan >= 84.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 11.1 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 69.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 11.1 &&
    tinggi_badan >= 69.6 &&
    tinggi_badan <= 72
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 11.1 &&
    tinggi_badan >= 72.1 &&
    tinggi_badan <= 84.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 11.1 &&
    tinggi_badan >= 84.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 14 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.1 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 70.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.1 &&
    tinggi_badan >= 70.2 &&
    tinggi_badan <= 73
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.1 &&
    tinggi_badan >= 73.1 &&
    tinggi_badan <= 85.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.1 &&
    tinggi_badan >= 85.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.2 &&
    berat_badan <= 8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 70.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.2 &&
    berat_badan <= 8 &&
    tinggi_badan >= 70.2 &&
    tinggi_badan <= 73
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.2 &&
    berat_badan <= 8 &&
    tinggi_badan >= 73.1 &&
    tinggi_badan <= 85.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.2 &&
    berat_badan <= 8 &&
    tinggi_badan >= 85.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.1 &&
    berat_badan <= 11.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 70.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.1 &&
    berat_badan <= 11.3 &&
    tinggi_badan >= 70.2 &&
    tinggi_badan <= 73
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.1 &&
    berat_badan <= 11.3 &&
    tinggi_badan >= 73.1 &&
    tinggi_badan <= 85.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.1 &&
    berat_badan <= 11.3 &&
    tinggi_badan >= 85.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 11.4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 70.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 11.1 &&
    tinggi_badan >= 70.2 &&
    tinggi_badan <= 73
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 11.1 &&
    tinggi_badan >= 73.1 &&
    tinggi_badan <= 85.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 11.1 &&
    tinggi_badan >= 85.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 15 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 71.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.3 &&
    tinggi_badan >= 71.6 &&
    tinggi_badan <= 74
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.3 &&
    tinggi_badan >= 74.1 &&
    tinggi_badan <= 86.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.3 &&
    tinggi_badan >= 86.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.4 &&
    berat_badan <= 8.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 71.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.4 &&
    berat_badan <= 8.2 &&
    tinggi_badan >= 71.6 &&
    tinggi_badan <= 74
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.4 &&
    berat_badan <= 8.2 &&
    tinggi_badan >= 74.1 &&
    tinggi_badan <= 86.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.4 &&
    berat_badan <= 8.2 &&
    tinggi_badan >= 86.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.3 &&
    berat_badan <= 11.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 71.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.3 &&
    berat_badan <= 11.5 &&
    tinggi_badan >= 71.6 &&
    tinggi_badan <= 74
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.3 &&
    berat_badan <= 11.5 &&
    tinggi_badan >= 74.1 &&
    tinggi_badan <= 86.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.3 &&
    berat_badan <= 11.5 &&
    tinggi_badan >= 86.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 11.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 71.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 11.6 &&
    tinggi_badan >= 71.6 &&
    tinggi_badan <= 74
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 11.6 &&
    tinggi_badan >= 74.1 &&
    tinggi_badan <= 86.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 11.6 &&
    tinggi_badan >= 86.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 16 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 72.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.4 &&
    tinggi_badan >= 72.5 &&
    tinggi_badan <= 74.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.4 &&
    tinggi_badan >= 75 &&
    tinggi_badan <= 88
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.4 &&
    tinggi_badan >= 88.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.5 &&
    berat_badan <= 8.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 72.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.5 &&
    berat_badan <= 8.3 &&
    tinggi_badan >= 72.5 &&
    tinggi_badan <= 74.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.5 &&
    berat_badan <= 8.3 &&
    tinggi_badan >= 75 &&
    tinggi_badan <= 88
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.5 &&
    berat_badan <= 8.3 &&
    tinggi_badan >= 88.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.4 &&
    berat_badan <= 11.7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 72.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.4 &&
    berat_badan <= 11.7 &&
    tinggi_badan >= 72.5 &&
    tinggi_badan <= 74.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.4 &&
    berat_badan <= 11.7 &&
    tinggi_badan >= 75 &&
    tinggi_badan <= 88
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.4 &&
    berat_badan <= 11.7 &&
    tinggi_badan >= 88.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 11.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 72.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 11.8 &&
    tinggi_badan >= 72.5 &&
    tinggi_badan <= 74.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 11.8 &&
    tinggi_badan >= 75 &&
    tinggi_badan <= 88
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 11.8 &&
    tinggi_badan >= 88.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 17 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 73.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.6 &&
    tinggi_badan >= 73.3 &&
    tinggi_badan <= 75.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.6 &&
    tinggi_badan >= 76 &&
    tinggi_badan <= 89.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.6 &&
    tinggi_badan >= 89.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.7 &&
    berat_badan <= 8.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 73.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.7 &&
    berat_badan <= 8.5 &&
    tinggi_badan >= 73.3 &&
    tinggi_badan <= 75.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.7 &&
    berat_badan <= 8.5 &&
    tinggi_badan >= 76 &&
    tinggi_badan <= 89.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.7 &&
    berat_badan <= 8.5 &&
    tinggi_badan >= 89.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.6 &&
    berat_badan <= 12 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 73.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.6 &&
    berat_badan <= 12 &&
    tinggi_badan >= 73.3 &&
    tinggi_badan <= 75.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.6 &&
    berat_badan <= 12 &&
    tinggi_badan >= 76 &&
    tinggi_badan <= 89.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.6 &&
    berat_badan <= 12 &&
    tinggi_badan >= 89.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 12.1 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 73.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 12.1 &&
    tinggi_badan >= 73.3 &&
    tinggi_badan <= 75.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 12.1 &&
    tinggi_badan >= 76 &&
    tinggi_badan <= 89.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 12.1 &&
    tinggi_badan >= 89.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 18 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 74.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.7 &&
    tinggi_badan >= 74.2 &&
    tinggi_badan <= 76.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.7 &&
    tinggi_badan >= 76.9 &&
    tinggi_badan <= 90.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.7 &&
    tinggi_badan >= 90.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.8 &&
    berat_badan <= 9.7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 74.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.8 &&
    berat_badan <= 9.7 &&
    tinggi_badan >= 74.2 &&
    tinggi_badan <= 76.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.8 &&
    berat_badan <= 9.7 &&
    tinggi_badan >= 76.9 &&
    tinggi_badan <= 90.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 7.8 &&
    berat_badan <= 9.7 &&
    tinggi_badan >= 90.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.8 &&
    berat_badan <= 12.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 74.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.8 &&
    berat_badan <= 12.2 &&
    tinggi_badan >= 74.2 &&
    tinggi_badan <= 76.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.8 &&
    berat_badan <= 12.2 &&
    tinggi_badan >= 76.9 &&
    tinggi_badan <= 90.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.8 &&
    berat_badan <= 12.2 &&
    tinggi_badan >= 90.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 12.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 74.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 12.3 &&
    tinggi_badan >= 74.2 &&
    tinggi_badan <= 76.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 12.3 &&
    tinggi_badan >= 76.9 &&
    tinggi_badan <= 90.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 12.3 &&
    tinggi_badan >= 90.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 19 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 74.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.9 &&
    tinggi_badan >= 75 &&
    tinggi_badan <= 77.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.9 &&
    tinggi_badan >= 77.7 &&
    tinggi_badan <= 91.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.9 &&
    tinggi_badan >= 91.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8 &&
    berat_badan <= 8.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 74.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8 &&
    berat_badan <= 8.8 &&
    tinggi_badan >= 75 &&
    tinggi_badan <= 77.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8 &&
    berat_badan <= 8.8 &&
    tinggi_badan >= 77.7 &&
    tinggi_badan <= 91.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8 &&
    berat_badan <= 8.8 &&
    tinggi_badan >= 91.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.9 &&
    berat_badan <= 12.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 74.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.9 &&
    berat_badan <= 12.5 &&
    tinggi_badan >= 75 &&
    tinggi_badan <= 77.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.9 &&
    berat_badan <= 12.5 &&
    tinggi_badan >= 77.7 &&
    tinggi_badan <= 91.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.9 &&
    berat_badan <= 12.5 &&
    tinggi_badan >= 91.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 12.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 74.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 12.6 &&
    tinggi_badan >= 75 &&
    tinggi_badan <= 77.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 12.6 &&
    tinggi_badan >= 77.7 &&
    tinggi_badan <= 91.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 12.6 &&
    tinggi_badan >= 91.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 20 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 75.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8 &&
    tinggi_badan >= 75.8 &&
    tinggi_badan <= 78.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8 &&
    tinggi_badan >= 78.6 &&
    tinggi_badan <= 92.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8 &&
    tinggi_badan >= 92.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.1 &&
    berat_badan <= 9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 75.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.1 &&
    berat_badan <= 9 &&
    tinggi_badan >= 75.8 &&
    tinggi_badan <= 78.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.1 &&
    berat_badan <= 9 &&
    tinggi_badan >= 78.6 &&
    tinggi_badan <= 92.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.1 &&
    berat_badan <= 9 &&
    tinggi_badan >= 92.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.1 &&
    berat_badan <= 12.7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 75.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.1 &&
    berat_badan <= 12.7 &&
    tinggi_badan >= 75.8 &&
    tinggi_badan <= 78.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.1 &&
    berat_badan <= 12.7 &&
    tinggi_badan >= 78.6 &&
    tinggi_badan <= 92.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.1 &&
    berat_badan <= 12.7 &&
    tinggi_badan >= 92.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 12.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 75.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 12.8 &&
    tinggi_badan >= 75.8 &&
    tinggi_badan <= 78.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 12.8 &&
    tinggi_badan >= 78.6 &&
    tinggi_badan <= 92.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 12.8 &&
    tinggi_badan >= 92.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 21 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8.1 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 76.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8 &&
    tinggi_badan >= 76.5 &&
    tinggi_badan <= 79.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8 &&
    tinggi_badan >= 79.4 &&
    tinggi_badan <= 93.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8 &&
    tinggi_badan >= 93.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.2 &&
    berat_badan <= 9.1 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 76.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.2 &&
    berat_badan <= 9.1 &&
    tinggi_badan >= 76.5 &&
    tinggi_badan <= 79.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.2 &&
    berat_badan <= 9.1 &&
    tinggi_badan >= 79.4 &&
    tinggi_badan <= 93.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.2 &&
    berat_badan <= 9.1 &&
    tinggi_badan >= 93.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.2 &&
    berat_badan <= 12.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 76.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.2 &&
    berat_badan <= 12.9 &&
    tinggi_badan >= 76.5 &&
    tinggi_badan <= 79.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.2 &&
    berat_badan <= 12.9 &&
    tinggi_badan >= 79.4 &&
    tinggi_badan <= 93.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.2 &&
    berat_badan <= 12.9 &&
    tinggi_badan >= 93.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 13 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 76.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 13 &&
    tinggi_badan >= 76.5 &&
    tinggi_badan <= 79.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 13 &&
    tinggi_badan >= 79.4 &&
    tinggi_badan <= 93.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 13 &&
    tinggi_badan >= 93.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 22 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 77.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8.3 &&
    tinggi_badan >= 77.2 &&
    tinggi_badan <= 80.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8.3 &&
    tinggi_badan >= 80.2 &&
    tinggi_badan <= 94.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8.3 &&
    tinggi_badan >= 95
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.4 &&
    berat_badan <= 9.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 77.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.4 &&
    berat_badan <= 9.3 &&
    tinggi_badan >= 77.2 &&
    tinggi_badan <= 80.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.4 &&
    berat_badan <= 9.3 &&
    tinggi_badan >= 80.2 &&
    tinggi_badan <= 94.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.4 &&
    berat_badan <= 9.3 &&
    tinggi_badan >= 95
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.4 &&
    berat_badan <= 13.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 77.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.4 &&
    berat_badan <= 13.2 &&
    tinggi_badan >= 77.2 &&
    tinggi_badan <= 80.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.4 &&
    berat_badan <= 13.2 &&
    tinggi_badan >= 80.2 &&
    tinggi_badan <= 94.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.4 &&
    berat_badan <= 13.2 &&
    tinggi_badan >= 95
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 13.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 77.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 13.3 &&
    tinggi_badan >= 77.2 &&
    tinggi_badan <= 80.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 13.3 &&
    tinggi_badan >= 80.2 &&
    tinggi_badan <= 94.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 13.3 &&
    tinggi_badan >= 95
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 23 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8.4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 77.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8.4 &&
    tinggi_badan >= 78 &&
    tinggi_badan <= 80.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8.4 &&
    tinggi_badan >= 81 &&
    tinggi_badan <= 95.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8.4 &&
    tinggi_badan >= 96
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.5 &&
    berat_badan <= 9.4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 77.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.5 &&
    berat_badan <= 9.4 &&
    tinggi_badan >= 78 &&
    tinggi_badan <= 80.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.5 &&
    berat_badan <= 9.4 &&
    tinggi_badan >= 81 &&
    tinggi_badan <= 95.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.5 &&
    berat_badan <= 9.4 &&
    tinggi_badan >= 96
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.5 &&
    berat_badan <= 13.4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 77.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.5 &&
    berat_badan <= 13.4 &&
    tinggi_badan >= 78 &&
    tinggi_badan <= 80.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.5 &&
    berat_badan <= 13.4 &&
    tinggi_badan >= 81 &&
    tinggi_badan <= 95.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.5 &&
    berat_badan <= 13.4 &&
    tinggi_badan >= 96
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 13.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 77.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 13.5 &&
    tinggi_badan >= 78 &&
    tinggi_badan <= 80.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 13.5 &&
    tinggi_badan >= 81 &&
    tinggi_badan <= 95.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 13.5 &&
    tinggi_badan >= 96
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 24 LAKI - LAKI
  // <-3 SD & < -3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 78.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8.5 &&
    tinggi_badan >= 78.7 &&
    tinggi_badan <= 81.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8.5 &&
    tinggi_badan >= 81.7 &&
    tinggi_badan <= 97
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8.5 &&
    tinggi_badan >= 97
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.6 &&
    berat_badan <= 9.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 78.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.6 &&
    berat_badan <= 9.6 &&
    tinggi_badan >= 78.7 &&
    tinggi_badan <= 81.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.6 &&
    berat_badan <= 9.6 &&
    tinggi_badan >= 81.7 &&
    tinggi_badan <= 97
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 8.6 &&
    berat_badan <= 9.6 &&
    tinggi_badan >= 97.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.7 &&
    berat_badan <= 13.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 78.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.7 &&
    berat_badan <= 13.6 &&
    tinggi_badan >= 78.7 &&
    tinggi_badan <= 81.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.7 &&
    berat_badan <= 13.6 &&
    tinggi_badan >= 81.7 &&
    tinggi_badan <= 97
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 9.7 &&
    berat_badan <= 13.6 &&
    tinggi_badan >= 97.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 13.7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 78.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 13.7 &&
    tinggi_badan >= 78.7 &&
    tinggi_badan <= 81.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 13.7 &&
    tinggi_badan >= 81.7 &&
    tinggi_badan <= 97
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_laki_laki").checked &&
    berat_badan >= 13.7 &&
    tinggi_badan >= 97.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // UMUR 0 PEREMPUAN
  // <-3 SD & < -3 SD
  if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 1.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 43.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 1.9 &&
    tinggi_badan >= 43.6 &&
    tinggi_badan <= 45.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 1.9 &&
    tinggi_badan >= 45.4 &&
    tinggi_badan <= 54.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 1.9 &&
    tinggi_badan >= 54.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 2 &&
    berat_badan <= 2.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 43.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd -2 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 2 &&
    berat_badan <= 2.3 &&
    tinggi_badan >= 43.6 &&
    tinggi_badan <= 45.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 2 &&
    berat_badan <= 2.3 &&
    tinggi_badan >= 45.4 &&
    tinggi_badan <= 54.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 2 &&
    berat_badan <= 2.3 &&
    tinggi_badan >= 54.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 2.4 &&
    berat_badan <= 3.7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 43.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 2.4 &&
    berat_badan <= 3.7 &&
    tinggi_badan >= 43.6 &&
    tinggi_badan <= 45.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 2.4 &&
    berat_badan <= 3.7 &&
    tinggi_badan >= 45.4 &&
    tinggi_badan <= 54.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 2.4 &&
    berat_badan <= 3.7 &&
    tinggi_badan >= 54.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 3.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 43.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 3.8 &&
    tinggi_badan >= 43.6 &&
    tinggi_badan <= 45.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 3.8 &&
    tinggi_badan >= 45.4 &&
    tinggi_badan <= 54.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 0 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 3.8 &&
    tinggi_badan >= 54.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // UMUR 1 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 2.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 47.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 2.6 &&
    tinggi_badan >= 47.8 &&
    tinggi_badan <= 49.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 2.6 &&
    tinggi_badan >= 49.8 &&
    tinggi_badan <= 59.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 2.6 &&
    tinggi_badan >= 59.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 2.7 &&
    berat_badan <= 3.1 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 47.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 2.7 &&
    berat_badan <= 3.1 &&
    tinggi_badan >= 47.8 &&
    tinggi_badan <= 49.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 2.7 &&
    berat_badan <= 3.1 &&
    tinggi_badan >= 49.8 &&
    tinggi_badan <= 59.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 2.7 &&
    berat_badan <= 3.1 &&
    tinggi_badan >= 59.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 3.2 &&
    berat_badan <= 4.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 47.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 3.2 &&
    berat_badan <= 4.8 &&
    tinggi_badan >= 47.8 &&
    tinggi_badan <= 49.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 3.2 &&
    berat_badan <= 4.8 &&
    tinggi_badan >= 49.8 &&
    tinggi_badan <= 59.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 3.2 &&
    berat_badan <= 4.8 &&
    tinggi_badan >= 59.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 47.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4.9 &&
    tinggi_badan >= 47.8 &&
    tinggi_badan <= 49.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4.9 &&
    tinggi_badan >= 49.8 &&
    tinggi_badan <= 59.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 1 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4.9 &&
    tinggi_badan >= 59.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // -------------------------------------------------------------------------------------------
  // UMUR 2 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 3.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 50.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 3.3 &&
    tinggi_badan >= 51 &&
    tinggi_badan <= 52.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 3.3 &&
    tinggi_badan >= 53 &&
    tinggi_badan <= 63.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 3.3 &&
    tinggi_badan >= 63.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 3.4 &&
    berat_badan <= 3.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 50.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 3.4 &&
    berat_badan <= 3.8 &&
    tinggi_badan >= 51 &&
    tinggi_badan <= 52.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 3.4 &&
    berat_badan <= 3.8 &&
    tinggi_badan >= 53 &&
    tinggi_badan <= 63.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 3.4 &&
    berat_badan <= 3.8 &&
    tinggi_badan >= 63.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 3.9 &&
    berat_badan <= 5.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 50.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 3.9 &&
    berat_badan <= 5.8 &&
    tinggi_badan >= 51 &&
    tinggi_badan <= 52.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 3.9 &&
    berat_badan <= 5.8 &&
    tinggi_badan >= 53 &&
    tinggi_badan <= 63.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 3.9 &&
    berat_badan <= 5.8 &&
    tinggi_badan >= 63.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 50.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.9 &&
    tinggi_badan >= 51 &&
    tinggi_badan <= 52.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.9 &&
    tinggi_badan >= 53 &&
    tinggi_badan <= 63.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 2 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.9 &&
    (tinggi_badan >= 63.3, ss)
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // -------------------------------------------------------------------------------------------
  // UMUR 3 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 3.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 53.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 3.9 &&
    tinggi_badan >= 53.5 &&
    tinggi_badan <= 55.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 3.9 &&
    tinggi_badan >= 55.6 &&
    tinggi_badan <= 66.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 3.9 &&
    tinggi_badan >= 66.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4 &&
    berat_badan <= 4.4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 53.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4 &&
    berat_badan <= 4.4 &&
    tinggi_badan >= 53.5 &&
    tinggi_badan <= 55.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4 &&
    berat_badan <= 4.4 &&
    tinggi_badan >= 55.6 &&
    tinggi_badan <= 63.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4 &&
    berat_badan <= 4.4 &&
    tinggi_badan >= 63.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4.5 &&
    berat_badan <= 6.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 53.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4.5 &&
    berat_badan <= 6.6 &&
    tinggi_badan >= 53.5 &&
    tinggi_badan <= 55.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4.5 &&
    berat_badan <= 6.6 &&
    tinggi_badan >= 55.6 &&
    tinggi_badan <= 63.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4.5 &&
    berat_badan <= 6.6 &&
    tinggi_badan >= 63.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 53.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.7 &&
    tinggi_badan >= 53.5 &&
    tinggi_badan <= 55.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.7 &&
    tinggi_badan >= 55.6 &&
    tinggi_badan <= 63.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 3 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.7 &&
    tinggi_badan >= 63.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // -------------------------------------------------------------------------------------------
  // UMUR 4 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 4.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 55.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 4.3 &&
    tinggi_badan >= 55.6 &&
    tinggi_badan <= 57.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 4.3 &&
    tinggi_badan >= 57.8 &&
    tinggi_badan <= 68.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 4.3 &&
    tinggi_badan >= 68.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4.4 &&
    berat_badan <= 4.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 55.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4.4 &&
    berat_badan <= 4.9 &&
    tinggi_badan >= 55.6 &&
    tinggi_badan <= 57.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4.4 &&
    berat_badan <= 4.9 &&
    tinggi_badan >= 57.8 &&
    tinggi_badan <= 68.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4.4 &&
    berat_badan <= 4.9 &&
    tinggi_badan >= 68.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5 &&
    berat_badan <= 7.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 55.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5 &&
    berat_badan <= 7.3 &&
    tinggi_badan >= 55.6 &&
    tinggi_badan <= 57.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5 &&
    berat_badan <= 7.3 &&
    tinggi_badan >= 57.8 &&
    tinggi_badan <= 68.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5 &&
    berat_badan <= 7.3 &&
    tinggi_badan >= 68.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 55.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.4 &&
    tinggi_badan >= 55.6 &&
    tinggi_badan <= 57.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.4 &&
    tinggi_badan >= 57.8 &&
    tinggi_badan <= 68.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 4 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.4 &&
    tinggi_badan >= 68.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // -------------------------------------------------------------------------------------------
  // UMUR 5 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 4.7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 57.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 4.7 &&
    tinggi_badan >= 57.4 &&
    tinggi_badan <= 59.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 4.7 &&
    tinggi_badan >= 59.6 &&
    tinggi_badan <= 70.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 4.7 &&
    tinggi_badan >= 70.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4.8 &&
    berat_badan <= 5.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 57.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4.8 &&
    berat_badan <= 5.3 &&
    tinggi_badan >= 57.4 &&
    tinggi_badan <= 59.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4.8 &&
    berat_badan <= 5.3 &&
    tinggi_badan >= 59.6 &&
    tinggi_badan <= 70.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 4.8 &&
    berat_badan <= 5.3 &&
    tinggi_badan >= 70.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.4 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 57.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.4 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 57.4 &&
    tinggi_badan <= 59.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.4 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 59.6 &&
    tinggi_badan <= 70.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.4 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 70.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 57.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.9 &&
    tinggi_badan >= 57.4 &&
    tinggi_badan <= 59.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.9 &&
    tinggi_badan >= 59.6 &&
    tinggi_badan <= 70.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 5 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.9 &&
    tinggi_badan >= 70.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // -------------------------------------------------------------------------------------------
  // UMUR 6 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 58.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5 &&
    tinggi_badan >= 58.9 &&
    tinggi_badan <= 61.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5 &&
    tinggi_badan >= 61.2 &&
    tinggi_badan <= 72.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5 &&
    tinggi_badan >= 72.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.1 &&
    berat_badan <= 5.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 58.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.1 &&
    berat_badan <= 5.6 &&
    tinggi_badan >= 58.9 &&
    tinggi_badan <= 61.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.1 &&
    berat_badan <= 5.6 &&
    tinggi_badan >= 61.2 &&
    tinggi_badan <= 72.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.1 &&
    berat_badan <= 5.6 &&
    tinggi_badan >= 72.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.7 &&
    berat_badan <= 8.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 58.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.7 &&
    berat_badan <= 8.2 &&
    tinggi_badan >= 58.9 &&
    tinggi_badan <= 61.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.7 &&
    berat_badan <= 8.2 &&
    tinggi_badan >= 61.2 &&
    tinggi_badan <= 72.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.7 &&
    berat_badan <= 8.2 &&
    tinggi_badan >= 72.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 58.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.3 &&
    tinggi_badan >= 58.9 &&
    tinggi_badan <= 61.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.3 &&
    tinggi_badan >= 61.2 &&
    tinggi_badan <= 72.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 6 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.3 &&
    tinggi_badan >= 72.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 7 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 60.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.2 &&
    tinggi_badan >= 60.3 &&
    tinggi_badan <= 62.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.2 &&
    tinggi_badan >= 62.7 &&
    tinggi_badan <= 74.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.2 &&
    tinggi_badan >= 74.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.3 &&
    berat_badan <= 5.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 60.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.3 &&
    berat_badan <= 5.9 &&
    tinggi_badan >= 60.3 &&
    tinggi_badan <= 62.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.3 &&
    berat_badan <= 5.9 &&
    tinggi_badan >= 62.7 &&
    tinggi_badan <= 74.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.3 &&
    berat_badan <= 5.9 &&
    tinggi_badan >= 74.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6 &&
    berat_badan <= 8.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 60.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6 &&
    berat_badan <= 8.6 &&
    tinggi_badan >= 60.3 &&
    tinggi_badan <= 62.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6 &&
    berat_badan <= 8.6 &&
    tinggi_badan >= 62.7 &&
    tinggi_badan <= 74.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6 &&
    berat_badan <= 8.6 &&
    tinggi_badan >= 74.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 60.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.7 &&
    tinggi_badan >= 60.3 &&
    tinggi_badan <= 62.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.7 &&
    tinggi_badan >= 62.7 &&
    tinggi_badan <= 74.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 7 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.7 &&
    tinggi_badan >= 74.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 8 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 61.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.5 &&
    tinggi_badan >= 61.7 &&
    tinggi_badan <= 63.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.5 &&
    tinggi_badan >= 64 &&
    tinggi_badan <= 75.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.5 &&
    tinggi_badan >= 75.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.6 &&
    berat_badan <= 6.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 61.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.6 &&
    berat_badan <= 6.2 &&
    tinggi_badan >= 61.7 &&
    tinggi_badan <= 63.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.6 &&
    berat_badan <= 6.2 &&
    tinggi_badan >= 64 &&
    tinggi_badan <= 75.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.6 &&
    berat_badan <= 6.2 &&
    tinggi_badan >= 75.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.3 &&
    berat_badan <= 9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 61.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.3 &&
    berat_badan <= 9 &&
    tinggi_badan >= 61.7 &&
    tinggi_badan <= 63.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.3 &&
    berat_badan <= 9 &&
    tinggi_badan >= 64 &&
    tinggi_badan <= 75.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.3 &&
    berat_badan <= 9 &&
    tinggi_badan >= 75.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 9.1 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 61.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 9.1 &&
    tinggi_badan >= 61.7 &&
    tinggi_badan <= 63.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 9.1 &&
    tinggi_badan >= 64 &&
    tinggi_badan <= 75.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 8 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 9.1 &&
    tinggi_badan >= 75.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 9 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 62.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.7 &&
    tinggi_badan >= 62.9 &&
    tinggi_badan <= 65.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.7 &&
    tinggi_badan >= 65.4 &&
    tinggi_badan <= 77.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.7 &&
    tinggi_badan >= 77.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.8 &&
    berat_badan <= 6.4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 62.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.8 &&
    berat_badan <= 6.4 &&
    tinggi_badan >= 62.9 &&
    tinggi_badan <= 65.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.8 &&
    berat_badan <= 6.4 &&
    tinggi_badan >= 65.4 &&
    tinggi_badan <= 77.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.8 &&
    berat_badan <= 6.4 &&
    tinggi_badan >= 77.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.5 &&
    berat_badan <= 9.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 62.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.5 &&
    berat_badan <= 9.3 &&
    tinggi_badan >= 62.9 &&
    tinggi_badan <= 65.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.5 &&
    berat_badan <= 9.3 &&
    tinggi_badan >= 65.4 &&
    tinggi_badan <= 77.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.5 &&
    berat_badan <= 9.3 &&
    tinggi_badan >= 77.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 9.4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 62.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 9.4 &&
    tinggi_badan >= 62.8 &&
    tinggi_badan <= 65.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 9.4 &&
    tinggi_badan >= 65.4 &&
    tinggi_badan <= 77.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 9 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 9.4 &&
    tinggi_badan >= 77.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 10 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 64
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.8 &&
    tinggi_badan >= 64.1 &&
    tinggi_badan <= 66.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.8 &&
    tinggi_badan >= 66.5 &&
    tinggi_badan <= 78.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 5.8 &&
    tinggi_badan >= 79
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.9 &&
    berat_badan <= 6.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 64
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.9 &&
    berat_badan <= 6.6 &&
    tinggi_badan >= 64.1 &&
    tinggi_badan <= 66.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.9 &&
    berat_badan <= 6.6 &&
    tinggi_badan >= 66.5 &&
    tinggi_badan <= 78.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 5.9 &&
    berat_badan <= 6.6 &&
    tinggi_badan >= 79
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.7 &&
    berat_badan <= 9.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 64
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.7 &&
    berat_badan <= 9.6 &&
    tinggi_badan >= 64.1 &&
    tinggi_badan <= 66.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.7 &&
    berat_badan <= 9.6 &&
    tinggi_badan >= 66.5 &&
    tinggi_badan <= 78.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.7 &&
    berat_badan <= 9.6 &&
    tinggi_badan >= 79
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 9.7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 64
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 9.7 &&
    tinggi_badan >= 64.1 &&
    tinggi_badan <= 66.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 9.7 &&
    tinggi_badan >= 66.5 &&
    tinggi_badan <= 78.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 10 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 9.7 &&
    tinggi_badan >= 79
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 11 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 65.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6 &&
    tinggi_badan >= 65.2 &&
    tinggi_badan <= 67.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6 &&
    tinggi_badan >= 67.7 &&
    tinggi_badan <= 80.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6 &&
    tinggi_badan >= 80.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.1 &&
    berat_badan <= 6.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 65.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.1 &&
    berat_badan <= 6.8 &&
    tinggi_badan >= 65.2 &&
    tinggi_badan <= 67.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.1 &&
    berat_badan <= 6.8 &&
    tinggi_badan >= 67.7 &&
    tinggi_badan <= 80.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.1 &&
    berat_badan <= 6.8 &&
    tinggi_badan >= 80.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.9 &&
    berat_badan <= 9.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 65.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.9 &&
    berat_badan <= 9.9 &&
    tinggi_badan >= 65.2 &&
    tinggi_badan <= 67.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.9 &&
    berat_badan <= 9.9 &&
    tinggi_badan >= 67.7 &&
    tinggi_badan <= 80.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.9 &&
    berat_badan <= 9.9 &&
    tinggi_badan >= 80.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 10 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 65.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 10 &&
    tinggi_badan >= 65.2 &&
    tinggi_badan <= 67.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 10 &&
    tinggi_badan >= 67.7 &&
    tinggi_badan <= 80.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 11 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 10 &&
    tinggi_badan >= 80.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 12 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 66.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.2 &&
    tinggi_badan >= 66.3 &&
    tinggi_badan <= 68.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.2 &&
    tinggi_badan >= 68.9 &&
    tinggi_badan <= 81.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.2 &&
    tinggi_badan >= 81.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.3 &&
    berat_badan <= 6.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 66.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.3 &&
    berat_badan <= 6.9 &&
    tinggi_badan >= 66.3 &&
    tinggi_badan <= 68.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.3 &&
    berat_badan <= 6.9 &&
    tinggi_badan >= 68.9 &&
    tinggi_badan <= 81.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.3 &&
    berat_badan <= 6.9 &&
    tinggi_badan >= 81.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7 &&
    berat_badan <= 10.1 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 66.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7 &&
    berat_badan <= 10.1 &&
    tinggi_badan >= 66.3 &&
    tinggi_badan <= 68.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7 &&
    berat_badan <= 10.1 &&
    tinggi_badan >= 68.9 &&
    tinggi_badan <= 81.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7 &&
    berat_badan <= 10.1 &&
    tinggi_badan >= 81.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 10.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 66.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 10.9 &&
    tinggi_badan >= 66.3 &&
    tinggi_badan <= 68.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 10.9 &&
    tinggi_badan >= 68.9 &&
    tinggi_badan <= 81.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 12 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 10.9 &&
    tinggi_badan >= 81.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 13 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 67.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.3 &&
    tinggi_badan >= 67.3 &&
    tinggi_badan <= 69.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.3 &&
    tinggi_badan >= 70 &&
    tinggi_badan <= 83.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.3 &&
    tinggi_badan >= 83.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.4 &&
    berat_badan <= 7.1 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 67.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.4 &&
    berat_badan <= 7.1 &&
    tinggi_badan >= 67.3 &&
    tinggi_badan <= 69.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.4 &&
    berat_badan <= 7.1 &&
    tinggi_badan >= 70 &&
    tinggi_badan <= 83.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.4 &&
    berat_badan <= 7.1 &&
    tinggi_badan >= 83.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.2 &&
    berat_badan <= 10.4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 67.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.2 &&
    berat_badan <= 10.4 &&
    tinggi_badan >= 67.3 &&
    tinggi_badan <= 69.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.2 &&
    berat_badan <= 10.4 &&
    tinggi_badan >= 70 &&
    tinggi_badan <= 83.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.2 &&
    berat_badan <= 10.4 &&
    tinggi_badan >= 83.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 10.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 67.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 10.5 &&
    tinggi_badan >= 67.3 &&
    tinggi_badan <= 69.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 10.5 &&
    tinggi_badan >= 70 &&
    tinggi_badan <= 83.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 13 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 10.5 &&
    tinggi_badan >= 83.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 14 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 68.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.5 &&
    tinggi_badan >= 68.3 &&
    tinggi_badan <= 70.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.5 &&
    tinggi_badan >= 71 &&
    tinggi_badan <= 84.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.5 &&
    tinggi_badan >= 84.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.6 &&
    berat_badan <= 7.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 68.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.6 &&
    berat_badan <= 7.3 &&
    tinggi_badan >= 68.3 &&
    tinggi_badan <= 70.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.6 &&
    berat_badan <= 7.3 &&
    tinggi_badan >= 71 &&
    tinggi_badan <= 84.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.6 &&
    berat_badan <= 7.3 &&
    tinggi_badan >= 84.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.4 &&
    berat_badan <= 10.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 68.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.4 &&
    berat_badan <= 10.6 &&
    tinggi_badan >= 68.3 &&
    tinggi_badan <= 70.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.4 &&
    berat_badan <= 10.6 &&
    tinggi_badan >= 71 &&
    tinggi_badan <= 84.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.4 &&
    berat_badan <= 10.6 &&
    tinggi_badan >= 84.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 10.7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 68.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 10.7 &&
    tinggi_badan >= 68.3 &&
    tinggi_badan <= 70.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 10.7 &&
    tinggi_badan >= 71 &&
    tinggi_badan <= 84.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 14 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 10.7 &&
    tinggi_badan >= 84.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 15 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 69.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.6 &&
    tinggi_badan >= 69.3 &&
    tinggi_badan <= 71.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.6 &&
    tinggi_badan >= 72 &&
    tinggi_badan <= 85.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.6 &&
    tinggi_badan >= 85.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.7 &&
    berat_badan <= 7.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 69.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.7 &&
    berat_badan <= 7.5 &&
    tinggi_badan >= 69.3 &&
    tinggi_badan <= 71.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.7 &&
    berat_badan <= 7.5 &&
    tinggi_badan >= 72 &&
    tinggi_badan <= 85.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.7 &&
    berat_badan <= 7.5 &&
    tinggi_badan >= 85.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.6 &&
    berat_badan <= 10.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 69.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.6 &&
    berat_badan <= 10.9 &&
    tinggi_badan >= 69.3 &&
    tinggi_badan <= 71.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.6 &&
    berat_badan <= 10.9 &&
    tinggi_badan >= 72 &&
    tinggi_badan <= 85.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.6 &&
    berat_badan <= 10.9 &&
    tinggi_badan >= 85.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 69.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11 &&
    tinggi_badan >= 69.3 &&
    tinggi_badan <= 71.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11 &&
    tinggi_badan >= 72 &&
    tinggi_badan <= 85.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 15 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11 &&
    tinggi_badan >= 85.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 16 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 70.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.8 &&
    tinggi_badan >= 70.2 &&
    tinggi_badan <= 72.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.8 &&
    tinggi_badan >= 73 &&
    tinggi_badan <= 87
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.8 &&
    tinggi_badan >= 87.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.9 &&
    berat_badan <= 7.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 70.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.9 &&
    berat_badan <= 7.6 &&
    tinggi_badan >= 70.2 &&
    tinggi_badan <= 72.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.9 &&
    berat_badan <= 7.6 &&
    tinggi_badan >= 73 &&
    tinggi_badan <= 87
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 6.9 &&
    berat_badan <= 7.6 &&
    tinggi_badan >= 87.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.7 &&
    berat_badan <= 11.1 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 70.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.7 &&
    berat_badan <= 11.1 &&
    tinggi_badan >= 70.2 &&
    tinggi_badan <= 72.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.7 &&
    berat_badan <= 11.1 &&
    tinggi_badan >= 73 &&
    tinggi_badan <= 87
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.7 &&
    berat_badan <= 11.1 &&
    tinggi_badan >= 87.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 70.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11.2 &&
    tinggi_badan >= 70.2 &&
    tinggi_badan <= 72.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11.2 &&
    tinggi_badan >= 73 &&
    tinggi_badan <= 87
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 16 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11.2 &&
    tinggi_badan >= 87.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 17 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 71.0
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.9 &&
    tinggi_badan >= 71.1 &&
    tinggi_badan <= 73.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.9 &&
    tinggi_badan >= 74 &&
    tinggi_badan <= 88.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 6.9 &&
    tinggi_badan >= 88.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 71.0
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 71.1 &&
    tinggi_badan <= 73.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 74 &&
    tinggi_badan <= 88.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 88.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.9 &&
    berat_badan <= 11.4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 71.0
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.9 &&
    berat_badan <= 11.4 &&
    tinggi_badan >= 71.1 &&
    tinggi_badan <= 73.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.9 &&
    berat_badan <= 11.4 &&
    tinggi_badan >= 74 &&
    tinggi_badan <= 88.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.9 &&
    berat_badan <= 11.4 &&
    tinggi_badan >= 88.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 71.0
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11.5 &&
    tinggi_badan >= 71.1 &&
    tinggi_badan <= 73.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11.5 &&
    tinggi_badan >= 74 &&
    tinggi_badan <= 88.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 17 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11.5 &&
    tinggi_badan >= 88.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 18 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.1 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 71.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.1 &&
    tinggi_badan >= 72 &&
    tinggi_badan <= 74.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.1 &&
    tinggi_badan >= 74.9 &&
    tinggi_badan <= 89.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.1 &&
    tinggi_badan >= 89.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.2 &&
    berat_badan <= 8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 71.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.2 &&
    berat_badan <= 8 &&
    tinggi_badan >= 72 &&
    tinggi_badan <= 74.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.2 &&
    berat_badan <= 8 &&
    tinggi_badan >= 74.9 &&
    tinggi_badan <= 89.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.2 &&
    berat_badan <= 8 &&
    tinggi_badan >= 89.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.1 &&
    berat_badan <= 11.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 71.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.1 &&
    berat_badan <= 11.5 &&
    tinggi_badan >= 72 &&
    tinggi_badan <= 74.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.1 &&
    berat_badan <= 11.5 &&
    tinggi_badan >= 74.9 &&
    tinggi_badan <= 89.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.1 &&
    berat_badan <= 11.5 &&
    tinggi_badan >= 89.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 71.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11.6 &&
    tinggi_badan >= 72 &&
    tinggi_badan <= 74.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11.6 &&
    tinggi_badan >= 74.9 &&
    tinggi_badan <= 89.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 18 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11.6 &&
    tinggi_badan >= 89.5
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 19 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 72.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.2 &&
    tinggi_badan >= 72.8 &&
    tinggi_badan <= 75.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.2 &&
    tinggi_badan >= 75.8 &&
    tinggi_badan <= 90.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.2 &&
    tinggi_badan >= 90.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.3 &&
    berat_badan <= 8.1 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 72.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.3 &&
    berat_badan <= 8.1 &&
    tinggi_badan >= 72.8 &&
    tinggi_badan <= 75.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.3 &&
    berat_badan <= 8.1 &&
    tinggi_badan >= 75.8 &&
    tinggi_badan <= 90.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.3 &&
    berat_badan <= 8.1 &&
    tinggi_badan >= 90.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.2 &&
    berat_badan <= 11.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 72.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.2 &&
    berat_badan <= 11.8 &&
    tinggi_badan >= 72.8 &&
    tinggi_badan <= 75.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.2 &&
    berat_badan <= 11.8 &&
    tinggi_badan >= 75.8 &&
    tinggi_badan <= 90.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.2 &&
    berat_badan <= 11.8 &&
    tinggi_badan >= 90.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 72.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11.9 &&
    tinggi_badan >= 72.8 &&
    tinggi_badan <= 75.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11.9 &&
    tinggi_badan >= 75.8 &&
    tinggi_badan <= 90.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 19 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 11.9 &&
    tinggi_badan >= 90.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 20 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 73.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.4 &&
    tinggi_badan >= 73.7 &&
    tinggi_badan <= 76.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.4 &&
    tinggi_badan >= 76.7 &&
    tinggi_badan <= 91.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.4 &&
    tinggi_badan >= 91.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.5 &&
    berat_badan <= 8.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 73.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.5 &&
    berat_badan <= 8.3 &&
    tinggi_badan >= 73.7 &&
    tinggi_badan <= 76.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.5 &&
    berat_badan <= 8.3 &&
    tinggi_badan >= 76.7 &&
    tinggi_badan <= 91.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.5 &&
    berat_badan <= 8.3 &&
    tinggi_badan >= 91.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.4 &&
    berat_badan <= 12.1 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 73.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.4 &&
    berat_badan <= 12.1 &&
    tinggi_badan >= 73.7 &&
    tinggi_badan <= 76.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.4 &&
    berat_badan <= 12.1 &&
    tinggi_badan >= 76.7 &&
    tinggi_badan <= 91.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.4 &&
    berat_badan <= 12.1 &&
    tinggi_badan >= 91.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.2 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 73.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.2 &&
    tinggi_badan >= 73.7 &&
    tinggi_badan <= 76.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.2 &&
    tinggi_badan >= 76.7 &&
    tinggi_badan <= 91.7
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 20 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.2 &&
    tinggi_badan >= 91.8
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 21 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 74.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.5 &&
    tinggi_badan >= 74.5 &&
    tinggi_badan <= 77.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.5 &&
    tinggi_badan >= 77.5 &&
    tinggi_badan <= 92.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.5 &&
    tinggi_badan >= 93
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.6 &&
    berat_badan <= 8.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 74.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.6 &&
    berat_badan <= 8.5 &&
    tinggi_badan >= 74.5 &&
    tinggi_badan <= 77.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.6 &&
    berat_badan <= 8.5 &&
    tinggi_badan >= 77.5 &&
    tinggi_badan <= 92.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.6 &&
    berat_badan <= 8.5 &&
    tinggi_badan >= 93
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.6 &&
    berat_badan <= 12.3 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 74.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.6 &&
    berat_badan <= 12.3 &&
    tinggi_badan >= 74.5 &&
    tinggi_badan <= 77.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.6 &&
    berat_badan <= 12.3 &&
    tinggi_badan >= 77.5 &&
    tinggi_badan <= 92.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.6 &&
    berat_badan <= 12.3 &&
    tinggi_badan >= 93
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.4 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 74.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.4 &&
    tinggi_badan >= 74.5 &&
    tinggi_badan <= 77.4
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.4 &&
    tinggi_badan >= 77.5 &&
    tinggi_badan <= 92.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 21 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.4 &&
    tinggi_badan >= 93
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 22 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.7 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 75.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.7 &&
    tinggi_badan >= 75.2 &&
    tinggi_badan <= 78.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.7 &&
    tinggi_badan >= 78.4 &&
    tinggi_badan <= 94
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.7 &&
    tinggi_badan >= 94.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.8 &&
    berat_badan <= 8.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 75.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.8 &&
    berat_badan <= 8.6 &&
    tinggi_badan >= 75.2 &&
    tinggi_badan <= 78.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.8 &&
    berat_badan <= 8.6 &&
    tinggi_badan >= 78.4 &&
    tinggi_badan <= 94
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.8 &&
    berat_badan <= 8.6 &&
    tinggi_badan >= 94.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.7 &&
    berat_badan <= 12.5 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 75.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.7 &&
    berat_badan <= 12.5 &&
    tinggi_badan >= 75.2 &&
    tinggi_badan <= 78.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.7 &&
    berat_badan <= 12.5 &&
    tinggi_badan >= 78.4 &&
    tinggi_badan <= 94
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.7 &&
    berat_badan <= 12.5 &&
    tinggi_badan >= 94.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.6 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 75.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.6 &&
    tinggi_badan >= 75.2 &&
    tinggi_badan <= 78.3
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.6 &&
    tinggi_badan >= 78.4 &&
    tinggi_badan <= 94
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 22 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.6 &&
    tinggi_badan >= 94.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 23 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 75.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 76 &&
    tinggi_badan <= 79.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 79.2 &&
    tinggi_badan <= 95
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 7.8 &&
    tinggi_badan >= 95.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.9 &&
    berat_badan <= 8.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 75.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.9 &&
    berat_badan <= 8.8 &&
    tinggi_badan >= 76 &&
    tinggi_badan <= 79.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.9 &&
    berat_badan <= 8.8 &&
    tinggi_badan >= 79.2 &&
    tinggi_badan <= 95
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 7.9 &&
    berat_badan <= 8.8 &&
    tinggi_badan >= 95.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.9 &&
    berat_badan <= 12.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 75.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.9 &&
    berat_badan <= 12.8 &&
    tinggi_badan >= 76 &&
    tinggi_badan <= 79.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.9 &&
    berat_badan <= 12.8 &&
    tinggi_badan >= 79.2 &&
    tinggi_badan <= 95
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.9 &&
    berat_badan <= 12.8 &&
    tinggi_badan >= 95.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 75.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.8 &&
    tinggi_badan >= 76 &&
    tinggi_badan <= 79.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.8 &&
    tinggi_badan >= 79.2 &&
    tinggi_badan <= 95
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 23 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.8 &&
    tinggi_badan >= 95.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  //-------------------------------------------------------------------------------------------
  // UMUR 24 PEREMPUAN
  // <-3 SD & < -3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 76.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -3 SD sd < -2SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8 &&
    tinggi_badan >= 76.7 &&
    tinggi_badan <= 79.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // <-3 SD & -2 SD sd + 3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8 &&
    tinggi_badan >= 80 &&
    tinggi_badan <= 96.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // <-3 SD & > +3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 0 &&
    berat_badan <= 8 &&
    tinggi_badan >= 96.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Sangat Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & <-3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.1 &&
    berat_badan <= 8.9 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 76.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -3 SD sd < -2 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.1 &&
    berat_badan <= 8.9 &&
    tinggi_badan >= 76.7 &&
    tinggi_badan <= 79.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Buruk");
  }
  // -3 SD sd < -2 SD & -2 SD sd +3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.1 &&
    berat_badan <= 8.9 &&
    tinggi_badan >= 80 &&
    tinggi_badan <= 96.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -3 SD sd < -2 SD & > +3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 8.1 &&
    berat_badan <= 8.9 &&
    tinggi_badan >= 96.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Kurang");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & < -3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 9 &&
    berat_badan <= 13 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 76.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -3 SD sd <- 2 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 9 &&
    berat_badan <= 13 &&
    tinggi_badan >= 76.7 &&
    tinggi_badan <= 79.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Gizi Kurang");
  }
  // -2 SD sd +1 SD & -2 SD sd + 3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 9 &&
    berat_badan <= 13 &&
    tinggi_badan >= 80 &&
    tinggi_badan <= 96.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // -2 SD sd +1 SD & > +3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 9 &&
    berat_badan <= 13 &&
    tinggi_badan >= 96.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Berat Badan Normal");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Baik");
  }
  // > +1 SD & < -3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 13.1 &&
    tinggi_badan >= 0 &&
    tinggi_badan <= 76.6
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Sangat Pendek");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -3 SD sd < -2 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.8 &&
    tinggi_badan >= 76.7 &&
    tinggi_badan <= 79.9
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Stunting");
    status_gizi_imt_u.setAttribute("value", "Obesitas");
  }
  // > +1 SD & -2 SD sd +3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.8 &&
    tinggi_badan >= 80 &&
    tinggi_badan <= 96.1
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Normal");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
  // > +1 SD & > +3 SD
  else if (
    umur == 24 &&
    document.getElementById("jenis_kelamin_perempuan").checked &&
    berat_badan >= 12.8 &&
    tinggi_badan >= 96.2
  ) {
    status_gizi_bb_u.setAttribute("value", "Resiko Berat Badan Lebih");
    status_gizi_tb_u.setAttribute("value", "Tinggi");
    status_gizi_imt_u.setAttribute("value", "Gizi Lebih");
  }
}

// LOGIC KONVERGENSI INDIKATOR
a = "";
b = 0;

const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "Augustus";
month[8] = "September";
month[9] = "Oktober";
month[10] = "November";
month[11] = "Desember";

var dateObj = new Date();
var bulan = month[dateObj.getUTCMonth()]; //months from 1-12
var year = dateObj.getUTCFullYear();

newdate = bulan + " " + year;

let jumlah_seharusnya = document.getElementById("jumlah_seharusnya");
jumlah_seharusnya.setAttribute("value", 10);

let bulan_pemeriksaan = document.getElementById("bulan_pemeriksaan");
bulan_pemeriksaan.setAttribute("value", newdate);


$(document).ready(function () {
  let pemberian_imunisasi_dasar = $("#pemberian_imunisasi_dasar").val("Y");
  let jumlah_diterima_lengkap = $("#jumlah_diterima_lengkap").val(10);
  let pengukuran_berat_badan = $("#pengukuran_berat_badan").val("Y");
  let pengukuran_tinggi_badan = $("#pengukuran_tinggi_badan").val("Y");
  let konseling_gizi_bagi_ortu = $("#konseling_gizi_bagi_ortu").val("Y");
  let kunjungan_rumah = $("#kunjungan_rumah").val("Y");
  let kepemilikan_akses_air_bersih = $("#kepemilikan_akses_air_bersih").val(
    "Y"
  );
  let kepemilikan_jamban_sehat = $("#kepemilikan_jamban_sehat").val("Y");
  let akta_lahir = $("#akta_lahir").val("Y");
  let jaminan_kesehatan = $("#jaminan_kesehatan").val("Y");
  let pengasuhan_paud = $("#pengasuhan_paud").val("Y");
  let presentase = $("#presentase").val("100%");

  // pemberian imunisasi dasar
  pemberian_imunisasi_dasar.change(function () {
    // KEMUNGKINAN DITEKAN YA
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(a + 1).slideDown("slow");
      presentase.val("10%").slideDown("slow");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(2);
      presentase.val("20%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(3);
      presentase.val("30%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(4);
      presentase.val("40%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(5);
      presentase.val("50%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(6);
      presentase.val("60%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(7);
      presentase.val("70%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(8);
      presentase.val("80%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(9);
      presentase.val("90%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(10);
      presentase.val("100%");
    }

    // KEMUNGKINAN DITEKAN TIDAK
    else if (this.value === "T" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 - 1);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 - 1);
      presentase.val("10%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 - 1);
      presentase.val("20%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 - 1);
      presentase.val("30%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 - 1);
      presentase.val("40%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 - 1);
      presentase.val("50%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 - 1);
      presentase.val("60%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 - 1);
      presentase.val("70%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 - 1);
      presentase.val("80%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 10) {
      jumlah_diterima_lengkap.val(10 - 1);
      presentase.val("90%");
    }
  });

  // pengukuran berat badan
  pengukuran_berat_badan.change(function () {
    // KEMUNGKINAN DITEKAN YA
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 + 1);
      presentase.val("20%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 + 1);
      presentase.val("30%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 + 1);
      presentase.val("40%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 + 1);
      presentase.val("50%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 + 1);
      presentase.val("60%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 + 1);
      presentase.val("70%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 + 1);
      presentase.val("80%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 + 1);
      presentase.val("90%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 + 1);
      presentase.val("100%");
    }
    // KEMUNGKINAN DITEKAN TIDAK
    else if (this.value === "T" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 - 1);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 - 1);
      presentase.val("10%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 - 1);
      presentase.val("20%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 - 1);
      presentase.val("30%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 - 1);
      presentase.val("40%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 - 1);
      presentase.val("50%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 - 1);
      presentase.val("60%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 - 1);
      presentase.val("70%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 - 1);
      presentase.val("80%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 10) {
      jumlah_diterima_lengkap.val(10 - 1);
      presentase.val("90%");
    }
  });

  // pengukuran tinggi badan
  pengukuran_tinggi_badan.change(function () {
    // KEMUNGKINAN DITEKAN YA
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 + 1);
      presentase.val("20%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 + 1);
      presentase.val("30%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 + 1);
      presentase.val("40%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 + 1);
      presentase.val("50%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 + 1);
      presentase.val("60%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 + 1);
      presentase.val("70%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 + 1);
      presentase.val("80%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 + 1);
      presentase.val("90%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 + 1);
      presentase.val("100%");
    }
    // KEMUNGKINAN DITEKAN TIDAK
    else if (this.value === "T" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 - 1);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 - 1);
      presentase.val("10%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 - 1);
      presentase.val("20%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 - 1);
      presentase.val("30%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 - 1);
      presentase.val("40%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 - 1);
      presentase.val("50%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 - 1);
      presentase.val("60%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 - 1);
      presentase.val("70%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 - 1);
      presentase.val("80%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 10) {
      jumlah_diterima_lengkap.val(10 - 1);
      presentase.val("90%");
    }
  });

  // konseling gizi bagi orang tua
  konseling_gizi_bagi_ortu.change(function () {
    // KEMUNGKINAN DITEKAN YA
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 + 1);
      presentase.val("20%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 + 1);
      presentase.val("30%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 + 1);
      presentase.val("40%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 + 1);
      presentase.val("50%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 + 1);
      presentase.val("60%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 + 1);
      presentase.val("70%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 + 1);
      presentase.val("80%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 + 1);
      presentase.val("90%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 + 1);
      presentase.val("100%");
    }
    // KEMUNGKINAN DITEKAN TIDAK
    else if (this.value === "T" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 - 1);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 - 1);
      presentase.val("10%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 - 1);
      presentase.val("20%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 - 1);
      presentase.val("30%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 - 1);
      presentase.val("40%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 - 1);
      presentase.val("50%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 - 1);
      presentase.val("60%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 - 1);
      presentase.val("70%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 - 1);
      presentase.val("80%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 10) {
      jumlah_diterima_lengkap.val(10 - 1);
      presentase.val("90%");
    }
  });

  // kunjungan rumah
  kunjungan_rumah.change(function () {
    // KEMUNGKINAN DITEKAN YA
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 + 1);
      presentase.val("20%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 + 1);
      presentase.val("30%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 + 1);
      presentase.val("40%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 + 1);
      presentase.val("50%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 + 1);
      presentase.val("60%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 + 1);
      presentase.val("70%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 + 1);
      presentase.val("80%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 + 1);
      presentase.val("90%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 + 1);
      presentase.val("100%");
    }
    // KEMUNGKINAN DITEKAN TIDAK
    else if (this.value === "T" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 - 1);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 - 1);
      presentase.val("10%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 - 1);
      presentase.val("20%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 - 1);
      presentase.val("30%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 - 1);
      presentase.val("40%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 - 1);
      presentase.val("50%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 - 1);
      presentase.val("60%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 - 1);
      presentase.val("70%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 - 1);
      presentase.val("80%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 10) {
      jumlah_diterima_lengkap.val(10 - 1);
      presentase.val("90%");
    }
  });

  // kepemilikan akses air bersih
  kepemilikan_akses_air_bersih.change(function () {
    // KEMUNGKINAN DITEKAN YA
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 + 1);
      presentase.val("20%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 + 1);
      presentase.val("30%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 + 1);
      presentase.val("40%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 + 1);
      presentase.val("50%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 + 1);
      presentase.val("60%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 + 1);
      presentase.val("70%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 + 1);
      presentase.val("80%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 + 1);
      presentase.val("90%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 + 1);
      presentase.val("100%");
    }
    // KEMUNGKINAN DITEKAN TIDAK
    else if (this.value === "T" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 - 1);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 - 1);
      presentase.val("10%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 - 1);
      presentase.val("20%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 - 1);
      presentase.val("30%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 - 1);
      presentase.val("40%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 - 1);
      presentase.val("50%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 - 1);
      presentase.val("60%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 - 1);
      presentase.val("70%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 - 1);
      presentase.val("80%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 10) {
      jumlah_diterima_lengkap.val(10 - 1);
      presentase.val("90%");
    }
  });

  // kepemilikan jamban sehat
  kepemilikan_jamban_sehat.change(function () {
    // KEMUNGKINAN DITEKAN YA
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 + 1);
      presentase.val("20%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 + 1);
      presentase.val("30%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 + 1);
      presentase.val("40%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 + 1);
      presentase.val("50%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 + 1);
      presentase.val("60%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 + 1);
      presentase.val("70%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 + 1);
      presentase.val("80%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 + 1);
      presentase.val("90%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 + 1);
      presentase.val("100%");
    }
    // KEMUNGKINAN DITEKAN TIDAK
    else if (this.value === "T" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 - 1);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 - 1);
      presentase.val("10%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 - 1);
      presentase.val("20%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 - 1);
      presentase.val("30%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 - 1);
      presentase.val("40%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 - 1);
      presentase.val("50%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 - 1);
      presentase.val("60%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 - 1);
      presentase.val("70%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 - 1);
      presentase.val("80%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 10) {
      jumlah_diterima_lengkap.val(10 - 1);
      presentase.val("90%");
    }
  });

  // akta lahir
  akta_lahir.change(function () {
    // KEMUNGKINAN DITEKAN YA
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 + 1);
      presentase.val("20%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 + 1);
      presentase.val("30%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 + 1);
      presentase.val("40%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 + 1);
      presentase.val("50%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 + 1);
      presentase.val("60%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 + 1);
      presentase.val("70%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 + 1);
      presentase.val("80%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 + 1);
      presentase.val("90%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 + 1);
      presentase.val("100%");
    }
    // KEMUNGKINAN DITEKAN TIDAK
    else if (this.value === "T" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 - 1);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 - 1);
      presentase.val("10%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 - 1);
      presentase.val("20%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 - 1);
      presentase.val("30%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 - 1);
      presentase.val("40%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 - 1);
      presentase.val("50%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 - 1);
      presentase.val("60%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 - 1);
      presentase.val("70%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 - 1);
      presentase.val("80%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 10) {
      jumlah_diterima_lengkap.val(10 - 1);
      presentase.val("90%");
    }
  });

  // jaminan kesehatan
  jaminan_kesehatan.change(function () {
    // KEMUNGKINAN DITEKAN YA
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 + 1);
      presentase.val("20%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 + 1);
      presentase.val("30%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 + 1);
      presentase.val("40%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 + 1);
      presentase.val("50%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 + 1);
      presentase.val("60%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 + 1);
      presentase.val("70%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 + 1);
      presentase.val("80%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 + 1);
      presentase.val("90%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 + 1);
      presentase.val("100%");
    }
    // KEMUNGKINAN DITEKAN TIDAK
    else if (this.value === "T" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 - 1);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 - 1);
      presentase.val("10%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 - 1);
      presentase.val("20%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 - 1);
      presentase.val("30%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 - 1);
      presentase.val("40%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 - 1);
      presentase.val("50%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 - 1);
      presentase.val("60%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 - 1);
      presentase.val("70%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 - 1);
      presentase.val("80%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 10) {
      jumlah_diterima_lengkap.val(10 - 1);
      presentase.val("90%");
    }
  });

  // pengasuhan PAUD
  pengasuhan_paud.change(function () {
    // KEMUNGKINAN DITEKAN YA
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(1);
      presentase.val("10%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 + 1);
      presentase.val("20%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 + 1);
      presentase.val("30%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 + 1);
      presentase.val("40%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 + 1);
      presentase.val("50%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 + 1);
      presentase.val("60%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 + 1);
      presentase.val("70%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 + 1);
      presentase.val("80%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 + 1);
      presentase.val("90%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 + 1);
      presentase.val("100%");
    }
    // KEMUNGKINAN DITEKAN TIDAK
    else if (this.value === "T" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(0);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(1 - 1);
      presentase.val("0%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(2 - 1);
      presentase.val("10%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 - 1);
      presentase.val("20%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 - 1);
      presentase.val("30%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 - 1);
      presentase.val("40%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 - 1);
      presentase.val("50%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 - 1);
      presentase.val("60%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 - 1);
      presentase.val("70%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 - 1);
      presentase.val("80%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 10) {
      jumlah_diterima_lengkap.val(10 - 1);
      presentase.val("90%");
    }
  });
});


function validationEditStunting (){
    
    let edit_kia = $('#edit_kia');
    let edit_nama = $('#edit_nama');
    let edit_umur = $('#edit_umur');

    $(document).ready(function(){

        edit_kia.on('keyup',function(){
            edit_kia.addClass('is-valid');

            if (edit_kia.val() === ''){
                edit_kia.removeClass('is-valid');
            }
        });

        edit_nama.on('keyup',function(){
            edit_nama.addClass('is-valid');

            if (edit_nama.val() === ''){
                edit_nama.removeClass('is-valid');
            }
        });

        edit_umur.on('keyup',function(){
            edit_umur.addClass('is-valid');

            if (edit_umur.val() === ''){
                edit_umur.removeClass('is-valid');
            }
        });

    });
}