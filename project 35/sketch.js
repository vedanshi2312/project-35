var hotAirBallon,background,database;

function preload(){
  backgroundImg = loadImage("images/Hot Air Ballon -01.png");
  this.image = loadImage("images/Hot Air Ballon-02.png");
}


function setup() {
 
  createCanvas(500,500);

  hotAirBallon=new hotAirBallon(400, 200, 50, 50);
  database = firebase.database();
}

function draw() {
  background(backgroundImg); 

  if(keyDown(LEFT_ARROW)){
    Ballon.x = ballon.x-10;
}
else if(keyDown(RIGHT_ARROW)){
  Ballon.x = ballon.x+10;
}
else if(keyDown(UP_ARROW)){
  Ballon.y = ballon.y-10;
}
else if(keyDown(DOWN_ARROW)){
  Ballon.y = ballon.y+10;
}

  
  hotAirBallon.display();
  drawSprites();
}