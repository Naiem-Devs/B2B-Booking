(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
  
 // menu 
  $('.lng_btn').click( function (){ 
    $('.lng__blk').toggleClass('show');   
    $('.notifi__blk').removeClass('show');   
  }); 
  
 // menu 
  $('.notifi_btn').click( function (){ 
    $('.notifi__blk').toggleClass('show');  
    $('.lng__blk').removeClass('show');  
  }); 
  
  
 // menu 
  $('.From-btn').click( function (){ 
    $('.from-to-bropdown').toggleClass('show');   
  }); 
  

  $('.select__blk select').niceSelect();

  // owlCarousel
  $(".flight__slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    center: true,
    navText: [
      '<i class="fal fa-chevron-circle-left"></i>',
      '<i class="fal fa-chevron-circle-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 4
      },
      992: {
        items: 5
      },
      1200: {
        items: 6
      },
      1400: {
        items: 7
      }
    }
  });

  // owlCarousel
  $(".brands__flight__slider").owlCarousel({
    loop: true,
    margin: 20,
    navText: [
      '<i class="fal fa-chevron-circle-left"></i>',
      '<i class="fal fa-chevron-circle-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 2
      },
      1400: {
        items: 2
      }
    }
  });

  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });


 
})(jQuery);
