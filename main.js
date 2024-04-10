$(function () {

    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.fadeIn').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });

    $(".hover-mask").on("click", function(){
        $(this).next().slideToggle(500);
        $(".hover-mask").not($(this)).next().slideUp(700);
    });

    $(".js-input").keyup(function() {
        if( $(this).val() ) {
           $(this).addClass("not-empty");
        } else {
           $(this).removeClass("not-empty");
        }
      });

  });