class Log
{
    constructor(x,y,width,height,angle)
    {
        var ball_options = {restitution : 0.5,friction:1,density:1.0}
       this.body  = Bodies.rectangle(x,y,width,height,ball_options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
        Matter.Body.setAngle(this.body,angle)

    }

   display()
   {
    var angle = this.body.angle; 
    var pos = this.body.position;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
      
      fill("yellow");

      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      
       pop();


   }  

}