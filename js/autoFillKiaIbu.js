function autoFillKiaIbu (){

    $(document).ready(function(){
        let kia = $('#kia');
        let nama = $('#nama');
        let umur = $('#umur');
        let usia_kehamilan = $('#usia_kehamilan');
        let lingkar_lengan = $('#lingkar_lengan');
        let tanggal_melahirkan = $('#tanggal_melahirkan');

        // ketika keyword di ketik
        kia.on('keyup',function(){
            $.get('ajax/autoFillKiaIbu.php?kia=' + kia.val(), function(data){

                let json = data,
                obj = JSON.parse(json);

                $('#nama').val(obj.nama);
                $('#umur').val(obj.umur);
            });

            if (kia.val() === ''){
                $('#nama').val('');
                umur.val('');
            }

        })

        kia.on('keyup',function(){
            kia.addClass('is-valid');
            nama.addClass('is-valid');
            umur.addClass('is-valid');

            if(kia.val() === ''){
                kia.removeClass ('is-valid');
                nama.removeClass ('is-valid');
                umur.removeClass ('is-valid');
            }
        });

        usia_kehamilan.on('keyup',function(){
            usia_kehamilan.addClass('is-valid');
            if(usia_kehamilan.val() === ''){
                usia_kehamilan.removeClass('is-valid');
            };
        });

        lingkar_lengan.on('keyup',function(){
            lingkar_lengan.addClass('is-valid');
            if(lingkar_lengan.val() === ''){
                lingkar_lengan.removeClass('is-valid');
            };
        });

        tanggal_melahirkan.on('keyup',function(){
            tanggal_melahirkan.addClass('is-valid');
            if(tanggal_melahirkan.val() === ''){
                tanggal_melahirkan.removeClass('is-valid');
            };
        });
    });

}

// $(document).ready(function () {
//     $('#kia').blur(function(){
//         $('#box_pencarian').fadeOut();
//     });
// });

// function autoFillKiaIbu (){
//     $(document).ready(function (inputan) {
//         if(inputan > 0){
//             $.post("ajax/autoFillKiaIbu.php,", {dicari: ""+inputan+""} ,function(data){
//                 $('#box_pencarian').fadeIn();
//                 $('#box_pencarian').html(data);
//             });
//         }
//     });
// }