class Paper {
  constructor(x, y) {
    var options = {
        'restitution':0.5,
        'friction':5,
        'density':1.0,
        
    }
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(x, y, 26, options);
   this.image = loadImage("paper.png")
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    
    
    
    fill(230);
    ellipse(0, 0, 26);
    pop();
    image(this.image,this.body.position.x-100,this.body.position.y-120)
  }
};