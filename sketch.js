const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/Background.png");
 // trainSound = loadSound("sound/train.mp3");
 // crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1000,560);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(400,480,800,15);
  Hero1=new Hero(200,250,170,170);
  Monster1= new Monster(830,250,170,170)
  Box1= new RedBox(500,250,50,50)
  Box2= new RedBox(500,250,50,50)
  Box3= new RedBox(500,250,50,50)
  Box4= new RedBox(500,250,50,50)
  Box5= new RedBox(500,250,50,50)
  Box6= new RedBox(500,250,50,50)


  Row2Box1= new RedBox(600,250,50,50)
  Row2Box2= new RedBox(600,250,50,50)
  Row2Box3= new RedBox(600,250,50,50)
  Row2Box4= new RedBox(600,250,50,50)
  Row2Box5= new RedBox(600,250,50,50)
  //Row2Box6= new RedBox(600,250,50,50)

  Row2Box7= new RedBox(700,250,50,50)
  Row2Box8= new RedBox(700,250,50,50)
  Row2Box9= new RedBox(700,250,50,50)
  Row2Box10= new RedBox(700,250,50,50)
  Row2Box11= new RedBox(700,250,50,50)
  Row2Box12= new RedBox(700,250,50,50)

  

  Rope1= new Rope(Hero1.body,{x:50,y:250})

}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  Hero1.show();
  Monster1.show();
  ground.show();
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();

  Row2Box1.display()
  Row2Box2.display()
  Row2Box3.display()
  Row2Box4.display()
  Row2Box5.display()
  //Row2Box6.display()

  Row2Box7.display()
  Row2Box8.display()
  Row2Box9.display()
  Row2Box10.display()
  Row2Box11.display()
  Row2Box12.display()
  
//  var collision = Matter.SAT.collides(Hero1.body,Monster1.body);
// if(collision.collided)
//  {
//  flag=1;
    
    
 // }
  if(flag ===1){
    textSize(30);
    stroke(3);
    fill('blue');
    text("Monster Destroyed",100,200);
    crashSound.play();
  }
  }

  function keyPressed()
  {
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(Hero1.body,{x:Hero1.body.position.x,y:Hero1.body.position.y},
        {x:170000,y:100});
       // trainSound.play();
    }


  }
  function mouseDragged(){
    
  Matter.Body.setPosition(Hero1.body, {x: mouseX, y: mouseY})
    
  }

