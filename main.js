mouseEvent="";
var width=screen.width;
var last_x,last_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
line_width=5;

new_width= screen.width-100;
new_height= screen.height-300;

if(width<992);
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
  color = document.getElementById("color").value;
  line_width = document.getElementById("width_line").value;
  console.log("my_touchstart");
  last_x=e.touches[0].clientX-canvas.offsetLeft;
  last_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
  console.log("my_touchmove")

  current_position_of_touch_x = e.touches[0].clientX-canvas.offsetLeft;
  current_position_of_touch_y = e.touches[0].clientY-canvas.offsetTop;

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = line_width;
  
  console.log("Last position of x and y coordinates = ");
  console.log("x = " + last_x + "y = " + last_y);
  
  ctx.moveTo(last_x, last_y);
  console.log("Current position of x and y coordinates = ");
  console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
  
  ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
  ctx.stroke();
  

  last_x = current_position_of_touch_x; 
  last_y = current_position_of_touch_y;
}


canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
  color = document.getElementById("color").value;
  line_width = document.getElementById("width_line").value;
  mouseEvent="mousedown";
}

canvas.addEventListener("mousemove",my_mouseMove);
function my_mouseMove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;
        console.log("last postion of X and Y co-ordinates");
        console.log("x = " + last_x + "y = " + last_y);
        
        ctx.moveTo(last_x,last_y);
        console.log("Current position of x and y coordinates = "); 
        console.log("x = " + current_x + "y = " + current_y);
        
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}





function clearAll() { 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}
