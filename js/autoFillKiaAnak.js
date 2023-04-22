function autoFillKiaAnak() {
  $(document).ready(function () {
    let kia = $("#kia");
    let nama = $("#nama");
    let umur = $("#umur");
    let berat_badan = $("#berat_badan");
    let tinggi_badan = $("#tinggi_badan");

    // ketika keyword di ketik
    kia.on("keyup", function () {
      $.get("ajax/autoFillKiaAnak.php?kia=" + kia.val(), function (data) {
        let json = data,
          obj = JSON.parse(json);

        $("#nama").val(obj.nama);
        $("#nama_ortu").val(obj.nama_ortu);
      });

      if (kia.val() === "") {
        $("#nama").val("");
        $("#nama_ortu").val("");
      }
    });

    kia.on("keyup", function () {
      kia.addClass("is-valid");
      nama.addClass("is-valid");

      if (kia.val() === "") {
        kia.removeClass("is-valid");
        nama.removeClass("is-valid");
      }
    });

    umur.on("keyup", function () {
      umur.addClass("is-valid");

      if (umur.val() === "") {
        umur.removeClass("is-valid");
      }
    });

    berat_badan.on("keyup", function () {
      berat_badan.addClass("is-valid");

      if (berat_badan.val() === "") {
        berat_badan.removeClass("is-valid");
      }
    });

    tinggi_badan.on("keyup", function () {
      tinggi_badan.addClass("is-valid");

      if (tinggi_badan.val() === "") {
        tinggi_badan.removeClass("is-valid");
      }
    });
  });
}
