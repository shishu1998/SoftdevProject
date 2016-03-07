var c =  document.getElementById("slate");
var ctx = c.getContext("2d");

//x-coordinate of the semicircle
var sx;
var frameid;

//start button that draws a semicircle
var startB = function() {
    //code to draw semicircle
    sx = c.width/2;
    ctx.beginPath();
    ctx.arc(sx,480,20,0,Math.PI);
    
};

var start = document.getElementById("s");
s.addEventListener("click", startB);

//function that reacts to key pressed

//function that drops objects from the sky

//function that subtracts a life when an object falls to the bottom and checks if lives = 0

//function that catches and adds a point when an object is picked up
