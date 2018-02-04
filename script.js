var canvas = document.getElementById("slate");
var context = canvas.getContext("2d");

var toggle = document.getElementById("toggle");

//default is circle, switch when toggle
var shape = "circle";

var changeShape = function(e){
    if(shape == "circle") shape = "rect";
    else shape = "circle";
}

toggle.addEventListener("click", changeShape);


context.fillStyle = "yellow";
var draw = function(e){
  if(shape == "rect"){
	   context.beginPath();
	    context.rect(e.clientX - 8, e.clientY - 8, 20, 20);
	     context.fill();
    }
  else{
	   context.beginPath();
	    context.arc(e.clientX, e.clientY, 10, 0, 2*Math.PI);
	     context.fill();
    }
}

canvas.addEventListener("click", draw);

var clear = document.getElementById("clear");

var clearBoard = function(e){
    context.clearRect(0,0,context.canvas.clientWidth,context.canvas.clientHeight);
}

clear.addEventListener("click", clearBoard)
