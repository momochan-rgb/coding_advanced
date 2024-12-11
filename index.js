const h1 = document.querySelector('h1');
      
console.log(h1);

$(function() {
    $('#nav-content li a').on('click', function(event) {
        $('#nav-input').prop('checked', false);
    });
});

const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
        breakpoints: {
            // 768px以上の場合
            768: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
        },
        
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: ".swiper-pagination"
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true 
    }
});

$(function(){
    $('.announce_one .title').click(function(){
        $(this).next('.announce_inner').slideToggle();
        $(this).toggleClass("open");
    });
});

jQuery(function($) {
    $(window).on('load scroll', function (){

        var box = $('.anime1');
        var animated = 'animated';

        box.each(function(){

            var boxOffset = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var wh = $(window).height();

            if(scrollPos > boxOffset - wh + 100 ){
            $(this).addClass(animated);
            }
        });
    });
})

