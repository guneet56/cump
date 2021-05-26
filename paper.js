class Paper {
    constructor(x, y, radius){
    var options = {
        isStatic: true,
        'restitution' : 0.3,
        'friction': 0.2,
        'density':0.3,
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    
    World.add(world, this.body)
    }
  
    display() {
     ellipseMode(RADIUS);
   
     fill("yellow");
  
     circle(this.body.position.x, this.body.position.y, this.radius)
    }
  }