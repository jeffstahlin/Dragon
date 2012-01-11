$(function () {
    $('.FloatMenu').each(function () {
        var distance = 10;
        var time = 250;
        var hideDelay = 100;

        var hideDelayTimer = null;

        var beingShown = false;
        var shown = false;
        var trigger = $('.trigger', this);
        var info = $('.popup', this).css('opacity', 0);


        $([trigger.get(0), info.get(0)]).click(function () {
            if (hideDelayTimer) clearTimeout(hideDelayTimer);
            if (beingShown || shown) {
                // don't trigger the animation again
                    hideDelayTimer = setTimeout(function () {
                    hideDelayTimer = null;
                    info.animate({
                        bottom: '-=' + distance + 'px',
                        opacity: 0
                    }, time, 'swing', function () {
                        shown = false;
                        info.css('display', 'none');
                    });

                }, hideDelay);

                return false;
            } else {
                // reset position of info box
                beingShown = true;

                info.css({
                    bottom: 90,
                    right: 0,
                    display: 'block'
                }).animate({
                    bottom: '+=' + distance + 'px',
                    opacity: 0.8
                }, time, 'swing', function() {
                    beingShown = false;
                    shown = true;
                });
            }

            return false;
        });
    });
    
    
    $('#search').click(function () {
        var time = 250;
        
        $('.FloatMenu').css({
                right: 0,
                bottom: 90                
            }).animate({
                right: '+=' + 1314 + 'px'
            }, time, 'swing');
            
            return false;
        });
    
});


$( '#FinalScore' ).live( 'pageinit',function(){
    alert( 'This page was just enhanced by jQuery Mobile!' );
});