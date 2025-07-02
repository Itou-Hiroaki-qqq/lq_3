'use strict';
{

    const w = $(window).width();
        if (w <= 767) {
            $('.slider').slick({
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '8.5%',
                arrows: false,
                dots: true,
                initialSlide: 1,
            });
    }
    
}