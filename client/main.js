var oneTime = true;
var animationSpeed = 600;

var lastScrollTop = 0,
  delta = 5;
var currentScroll = 1;

var currentIdioma = 1;
var idiomasTriggered = false;

var w = window,
  d = document,
  e = d.documentElement,
  g = d.getElementsByTagName('body')[0],
  xSize = w.innerWidth || e.clientWidth || g.clientWidth,
  ySize = w.innerHeight || e.clientHeight || g.clientHeight;


$(document).ready(function() {

  $("#1").toggleClass('onZone');

  w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    xSize = w.innerWidth || e.clientWidth || g.clientWidth,
    ySize = w.innerHeight || e.clientHeight || g.clientHeight;

    $(".idiomaContainer").children().on('click', function() {
      currentIdioma = this.id.substring(1);
      console.log("Current idioma is " + currentIdioma);
      idiomasTriggered = !idiomasTriggered;
    });
    $(".idiomaContainer").children().hover(function() {
      if(idiomasTriggered === true){
        console.log("IDIOMAS TRIGGERED AND HOVER");
      }
    });

  $(".scrollBar").children().on('click', function() {
    if($('.TopBar').css('opacity') === '0'){
      $('.TopBar').animate({
        opacity: 1
      }, 300, "linear");
    }
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
  }, 1000 / 50);

});

window.onload = function() {
  oneTime = true;
};
var aux = 0;

$(window).bind('mousewheel DOMMouseScroll', function(event) {
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    // scroll up
    aux += 0.1;
    if (aux > 1) {
      currentScroll--;
      if (currentScroll <= 1)
        currentScroll = 1;
      gestionaScroll($('#' + currentScroll)[0]);
      aux = 0;
    }
  } else {
    // scroll down
    aux += 0.1;
    if (aux > 1) {
      currentScroll++;
      if (currentScroll >= 5)
        currentScroll = 5;
      gestionaScroll($('#' + currentScroll)[0]);
      aux = 0;
    }
  }
});

var gestionaScroll = function(elemento) {
  $(".scrollBar").children().removeClass('onZone');
  $(elemento).toggleClass('onZone');

  switch (elemento.id) {
    case '2':
      $(".mainSubtitle").css('display', "none");
      $("html, body").animate({
        scrollTop: ySize
      }, animationSpeed, "swing", function() {
        //TOPBAR SHOW!
        $('.TopBar').animate({
          opacity: 1
        }, 300, "linear");
      });

      $(".scrollBar").animate({
        top: 3 * ySize / 2
      }, animationSpeed, "swing");

      $(".mainTitle").removeClass('animateTopOut');
      $(".mainTitle").removeClass('animateTopIn').addClass('animateTopIn');

      break;
    case '3':
      $(".mainTitle").removeClass('animateTopIn')

      $(".mainTitle").css("top","203vh");
      $(".mainTitle").css("font-size","20px");

      $("html, body").animate({
        scrollTop: 2 * ySize
      }, animationSpeed, "swing");
      $(".scrollBar").animate({
        top: 5 * ySize / 2
      }, animationSpeed, "swing");
      break;
    case '4':
      $(".mainTitle").css("top","303vh");

      $("html, body").animate({
        scrollTop: 3 * ySize
      }, animationSpeed, "swing");
      $(".scrollBar").animate({
        top: 7 * ySize / 2
      }, animationSpeed, "swing");
      break;
    case '5':

      $(".mainTitle").css("top","403vh");
      $("html, body").animate({
        scrollTop: 4 * ySize
      }, animationSpeed, "swing");
      $(".scrollBar").animate({
        top: 9 * ySize / 2
      }, animationSpeed, "swing");
      break;
    default:
      $(".mainTitle").css("font-size","50px");
      $(".mainTitle").css("top","48%");

      $(".mainSubtitle").css('display', "block");
      $(".mainTitle").removeClass('animateTopIn');
      $("html, body").animate({
        scrollTop: 0
      }, animationSpeed, "swing");
      $(".scrollBar").animate({
        top: ySize / 2
      }, animationSpeed, "swing");

      $('.TopBar').animate({
        opacity: 0
      }, 300, "linear");
  }
}
