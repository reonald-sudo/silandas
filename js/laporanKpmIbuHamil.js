$(document).ready(function () {

    let rekap_data = $('#rekap_data');
    // ketika event keyword di tulis
    $('#keyword').on('keyup', function () {
        // menampilkan loading
        $('#loading').show();

        $.get('ajax/laporanKpmIbuHamil.php?keyword=' + $('#keyword').val(), function (data) {

            $('#laporan_tabel_hamil').html(data);
            $('#loading').hide();
        });
    });
});