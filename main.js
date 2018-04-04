
socket.on('userList', function(data) {

  if(data.imAdmin){
    var data = data.data;
    $('#autoDataUsers div').empty();
    for(let index = 0; index < data.length; index++){
      $("#autoDataUsers").prepend("<div class='llistaUsers'><button type='button' id='" + data[index].username + "' class='btn btn-primary userLlista'>" + data[index].username + "</button></div>");
      for(let index1 = 0; index1 < data[index].invitats.length;index1++){
        console.log(data[index].invitats[index1]);
        $("<p style='display:none;background-color:#094e8b;' class ='" + data[index].username + "child" + "'>" + data[index].invitats[index1] +"</p>").appendTo("#" + data[index].username);
      }
      $("#"+data[index].username).click(function(event) {
        handleClick();
      });
    }
  }else{
    $('#autoDataPromotors div').empty();
    var data = data.data;
    for(let index = 0; index < data.length; index++){
      if(data[index].username !== username){
        continue;
      }
      console.log("IN");
      $("#autoDataPromotors").prepend("<div class='llistaUsers'><button type='button' id='" + data[index].username + "' class='btn btn-primary userLlista'>" + "Convidats" + "</button></div>");
      for(let index1 = 0; index1 < data[index].invitats.length;index1++){
        $("<p style='background-color:#094e8b;' class ='" + data[index].username+ "child" + "'>" + data[index].invitats[index1] +"</p>").appendTo("#"+data[index].username);
      }
    }
  }
});

$(".btn").on("click",function(event) {
  console.log(event);
  handleClick();
});


var handleClick = function(){

  if(event.currentTarget.id === "newPromotor-save"){
    socket.emit("ButtonPressed", {name:event.currentTarget.id,data:{user:$("#newPromotor-username").val(),password:$("#newPromotor-password").val()}});
    $("#newPromotor-username").val("");
    $("#newPromotor-password").val("");
  }else if(event.currentTarget.id === "newParticipant-save"){
    if($("#newParticipant-username").val() !== "")
      socket.emit("ButtonPressed", {name:event.currentTarget.id,data:{user:$("#newParticipant-username").val()}});
      $("#newParticipant-username").val("");
  }else if(event.currentTarget.id === "signDiv-signIn"){

  }else{
    socket.emit("ButtonPressed", {name:event.currentTarget.id});
  }
}

socket.on('updateView', function(data) {
  for (element in data){
    if(data[parseInt(element) + 1] === "true"){
      $("#"+data[element]).show();
    }else if(data[parseInt(element) + 1] === "false"){
      $("#"+data[element]).hide();
    }else if(data[parseInt(element) + 1] === "toogle"){

      if($("#"+data[element]).css("display") === "none"){
        $("#"+data[element]).show();
      }else {
        $("#"+data[element]).hide();
      }
    }else if(data[parseInt(element) + 1] === "toogleChild"){
      if($("."+data[element]+"child").css("display") === "none"){
        $("."+data[element]+"child").show();
      }else {
        $("."+data[element]+"child").hide();
      }
    }
  }
});

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

document.addEventListener('touchmove', function(event) {
    event = event.originalEvent || event;
    if(event.scale > 1) {
      event.preventDefault();
    }
}, false);
