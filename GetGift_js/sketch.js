let b = [];

function setup() {
  createCanvas(360, 640, WEBGL);
  background(0);
  
  b[0] = new OB();
}

function draw() {
  background(0);

  if (frameCount % 60 == 0) {
    b.push(new OB());
  }
  
  for (let i = 0; i < b.length; i++) {
    b[i].update();
    b[i].show();
    
    if (b[i].y > 350 || b[i].y < -350) {
      b.shift();
    } else if (b[i].x < -180 || b[i].x > 180) {
      b.shift();
    }

  }

  print(b.lenght);
}

function keyPressed() {
  
  if (keyCode == DOWN_ARROW) {
    for (let i = 0; i < b.length; i++) {
      if (b[i].y > 80) {
        b[i].vel = 100;
      }
    }
  }

  if (keyCode == UP_ARROW) {
    for (let i = 0; i < b.length; i++) {
      if (b[i].y > 80) {
        b[i].vel = -20;
        b[i].xMove = random(-50, 51);
      }
    }
  }

  if (keyCode == 32) {
    for (let i = 0; i < b.length; i++) {
      if (b[i].y > 0) {
        b.shift();
      }
    }
  }
  
}

class OB {
  constructor() {
    this.y = -350;
    this.x = random(-100, 101);
    this.vel = 5;
    this.timeLong = 0;
    this.xMove = 0;
  }
  
  update() {
    this.timeLong++;
  }
  
  show() {
    push();
    translate(this.x, this.y, 0);
    this.y += 2 * (frameCount%60*0.01) + this.vel;
    this.x += this.xMove;
  
    rotateX(this.timeLong * 0.01 );
    rotateY(this.timeLong * 0.01 );
    
    fill(255);
    
    box();
    pop();
  }
}