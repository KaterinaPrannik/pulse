$(document).ready(function(){
    $('.carousel__inner').slick( {
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


    $('.catalog-item__link').each(function(i) {
      $(this).on('click',function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })

    $('.catalog-item__back').each(function(i) {
      $(this).on('click',function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  
     //Modal
    $('[data-modal=consultation]').on('click',function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
      $('.overlay,#consultation,#order,#thanks').fadeOut('slow');
    });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        });
    });

    $('#consultation-form').validate();
    $('#consultation form').validate({
       rules: {
        name: 'required',
        phone: 'required',
        email: {
          required: true,
          email: true
        }
       }
    });
    $('#order form').validate();

    //smooth scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
      });

      $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html,body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });
  });

 
