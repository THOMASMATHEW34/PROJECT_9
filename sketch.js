
function setup() {
  var box;
  createCanvas(400,400);
  box = createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
  if(keyIsDown(DOWN_ARROW)){
    background('blue');
  }
drawSprites();
}




