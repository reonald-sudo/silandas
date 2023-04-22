$(document).ready(function(){
    let tombol_rekap_stunting = $('#rekap_stunting1');
    let tabel_rekap_stunting = $('#tabel_rekap_stunting');
    let tombol_rekap_hamil = $('#rekap_hamil1');
    let tabel_rekap_hamil = $('#tabel_rekap_hamil').hide();
    let pagination = $('.pagination');
    let paginationHamil = $('.paginationHamil');
    

    tombol_rekap_stunting.click(function(){
        if (tabel_rekap_stunting.first().is(" :hidden ")){
            tabel_rekap_stunting.slideDown("slow");
            pagination.slideDown("slow");
            paginationHamil.css('display','none');
        }else{
            tabel_rekap_stunting.slideUp();
            pagination.slideUp();
        }
    });

    tombol_rekap_hamil.click(function(){
        if (tabel_rekap_hamil.first().is(" :hidden ")){
            tabel_rekap_hamil.slideDown("slow")
            paginationHamil.slideDown("slow");
        }else{
            tabel_rekap_hamil.slideUp();
            paginationHamil.slideUp();
            paginationHamil.css('display','none');
        }
    });


    $('#keyword').keyup(function (){
        
        $.get('ajax/dataMaster.php?keyword=' + $('#keyword').val(), function (data) {

            $('#tabel_rekap_stunting').html(data);
        });
    });

});

$(document).ready(function(){
    let tombolCetakPDFRekapHamil = $('#unduh_data_rekap_hamil_pdf');
    let tombolCetakPDFRekapStunting = $('#unduh_data_rekap_stunting_pdf');

    tombolCetakPDFRekapStunting.on('click',function(){
        tombolCetakPDFRekapHamil.click();
    });
})