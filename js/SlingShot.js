class SlingShot{
    constructor(bodyA,bodyB){
        var options={
          bodyA:bodyA,
          bodyB:bodyB,
          stiffness:0.4,
          length:1
        }
       this.sling=Constraint.create(options)
       this.pointB=pointB;
     World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
display(){
    if(this.sling.bodyA){}
    var pointA=this.sling.bodyA.position;
    var pointB=this.pointB;
    strokeWeight(4);
    stroke("torquois")
   line(pointA.x,poitA.y,pointB.x,point.Y)
    }
} 
