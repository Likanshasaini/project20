var fixrect,moverect;



function setup() {
  createCanvas(800,400);
 fixrect= createSprite(200, 200, 30, 100);
 moverect=createSprite(400,200,100,30);
 fixrect.shapeColor="green";
 moverect.shapeColor="green";
}

function draw() {
  background("white");
 moverect.x=mouseX;
 moverect.y=mouseY; 
  if(moverect.x-fixrect.x<moverect.width/2+fixrect.width/2&&
    fixrect.x-moverect.x<moverect.width/2+fixrect.width/2 &&
    fixrect.y-moverect.y<moverect.height/2+fixrect.height/2&&
    moverect.y-fixrect.y<moverect.height/2+fixrect.height/2){
      fixrect.shapeColor="red";
      moverect.shapeColor="red";
    }
    else{
      fixrect.shapeColor="green";
      moverect.shapeColor="green";

    }

  drawSprites();
}