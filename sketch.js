
var monkey , monkey_running, ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   ground=createSprite(400,350,900,10);
   ground.velocityX=-4;
  
  console.log(ground.x)
  
  monkey=createSprite(80,315,20,200)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
      
  
  obstaclesGroup=createGroup();
  FoodGroup=createGroup();
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height)
  monkey.debug=false;
  
  score=0;

  
}


function draw() {
 background("")
  
  
  //display Survival Time
  stroke("white");
  textSize(20);
  fill("white")
  
  stroke("black");
  textSize(20);
  fill("black");
  score=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+score,100,50);
  
  spawnFood();
  spawnObstacles();
  
  
      
  if(keyDown("space") && monkey.y >= 310){
    monkey.velocityY=-20;
  }

  monkey.velocityY=monkey.velocityY + 1
  
  
  monkey.collide(ground);
  
  ground.x=ground.width /2;
  
  drawSprites();
  
}

 function spawnFood(){
   if (frameCount%80===0){
  banana=createSprite(400,Math.round(random(120,200)),10,10)
    banana.velocityX=-4
    banana.scale=0.1
    banana.lifetime=100
    banana.addImage("eat",bananaImage)
     FoodGroup.add(banana)
     
  }

 }

 function spawnObstacles(){
   if(frameCount%300===0){
    obstacle=createSprite(300,310,20,20)
    obstacle.velocityX=-4
    obstacle.scale=0.2 
    obstacle.lifetime=80 
    obstacle.addImage("hit",obstacleImage);
  }

 }



