(function ($) {
    'use strict'
    if (window.innerWidth < 991) { $("#typed").removeAttr("id") }
    $('.nav-item').on('click', function () { $('#navbarNav').removeClass('show') }); $('body').scrollspy({ target: '#nav', offset: $(window).height() / 2 }); $(".navbar-nav a[href^='#']").on('click', function (e) { e.preventDefault(); var hash = this.hash; $('html, body').animate({ scrollTop: $(this.hash).offset().top - 40 }, 500) }); var doAnimations = function () {
        var offset = $(window).scrollTop() + $(window).height(), $animatables = $('.animatable'); if ($animatables.length == 0) { $(window).off('scroll', doAnimations) }
        $animatables.each(function (i) { var $animatable = $(this); if (($animatable.offset().top + $animatable.height() - 20) < offset) { $animatable.removeClass('animatable').addClass('animated-1') } })
    }; $(window).on('scroll', doAnimations); $(window).trigger('scroll'); var imgGallery = $('.image-slider'); imgGallery.owlCarousel({ items: 4, loop: !1, margin: 1, autoplay: !1, dots: !1, autoplayTimeout: 1000, autoplayHoverPause: !0, autoHeight: !1, responsive: { 0: { items: 1, }, 600: { items: 3, }, 1000: { items: 4, } } })
})(jQuery)