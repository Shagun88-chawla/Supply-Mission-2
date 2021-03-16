var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var redBox , redBox1 , redBox2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var packageSprite_options = {
	restitution: 1.0
}

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	redBoxSprite=createSprite(width/2, 650, 200, 20);
	redBoxSprite.shapeColor= color("red");
	redBox1Sprite=createSprite(310,610, 20, 100);
	redBox1Sprite.shapeColor= color("red");
	redBox2Sprite=createSprite(510, 610, 20, 100);
	redBox2Sprite.shapeColor = color("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
	Matter.Body.setStatic(packageBody,false);
	Matter.Body.setStatic(redBoxSprite,false);
	
    
  }
}



