$(document).ready(function () {
  $('.social-icon').mouseenter(function () { 
    $('.floating-icons').css('display', 'block')
    var offset = $(this).offset();
    var top = offset.top;
    var left = offset.left;
    $('.floating-icons').css('top', (top + 25) + 'px')
    $('.floating-icons').css('left', (left + 20) + 'px')
  });
  
  $('body').mousemove(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    $('.floating-icons').css('display', 'none')
  });
  
  
  $('.floating-icons').mousemove(function (e) {
    e.stopPropagation();
    $('.floating-icons').css('display', 'block')
  });
  
  $('.social-icon').mousemove(function (e) {
    e.stopPropagation();
  });
});