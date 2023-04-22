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