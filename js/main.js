$(function () {


    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                }
            }
        ]
    });
    $('.feedback__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false, 
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 870,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1
                }
              }
            
          ]
    });

$('.menu__btn__burg').on('click', function () {
    $('.header__list').toggleClass('header__list--modif');
    $('.menu__btn__burg').toggleClass('menu__btn__burg--krestik');
});

});