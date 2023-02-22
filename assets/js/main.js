$(document).ready(function($) {
    "use strict";
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

     // Magnific popup
     $('.video-icon').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'https://www.youtube.com/',

                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }

            },
            srcAction: 'iframe_src',
        }
     });
    $('.news-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
        ],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            
            }
        }
    })



}(jQuery));