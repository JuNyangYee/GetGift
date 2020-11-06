let b = [];

function setup() {
  createCanvas(360, 640, WEBGL);
  background(0);
  
  b[0] = new OB();
}

function draw() {
  background(0);

  if (frameCount == 60) {
    b.push(new OB());
    frameCount = 0;
  }
  
  for (let i = 0; i < b.length; i++) {
    b[i].update();
    b[i].show();
    
    if (b[i].y > 350) {
      b.shift();
    }
  }
}

function keyPressed() {
  for (let i = 0; i < b.length; i++) {
    if (b[i].y > 0) {
      b.shift();
    }
  }
}

class OB {
  constructor() {
    this.y = -350;
    this.x = random(-100, 101);
    this.vel = 5;
    this.timeLong = 0;
  }
  
  update() {
    this.timeLong++;
  }
  
  show() {
    push();
    translate(this.x, this.y, 0);
    this.y += 2 * (frameCount*0.01) + this.vel;
  
    rotateX(this.timeLong * 0.01);
    rotateY(this.timeLong * 0.01);
    
    fill(255);
    
    box();
    pop();
  }
}