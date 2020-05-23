                                                                                                                                       var ball,img,paddle;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=9;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  
  ball.bounceOff(paddle);

  if(keyDown(UP_ARROW))
  {
     paddle.velocityY = -5;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY = 5;
  }
  
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
  
  drawSprites();
  explosion();
}

function explosion()
{
   if(ball.isTouching(paddle)){
      ball.velocityX = random(120,100);
    }
}

