var fixedRect, movingRect;
var sprite1,sprite2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  sprite1=createSprite(100,100,20,20);
  sprite1.shapeColor="green";
  sprite2=createSprite(200,100,50,80);
  sprite2.shapeColor="green";

  sprite3=createSprite(100,400,40,80);
  sprite3.velocityX=1;
  sprite4=createSprite(1100,400,40,70);
  sprite4.velocityX=-1;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,sprite1)){
    movingRect.shapeColor = "blue";
  sprite1.shapeColor = "blue";
    
  }
  else{
      movingRect.shapeColor = "green";
      sprite1.shapeColor = "green";
  }
  bounceOff(sprite3,sprite4);
  drawSprites();
}

