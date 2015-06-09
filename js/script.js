$(function(){
  // Highlight form line on input focus

  $('.form__input').on('focus', function(){
    $(this).parents('.form__line').addClass('form__line--hightlight');
    $(this).parents('.form__line.form__line--error').addClass('form__line--hightlight').removeClass('form__line--error');
  });

  $('.form__input').on('blur', function(){
    $(this).parents('.form__line').removeClass('form__line--hightlight');
    if ($(this).val().length) {
      $(this).parents('.form__line').addClass('form__line--done').removeClass('form__line--error');
    } else {
      $(this).parents('.form__line').removeClass('form__line--done').addClass('form__line--error');
    }
  });

  //Tooltips
  $('.tooltip').tooltipster({
    trigger: 'hover',
    position: 'right'
  });

  // Remove animation classes on sign-up page fields on animation complete

  $('.form__line').bind('oanimationend animationend webkitAnimationEnd', function() { 
     $(this).removeClass('animated slideInLeft');
  });

});