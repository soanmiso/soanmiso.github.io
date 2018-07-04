$(function() {

    //Simple filter controls
    $(document).on('click','.simplefilter li',function(){
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });

    //Multifilter controls
    $(document).on('click','.multifilter li',function(){
        $(this).toggleClass('active');
    });

    //Shuffle control
    $(document).on('click','.shuffle-btn',function(){
        $('.sort-btn').removeClass('active');
    });

    //Sort controls
    $(document).on('click','.sort-btn',function(){
        $('.sort-btn').removeClass('active');
        $(this).addClass('active');
    });

    $(document).on('click','#toTopHover',function(e){
        e.preventDefault();
        $('html, body').animate( { scrollTop : 0 }, 400 );
        return false;
    });

    function initSoan(){
        $('.simplefilter li').removeClass('active');
        $('#init-gallery').addClass('active');
    }
    
    initSoan();

});

