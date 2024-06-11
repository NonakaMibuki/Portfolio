$(function () {
  //ハンバーガーメニュー
  $(".openbtn").click(function () {
    $(this).toggleClass("active");
    $(".global__nav").toggleClass("active");
  });

  //ハンバーガーメニュー　同ページのアンカーに飛んでも表示消す
  $(".global__nav ul li a").click(function () {
    $(".openbtn").removeClass("active");
    $(".global__nav").removeClass("active");
  });

  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    //Aboutサブタイトルフェードイン
    $(".fadeIn").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });


  $(document).ready(function() {
    $(".Piece__item li").on("click", function() {
        $(this).find(".hover-mask, p").slideToggle(500);
        $(".Piece__item li").not(this).find(".hover-mask, p").slideUp(500);
    });
});  


  //お問い合わせフォーム内文字
  $(".js-input").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });
});

//スクロールした際の動きを関数でまとめる
function PageTopCheck() {
  var winScrollTop = $(this).scrollTop();
  var secondTop = $(".area2").offset().top - 150;
  if (winScrollTop >= secondTop) {
    $(".js-scroll").removeClass("scroll-view");
    $(".js-pagetop").addClass("scroll-view");
  } else {
    //元に戻ったら
    $(".js-scroll").addClass("scroll-view");
    $(".js-pagetop").removeClass("scroll-view");
  }
}

//クリックした際の動き
$(".scroll-top a").click(function () {
  var elmHash = $(this).attr("href");
  if (elmHash == "#about") {
    var pos = $(elmHash).offset().top;
    $("body,html").animate({ scrollTop: pos }, pos);
  } else {
    $("body,html").animate({ scrollTop: 0 }, 500);
  }
  return false;
});

$(window).scroll(function () {
  PageTopCheck();
});

$(window).on("load", function () {
  PageTopCheck();
});
