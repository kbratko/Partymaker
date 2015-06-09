$(function () {

  // Tabs

  $('.tabs .tabs__item').on('click', function (e) {
    e.preventDefault();
    var thisPatent = $(this).parent();
    var thisHash = $(this).attr('href');
    
    thisPatent.find('.tabs__item').removeClass('tabs__item--active');
    thisPatent.next().find('.tabs__content').removeClass('tabs__content--active');
    $(this).addClass('tabs__item--active');
    thisPatent.next().find('.tabs__content[data-hash="'+ thisHash +'"]').addClass('tabs__content--active');
  });

  // Sticky tabs only on landing page
  var stickyTabsHead = $('.tabs__head').offset().top;
  $(window).scroll(function(){
    if( $(window).scrollTop() > stickyTabsHead ) {
      $('.tabs__head').addClass('tabs__head--sticked');
    } else {
      $('.tabs__head').removeClass('tabs__head--sticked');
    }
  });

  // Sticky tabs only on landing page
  var stickyTabsTitle = $('.tabs__title').offset().top;
  $(window).scroll(function(){
    if( $(window).scrollTop() > stickyTabsTitle ) {
      $('.tabs__title').addClass('tabs__title--sticked');
    } else {
      $('.tabs__title').removeClass('tabs__title--sticked');
    }
  });
});