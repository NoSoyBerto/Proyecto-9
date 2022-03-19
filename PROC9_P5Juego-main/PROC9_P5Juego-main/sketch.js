var box;
var r, g, b;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,15,15);
  button = createButton("button");
  button.position(300,150);
  button.mousePressed(changebackground);
}

function draw() 
{
  background(r, g, b);
  if(keyIsDown(RIGHT_ARROW)){
    //box.position.x = box.position.x + 2;
    background("gray");
  }
  if(keyIsDown(LEFT_ARROW)){
    //box.position.x = box.position.x - 2;
    background("olive");
  }
  if(keyIsDown(UP_ARROW)){
    //box.position.y = box.position.y - 2;
    background("aquamarine");
  }
  if(keyIsDown(DOWN_ARROW)){
    //box.position.y = box.position.y + 2;
    background("pink");
  }
  fill("white");
  text("test",150,150);
  textSize(50);
  fill(255,228,196);
  text("test2",160,160);
  drawSprites();
}

function changebackground(){
  r = 0;
  g = 255;
  b = 0;
}


