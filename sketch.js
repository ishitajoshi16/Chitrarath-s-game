const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1 ;
var bg
var ball,playerimag;

function preload(){
bg=loadImage("sprites/cls.jpg")
playerimag=loadImage("sprites/ball2.png")
}




function setup(){
    var canvas = createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;
  
    ground1 = new ground(200,695,1000,40)

    
  var option ={
       
    isStatic:false,
    restitution:0.4
   }

ball=Bodies.rectangle(200,200,100,100,option);
World.add(world,ball);
   
ballsprite=createSprite(200,200,20,20);
ballsprite.addImage("image",playerimag);
ballsprite.scale=0.4;
}

function draw(){
  Engine.update(engine);
    background(bg);
    
   
   ballsprite.x=ball.position.x;
   ballsprite.y=ball.position.y;
      
    ground1.display();

    drawSprites();
    
}


function keyPressed(){
if(keyCode===RIGHT_ARROW){

ball.position.x=ball.position.x+10;
}


}