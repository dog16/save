class Box
{
    constructor(x,y,width,height)
    {
        var ball_options = {restitution : 0.5}
       this.body  = Bodies.rectangle(x,y,width,height,ball_options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;

    }

   display()
   {
    var angle = this.body.angle; 
    var pos = this.body.position;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
      
     stroke("blue");
     strokeWeight(5);

      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      
       pop();


   }  

}