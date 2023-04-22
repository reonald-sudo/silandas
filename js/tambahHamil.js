function hitungHamil () {
$(document).ready(function(){
    let umur = $('#umur').val();
    let lila = $('#lingkar_lengan').val();
    let statusKehamilan = $('#status_kehamilan');

    // ------------------------------------------------- KEK
    if ((lila >= 0 && lila <= 23.5) && (umur >= 20 && umur <= 35)){
        statusKehamilan.val('KEK');
    }
    // ------------------------------------------------- RISTI
    else if ((lila >= 0 && lila <= 23.5) && (umur <= 20 || umur >= 35)){
        statusKehamilan.val('RISTI');
    }
    else if ((lila >= 23.5) && (umur <= 20 || umur >= 35)){
        statusKehamilan.val('RISTI');
    }
    // ------------------------------------------------- NORMAL
    else if ((lila >= 23.5) && (umur >= 20 && umur <= 35)){
        statusKehamilan.val('N');
    }
    // ----------------------------------------------------
    else {
        statusKehamilan.val('');
    }   
});
}