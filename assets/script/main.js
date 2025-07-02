document.addEventListener('DOMContentLoaded', () => {

    function initSlickSlider() {
        if (window.innerWidth <= 767) {
            if (!$('.slider').hasClass('slick-initialized')) {
                $('.slider').slick({
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '8.5%',
                    arrows: false,
                    dots: true,
                    initialSlide: 1,
                });
            }
        } else {
            if ($('.slider').hasClass('slick-initialized')) {
                $('.slider').slick('unslick');
            }
        }
    }

    $(document).ready(function () {
        initSlickSlider();
        $(window).on('resize', function () {
            initSlickSlider();
        });
    });

}); //script END