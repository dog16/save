class Twig
{
     constructor(x,y,width,height)
    {
        var ball_options = {isStatic : true};
        const World = Matter.World
        world = engine.world;
        const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;


engine = Engine.create();
world = engine.world;


       this.body  = Bodies.rectangle(x,y,width,height,ball_options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;

    }

   display()
   {
      var pos = this.body.position;
      fill("red")
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
   }  

}