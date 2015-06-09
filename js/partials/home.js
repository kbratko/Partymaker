$(function () {
  $('.cover-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true, 
    dots: true,
    responsive: [
    {
      breakpoint: 1400,
      settings: {
         arrows: false
      }
    }
  ]
  });

  $(".tabs__body").twentytwenty({
    default_offset_pct: 0.96
  });

  var fixedContentArrow = $('.twentytwenty-handle').offset().top - 100;
  $(window).scroll(function(){
    if( $(window).scrollTop() > fixedContentArrow ) {
      $('.twentytwenty-handle').addClass('twentytwenty-handle--sticked');
    } else {
      $('.twentytwenty-handle').removeClass('twentytwenty-handle--sticked');
    }
  });
})