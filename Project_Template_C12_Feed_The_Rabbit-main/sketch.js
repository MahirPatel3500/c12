var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleimg;
var leaf,leafImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);




}



function draw() {
  background(0);
  rabbit.x = mouseX ;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select = Math.round(random(1,2));
  if(frameCount%80==0){
    if(select==1){
      spawnapple();
    }
    else{
      spawnleaf();
    }
  }
 
  drawSprites();
}

function spawnapple(){
  
  apple = createSprite(200,200,20,20)
 apple.y =  Math.round(random(1,80));
 apple.x =  Math.round(random(1,350));
 apple.velocityY = 2 
 apple.addImage(appleimg)
 apple.scale = 0.1
  
}

function spawnleaf(){
leaf = createSprite(200,200,20,20);
leaf.x = Math.round(random(1,80));
leaf.y =  Math.round(random(1,350));
leaf.velocityY = 2;
leaf.addImage(leafImg);
leaf.scale = 0.1
}