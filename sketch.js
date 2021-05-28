var car;
 var wall;
var speed;
var weight;

function setup() {
  createCanvas(800,400);

  car = createSprite(50,200,50,50)
  wall = createSprite(1500, 200, 60, width/2);

  speed=random(55,90);
  weight=random(400,1500)

  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  background("black")

  wall.shapeColor="grey"

  if(wall.x-car.x < car.width+wall.width/2){
    car.velocityX=0
  }
    var deformation=0.5*weight*speed*speed/22509;

    if (deformation>180){
      car.shapeColor="red";
    }

if(deformation<180 && deformation>100){
  car.shapeColor="yellow";
}

if(deformation<100){
  car.shapeColor="green";

}
  
  drawSprites();
  }
  console()