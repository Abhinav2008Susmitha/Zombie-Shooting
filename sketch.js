var bg,bgImg;
var player, shooterImg, shooter_shooting;
var explosionSound,loseSound,winSound;
var zombie,zombieImg;


function preload() {

  bgImg = loadImage("./assets/bg.jpeg");
  shooterImg = loadImage("./assets/shooter_1.png");
  shooter_shooting = loadAnimation("./assets/shooter_2.png","./assets/shooter_3.png");
  zombieImg = loadImage("./assets/zombie.png");
  explosionSound = loadSound("./assets/explosion.mp3");
  loseSound = loadSound("./assets/lose.mp3");
  winSound = loadSound("./assets/win.mp3");

}

function setup() {
 createCanvas(1000,700);
 
 player = createSprite(170,500,20,30);
 player.addImage(shooterImg);
 player.scale = 0.4;

    

}

function draw() {
 background(bgImg);

 
if(keyDown(UP_ARROW)){
  player.y = player.y -3;
}
if(keyDown(DOWN_ARROW)){
  player.y = player.y +3;
}




 drawSprites();
}

function spawnZombies() {

 if(frameCount % 80 === 0) {
   zombie = createSprite(500,500,30,30);
   zombie.addImage(zombieImg);
   zombie.velocityX =-3;
   
 }

}