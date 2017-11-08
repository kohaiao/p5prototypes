function setup(){
    createCanvas(800,800);
    smooth();
    frameRate(10);
    
}

var cent = 800/2;
var rad = 200;
var px; 
var py;
var angle;
var xoff = 0.01;
var xnoise;

function draw(){
    var xnoise = noise(xoff);
    var angle= xnoise*(PI*2);
    xoff +=0.01;
    noFill();
    stroke(50,50);
    ellipse(cent,cent,rad*2,rad*2);
    px = cos(angle)*rad+400;
    py = sin(angle)*rad+400;

    //console.log(px);

    var col =color(round(map(px, 20, py, 120, 255)), 200, 255);
    stroke(col);
    strokeWeight(0.5);
    line(cent,cent,px,py);
}