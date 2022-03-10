var canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var lastX, lastY;
var colour= "orange";
var width_of_line=1;
var width=screen.width;
var height=screen.height;
var new_width=width-70;
var new_height=height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",touch_start);
function touch_start(e){
    console.log("touchstart");
    lastX=e.touches[0].clientX-canvas.offsetLeft;
    lastY=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", touch_move);
function touch_move(e){
    console.log("touch_move");
    var currentX=e.touches[0].clientX-canvas.offsetLeft;
    var currentY=e.touches[0].clientY-canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width_of_line;
        console.log("lastX= "+lastX+"Y= "+lastY);
        ctx.moveTo(lastX,lastY);
        console.log("currentX= "+currentX+"currentY "+currentY);
        ctx.lineTo(currentX,currentY);
        ctx.stroke();

    lastX=currentX;
    lastY=currentY;
}
