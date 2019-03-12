$(function () {
    'use strict';

    // Active link :)
    $(window).scroll(function(){
        if($(this).scrollTop() > $('header').height() / 6){
          $('nav.navbar').addClass('scrolled');
        }else{
            $('nav.navbar').removeClass('scrolled');
        }

        if($(this).scrollTop() < $('header').height()){
          if ($(window).width() > 1000) {
            var x = `${$(this).scrollTop() / 25 + 100}%`;
            $('header').css('background-size',x);
          }
        }


        if ($(this).scrollTop() > $('.features').offset().top  - 200 && $(this).scrollTop() < $('.howItWorks').offset().top - 200) {
            $('.featuresLink').addClass('active').siblings().removeClass('active');
        }
        else if (($(this).scrollTop() > $('.howItWorks').offset().top - 200) && ($(this).scrollTop() < $('.testmonials').offset().top - 200)) {
            $('.howItWorksLink').addClass('active').siblings().removeClass('active');
        }

        else if (($(this).scrollTop() > $('.testmonials').offset().top - 200) && ($(this).scrollTop() < $('.screenshots').offset().top - 200)) {
            $('.testimonialsLink').addClass('active').siblings().removeClass('active');
        }

        else if (($(this).scrollTop() > $('.screenshots').offset().top - 200) && ($(this).scrollTop() < $('.pricing').offset().top - 200)) {
            $('.screenshotsLink').addClass('active').siblings().removeClass('active');
        }
        else if (($(this).scrollTop() > $('.pricing').offset().top - 200) && ($(this).scrollTop() < $('.faq').offset().top - 200)) {
            $('.pricingLink').addClass('active').siblings().removeClass('active');
        }

        else if (($(this).scrollTop() > $('.faq').offset().top - 200) && ($(this).scrollTop() < $('.contact').offset().top - 200)) {
            $('.faqLink').addClass('active').siblings().removeClass('active');
        }
        else if (($(this).scrollTop() > $('.contact').offset().top - 200)) {
            $('.contactLink').addClass('active').siblings().removeClass('active');
        } else {
            $('.homeLink').addClass('active').siblings().removeClass('active');
        }

    })







    // Scroll to the approperiate section depend on the nav links :)
    $('nav li a.scroll').click(function () {
        event.preventDefault();
        $(this).parent().addClass('activelink').siblings().removeClass('activelink');
        $('html, body').animate({
            scrollTop : $('#' + $(this).data('value')).offset().top}, 800);
    });

    $('.btnBottomLine').click(function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop : $('#DemoVideo').offset().top}, 1000);
    });




    // Show and hide the youtube video :)
    $('.showVideo').click(function () {
        event.preventDefault();
        $('.videoPopup').addClass('show');
    });


    $('.videoPopup .hideVideo').click(function () {
        event.preventDefault();
        $('.videoPopup').removeClass('show');
    });


    // Active link for how it works section slider :)
    $('.howItWorks .columns .column i').click(function(){
        $('.howItWorks .columns .column i').removeClass('active');
        $(this).addClass('active');
    });


    $('.IconOne').click(function(){
        $('.howItWorks .text .one').addClass('fullOpacity').siblings().removeClass('fullOpacity');
    });

    $('.IconTwo').click(function(){
        $('.howItWorks .text .two').addClass('fullOpacity').siblings().removeClass('fullOpacity');
    });

    $('.IconThree').click(function(){
        $('.howItWorks .text .three').addClass('fullOpacity').siblings().removeClass('fullOpacity');
    });

    $('.IconFour').click(function(){
        $('.howItWorks .text .four').addClass('fullOpacity').siblings().removeClass('fullOpacity');
    });


    $('.IconFive').click(function(){
        $('.howItWorks .text .five').addClass('fullOpacity').siblings().removeClass('fullOpacity');
    });


    $('.clickShow').click(function(){
        $(this).parent().addClass('fullOpacity').siblings().removeClass('fullOpacity');
    });


    // Initialize Wow plugin :)
    new WOW().init();

    $('.owl-carousel1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },

            1000:{
                items:3
            }
        }
    });


    // Initialize owl slider :)
    $('.owl-carousel2').owlCarousel({
        items: 1,
        loop:true,
        dots: false,
        center:true,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });


    $('.owl-carousel3').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    // Initialize swiper plugin :)
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            // when window width is <= 320px
            320: {
            slidesPerView: 1,
            spaceBetween: 10
            },
            // when window width is <= 480px
            480: {
            slidesPerView: 1,
            spaceBetween: 20
            },
            // when window width is <= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 30
            },1000: {
                slidesPerView: 3,
                spaceBetween: 30
            }},
        spaceBetween: 30,
      });




      // Wait for window load then show the website and hide the spinner :)
        $(window).load(function() {
            $(".lds-roller").slideUp();
        });
});
