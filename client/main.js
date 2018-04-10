
$(document).ready(function() {
  $("#content").show();

  $("#desplegableIdiomesContent").hide();
  $("#desplegableIdiomes").text("Idioma v");

  $("#desplegableIdiomes").click(function(){
    if(  $("#desplegableIdiomesContent").css("display") == "none"){

        $("#desplegableIdiomesContent").css("display","flex");
        $("#desplegableIdiomes").text("Idioma ^");

    }else{
      $("#desplegableIdiomesContent").hide();
      $("#desplegableIdiomes").text("Idioma v");
    }
  });


  $("#clickTitle").click(function(){
    //MAIN STAGE
  });


  $("#nosotros").click(function(){

    $("#nosotrosContent").show();//.css("display","box");
    $("#calculadoraContent").hide();
    $("#plantillaContent").hide();
    $("#blogContent").hide();
  });

  $("#calculadora").click(function(){
    $("#nosotrosContent").hide();
    $("#calculadoraContent").show();//.css("display","box");
    $("#plantillaContent").hide();
    $("#blogContent").hide();
  });

  $("#plantilla").click(function(){
    $("#nosotrosContent").hide();
    $("#calculadoraContent").hide();
    $("#plantillaContent").show();//.css("display","box");
    $("#blogContent").hide();
  });

  $("#blog").click(function(){
    $("#nosotrosContent").hide();
    $("#calculadoraContent").hide();
    $("#plantillaContent").hide();
    $("#blogContent").show();//.css("display","box");
  });

  $("#espanol").click(function(){
    location = "es";
  });

  $("#catala").click(function(){
    location = location.origin;
  });

  $("#english").click(function(){
    location = "en";
  });

  $("#chinese").click(function(){
    location = "zh";
  });



});
