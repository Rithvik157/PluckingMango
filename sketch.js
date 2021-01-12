
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Events = Matter.Events;

var tree,ground;
var stone,boy,mango,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var score;
var sling;
function preload()
{

}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	tree = new Tree(940,300);
	ground = new Ground(400,600,1400,10);
    stone = new Stone(92,485);
    boy = new Boy(153,537);
    mango = new Mango(785,250);
    mango2 = new Mango(840,170);
    mango3 = new Mango(870,260);
    mango4 = new Mango(890,110);
    mango5 = new Mango(930,200);
    mango6 = new Mango(760,185);
    mango7 = new Mango(910,40); 
    mango8 = new Mango(1015,235);
    mango9 = new Mango(980,100);
    mango10 = new Mango(1080,150);
    mango11 = new Mango(1120,245);
    sling = new String(stone.body,{x:90,y:485});
  }


function draw() {
 
   
  rectMode(CENTER);
  background(0);
  tree.display();
  ground.display();
  boy.display();
  stone.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  sling.display();
  drawSprites();
 
}

function mouseDragged(){
  Events.on(engine,"afterUpdate",function(){
    Matter.body.setPosition(stone.body ,{x:mouseX,y:mouseY})
  })
}

function mouseReleased(){
  sling.fly()
  engine.events={};
}





