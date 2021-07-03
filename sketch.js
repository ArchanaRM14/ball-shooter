
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, ball, leftground, rightground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,390,1200,20);
	leftground = new Ground(700,350,20,100);
	rightground = new Ground(1000,350,20,100);
	var ball_options ={
		restitution:0.5,
		density:1,
	}
	ball = Bodies.circle(200,350,20);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  leftground.display();
  rightground.display();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
	  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.05, y: 0 });
	}
  }



