$(function () {
  $(".hometown").each(function() {
    $(this).selectize({
      openOnFocus: false,
      onFocus: function () {
        $(this.$control).parents('.form__line').addClass('form__line--hightlight');
      },
      onBlur: function () {
        $(this.$control).parents('.form__line').removeClass('form__line--hightlight');
      },
      onItemAdd: function () {
        $(this.$control).parents('.form__line').removeClass('form__line--hightlight').addClass('form__line--done');
      }
    });
  });

  // Show all genres toggle

  $('.genres__more').on('click', function(e) {
    e.preventDefault();
    $(this).parent().find('.genres__section').not('.genres__section--visible').slideToggle();
    $(this).toggleClass('genres__more--active');
  });

  // Add ability to touch and drag range slider on mobile device
  $('.form__range').draggable();

  // Initialize range slider
  $('.form__range').slider({
    range: "max",
    min: 500,
    max: 5000,
    value: 800
  });
});