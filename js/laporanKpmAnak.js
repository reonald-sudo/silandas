$(document).ready(function () {

    let rekap_data = $('#rekap_data');
    // ketika event keyword di tulis
    $('#keyword').on('keyup', function () {
        // menampilkan loading
        $('#loading').show();

        $.get('ajax/laporanKpmAnak.php?keyword=' + $('#keyword').val(), function (data) {

            $('#tabel_laporan_stunting').html(data);
            $('#loading').hide();
        });
    });
});