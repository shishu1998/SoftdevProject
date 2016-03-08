var c =  document.getElementById("slate");
var ctx = c.getContext("2d");

//x-coordinate of the semicircle
var sx = c.width/2;
var frameid;

//start button that draws a semicircle
var startB = function() {
    //code to draw semicircle
    ctx.clearRect(0,0,c.width,c.height);
    ctx.beginPath();
    ctx.arc(sx,480,20,0,Math.PI);
    ctx.stroke();
};

var move = function(e){
    console.log(e);
    if(sx != 20 && sx != c.width-20){
	console.log(sx);
	sx = sx + 10;	
	startB();
    }
};

//c.addEventListener("keydown",move);

var start = document.getElementById("s");
s.addEventListener("click", startB);

//function that reacts to key pressed

//function that drops objects from the sky

//function that subtracts a life when an object falls to the bottom and checks if lives = 0

//function that catches and adds a point when an object is picked up
