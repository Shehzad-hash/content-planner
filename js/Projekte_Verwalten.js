$(document).ready(function () {
  $('.btn-edit-header').click(function (e) { 
    e.preventDefault();
    if ($(this).find('i').hasClass('fa-pencil-alt')) {
      $(this).parent().find('.header-input').attr('readonly', false);
      $(this).parent().find('.header-input').focus();
      $(this).parent().find('.header-input').select();
      $(this).find('i').removeClass('fa-pencil-alt');
      $(this).find('i').addClass('fa-check');
    } else {
      $(this).parent().find('.header-input').attr('readonly', true);
      $(this).find('i').removeClass('fa-check');
      $(this).find('i').addClass('fa-pencil-alt');
    }
  });

  $('.create-new-project-card').click(function (e) { 
    e.preventDefault();
    $(this).css('display', 'none');
    $('.new-project-card').css('display', 'block');
  });

  $('a.farbe-andern').click(function (e) { 
    e.preventDefault();
    $(this).parent().find('input[type="color"]').trigger('click');
  });

  $('input[type="color"]').change(function (e) { 
    $(this).parent().css('background-color', e.target.value)
  });
});