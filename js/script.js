// TOMBOL EDIT PADA DETAIL

// VARIEBEL PARAGRAPH
let p_nik = document.getElementById("p_nik");
let p_nama = document.getElementById("p_nama");
let p_umur = document.getElementById("p_umur");
let p_kelamin = document.getElementById("p_kelamin");
let p_beratBadan = document.getElementById("p_beratBadan");
let p_tinggiBadan = document.getElementById("p_tinggiBadan");
let p_pemberianImunisasiDasar = document.getElementById("p_pemberianImunisasiDasar");
let p_pengukuranBeratBadan = document.getElementById("p_pengukuranBeratBadan");
let p_pengukuranTinggiBadan = document.getElementById("p_pengukuranTinggiBadan");
let p_konselingGiziBagiOrangTua = document.getElementById("p_konselingGiziBagiOrangTua"); 
let p_kunjunganKeRumah = document.getElementById("p_kunjunganKeRumah");
let p_kepemilikanAksesAirBersih = document.getElementById("p_kepemilikanAksesAirBersih");
let p_kepemilikanJambanSehat = document.getElementById("p_kepemilikanJambanSehat");
let p_aktaLahir = document.getElementById("p_aktaLahir");
let p_jaminanKesehatan = document.getElementById("p_jaminanKesehatan");
let p_pengasuhanPaud = document.getElementById("p_pengasuhanPaud");
let p_jumlahDiterimaLengkap = document.getElementById("p_jumlahDiterimaLengkap");
let p_jumlahSeharusnya = document.getElementById("p_jumlahSeharusnya");
let p_Presentase = document.getElementById("p_Presentase");
let p_statusGizi = document.getElementById("p_statusGizi");

// VARIABEL TAG
// let p = document.getElementsByTagName('p')[7];
// let input = document.createElement('input');

let edit_button = document.getElementById("tombol_edit");
let save_button = document.getElementById("tombol_simpan");


// NIK
edit_button.addEventListener("click", () => {
    // DEKLARASI VAR
    p_nik.contentEditable = true;
    p_nama.contentEditable = true;
    p_umur.contentEditable = true;
    p_kelamin.contentEditable = true;
    p_beratBadan.contentEditable = true;
    p_tinggiBadan.contentEditable = true;
    p_pemberianImunisasiDasar.contentEditable = true;
    p_pengukuranBeratBadan.contentEditable = true;
    p_pengukuranTinggiBadan.contentEditable = true;
    p_konselingGiziBagiOrangTua.contentEditable = true;
    p_kunjunganKeRumah.contentEditable = true;
    p_kepemilikanAksesAirBersih.contentEditable = true;
    p_kepemilikanJambanSehat.contentEditable = true;
    p_aktaLahir.contentEditable = true;
    p_jaminanKesehatan.contentEditable = true;
    p_pengasuhanPaud.contentEditable = true;
    p_jumlahDiterimaLengkap.contentEditable = true;
    p_jumlahSeharusnya.contentEditable = true;
    p_Presentase.contentEditable = true;
    p_statusGizi.contentEditable = true;

    // ------------------
    // BIODATA
    // ------------------

    // NIK
    p_nik.style.backgroundColor = "#f0f0f0";
    p_nik.style.color = "red";

    // input.innerHTML = p.innerHTML;
    // p.parentNode.replaceChild(input, p);

    // NAMA
    p_nama.style.backgroundColor = "#f0f0f0";
    p_nama.style.color = "red";
    // UMUR
    p_umur.style.backgroundColor = "#f0f0f0";
    p_umur.style.color = "red";
    // JENIS KELAMIN
    p_kelamin.style.backgroundColor = "#f0f0f0";
    p_kelamin.style.color = "red";
    // BERAT BADAN
    p_beratBadan.style.backgroundColor = "#f0f0f0";
    p_beratBadan.style.color = "red";
    // TINGGI BADAN
    p_tinggiBadan.style.backgroundColor = "#f0f0f0";
    p_tinggiBadan.style.color = "red";

    // ------------------
    // INDIKATOR LAYANAN
    // ------------------

    // PEMBERIAN IMUNISASI DASAR
    p_pemberianImunisasiDasar.style.backgroundColor = "#f0f0f0";
    p_pemberianImunisasiDasar.style.color = "red";

    // PENGUKURAN BERAT BADAN
    p_pengukuranBeratBadan.style.backgroundColor = "#f0f0f0";
    p_pengukuranBeratBadan.style.color = "red";

    // PENGUKURAN TINGGI BADAN
    p_pengukuranTinggiBadan.style.backgroundColor = "#f0f0f0";
    p_pengukuranTinggiBadan.style.color = "red";

    // KONSELING GIZI BAGI ORANG TUA
    p_konselingGiziBagiOrangTua.style.backgroundColor = "#f0f0f0";
    p_konselingGiziBagiOrangTua.style.color = "red";

    // KUNJUNGAN KE RUMAH
    p_kunjunganKeRumah.style.backgroundColor = "#f0f0f0";
    p_kunjunganKeRumah.style.color = "red";

    // KEPEMILIKAN AKSES AIR BERSIH
    p_kepemilikanAksesAirBersih.style.backgroundColor = "#f0f0f0";
    p_kepemilikanAksesAirBersih.style.color = "red";

    // KEPEMILIKAN JAMBAN SEHAT
    p_kepemilikanJambanSehat.style.backgroundColor = "#f0f0f0";
    p_kepemilikanJambanSehat.style.color = "red";

    // AKTA LAHIR
    p_aktaLahir.style.backgroundColor = "#f0f0f0";
    p_aktaLahir.style.color = "red";

    // JAMINAN KESEHATAN
    p_jaminanKesehatan.style.backgroundColor = "#f0f0f0";
    p_jaminanKesehatan.style.color = "red";

    // PENGASUHAN PAUD
    p_pengasuhanPaud.style.backgroundColor = "#f0f0f0";
    p_pengasuhanPaud.style.color = "red";

    // -----------------------------
    // TINGKAT KONVERGENSI INDIKATOR
    // -----------------------------

    // JUMLAH DITERIMA LENGKAP
    p_jumlahDiterimaLengkap.style.backgroundColor = "#f0f0f0";
    p_jumlahDiterimaLengkap.style.color = "red";

    // JUMLAH SEHARUSNYA
    p_jumlahSeharusnya.style.backgroundColor = "#f0f0f0";
    p_jumlahSeharusnya.style.color = "red";

    // PRESENTASE
    p_Presentase.style.backgroundColor = "#f0f0f0";
    p_Presentase.style.color = "red";

    // -----------------------------
    // TINGKAT KONVERGENSI INDIKATOR
    // -----------------------------

    // STATUS GIZI
    p_statusGizi.style.backgroundColor = "#f0f0f0";
    p_statusGizi.style.color = "red";
});

// TOMBOL SAVE AFTER EDIT
save_button.addEventListener("click", () => {
    paragraph.contentEditable = false;
    paragraph.style.backgroundColor = "white";
    paragraph.style.color = "black";
});
