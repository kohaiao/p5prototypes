var yoff = 0.2;        // 2nd dimension of perlin noise

function setup() {
    createCanvas(710, 400);
    
}

function draw() {
    background(255,4)
    fill(0,4);
    // We are going to draw a polygon out of the wave points
    beginShape(); 
    vertex(0,0)
    var xoff = 0;       // Option #1: 2D Noise
    // var xoff = yoff; // Option #2: 1D Noise

    // Iterate over horizontal pixels
    for (var x = 0; x <= height; x += 10) {
    // Calculate a y value according to noise, map to 
    
    // Option #1: 2D Noise
    var y = map(noise(xoff, yoff), 0, 1, 200,300);

    // Option #2: 1D Noise
    // var y = map(noise(xoff), 0, 1, 200,300);
    
    // Set the vertex
    vertex(y, x); 
    // Increment x dimension for noise
    xoff += 0.05;
    }
    // increment y dimension for noise
    yoff += 0.01;
    vertex(0, height);
    endShape(CLOSE);
}
