var Box, Box1;

function setup() {
  createCanvas(800,400);
  Box = createSprite(400, 400, 50, 50);
  Box1 = createSprite(200, 400, 40, 60);
  Box.velocityX = -2
}

function draw() {
  background(255,255,255);
  //Box.x = World.mouseX; 
  //Box.y = World.mouseY; 
  
  
  /*if (touching (Box, Box1)){
    Box.shapeColor = "green";
    Box1.shapeColor = "green";
  }
  else{
    Box.shapeColor = "red";
    Box1.shapeColor = "red";
  }*/

 bounceOff(Box, Box1);
  drawSprites();
}