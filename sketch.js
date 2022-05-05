var captainA, captainwalk, captain, captainsmash;
var ground, groundImage;

function preload(){
  
  captainwalk = loadAnimation("captainwalkA.png", "captainwalkB.png", "captainwalkC.png", "captainwalkD.png", "captainwalkE.png", "captainwalkF.png", "captainwalkG.png", "captainwalkH.png");
  captain = loadAnimation("captainwalkD.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight );
  
  captainA = createSprite(windowWidth*300/400,windowHeight*200/400);
  captainA.addAnimation("captain",captain);
  captainA.addAnimation("walk", captainwalk);
  captainA.scale = 2;

  ground = createSprite(683, 650, 1366)
}

function draw() {
  background(220);
  
  drawSprites();
}

