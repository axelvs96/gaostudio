window.addEventListener('scroll', function() {
    if (window.scrollY > 0){
        $(".navbar").css('background-color', '#ffffff');
        $(".navbar").removeClass("navbar-dark");
        $(".navbar").addClass("navbar-light");
        $(".nav").css('background-color', '#ffffff');
        $(".nav").css('opacity', '80%');
        $(".imgnav").attr("src","/gaostudio/images/logos/logo-negro-sf.png");

        var i, $tBotonMenu = $('.botonmenu');
        for (i=0; i<$tBotonMenu.length; i++)    {
            $('.botonmenu')[i].style.setProperty('border-color', '#000000', 'important');
        }

        var $tEnlaces = $('.enlaces');
        for (i=0; i<$tEnlaces.length; i++)    {
            $('.enlaces')[i].style.setProperty('color', '#000000', 'important');
        }

        /*var $tSlides = $('.slideIntro');
        for (i=0; i<$tSlides.length; i++)    {
            $('.slideIntro')[i].style.setProperty('filter', 'grayscale(0%)','important');
        }*/
        
        if(window.scrollY>=$(window).height()*0.60){
            $(".fotogaostudio").fadeIn(1000);
            $(".presentacion").fadeIn(2000);
            $(".presentacion2").fadeIn(2500);

        }

        
    }
    else{
        $(".navbar").css('background-color', 'transparent');
        $(".navbar").removeClass("navbar-light");
        $(".navbar").addClass("navbar-dark");
        $(".nav").css('background-color', 'transparent');
        $(".imgnav").attr("src","/gaostudio/images/logos/logo-blanco-sf.png");

        var i, $tBotonMenu = $('.botonmenu');
        for (i=0; i<$tBotonMenu.length; i++)    {
            $('.botonmenu')[i].style.setProperty('border-color', '#ffffff', 'important');
        }

        
        var i, $tEnlaces = $('.enlaces');
        for (i=0; i<$tEnlaces.length; i++)    {
            $('.enlaces')[i].style.setProperty('color', '#ffffff', 'important');
        }

        /*var $tSlides = $('.slideIntro');
        for (i=0; i<$tSlides.length; i++)    {
            $('.slideIntro')[i].style.setProperty('filter', 'grayscale(100%)','important');
        }*/

        $(".fotogaostudio").fadeOut();
        $(".presentacion").fadeOut();
        $(".presentacion2").fadeOut();
    }
});