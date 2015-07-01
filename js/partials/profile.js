$(function () {
  var $carousel = $('.cloud__slider');
  var commonBreakpoint = 768;
  if ( $(window).width()  >= commonBreakpoint) { 
    if($carousel.hasClass('slick-initialized')) {
        $carousel.unslick();
    }
  } else {
    if(!$carousel.hasClass('slick-initialized')) {
      $carousel.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true, 
        dots: false,
        prevArrow: '<a href="#" class="slick-prev"></a>',
        nextArrow: '<a href="#" class="slick-next"></a>'
      });
    }
  }
})