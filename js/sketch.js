const Engine= Matter.engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var eingene,world,holder,ball,ground,stand1,stand2,slingshot,polygon_image;
function setup() {
  createCanvas(900,400);
Engine= engine.create;
world=Engine.world;
Engine.run(engine)
 ground=new Ground(); 
 stand1=new Stand(390,300,250,10);
 stand2=new Stand(700,200,200,10);
 block1=new Block(300,275,30,40);
 block2=new Block(330,275,30,40);
}

function draw() {
  background(56,44,44);  
  ground.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
}