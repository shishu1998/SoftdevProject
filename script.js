var c =  document.getElementById("slate");
var ctx = c.getContext("2d");
var scoreboard = document.getElementById("score");
var score = 0;

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

ctx.fillStyle = "#FF0000";

var dropid;

function drop() {
    var radius = 10;
    var xcor = 250;
    var ycor = 250;

    var animCode = function() {
	console.log("ok");
        ctx.clearRect(0,0,c.width,c.height);

        if (ycor == c.height-10) {
	    alert("dead");
	    window.cancelAnimationFrame(dropid);
	}
	else {
	    ctx.beginPath();
	    ctx.arc(xcor, ycor, radius, 0, 2*Math.PI);
	    ctx.fill();
	    dropid = window.requestAnimationFrame(animCode);
	    ycor ++;
	}
    };

    animCode();
};

var changescore(){
    score ++;
    scoreboard.value = score;
};

//function that subtracts a life when an object falls to the bottom and checks if lives = 0

//function that catches and adds a point when an object is picked up
