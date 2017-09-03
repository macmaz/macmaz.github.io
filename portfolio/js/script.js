$(document).ready(function(){
    
    navNewClass();
    
});

$(window).scroll(function(){
    
    navNewClass();
    
});

function navNewClass() {
    var heightValue = 100;
    
    var scroll = $(window).scrollTop();
    
    if(scroll >= heightValue) {
        $('#main-nav').addClass('scroll');
        $('a.navLink').addClass('scroll');
    }else {
        $('#main-nav').removeClass('scroll');
         $('a.navLink').removeClass('scroll');
    }
}


$('.navLink').click(function () {
    var link = $(this).attr("href");
    var element = link.substr(link.indexOf("#"));
    $('html, body').animate({
        scrollTop: $(element).offset().top
    }, 1000);
    return false;
});