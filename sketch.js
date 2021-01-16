var hr,mn,sc;
var hrAngle, mnAngle, scAngle;

function setup() 
{
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() 
{
  background(0);  
  fill("cyan")
  text(hr+" : "+ mn+" : " + sc, 180,20)

  translate(200,200)
  rotate(-90)

  hr=hour()
  mn=minute()
  sc=second()

  hrAngle=map(hr,0,12,0,360)
        push()
            rotate(hrAngle);
            stroke(0,255,0)
            strokeWeight(7);
            line(0,0,80,0)
        pop();
  noFill();  
  stroke(0,255,0);
  strokeWeight(10);
  arc(0,0,260,260,0,hrAngle);
    
    
  mnAngle=map(mn,0,60,0,360);
        push()
            rotate(mnAngle); 
            stroke(0,0,255);
            strokeWeight(5);
            line(0,00,110,00)
        pop()
  stroke(0,0,255);
  arc(0,0,280,280,0,mnAngle);

  scAngle = map(sc, 0, 60, 0, 360);
        push()
            rotate(scAngle); 
            stroke(255,0,0);
            strokeWeight(3);
            line(0,00,100,00)
        pop()
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
}