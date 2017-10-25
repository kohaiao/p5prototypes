var num;
var off = 2;

function setup() {
  createCanvas(1400,800);
  smooth();
  noiseDetail(1,0.9);
  frameRate(10);
}

function draw() {
  background(255);
  off +=0.03;
  drawSpectrum(300);
}

function drawSpectrum(size) {
  //var amplitude = size * (0.2 + 0.8 * (1 - 0.1));
  var barWidth = size * 0.05;
  var barInterval = size * 0.06;
  var halfSize = size * 0.5;
  var offsetXPosition = -halfSize + barWidth * 0.5;
  var ran = random(10);
  push();
  rectMode(CORNER);
  noStroke();
  fill(0);
  // for (var i = 1; i < 10; i++) {
  //   // if you set i=0, the first bar can't move.
  //   var barLength =  noise(off*i/45)*900;
  //   rect(
  //     100,
  //     i * barInterval,
  //     barLength - halfSize,
  //     barWidth
  //   )
  // }
  for (var i = 1; i < 30; i++) {
    // if you set i=0, the first bar can't move.
    var barLength =  noise(off*i/45)*900;
    rect(
      100,
      i * barInterval,
      barLength - halfSize,
      barWidth
    )
  }
}