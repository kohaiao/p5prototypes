function setup(){
    createCanvas(1000,800);
    smooth(8);
    background(255);
    noStroke();
    frameRate(10);
}

//textFont(hello, 32); 
//textAlign(RIGHT);
function draw(){
    background(255);
    strokeWeight(0.5);
    
    var centx = 500;
    var centy = 400;
    
    stroke(20,50,70);
    
    var randN = random(1,5);
    var x, y;
    
    for(var i =1; i<100; i++){
        var radius =10;
        var radiusNoise = random(10);
        var lastx = -999;
        var lasty = -999;
    
        stroke(random(20),random(50),random(70),150);
        var startAngle = (random(2*PI));
        var endAngle = (random(8));
    
        for(var ang = startAngle; ang <= PI*endAngle; ang +=PI/randN){
            //x = centx +(radius * cos(ang));
            //y = centy +(radius * sin(ang));
            //radius +=0.5; 
            radiusNoise += 0.05;
            var thisRadius = radius + (noise(radiusNoise) * 400) -50;
            x = centx +(thisRadius * cos(ang));
            y = centy +(thisRadius * sin(ang));
            if(lastx != -999){
                line(x,y,lastx,lasty);
            }
            
            lastx = x;
            lasty = y;
        }
    }
}

//textFont(hello, 20); 
//textAlign(RIGHT);
//text("Koh Yamakawa", 350, 320, 120, 60);