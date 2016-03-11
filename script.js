/*
DW Softdev, Term 2, Spring 2016
Shi Shu, Sarah Joseph, Dalton Wu

CATCHER (HTML canvas game)
 */

// variables displayed on the HTML page
var score;
var level;

// time-storing variables [milliseconds]
var lastLeveUp;
var lastPancakeUp;
var pancakeCooldown;

var things; // holds all the things to draw; index 0 is the catcher
var frameId = 0;
var triggered;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var bound = canvas.getBoundingClientRect();

function Catcher() {
	// rectangular basket
	
	// the parameters used in fillRect()
	this.width = 100;
	this.height = 50;
	this.x = canvas.width/2 - this.width/2;
	this.y = canvas.height - 2*this.height;
	
	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle = "#ea4"; // nice baskety color
		ctx.strokeStyle = "black";
		ctx.lineWidth = 0.5;
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.stroke();
		ctx.fill();
	};
	
	this.moveTo = function(mouseX, mouseY) {
		// compensate for position of canvas boundingRect
		this.x = mouseX - this.width/2 - bound.left;
		this.y = mouseY - this.height/2 - bound.top;
	};
}

function Pancake() {
	// pancake of random pastel color o_0
	
	// the parameters used in fillRect()
	this.width = 42;
	this.height = 5;
	this.x = Math.floor(Math.random() * (canvas.width - this.width + 1));
	this.y = 0;
	
	// random pastel color (rgb)
	var foo = [];
	var i;
	for(i = 0; i < 3; i++) {
		foo.push(Math.floor(Math.floor((Math.random() * 256 + 255) / 2)));
	}
	this.color = "rgb(" + foo[0] + ", " + foo[1] + ", " + foo[2] + ")";	
	
	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.strokeStyle = "black";
		ctx.lineWidth = 0.5;
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.stroke();
		ctx.fill()
	};
}

function EXPLODE() {
	window.open("failure.html", "_self");
	setTimeout(function() {
		window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_self");
	}, 500);
}

function move(time) {
	// does the game o_O
	
	if(time - lastLevelUp > 5000) {
		level *= 2;
		pancakeCooldown /= 2;
		lastLevelUp = time;
		document.getElementById("level").innerHTML = level.toString();
	}
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	// adds more pancakes
	if(things.length <= 1 || (things.length - 1 < level
	   && time - lastPancakeUp > pancakeCooldown)) {
		things.push(new Pancake());
		lastPancakeUp = time;
	}
	
	var i = 1;
	while(i < things.length) {
		var bottomY = things[i].y + things[i].height;
		if(bottomY >= things[0].y) {
			if(things[i].x >= things[0].x
			   && things[i].x + things[i].width <= things[0].x + things[0].width) {
				things.splice(i, 1);
				score++;
				document.getElementById("score").innerHTML = score.toString();
			}
			else {
				triggered = true;
				break;
			}
		}
		else if(bottomY >= canvas.height) {
			triggered = true;
			break;
		}
		else {
			things[i].y += level > 5 ? 5 : level;
			things[i].draw();
			i++;
		}
	}
	
	// must be drawn last because front of basket is in front of pancakes
	things[0].draw();
	
	if(triggered) {
		EXPLODE();
	}
	else {
		frameId = window.requestAnimationFrame(move);
	}
}

function start() {
	// initialization and reset
	
	level = 1;
	document.getElementById("level").innerHTML = level.toString();
	score = 0;
	things = [new Catcher(), new Pancake()];
	lastLevelUp = performance.now();
	lastPancakeUp = performance.now();
	pancakeCooldown = 5000;
	triggered = false;
	
	canvas.addEventListener("mousemove", function(e) {
		things[0].moveTo(e.clientX, e.clientY);
	});
	
	move();
}
