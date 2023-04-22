$('#keyword').keyup(function(){
    $.get('ajax/dataMasterHamil.php?keyword=' + $('#keyword').val(), function (data) {

        $('#tabel_rekap_hamil').html(data);
    });
});