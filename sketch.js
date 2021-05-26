
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paperObj = new Paper(100, 600, 10);

	ground = new Ground(400, 660, 800, 20);

	leftSide = new Dustbin(550, 620, 20, 100);
	centre = new Dustbin(610, 660, 100, 20);
	rightSide = new Dustbin(670, 620, 20, 100);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  

  background(0);
  
Engine.update(engine);

 paperObj.display();

 ground.display();

rightSide.display();
leftSide.display();
centre.display();
 keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		
	   Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x: 85, y: -85});
	 }
   }
   

