$(document).ready(function(){

    //Select2 initialisation
    $('.select2-trigger').select2({
        minimumResultsForSearch: Infinity
    });

    //Browser detection
    if ( $.browser.msie) {
        var selectcurrent = $('.select2-selection');

        selectcurrent.mousedown(function() {
            $(this).addClass('active-pseudo-msie');
        });
        selectcurrent.mouseup(function() {
            $(this).removeClass('active-pseudo-msie');
        });
        selectcurrent.mouseleave(function() {
            $(this).removeClass('active-pseudo-msie');
        });
    }
    if ( $.browser.mac) {
        $('body').addClass('mac');
    }

});