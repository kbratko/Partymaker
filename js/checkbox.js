$(function () {
  
  // Custom checkbox

  $(".checkbox__control").mousedown(function() {
    changeCheck($(this));
  });

  $(".checkbox__control").each(function() {
    changeCheckStart($(this));
  });

  function changeCheck(el) {
    var el = el;
    var input = el.find("input").eq(0);
    if(!input.attr("checked")) {
      el.addClass('checkbox__control--checked'); 
      input.attr("checked", true)
    } else {
      el.removeClass('checkbox__control--checked'); 
      input.attr("checked", false)
    }
    return true;
  };

  function changeCheckStart(el) {
    var el = el;
    var input = el.find("input").eq(0);
    if(input.attr("checked")) {
      el.addClass('checkbox__control--checked'); 
    }
      return true;
  };
  
  $('.checkbox__label').on('click', function () {
    changeCheck($(this).prev());
  });
});