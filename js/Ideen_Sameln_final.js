$(document).ready(function () {
  $('a.add-neuen-button').click(function (e) { 
    e.preventDefault();
    $('table.gespeicherte-table').css('display', 'none');
    $('.add-neuen-table').css('display', 'block');
  });

  $('a.close-neuen-table').click(function (e) { 
    e.preventDefault();
    $('table.gespeicherte-table').css('display', 'block');
    $('.add-neuen-table').css('display', 'none');
  });
});