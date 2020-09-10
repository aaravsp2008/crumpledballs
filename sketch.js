//variables

 var ball,ground
 var boxmid,boxside1,boxside2
 var options ={
	 isStatic:false,
	 restitution:0.3,
	 friction:0.5,
     density:1.2
 }

//const
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

//preload
function preload()
{
	//helicopterIMG=loadImage("helicopter.png")
	//packageIMG=loadImage("package.png")
}

//setup
function setup() {
	createCanvas(1000,1000);
	rectMode(CENTER);
	
    
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255,20,7);
	
	boxmid = createSprite(width/2,950,200,20);
	boxside1 = createSprite(400,950,20,200);
	boxside2 = createSprite(600,950,20,200);

	ball = ellipse(100,940,55,55);
	//Matter.Bodies.circle(100,950,5,[options]);
	//ball.shapeColor = color(100,30,90);
	
	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	//colide to the ground
      //packageSprite.collide(ground)

	Engine.run(engine);
  
}

//draw
function draw() {
  rectMode(CENTER);
 // background(255,30,12);
  
  drawSprites();
 
}

//keypressed
function keyPressed() {
	if (keyCode === SPACE_KEY) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	   //ball.velocityY=4;
	   //ball.velocityX=4;
	 }
}

//function keyPressed() {
	//if (keyCode === SPACE_KEY) {
	   
	 //}
//}



