//Create variables here

var dog, dogImage, happyDog;

var database;

var foodS, foodStock;

function preload()
{
  //load images here
  
  dogImage = loadImage("Sprites/Dog.png");

  happyDog = loadImage("Sprites/happydog.png");

}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
  dog = createSprite( width / 2, height / 2 + 100, 20, 20);
  dog.addImage(dogImage);
  dog.scale = 0.2;
  
}


function draw() {  

  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);

    dog.addImage(happyDog);

  }

  drawSprites();
  //add styles here

  fill("black");

  textSize(20);
  
  text("Food Remaining: " + foodS, width / 2 - 80, height / 2 - 100);

  noFill();

}

function readStock(data){

  foodS = data.val();

}

function writeStock(x){

  if(x <= 0){

    x = 0;

  }else{

    x--;

  }

  database.ref('/').update({

    Food:x

  })

}



