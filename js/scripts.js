(function ($) {
    'use strict'

    $('.nav-item').on('click', function () {
        $('#navbarNav').removeClass('show');
    });

    //  Image galary
    var imgGallery = $('.image-slider');
    imgGallery.owlCarousel({
        items: 4,
        loop: false,
        margin: 1,
        autoplay: false,
        dots: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        autoHeight: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });

    // $("nav").scrollspy({ offset: 75 });


    $('body').scrollspy({
        target: '#nav',
        offset: $(window).height() / 2
    });
    $(".navbar-nav a[href^='#']").on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 40
        }, 500);
    });

    $("#home a[href^='#']").on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 40
        }, 500);
    });



    var doAnimations = function () {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        // Check all animatables and animate them if necessary
        $animatables.each(function (i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated-1');
            }
        });

    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');


})(jQuery);