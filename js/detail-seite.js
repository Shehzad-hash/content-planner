$(document).ready(function () {
  
    $('.ok-button').click(function (e) { 
       e.preventDefault();
        var inputVal = $('.weiteres-input').val()
       var html = '<div class="check-box"><label class="container-checkbox todo-list-text"><span class="gray-color">' + inputVal + '</span><input type="checkbox"><span class="checkmark"></span></label></div>'
       $(html).appendTo('#todo-list');
       $('.weiteres-input').val('');
    });
});