var movingRect,fixedRect;
var gameObject1,gameObject2,gameObject3,gameObject4
function setup() {
  createCanvas(1200,800);
fixedRect=createSprite(200, 200, 50, 80);
movingRect=createSprite(400,200,80,30);
fixedRect.shapeColor="green";
movingRect.shapeColor="orange";

gameObject1=createSprite(100,100,50,50);
gameObject2=createSprite(300,100,50,50);
gameObject3=createSprite(500,100,50,50);
gameObject4=createSprite(700,100,50,50);

gameObject1.shapeColor="orange"
gameObject2.shapeColor="pink"
gameObject3.shapeColor="white"
gameObject4.shapeColor="blue"





}

function draw() {
  background(0);  
 movingRect.x = mouseX;
 movingRect.y=mouseY;
console.log(movingRect.x - fixedRect.x);

if(isTouching(movingRect,gameObject1)) {
 gameObject1.shapeColor="red";
    movingRect.shapeColor="red";
}
else
{
 gameObject1.shapeColor="orange";
  movingRect.shapeColor="orange";
   
}
  drawSprites();
}



  
