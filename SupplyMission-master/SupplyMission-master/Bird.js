class Bird
{
    constructor(x,y)
    {
        var ball_options = {restitution : 0.5}
       this.body  = Bodies.rectangle(x,y,50,50,ball_options);
        World.add(world,this.body);
        this.width = 50;
        this.height = 50;

    }

   display()
   {
    var angle = this.body.angle; 
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
      
     fill("red");
  

      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      
       pop();


   }  

}