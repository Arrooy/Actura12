
$(document).ready(function() {

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
