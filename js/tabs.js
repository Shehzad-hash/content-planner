$('.tab-head').click(function (e) { 
    $('.tabs').css('display', 'none');
    var sectionClass = $(this).attr('sec');
    $(sectionClass).fadeIn(1000);
    $('.tab-head').removeClass('active');
    $(this).addClass('active');
});

$('.tab-head-2').click(function (e) { 
    $('.tabs-2').css('display', 'none');
    var sectionClass = $(this).attr('sec');
    $(sectionClass).fadeIn(1000);
    $('.tab-head-2').removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function () {
    $('.fa-eye').click(function (e) { 
        e.preventDefault();
        if($(this).hasClass('fa-eye')) {
            $(this).removeClass('fa-eye');
            $(this).addClass('fa-eye-slash'); 
            $(this).parent().find('input').attr('type', 'text');
        } else {
            $(this).removeClass('fa-eye-slash');
            $(this).addClass('fa-eye');
            $(this).parent().find('input').attr('type', 'password');
        }
        
    });
});

