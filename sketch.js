var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here

}


function setup(){
    canvas = createCanvas(800,600);

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white";
    ball.velocityX = 3;
    ball.velocityY = 3;

    block1 = createSprite(100,590,180,20);
    block1.shapeColor = "red";

    block2 = createSprite(300,590,180,20);
    block2.shapeColor = "green";

    block3 = createSprite(500,590,180,20);
    block3.shapeColor = "blue";

    block4 = createSprite(700,590,180,20);
    block4.shapeColor = "yellow";

    //create two more blocks i.e. block3 and block4 here

    
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(10,10,10));
    
    

    if(ball.x < 0){
        music.stop();
        ball.velocityX = 3;
         }else if(ball.x > 800){
         music.stop();
         ball.velocityX = -3;
 
         }

    //write code to bounce off ball from the block1 
    if(isTouching(ball , block4)){
        music.play();
        ball.shapeColor = "yellow";
        bounceOff(ball , block4);

    }
    
    else if(isTouching(ball , block3)){
        music=play();
        ball.shapeColor = "blue";
        bounceOff(ball , block3);
           //write code to stop music
    }

    //write code to bounce off ball from the block3
   else if(isTouching(ball , block2)){
          music.play();
          ball.shapeColor = "green";
          bounceOff(ball , block2);
          ball.velocityX = 0;
          ball.velocityY = 0;

   }

    //write code to bounce off ball from the block4
  else if(isTouching(ball , block1)){
          music.play();
          ball.shapeColor = "red";
          bounceOff(ball , block1);

  }

      if(ball.y < 0){
        music.play();
        ball.velocityY = 3;
      }

    drawSprites();
}

