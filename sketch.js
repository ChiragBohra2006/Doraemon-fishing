var captainA, captainwalk, captain, captainsmash;
var ground, groundImage;

function preload(){
  
  captainwalk = loadAnimation("captainwalkA.png", "captainwalkB.png", "captainwalkC.png", "captainwalkD.png", "captainwalkE.png", "captainwalkF.png", "captainwalkG.png", "captainwalkH.png");
  captain = loadAnimation("captainwalkD.png");
}

function setup() {
  createCanvas(800,1000 );
  
  captainA = createSprite(200,200);
  captainA.addAnimation("captain",captain);
  captainA.addAnimation("walk", captainwalk);
  captainA.scale = 2;

  ground = createSprite(683, 650, 1366)
}

function draw() {
  background(220);
  
  drawSprites();

  captainA.collide(ground);
  captainA.velocityX = 0;
  captainA.velocityY = captainA.velocityY + 0.8;
  captainA.changeAnimation("captain",captain);

  if(keyDown(RIGHT))
  {
   
   captainA.velocityX = 3;
   captainA.changeAnimation("walk", captainwalk);

  }

  if(keyDown(LEFT))
  {
   
   captainA.velocityX = -3;
   captainA.changeAnimation("walk", captainwalk);

  }
    
     captainA.debug = true;
     captainA.setCollider("circle", 10, -50, 0,)
    }


