 
 
 let canvas = document.querySelector('canvas');
 let ctx = canvas.getContext ('2d'); 
 let buttonClear = document.getElementsByName('Clear');
 let pallete = document.querySelector('input');
 let radius = 10;


 
function drawCanvas (){
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0 , 900, 400);
    ctx.fill()
  
}

drawCanvas(); 

 
let drawWidth = 1;
let draw = false;
 

canvas.onmousemove = function(event){
    if(draw) {
    let x =  event.pageX - canvas.offsetLeft;
    let y =  event.pageY - canvas.offsetTop;
  
    ctx.lineTo(x, y);
    ctx.strokeStyle = pallete.value;
    ctx.lineWidth = drawWidth;
    ctx.lineCap ="round";
    ctx.lineJoin= "round";
    ctx.stroke();
    }
  
}
 

canvas.onmousedown = function(event){
    draw = true;
    ctx.beginPath();
 
}


canvas.onmouseup = function(event){
    if(draw) {
    ctx.stroke();
    ctx.closePath();
    draw = false;
    }
}


function clearCanvas(){
    ctx.clearRect(0, 0, 900, 400);
    drawCanvas ();
    
}
 

buttonClear.onclick = clearCanvas;