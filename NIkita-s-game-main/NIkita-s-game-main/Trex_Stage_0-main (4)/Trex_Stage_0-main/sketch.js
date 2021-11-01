const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var archer, arrow, zombie, bg
var archer_img, zombie_img, arrowImg, bg_img


function preload(){
  archer_img = loadImage("assets/R.png")
  bg_img = loadImage("assets/forest.jpg")
  arrowImg = loadImage("assets/arrow.png");
  zombie_img = loadImage("assets/zombie.png");
  
  }

function setup(){
engine = Engine.create();
  world = engine.world;
  createCanvas(windowWidth, windowHeight)


bg = createSprite(width/2, height/2)
bg.addImage("bg", bg_img);
bg.scale = 0.65

archer = createSprite(width/5, height - height/2.5, 50, 50)
archer.addImage("archer1",archer_img);
archer.scale = 0.2

}

function draw(){
background("black")
  if(keyDown("space")){
    createArrow();
   
  }
  drawSprites();
}

function createArrow(){
  //arrow = createSprite(width/4, height - height/1.95)
  arrow = new Arrow(width/4, height - height/1.95)
  //arrow.addImage("arrow1", arrowImg);
  //arrow.velocityX = 10;
 // arrow.scale = 0.4;
 arrow.display();
 arrow.shoot();
 arrow.animate();
 
}