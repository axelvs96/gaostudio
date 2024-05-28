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
        
        document.getElementsByClassName("presentacion").innerHTML = window.scrollY;
        document.getElementsByClassName("presentacion2").innerHTML = screen.width;
        
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

    }
});

$.ajax("navidad.html", {
    success: function(response) {
      $(".modalNavidades").html(response);
    }
  }); 

  $.ajax("actoral.html", {
    success: function(response) {
      $(".modalActoral").html(response);
    }
  }); 

  $.ajax("cumple.html", {
    success: function(response) {
      $(".modalCumpleanos").html(response);
    }
  }); 

  $.ajax("profesional.html", {
    success: function(response) {
      $(".modalPerfilPro").html(response);
    }
  }); 

  $.ajax("personal.html", {
    success: function(response) {
      $(".modalMarcaPers").html(response);
    }
  }); 

  $.ajax("empresa.html", {
    success: function(response) {
      $(".modalCorporativo").html(response);
    }
  }); 

  $.ajax("diamadre.html", {
    success: function(response) {
      $(".modalDiaMadre").html(response);
    }
  }); 