function setup(){
    createCanvas(800,800);
    smooth();
    frameRate(30);
    
}

var cent = 800/2;
var rad = 300;
var px; 
var py;
var ang;
var aoff = 0.01;

var radB =100;
var pxB;
var pyB;
var angB;
var aoffB = 0.01;


function draw(){
    translate(cent,cent);
    var angNoise = noise(aoff);
    var ang= angNoise*(PI*2)*8;
    aoff +=0.001;
    // noFill();
    // stroke(50,50);
    // ellipse(0,0,rad*2,rad*2);
    px = cos(ang)*rad;
    py = sin(ang)*rad;
    
    var angNoiseB = noise(aoffB);
    var angB= angNoiseB*(PI*2)*8;
    aoffB +=0.011;
    // noFill();
    // stroke(50,50);
    // ellipse(0,0,rad*2,rad*2);
    pxB = cos(angB)*radB;
    pyB = sin(angB)*radB;

    var col =color(120,round(map(px, 20, pyB, 120, 255)) ,255);
    stroke(col);
    strokeWeight(0.5);
    line(pxB,pyB,px,py);
    fill(255); 
    noStroke();
    ellipse(0,0,200,200);
}