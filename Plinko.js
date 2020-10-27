class Plinko{
    constructor(x, y,r) {
        var options = {
            isStatic:true,
            
        }
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        
     
        World.add(world, this.body);
      }
      display(){
      var pos=this.body.position;
        push();
       fill("white");
        translate(pos.x,pos.y);
      rotate(this.body.angle);
      noStroke();
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.radius,this.radius);
        pop();
      }
}