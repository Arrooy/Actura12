var oneTime = true;
var animationSpeed = 600;
$(document).ready(function() {

  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      xSize = w.innerWidth || e.clientWidth || g.clientWidth,
      ySize = w.innerHeight|| e.clientHeight|| g.clientHeight;

  $(".scrollBar").children().on('click', function(){

    $(".scrollBar").children().removeClass('onZone');
    $(this).toggleClass('onZone');

      switch (this.id) {
          case '2':
            $(".mainSubtitle").css('display', "none");
            $("html, body").animate({ scrollTop:  ySize }, animationSpeed, "swing");


            $(".scrollBar").animate({top:3 * ySize / 2},animationSpeed,"swing");


            $(".mainTitle").removeClass('animateTopOut');
            $(".mainTitle").addClass('animateTopIn');

            break;
          case '3':
            $("html, body").animate({ scrollTop:  2 * ySize },animationSpeed,"swing");
            $(".scrollBar").animate({top : 5 * ySize / 2},animationSpeed,"swing");
            break;
          case '4':
            $("html, body").animate({ scrollTop:  3 * ySize },animationSpeed,"swing");
            $(".scrollBar").animate({top : 7 * ySize / 2},animationSpeed,"swing");
            break;
        default:

          $(".mainTitle").removeClass('animateTopIn');
          $(".mainTitle").addClass('animateTopOut');

          $("html, body").animate({ scrollTop:  0 },animationSpeed,"swing",function(){
            $(".mainSubtitle").css('display', "block");
            $(".mainSubtitle").css('opacity', "0");
            $(".mainSubtitle").animate({opacity:1}, 200, "swing");
          });

          $(".scrollBar").animate({top : ySize / 2},animationSpeed,"swing");

      }

    });

    setInterval(function() {
      xSize = w.innerWidth || e.clientWidth || g.clientWidth;
      ySize = w.innerHeight|| e.clientHeight|| g.clientHeight;
      if(oneTime){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        oneTime = false;
      }
    }, 1000 / 25);

  });

  window.onload = function() {
    oneTime = true;
  };
/*
  $(this).on('webkitAnimationEnd', function() {
    this.style.webkitAnimationPlayState = "paused";
  });
*/
