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
jumlah_seharusnya.setAttribute("value", 8);

let bulan_pemeriksaan = document.getElementById("bulan_pemeriksaan");
bulan_pemeriksaan.setAttribute("value", newdate);

$(document).ready(function () {
  let pemeriksaan_kehamilan = $("#pemeriksaan_kehamilan").val("Y");
  let jumlah_diterima_lengkap = $("#jumlah_diterima_lengkap").val(8);
  let dapat_konsumsi_pil_fe = $("#dapat_konsumsi_pil_fe").val("Y");
  let pemeriksaan_nias = $("#pemeriksaan_nias").val("Y");
  let konseling_gizi = $("#konseling_gizi").val("Y");
  let kunjungan_rumah = $("#kunjungan_rumah").val("Y");
  let kepemilikan_akses_air_bersih = $("#kepemilikan_akses_air_bersih").val("Y");
  let kepemilikan_jamban = $("#kepemilikan_jamban").val("Y");
  let jaminan_kesehatan = $("#jaminan_kesehatan").val("Y");
  let presentase = $("#presentase").val("100%");

  // pemeriksaan kehamilan
  pemeriksaan_kehamilan.change(function () {
    // KEMUNGKINAN DITEKAN YA
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
      jumlah_diterima_lengkap.val(a + 1).slideDown("slow");
      presentase.val("12,5%").slideDown("slow");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
      jumlah_diterima_lengkap.val(1);
      presentase.val("12,5%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
      jumlah_diterima_lengkap.val(2);
      presentase.val("25%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
      jumlah_diterima_lengkap.val(3);
      presentase.val("37,5%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(4);
      presentase.val("50%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(5);
      presentase.val("62,5%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(6);
      presentase.val("75%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(7);
      presentase.val("87,5%");
    } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(8);
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
      presentase.val("12,5%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
      jumlah_diterima_lengkap.val(3 - 1);
      presentase.val("25%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
      jumlah_diterima_lengkap.val(4 - 1);
      presentase.val("37,5%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
      jumlah_diterima_lengkap.val(5 - 1);
      presentase.val("50%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
      jumlah_diterima_lengkap.val(6 - 1);
      presentase.val("62,5%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
      jumlah_diterima_lengkap.val(7 - 1);
      presentase.val("75%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
      jumlah_diterima_lengkap.val(8 - 1);
      presentase.val("87,5%");
    } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
      jumlah_diterima_lengkap.val(9 - 1);
      presentase.val("100%");
    }
  });

  // dapat & konsumsi pill fe
  dapat_konsumsi_pil_fe.change(function () {
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
        jumlah_diterima_lengkap.val(a + 1).slideDown("slow");
        presentase.val("12,5%").slideDown("slow");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
        jumlah_diterima_lengkap.val(1);
        presentase.val("12,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
        jumlah_diterima_lengkap.val(2);
        presentase.val("25%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
        jumlah_diterima_lengkap.val(3);
        presentase.val("37,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
        jumlah_diterima_lengkap.val(4);
        presentase.val("50%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
        jumlah_diterima_lengkap.val(5);
        presentase.val("62,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
        jumlah_diterima_lengkap.val(6);
        presentase.val("75%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
        jumlah_diterima_lengkap.val(7);
        presentase.val("87,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
        jumlah_diterima_lengkap.val(8);
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
        presentase.val("12,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
        jumlah_diterima_lengkap.val(3 - 1);
        presentase.val("25%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
        jumlah_diterima_lengkap.val(4 - 1);
        presentase.val("37,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
        jumlah_diterima_lengkap.val(5 - 1);
        presentase.val("50%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
        jumlah_diterima_lengkap.val(6 - 1);
        presentase.val("62,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
        jumlah_diterima_lengkap.val(7 - 1);
        presentase.val("75%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
        jumlah_diterima_lengkap.val(8 - 1);
        presentase.val("87,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
        jumlah_diterima_lengkap.val(9 - 1);
        presentase.val("100%");
      }
  });

  // pengukuran tinggi badan
  pemeriksaan_nias.change(function () {
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
        jumlah_diterima_lengkap.val(a + 1).slideDown("slow");
        presentase.val("12,5%").slideDown("slow");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
        jumlah_diterima_lengkap.val(1);
        presentase.val("12,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
        jumlah_diterima_lengkap.val(2);
        presentase.val("25%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
        jumlah_diterima_lengkap.val(3);
        presentase.val("37,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
        jumlah_diterima_lengkap.val(4);
        presentase.val("50%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
        jumlah_diterima_lengkap.val(5);
        presentase.val("62,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
        jumlah_diterima_lengkap.val(6);
        presentase.val("75%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
        jumlah_diterima_lengkap.val(7);
        presentase.val("87,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
        jumlah_diterima_lengkap.val(8);
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
        presentase.val("12,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
        jumlah_diterima_lengkap.val(3 - 1);
        presentase.val("25%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
        jumlah_diterima_lengkap.val(4 - 1);
        presentase.val("37,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
        jumlah_diterima_lengkap.val(5 - 1);
        presentase.val("50%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
        jumlah_diterima_lengkap.val(6 - 1);
        presentase.val("62,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
        jumlah_diterima_lengkap.val(7 - 1);
        presentase.val("75%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
        jumlah_diterima_lengkap.val(8 - 1);
        presentase.val("87,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
        jumlah_diterima_lengkap.val(9 - 1);
        presentase.val("100%");
      }
  });

  // konseling gizi bagi orang tua
  konseling_gizi.change(function () {
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
        jumlah_diterima_lengkap.val(a + 1).slideDown("slow");
        presentase.val("12,5%").slideDown("slow");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
        jumlah_diterima_lengkap.val(1);
        presentase.val("12,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
        jumlah_diterima_lengkap.val(2);
        presentase.val("25%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
        jumlah_diterima_lengkap.val(3);
        presentase.val("37,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
        jumlah_diterima_lengkap.val(4);
        presentase.val("50%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
        jumlah_diterima_lengkap.val(5);
        presentase.val("62,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
        jumlah_diterima_lengkap.val(6);
        presentase.val("75%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
        jumlah_diterima_lengkap.val(7);
        presentase.val("87,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
        jumlah_diterima_lengkap.val(8);
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
        presentase.val("12,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
        jumlah_diterima_lengkap.val(3 - 1);
        presentase.val("25%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
        jumlah_diterima_lengkap.val(4 - 1);
        presentase.val("37,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
        jumlah_diterima_lengkap.val(5 - 1);
        presentase.val("50%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
        jumlah_diterima_lengkap.val(6 - 1);
        presentase.val("62,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
        jumlah_diterima_lengkap.val(7 - 1);
        presentase.val("75%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
        jumlah_diterima_lengkap.val(8 - 1);
        presentase.val("87,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
        jumlah_diterima_lengkap.val(9 - 1);
        presentase.val("100%");
      }
  });

  // kunjungan rumah
  kunjungan_rumah.change(function () {
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
        jumlah_diterima_lengkap.val(a + 1).slideDown("slow");
        presentase.val("12,5%").slideDown("slow");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
        jumlah_diterima_lengkap.val(1);
        presentase.val("12,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
        jumlah_diterima_lengkap.val(2);
        presentase.val("25%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
        jumlah_diterima_lengkap.val(3);
        presentase.val("37,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
        jumlah_diterima_lengkap.val(4);
        presentase.val("50%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
        jumlah_diterima_lengkap.val(5);
        presentase.val("62,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
        jumlah_diterima_lengkap.val(6);
        presentase.val("75%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
        jumlah_diterima_lengkap.val(7);
        presentase.val("87,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
        jumlah_diterima_lengkap.val(8);
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
        presentase.val("12,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
        jumlah_diterima_lengkap.val(3 - 1);
        presentase.val("25%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
        jumlah_diterima_lengkap.val(4 - 1);
        presentase.val("37,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
        jumlah_diterima_lengkap.val(5 - 1);
        presentase.val("50%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
        jumlah_diterima_lengkap.val(6 - 1);
        presentase.val("62,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
        jumlah_diterima_lengkap.val(7 - 1);
        presentase.val("75%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
        jumlah_diterima_lengkap.val(8 - 1);
        presentase.val("87,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
        jumlah_diterima_lengkap.val(9 - 1);
        presentase.val("100%");
      }
  });

  // kepemilikan akses air bersih
  kepemilikan_akses_air_bersih.change(function () {
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
        jumlah_diterima_lengkap.val(a + 1).slideDown("slow");
        presentase.val("12,5%").slideDown("slow");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
        jumlah_diterima_lengkap.val(1);
        presentase.val("12,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
        jumlah_diterima_lengkap.val(2);
        presentase.val("25%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
        jumlah_diterima_lengkap.val(3);
        presentase.val("37,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
        jumlah_diterima_lengkap.val(4);
        presentase.val("50%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
        jumlah_diterima_lengkap.val(5);
        presentase.val("62,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
        jumlah_diterima_lengkap.val(6);
        presentase.val("75%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
        jumlah_diterima_lengkap.val(7);
        presentase.val("87,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
        jumlah_diterima_lengkap.val(8);
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
        presentase.val("12,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
        jumlah_diterima_lengkap.val(3 - 1);
        presentase.val("25%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
        jumlah_diterima_lengkap.val(4 - 1);
        presentase.val("37,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
        jumlah_diterima_lengkap.val(5 - 1);
        presentase.val("50%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
        jumlah_diterima_lengkap.val(6 - 1);
        presentase.val("62,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
        jumlah_diterima_lengkap.val(7 - 1);
        presentase.val("75%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
        jumlah_diterima_lengkap.val(8 - 1);
        presentase.val("87,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
        jumlah_diterima_lengkap.val(9 - 1);
        presentase.val("100%");
      }
  });

  // kepemilikan jamban sehat
  kepemilikan_jamban.change(function () {
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
        jumlah_diterima_lengkap.val(a + 1).slideDown("slow");
        presentase.val("12,5%").slideDown("slow");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
        jumlah_diterima_lengkap.val(1);
        presentase.val("12,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
        jumlah_diterima_lengkap.val(2);
        presentase.val("25%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
        jumlah_diterima_lengkap.val(3);
        presentase.val("37,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
        jumlah_diterima_lengkap.val(4);
        presentase.val("50%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
        jumlah_diterima_lengkap.val(5);
        presentase.val("62,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
        jumlah_diterima_lengkap.val(6);
        presentase.val("75%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
        jumlah_diterima_lengkap.val(7);
        presentase.val("87,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
        jumlah_diterima_lengkap.val(8);
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
        presentase.val("12,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
        jumlah_diterima_lengkap.val(3 - 1);
        presentase.val("25%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
        jumlah_diterima_lengkap.val(4 - 1);
        presentase.val("37,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
        jumlah_diterima_lengkap.val(5 - 1);
        presentase.val("50%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
        jumlah_diterima_lengkap.val(6 - 1);
        presentase.val("62,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
        jumlah_diterima_lengkap.val(7 - 1);
        presentase.val("75%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
        jumlah_diterima_lengkap.val(8 - 1);
        presentase.val("87,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
        jumlah_diterima_lengkap.val(9 - 1);
        presentase.val("100%");
      }
  });

  // jaminan kesehatan
  jaminan_kesehatan.change(function () {
    if (this.value === "Y" && jumlah_diterima_lengkap.val() == "") {
        jumlah_diterima_lengkap.val(a + 1).slideDown("slow");
        presentase.val("12,5%").slideDown("slow");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 0) {
        jumlah_diterima_lengkap.val(1);
        presentase.val("12,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 1) {
        jumlah_diterima_lengkap.val(2);
        presentase.val("25%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 2) {
        jumlah_diterima_lengkap.val(3);
        presentase.val("37,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 3) {
        jumlah_diterima_lengkap.val(4);
        presentase.val("50%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 4) {
        jumlah_diterima_lengkap.val(5);
        presentase.val("62,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 5) {
        jumlah_diterima_lengkap.val(6);
        presentase.val("75%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 6) {
        jumlah_diterima_lengkap.val(7);
        presentase.val("87,5%");
      } else if (this.value === "Y" && jumlah_diterima_lengkap.val() == 7) {
        jumlah_diterima_lengkap.val(8);
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
        presentase.val("12,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 3) {
        jumlah_diterima_lengkap.val(3 - 1);
        presentase.val("25%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 4) {
        jumlah_diterima_lengkap.val(4 - 1);
        presentase.val("37,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 5) {
        jumlah_diterima_lengkap.val(5 - 1);
        presentase.val("50%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 6) {
        jumlah_diterima_lengkap.val(6 - 1);
        presentase.val("62,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 7) {
        jumlah_diterima_lengkap.val(7 - 1);
        presentase.val("75%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 8) {
        jumlah_diterima_lengkap.val(8 - 1);
        presentase.val("87,5%");
      } else if (this.value === "T" && jumlah_diterima_lengkap.val() == 9) {
        jumlah_diterima_lengkap.val(9 - 1);
        presentase.val("100%");
      }
  });
});