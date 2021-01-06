const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ground,ball,b1,b2,p1,p2,l1,l2,l3,l4,b1;


function setup()
{
   createCanvas(1200,600);

engine = Engine.create();
world = engine.world;


b2 = new Box(500,200,60,60);
b1 = new Box(400,100,60,60);
ground = new Ground(200,500,1200,20);
p1 = new Pig(100,200);
p2 = new Pig(450,200);
l1 = new Log(500,200,150,20,-PI);
l2 = new Log(300,200,20,150,PI/4);
l3 = new Log(100,200,20,150,-PI/2);
l4 = new Log(400,200,20,150,PI/2);
b1 = new Bird(100,100);

}

function draw()
{

   background("pink");

  Engine.update(engine);

  b2.display();
 b1.display();
 ground.display();
 p1.display();
 p2.display();
 l1.display();
 l2.display();
 l3.display();
 l4.display();
b1.display();
}





