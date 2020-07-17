//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{

  happyimage = loadImage("dogImg1.png");
  dogimage = loadImage("dogImg.png");
	//load images here
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  foodStock= database.ref('food');
  foodStock.on("value",readStock);
  var dog = createSprite(250,250,20,20);
  dog.addImage(dogimage);
  dog.scale=0.5
 
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);

dog.addImage(happyimage);

Text('press UP_ARROW key to feed this guy');



}



  drawSprites();
  //add styles here

}


function readStock(data){
  foodS=data.val();

}

function writeStock(x){

database.ref('/').update({
food:x

})

}