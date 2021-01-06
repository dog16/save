class Pig
{
    constructor(x,y)
    {
        var ball_options = {restitution : 0.5,friction:0.3,density:1.0}
       this.body  = Bodies.rectangle(x,y,50,50,ball_options);
        World.add(world,this.body);
        this.width = 50;
        this.height = 50;
        

    }

   display()
   {
    var angle = this.body.angle; 
    var pos = this.body.position;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
      
      fill("green");

      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      
       pop();


   }  

}