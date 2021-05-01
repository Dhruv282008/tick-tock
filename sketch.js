var hr,min,sec;
var secAngle;
var hour 
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
//hr = hour();
//min = minute();

//hour = createSprite(400,200,100,10)
angleMode(DEGREES)
}

function draw() {
  background(0);  
  textSize(30)
  fill("white")
  text ("12", 190, 90)
  textSize(30)
  fill("white")
  text ("1", 400, 100)
  translate(200,200)
  rotate(-90)
  drawSprites();
  sec = second();
  secAngle = map(sec, 0, 60, 0, 360);
  
push()
  rotate(secAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0, 50, 0);
pop();
stroke("yellow")
strokeWeight(8)
noFill()
arc(0, 0, 110, 110, 0, secAngle)

hr = hour()
hrAngle = map(hr%12, 0, 12, 0, 360);
push()
 rotate(hrAngle)
 stroke("green")
 strokeWeight(7)
 line(0, 0, 75, 0)
 pop();
 stroke("green")
 strokeWeight(8)
 noFill()
 arc(0, 0, 150, 150, 0, hrAngle)
 min = minute()
 minAngle = map(min, 0, 60, 0, 360)
 push()
 rotate(minAngle)
 stroke("blue")
 strokeWeight(7)
 line(0, 0, 65, 0)
 pop()
 stroke("blue")
 strokeWeight(8)
 noFill()
 arc(0, 0, 200, 200, 0, minAngle)
}
