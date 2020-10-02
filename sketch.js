var seaimg,shipimg,vehicleimg,playerimg,whaleimg,underwaterimg,anglerfishimg,bluewhaleimg,giantoarfishimg,giantsquidimg,leatherbackturtleimg,whalesharkimg,snailimg,trenchimg;
var ship,player,vehicle,whale,background1;
var gameState = "details";
var count;
function preload(){
seaimg = loadImage("sea.gif");
shipimg = loadAnimation("Shipimg.png");
vehicleimg = loadImage("vehicle.png");
playerimg = loadImage("character.png");
whaleimg = loadImage("orcawhalepp.png");
underwaterimg = loadImage("background2.jpg");
leatherbackturtleimg = loadImage("leatherbackturtle1.png");
anglerfishimg = loadImage("anglerfish.png");
bluewhaleimg = loadImage("bluewhale.png");
giantoarfishimg = loadImage("oarfish.jpg");
giantsquidimg = loadImage("giantsquid2.jpg");
snailimg = loadImage("snailfish.png");
trenchimg = loadImage("marianatrench.jpg")
}

function setup() {
  createCanvas(1000,800);
  background1 = createSprite(500,300);
  background1.addImage("upwater",seaimg);
  background1.addImage("underwater",underwaterimg);
  background1.addImage("trench",trenchimg);
  
  background1.scale = 4;
  background1.x=background1.width/2
  ship = createSprite(100, 220, 50, 50);
  ship.addAnimation("ship",shipimg);
  ship.scale=0.4
  player = createSprite(120,220,50,50);
  player.setCollider("circle",0,0,10)
  player.addImage("player",playerimg);
  player.scale=0.5
  vehicle = createSprite(100,450,50,50);
  vehicle.addImage("vehicle",vehicleimg);
  vehicle.visible = false;
  vehicle.scale = 0.5;
  
  
}

function draw() {
  background(0); 
  if (gameState=="details"){
    if(keyDown('space')){
      gameState="upwater"
    }
  }
 if(gameState == "upwater"){
  if(background1.x<0) {
    background1.x=background1.width/2;
  }
 
  if  (keyDown("RIGHT"))
{
  background1.velocityX=-2;
  background1.velocityY=0;
  
}
if  (keyWentUp("RIGHT"))
{
  background1.velocityX=0;
  background1.velocityY=0;
  
}
  if   (keyDown("left"))
  {
    background1.velocityX=2;
    background1.velocityY=0;
  }
  if  (keyWentUp("left"))
{
  background1.velocityX=0;
  background1.velocityY=0;
  
}

if(frameCount>=200){
 
  background1.velocityX=0;
  background1.velocityY=0;
  
  if(keyDown("up")) {
    vehicle.visible = true;
    player.velocityY=1;
    count=0;
   
  }
  if(player.isTouching(vehicle) && count==0){
    gameState = "underwater";
    ship.visible = false;
    player.visible = false;
  }
  }
}
 if (gameState == "underwater"){
  

  vehicle.x=400;
  vehicle.y=140;

   background1.changeImage("underwater",underwaterimg);
   background1.scale = 4.0;
   background1.velocityY = -2;
   
   if(background1.y<0) {
    background1.y=background1.height/2;
  }
  if(frameCount == 3000 ){
     gameState = "mariana";
    console.log(frameCount);
    
  
  }
  
  if(gameState == "mariana"){
    vehicle.visible = false;
    player.visible = true;
    player.x = 400;
    player.y = 400;
    player.scale = 1.0;
    player.velocityY=0;
    fill("green");
    text("YOU HAVE SUCCESSFULLY REACHED THE DEEPEST POINT ON THE EARTH THAT IS MARIANA TRENCH",50,400)
    background1.changeImage("trench",trenchimg);
    background1.scale =2.5;
    background1.velocityY = 0;
    
  }
  

   spawnAnimals();
 }

 drawSprites();
 if(frameCount>=100 && gameState=="upwater"){
  textSize(25);
  fill("white");
  text("Now trip using boat has finished now you will have another vehicle",50,50)
  text("Congrats you have successfully reached place, Press 'UP' key to start your submersible vehicle",50,100);
  
 }

 if (gameState=="details"){
   textSize(25)
   text("Here begins the journey to the mariana trench",200,50);
   text("Purpose of the app is to create awarness of deepest point of the earth",200,100);
   text("presss space to continue",200,150);

  }
}
function spawnAnimals(){
  if(frameCount == 450){
  whale = createSprite(0,200,50,50);
  whale.addImage("whale",whaleimg);
  whale.velocityX = 2;
  whale.depth=1;
  }
  if(frameCount == 1000){
    bluewhale = createSprite(0,300,50,50);
    bluewhale.addImage("bluewhale",bluewhaleimg);
    bluewhale.velocityX = 2;
    bluewhale.scale=1;
    bluewhale.depth=1;
    }
    if(frameCount == 1500){
      leatherbackturtle = createSprite(0,300,50,50);
      leatherbackturtle.addImage("leatherbackturtle",leatherbackturtleimg);
      leatherbackturtle.velocityX = 2;
      leatherbackturtle.scale=0.3;
      leatherbackturtle.depth=1;
      }
     

          if(frameCount == 2000){
            snail = createSprite(0,300,50,50);
            snail.addImage("snail",snailimg);
            snail.velocityX = 2;
            snail.scale=0.5;
            snail.depth=1;
            }
            if(frameCount == 2500){
              angler = createSprite(0,300,50,50);
              angler.addImage("angler",anglerfishimg);
              angler.velocityX = 2;
              angler.scale=0.5;
              angler.depth=1;
              }
              
}                   