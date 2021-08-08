var grass,boy,covid,mask,vaccine;
var grassImg,boyImg,covidImg,maskImg,vaccineImg;
var lives = 3;
var covidGroup,vaccineGroup,maskGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){

  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  covidImg = loadImage("COVID.jpg");
  grassImg = loadImage("grass.jpg");
  vaccineImg = loadImage("vaccine.jpg")
  maskImg = loadImage("mask.jpg")
}

function setup(){
  
  createCanvas(400,600);
// Moving background
grass=createSprite(200,200);
grass.addImage(grassImg);
grass.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
covidGroup=new Group();
vaccineGroup=newGroup();
maskGroup=newGroup();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(grass.y > 400 ){
    grass.y = height/2;
  }

  if (maskGroup.isTouching(boy)) {
    maskGroup.destroyEach();
    lives=lives+1;
  }
  else if (vaccineGroup.isTouching(boy)) {
    vaccineGroup.destroyEach();
    lives=lives+1;

    
  }else{
    if(covidGroup.isTouching(boy)) {
     lives=lives-1;

     if (lives=0){
      gameState=END;
      background("black");
      text("You're infected! Please quarentine for 10 days!",200,300)
      boy.x=200;
      boy.y=300;
      maskGroup.destroyEach();
      maskGroup.setVelocityEach(0);
      diamondsGroup.destroyEach();
      diamondsGroup.setVelocityEach(0);
     }

  }
}
  
  
  drawSprites();
  textSize(30);
  fill(255);
  text("Lives: "+ lives,130,30);
  }

}
function createMasks() {
    if (World.frameCount % 320 == 0) {
    var mask = createSprite(Math.round(random(50, 350),40, 10, 10));
    mask.addImage(maskImg);
    mask.scale=0.03;
    mask.velocityY = 3;
    mask.lifetime = 150;
    maskG.add(mask);
  }
  }
  
  function createVaccine() {
    if (World.frameCount % 410 == 0) {
    var vaccine = createSprite(Math.round(random(50, 350),40, 10, 10));
    vaccine.addImage(vaccineImg);
    vaccine.scale=0.13;
    vaccine.velocityY = 3;
    vaccine.lifetime = 150;
    vaccineG.add(vaccine);
    }
  }



function createCovid(){
  if (World.frameCount % 530 == 0) {
  var covid = createSprite(Math.round(random(50, 350),40, 10, 10));
  covid.addImage(covidImg);
  covid.scale=0.1;
  covid.velocityY = 3;
  covid.lifetime = 150;
  covidGroup.add(covid);
  }
}