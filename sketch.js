const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint= Matter.Constraint
var engine,world;
var ground,slingShot

// LOadImage in preload
// Ground
// 2 Stands
// 16 Boxes
// slingshot should disapeear
// In draw ,ImageMode and Image
// separate mouseDragged and mousR
    var canvas= createCanvas(800,1000)
    engine= Engine.create()
    world= engine.world
    polygon= Bodies.circle(50,200,20)
    World.add(world,this.polygon)

    slingShot= new Slingshot(bird.body,{x:200, y:50});
    
    ground= new Ground(700,1000,20,height)

// I have to load the image of the polygon

function draw(){
  Engine.update(engine)
  background(0)
  ground.display()
}
