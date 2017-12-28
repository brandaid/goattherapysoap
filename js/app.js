$(document).foundation()

////////////////////////////////////////////////
// back to top
////////////////////////////////////////////////
/* learn how here >> http://brandaid.it/16kSKCu */
var offset = 220;
var duration = 500;
jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > offset) {
        jQuery('#to-top').fadeIn(duration);
    } else {
        jQuery('#to-top').fadeOut(duration);
    }
});
jQuery('#to-top').click(function (event) {
    event.preventDefault();
    jQuery('html, body').animate({
        scrollTop: 0
    }, duration);
    return false;
});

$(document).ready(function () { // BEGIN DOCUMENT READY FUNCTION //

    ////////////////////////////////////////////////
    // hero bxslider
    ////////////////////////////////////////////////
    $('.hero-slider').bxSlider({
        //adaptiveHeight: true,
        mode: 'fade',
        auto: true,
        pause: 8000,
        adaptiveHeight: true,
    });

    ////////////////////////////////////////////////
    // testimonial bxslider
    ////////////////////////////////////////////////
    $('.quote-slider').bxSlider({
        //adaptiveHeight: true,
        mode: 'fade',
        auto: true,
        pause: 8000,
        adaptiveHeight: true,
    });

}); // END DOCUMENT READY FUNCTION //