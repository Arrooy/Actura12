var animationSpeed = 600;
var titleSize = 80;



var oneTime = true;


var currentIdioma = 1;
var idiomasTriggered = false;
var weNeedAnUpadte = false;
var offsetInit = 0;

var scrollSpeed = 40;
var w = window,
  d = document,
  e = d.documentElement,
  g = d.getElementsByTagName('body')[0],
  xSize = w.innerWidth || e.clientWidth || g.clientWidth,
  ySize = w.innerHeight || e.clientHeight || g.clientHeight;


$(document).ready(function() {

  $("#1").toggleClass('onZone');
  startImages();
  w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    xSize = w.innerWidth || e.clientWidth || g.clientWidth,
    ySize = w.innerHeight || e.clientHeight || g.clientHeight;

  $(".idiomaContainer").children().on('click', function() {
    if (idiomasTriggered === false) {
      $(".idiomaContainer").children().css("display", "inline");
      //$(this).css("opacity", "0");

      $(".idiomaContainer").children().animate({
        opacity: 0.5
      }, animationSpeed, "swing");

      idiomasTriggered = true;
    } else {
      weNeedAnUpadte = true;
      currentIdioma = this.id.substring(1);
      $(".idiomaContainer").children().css("display", "none");
      $(".idiomaContainer").children().css("opacity", "0");

      $(this).css("display", "inline");
      $(this).animate({
        opacity: 0.5
      }, animationSpeed, "swing");

      idiomasTriggered = false;
    }
  });
  $(".idiomaContainer").children().hover(function() {
    if (idiomasTriggered === true) {
      currentIdioma = this.id.substring(1);
      $(".idiomaContainer").children().css("opacity", "0.5");
    }
    $(this).css("opacity", "1");
  }, function() {
    $(this).css("opacity", "0.5");
  });

  $(".scrollBar").children().on('click', function() {
    gestionaScroll(this);
  });

  setInterval(function() {
    xSize = w.innerWidth || e.clientWidth || g.clientWidth;
    ySize = w.innerHeight || e.clientHeight || g.clientHeight;
    if (oneTime) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      oneTime = false;
    }
    if (weNeedAnUpadte) {
      variaIdioma();
      weNeedAnUpadte = false;
    }
  }, 1000 / 50);
  offsetInit = $('#navbar').offset().top;
});


window.onload = function() {
  oneTime = true;
};

var one = true;
var dos = true;

$(window).bind('mousewheel DOMMouseScroll', function(event) {

  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    // scroll up
    if(dos){
      if (window.pageYOffset <= $(".Cara2").offset().top) {
        gestionaScroll($('#1')[0]);
        dos = false;
        one = true;
      }else{
        var posicion = window.pageYOffset - scrollSpeed ;
        $("html, body").scrollTop(posicion);
      }
    }else{
      var posicion = window.pageYOffset - scrollSpeed ;
      $("html, body").scrollTop(posicion);
    }

  } else {
    // scroll down
    if (one) {
      if (window.pageYOffset <= $(".Cara2").offset().top) {
        gestionaScroll($('#2')[0]);
        one = false;
        dos = true;
      }
    }else{
      var posicion = window.pageYOffset + scrollSpeed;
      $("html, body").scrollTop(posicion);
    }
  }


  if (window.pageYOffset >= offsetInit) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  if (window.pageYOffset > $(".Cara2").offset().top) {
    console.log("caara 2 reached");
  }

  if (window.pageYOffset > $(".Cara3").offset().top) {
    console.log("caara 3 reached");
  }
  if (window.pageYOffset > $(".Cara4").offset().top) {
    console.log("caara 4 reached");
  }
  if (window.pageYOffset > $(".Cara5").offset().top - 50) {
    console.log("caara 5 reached");
  }

});

var gestionaScroll = function(elemento) {
  $(".scrollBar").children().removeClass('onZone');
  $(elemento).toggleClass('onZone');

  switch (elemento.id) {
    case '2':

      $(".mainTitle").css("font-size", titleSize + "px");
      $(".mainTitle").css("top", "48%");
      $(".mainSubtitle").css('display', "none");

      $("html, body").animate({
        scrollTop: ySize
      }, animationSpeed, "swing");

      $(".mainTitle").animate({
        top:ySize + 30,
        fontSize: '30px'
      },animationSpeed,"swing",function(){
        $(".mainTitle").css("display","none");
        $(".mainTitle2").css("display","block");
      });

      break;
    case '3':
      $(".mainTitle").removeClass('animateTopIn')

      //$(".mainTitle").css("top", "203vh");
      $(".mainTitle").css("font-size", "20px");

      $("html, body").animate({
        scrollTop: 2 * ySize
      }, animationSpeed, "swing");
      break;
    case '4':
      //$(".mainTitle").css("top", "303vh");

      $("html, body").animate({
        scrollTop: 3 * ySize
      }, animationSpeed, "swing");
      break;
    case '5':
      //$(".mainTitle").css("top", "403vh");
      $("html, body").animate({
        scrollTop: 4 * ySize
      }, animationSpeed, "swing");
      break;
    default:
      $(".mainTitle").css("display","block");
      $(".mainTitle2").css("display","none");

      $(".mainTitle").css("top","50%");
      $(".mainTitle").css("font-size","80px");

      $(".mainTitle").css("font-size", titleSize + "px");
      $(".mainTitle").css("top", "48%");

      $(".mainSubtitle").css('display', "block");
      $(".mainTitle").removeClass('animateTopIn');

      $("html, body").animate({
        scrollTop: 0
      }, animationSpeed, "swing");
  }
}

var variaIdioma = function() {
  switch (currentIdioma) {
    case '1':
      //Castellano
      $('.mainSubtitle').text("Asesoramos personas");
      $('#titleNosaltres').text("Nosotros");
      $('#titleClients').text("Clientes");
      $('#titleMissio').text("Misión");
      $('#titleContacte').text("Contacto");
      break;
    case '2':
      //English
      $('.mainSubtitle').text("We advise people");
      $('#titleNosaltres').text("About Us");
      $('#titleClients').text("Clients");
      $('#titleMissio').text("Mission");
      $('#titleContacte').text("Contact");
      break;
    default:
      //Catala
      $('.mainSubtitle').text("Assessorem persones");
      $('#titleNosaltres').text("Nosaltres");
      $('#titleClients').text("Clients");
      $('#titleMissio').text("Missió");
      $('#titleContacte').text("Contacte");
  }
}

var startImages = function() {
  $("#img1").css("left", "-250px");
  $("#img2").css("left", "300px");
  $("#img3").css("left", "750px");
}
