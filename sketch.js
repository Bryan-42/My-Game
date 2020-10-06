const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var player, miner, mole, startButton, mine, shop, shopkeeper, backgroundIMG;
var ore;

function preload(){
  miner = loadImage("miner.png");
  backgroundIMG = loadImage("background.png");
}

function setup() {
  var canvas = createCanvas(800,600);

  engine = Engine.create();
	world = engine.world;

  ore = new Ore(200,40,40);
  player = new Miner(400,20,40,40);
  Engine.run(engine);

}

function draw(){
  rectMode(CENTER);
  background(backgroundIMG);  
  if(keyDown(RIGHT_ARROW)){
    player.velocityX = 5;
  }
  else if(keyDown(LEFT_ARROW)){
    player.velocityX = -5;
  }
  else if(keyDown(DOWN_ARROW)){
    player.velocityY = 5;
  }
  player.display();
  ore.display();
  drawSprites();
}