$(document).ready(function () {
    $(".list-detail").sortable({
        axis: 'y',
        // containment: "parent",
        handle: ".handle"
    });

    $('.open-floating-list').click(function (e) { 
        e.preventDefault();
        $('.autor-table .open-floating-list-parent').removeClass('active');
        // if (!$(this).parent().hasClass('active')) {
        //     console.log('adding classs')
        // } else {
        //     $(this).parent().removeClass('active');
        // }
        $(this).parent().addClass('active');
        // if ($('.floating-list').css('display') == 'none') {
            $('.floating-list').css('display', 'block');
            var position = $(this).parent().position();
            var top = position.top
            var left = position.left;
            var width = $(this).parent().outerWidth();
            $('.floating-list').css('top', top + 'px');
            $('.floating-list').css('left', (left + width + 15) + 'px');
        // } else {
            // $('.floating-list').css('display', 'none');
        // }
    });

    $('.custom-picker-parent > a').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('input.jscolor')[0].jscolor.show()
    });

    $('body').on('click', '.floating-list .list-details .btn-edit', function(e) {
        e.preventDefault();
        const textInput = $(this).parent().parent().find('input.list-text')
        $(textInput).attr('readonly', false);
        $(textInput).focus();
        $(textInput).select();
    });

    $('body').on('click', '.floating-list .list-details .btn-delete', function(e) {
        e.preventDefault();
        $(this).parent().parent().remove();
    });

    $('body').on('keyup', '.floating-list .list-details input.list-text', function(e) {
        e.preventDefault();
        if(e.keyCode == 13) {
            $(this).attr('readonly', true);
        }
    });
    
    $('.add-button').click(function (e) { 
        e.preventDefault();
         var listInput = $('.list-input').val();
         console.log(listInput)
        var html = '<div class="list-details"><a href="#" class="handle"><i class="fas fa-arrows-alt"></i></a><input type="text" class="list-text" value="' + listInput +  '" readonly><span class="float-right"><a class="mr-3 btn-delete" href="#"><i class="far fas fa-trash-alt"></i></a><a href="#" class="btn-edit"><i class="far fa-edit"></i></a></span></div>'
        $(html).appendTo('.floating-list > .list-detail');
        $('.list-input').val('');
     });
 
     $('.ok-button.list-button').click(function (e) { 
         e.preventDefault();
         $('.floating-list').css('display', 'none');         
         $('.autor-table .open-floating-list-parent').removeClass('active');
     });

});
