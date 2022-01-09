$(function () {
  AOS.init();
  updateNav();
  updateScroller();

  $(window).scroll(function () {
    updateNav();
    updateScroller();
  });

  function updateNav() {
    if ($(window).scrollTop() > 30) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  }

  function updateScroller() {
    if ($(window).scrollTop() > 100) {
      $(".scroll-top").fadeIn(200);
    } else {
      $(".scroll-top").fadeOut(200);
    }
  }

  $(document).on("click",".scroll-top",function(){
    $(window).scrollTop(0);
  })

  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
  });
});
