var canvas = document.getElementById("slate");
var context = canvas.getContext("2d");

var toggle = document.getElementById("toggle");

//default is rect, switch when toggle
var shape = "rect";

var changeShape = function(e){
    if(shape == "rect") shape = "circle";
    else shape = "rect";
}

toggle.addEventListener("click", changeShape);


context.fillStyle = "yellow";
var draw = function(e){
  if(shape == "rect"){
	   context.lineTo(e.offsetX-8,e.offsetY-8);
     context.stroke();
     context.beginPath();
     context.rect(e.offsetX - 8, e.offsetY - 8, 20, 20);
     context.fill();
     context.stroke();
     context.moveTo(e.offsetX,e.offsetY);


    }
  else{
    context.lineTo(e.offsetX-8,e.offsetY-8);
    context.stroke();
    context.beginPath();
	    context.arc(e.offsetX, e.offsetY, 10, 0, 2*Math.PI);
      context.fill();
      context.lineTo(e.offsetX,e.offsetY);
      context.stroke();
         context.moveTo(e.offsetX,e.offsetY);

    }
}

canvas.addEventListener("click", draw);

var clear = document.getElementById("clear");

var clearBoard = function(e){
    context.clearRect(0,0,context.canvas.clientWidth,context.canvas.clientHeight);
    context.beginPath();
}

clear.addEventListener("click", clearBoard)
