var starImg, fairyImg, bgImg, bigImg;
var fairy , fairyVoice;
var star, bigStar, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bigImg = loadImage("starImage.png")
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(500, 450);

	// fairyVoice.play();

	fairy = createSprite(130, 220);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.13;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	bigStar = createSprite(400,220);
	bigStar.addImage(bigImg);
	bigStar.scale=0.06;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(350 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
	bigStar.x = starBody.position.x
	bigStar.y = starBody.position.y

  if(keyCode=== 39){
	  fairy.x=fairy.x+2;
  }
  if(keyCode === 37){
	  fairy.x = fairy.x-2;
  }
  if(keyCode === 32){
	  Matter.Body.setStatic(starBody, false)
  }
  drawSprites();
}

