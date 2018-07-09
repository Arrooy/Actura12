var animationSpeed = 600;
var titleSize = 80;
var scrollNeeded = 10;


var topBarON = false;
var lastCase = '1';

var oneTime = true;

var firstTime = true;

var currentIdioma = 1;
var idiomasTriggered = false;
var weNeedAnUpadte = false;
var offsetInit = 0;

var w = window,
  d = document,
  e = d.documentElement,
  g = d.getElementsByTagName('body')[0],
  xSize = w.innerWidth || e.clientWidth || g.clientWidth,
  ySize = w.innerHeight || e.clientHeight || g.clientHeight;


$(document).ready(function() {

  $("#1").toggleClass('onZone');
  $("#q1").css("opacity","1");
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
      $(this).css("opacity","0.5");

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
      currentPage = this.id;
      gestionaScroll(this);
    });

    $(".scrollBarHelper").children().on('click', function() {
      var id  = this.id.substring(1);
      console.log("id is " + id);
      currentPage = id;
      gestionaScroll($("#" + id)[0]);
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

  $(".scrollBar").children().hover(function() {
    scrollOver();
    $(".scrollBarHelper").children().css("opacity","0.5");
    $("#q" + this.id).css("opacity","1");
  });

  $(".scrollBarHelper").children().hover(function() {
    scrollOver();
    $(".scrollBarHelper").children().css("opacity","0.5");
    $(this).css("opacity","1");
  });

  $(".HotZone").hover(function() {
    scrollOver();
  },function() {
    scrollNotOver();
  });
});


window.onload = function() {
  oneTime = true;
};

var one = true;
var dos = true;

var scrollDown = 0;
var scrollUp = 0;

var currentPage = 1;

$(window).bind('mousewheel DOMMouseScroll', function(event) {

  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    // scroll up
    scrollUp++;
    scrollDown = 0;

    if (scrollUp >= scrollNeeded) {
      currentPage--;
      if (currentPage <= 1) {
        currentPage = 1;
      }
      gestionaScroll($('#' + currentPage)[0]);
      scrollUp = 0;
    }

  } else {
    // scroll down
    scrollDown++;
    scrollUp = 0;

    if (scrollDown >= scrollNeeded) {
      currentPage++;
      if (currentPage >= 5) currentPage = 5;
      gestionaScroll($('#' + currentPage)[0]);
      scrollDown = 0;
    }
  }

  if (window.pageYOffset >= offsetInit) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

});

var topBarActivated = function() {
  $(".mainTitle").css("display", "none");
  $(".mainTitle2").css("display", "block");
  navbar.classList.add("sticky");
}

var gestionaScroll = function(elemento) {
  scrollNotOver();
  switch (elemento.id) {
    case '2':

    $(".mainTitle").css("font-size", titleSize + "px");
    $(".mainTitle").css("top", "50%");
    if(lastCase === '1'){
      $(".mainTitle").animate({
        top: ySize + 30,
        fontSize: '30px'
      }, animationSpeed, "swing", function() {
        $(".mainTitle").css("display", "none");
        $(".mainTitle2").css("display", "block");
      });
    }else{
      $(".mainTitle").css("display", "none");
      $(".mainTitle2").css("display", "block");
    }

    $(".mainSubtitle").css('display', "none");
    $(".scrollBarHelper").children().css("color","#1c1c1c");

      for (let a = 0; a < 5; a++) {
        if ($(".scrollBar").children()[a] !== elemento) {
          $(".scrollBar").children()[a].style.border = "1px solid #1c1c1c";
        } else {
          $(".scrollBar").children()[a].style.border = "";
        }
      }

      $('.textNosaltres').animate({
        top: ySize*0.6,
        opacity:1
      }, 1200, "swing");

      $("html, body").animate({
        scrollTop: ySize
      }, animationSpeed, "swing");
      break;
    case '3':

    topBarActivated();
    $(".scrollBarHelper").children().css("color","#1c1c1c");

      for (let a = 0; a < 5; a++) {
        if ($(".scrollBar").children()[a] !== elemento) {
          $(".scrollBar").children()[a].style.border = "1px solid #1c1c1c";
        } else {
          $(".scrollBar").children()[a].style.border = "";
        }
      }

      $("html, body").animate({
        scrollTop: 2 * ySize
      }, animationSpeed, "swing");
      break;
    case '4':
      $(".scrollBarHelper").children().css("color","#1c1c1c");

      for (let a = 0; a < 5; a++) {

        if ($(".scrollBar").children()[a] !== elemento) {
          $(".scrollBar").children()[a].style.border = "1px solid #1c1c1c";
        } else {
          $(".scrollBar").children()[a].style.border = "";
        }
      }

      topBarActivated();

      $(".imageMissio").animate({
         "padding-left": "50px",
         opacity:1
      },1200,"swing");

      $(".textMissio").animate({
        "padding-left": "60px",
        opacity:1
      },1200,"swing");


      $("html, body").animate({
        scrollTop: 3 * ySize
      }, animationSpeed, "swing");
      break;
    case '5':
      $(".scrollBarHelper").children().css("color","#e4e4e4");

      for (let a = 0; a < 5; a++) {
        if ($(".scrollBar").children()[a] !== elemento) {
          $(".scrollBar").children()[a].style.border = "1px solid #e4e4e4";
        } else {
          $(".scrollBar").children()[a].style.border = "";
        }
      }


      topBarActivated();


      $("html, body").animate({
        scrollTop: 4 * ySize
      }, animationSpeed, "swing");
      break;
    default:

      $(".scrollBarHelper").children().css("color","#e4e4e4");

      for (let a = 0; a < 5; a++) {
        if ($(".scrollBar").children()[a] !== elemento) {
          $(".scrollBar").children()[a].style.border = "1px solid #e4e4e4";
        } else {
          $(".scrollBar").children()[a].style.border = "";
        }
      }

      navbar.classList.remove("sticky");
      $(".mainTitle").css("display", "block");
      $(".mainTitle2").css("display", "none");

      $(".mainTitle").css("font-size", titleSize + "px");
      $(".mainTitle").css("top", "50%");


      $(".mainSubtitle").css('display', "block");
      //$(".mainTitle").removeClass('animateTopIn');

      $("html, body").animate({
        scrollTop: 0
      }, animationSpeed, "swing");
  }
  lastCase = elemento.id;
  $(".scrollBar").children().removeClass('onZone');
  $(elemento).toggleClass('onZone');
  $(".scrollBarHelper").children().removeClass('onZone1');
  $("#q" + elemento.id).toggleClass('onZone1');
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
  // $("#img1").css("left", "-250px");
  // $("#img2").css("left", "300px");
  // $("#img3").css("left", "750px");
}


var scrollOver = function(){
  $(".scrollBarHelper").children().css("visibility","visible");
}

var scrollNotOver = function(){
  $(".scrollBarHelper").children().css("visibility","hidden");
}
