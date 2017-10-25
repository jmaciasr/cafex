$("img.lazy").lazyload();
var wScroll = $(this).scrollTop();

// Landing Elements
if (wScroll > $('.gallery').offset().top - ($(window).height() / 1.2)) {
    $('.gallery figure').each(function (i) {
        setTimeout(function () {
            $('.gallery figure').eq(i).addClass('is-showing');
        }, (700 * (Math.exp(i * 0.14))) - 700);
    });

}