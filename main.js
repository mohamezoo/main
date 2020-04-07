$(document).ready(function () {

    $('.btn-active').click(function () {
        var id = $(this).attr('id');
        if($(window).width() < 800)
        {
            $('.'+id).slideToggle().css({'position': 'inherit','opacity':'1','visibility':'visible'});

        } else {
            $('.'+id).css({'display': 'none', 'position': 'absolute' })            
        }    
    })
    

        $('#vertical').lightSlider({
            gallery:true,
            item:1,
            vertical:true,
            verticalHeight:295,
            vThumbWidth:50,
            thumbItem:8,
            thumbMargin:4,
            slideMargin:0,
            loop:true
          });      
})
