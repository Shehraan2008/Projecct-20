// mkaing variables for the speed and the weght
var weight, speed, deformation;
// creating the sprite
var car, wall;

function setup() {
  createCanvas(400, 400);
  weight = random(400, 1500);
  speed = random(55, 90);
  deformation = (0.5 * weight * speed * speed) / 22500;

  wall = createSprite(370, 200, 20, 70);
  car = createSprite(0, 200, 20, 20);
  car.velocityX = speed;
  car.shapeColor = "blue";
}

function draw() {
  background("lightblue");
  console.log(deformation);
  textSize(25);
  textStyle(BOLD);
  fill("Yellow");
  text("Global Car Safety Organisation", 20, 50);
  text("Crash Test", 150, 80);

  if (car.x - wall.x >= car.width / 2 - wall.width / 2) {
    car.velocityX = 0;
    if (deformation > 180) {
      textSize(64);
      fill("red");
      text("LETHAL !", 50, 200);
      car.shapeColor = "red";
      wall.destroy();
    }
    if (deformation > 80 && deformation < 180) {
      textSize(64);
      text("FINE !", 50, 200);
      car.shapeColor = "yellow";
    }
    if (deformation < 80) {
      textSize(44);
      fill("green");
      text("GOOD TO GO !", 50, 200);
      car.shapeColor = "green";
    }
  }
  drawSprites();
}
