let ball1;
//let ball2;

var s = 0;
var z = 0;

var g = 40;

function setup() {
  createCanvas(600, 600);
  //ball  = new Ball(x, y, x speed, y speed , diamter)
  ball1 = new Ball(50, 50, 10, 5, 20);
  //ball2 = new Ball(80, 200, 10, 5, 20);

}

function draw() {
  background(20);
  
  ball1.move();
  ball1.stick();
  ball1.show();
  
  //ball2.move();
  //ball2.show();
}



class Ball {
  constructor(x, y, s, sy, diameter) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.sy = sy;
    this.d = diameter;
  }
  move() {
    for (var x = -35; x < 35; x++) {
      if (mouseY + x == this.y && this.x == width - g) {
        this.s = -this.s;
        s += 1;
      }
    }
    
    if (this.x > width - (this.d / 2)) {
      s -= 1;
      this.x = this.d;
    }
    
    if (this.x < this.d / 2) {
      this.s = -this.s;
    }
    
    if (this.y > height - this.d / 2) {
      this.sy = -this.sy;
    }
    
    if (this.y < this.d / 2) {
      this.sy = -this.sy;
    }

    if(s >=10 || s <= -10){
    	z = 10;
    }
    
    
    if (s < 10){
    this.x += this.s;
    }else{
    this.x += this.s * 2;
    }
    
    if (s < 15){
    this.y += this.sy;
    }else{
    this.y += this.sy * 2;
    }
  }

  
  stick(){
    stroke(255);
    fill(0, 52, 204);
    textSize(32);
    text(s, 300 - 10 - z, 300);
    stroke(255);
    line(300, 0, 300, 260);
    line(300, 320, 300, 600);
  	rect(width - g, mouseY - 35, 10, 70);
  }
  
  show() {
    var g = 40;
    stroke(255, 0, 0);
    strokeWeight(4);
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.d);
  }
}