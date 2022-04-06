const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var circle;
var quad

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
   var options={
restitution:2.88885846362252652656632652662532413252767,
friction:1
   }
   circle =Bodies.circle(600,300,20,options)
    World.add (world,circle)     
    
    quad = Bodies.rectangle(200,400,20,20,options)
    World.add (world,quad)
}


function draw(){
    background("lightBlue");
    Engine.update(engine);

ellipseMode(RADIUS)
    plane.display();
    hammer.display();
    rect(quad.position.x,quad.position.y,20,20)  
    ellipse(circle.position.x,circle.position.y,20,20)   
    
 
}