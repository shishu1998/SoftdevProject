var c =  document.getElementById("slate");
var ctx = c.getContext("2d");

//x-coordinate of the semicircle
var sx = c.width/2;
var frameid;

//start button that draws a semicircle, attaches eventlistener
var startB = function() {
    //code to draw semicircle
    ctx.clearRect(0,0,c.width,c.height);
    ctx.beginPath();
    ctx.arc(sx,480,20,0,Math.PI);
    ctx.stroke();
    window.addEventListener("keydown",move);
};

var move = function(e){
    console.log(e);
    if(e.keyIdentifier == "Left" && sx != 20){
	sx = sx - 5;	
	startB();
    }
    if(e.keyIdentifier == "Right" && sx != c.width-20){
	sx = sx + 5;
	startB();
    }
};


var start = document.getElementById("s");
s.addEventListener("click", startB);

//function that reacts to key pressed

//function that drops objects from the sky
var dropid;
var drop = function() {
    var radius = 10;
    var xcor = 250;
    var ycor = 250;

    var animCode = function() {

        ctx.clearRect(0,0,c.width,c.height);
        ctx.beginPath();
        ctx.arc(xcor, ycor, radius, 0, 2*Math.PI);
        ctx.fill();
        dropid = window.requestAnimationFrame(animCode);
        ycor ++;
    };

    animCode();
};
//function that subtracts a life when an object falls to the bottom and checks if lives = 0

//function that catches and adds a point when an object is picked up
