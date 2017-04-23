$(document).ready(function () {

    $('#moveDown').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 0
        }, 1200)
        ;
        event.preventDefault();
        return false;
    });
    $('#moveUp').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 0
        }, 1200)
        ;
        event.preventDefault();
        return false;
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var welcome = $('#welcome').height();
        if (scroll >= welcome) {
            $('nav').addClass('header-fixed', 600);
        }
        else {
            $('nav').removeClass('header-fixed', 600);
        }
    });



    $(window).on('scroll', function () {
        var logo = $('.logo');
        var range = 300;
        var scrollTop = $(this).scrollTop();
        var offset = logo.offset().top;
        var height = logo.outerHeight();
        offset = offset + height / 2;
        var calc = 1 - (scrollTop - offset + range) / range;

        logo.css({ 'opacity': calc });

        if ( calc > '1' ) {
            logo.css({ 'opacity': 1 });
        } else if ( calc < '0' ) {
            logo.css({ 'opacity': 0 });
        }

    });

    $('span.glyphicon-align-justify').click(function () {
        event.preventDefault();
        $('nav.mobile').show(300);


         $('span.glyphicon-align-justify').hide(300);
    });

    $('span.glyphicon-remove').click(function () {
        event.preventDefault();
        $('nav.mobile').hide(300);
        $('span.glyphicon-align-justify').show(300);
     });

    $('nav.mobile a').click(function () {
        event.preventDefault();
        $('nav.mobile').hide(300);
        $('span.glyphicon-align-justify').show(300);
    });


});

particlesJS();