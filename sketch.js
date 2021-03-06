const Engine  = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine
var world
var ground
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15,
    box16, box17, box18, box19, box20

var bob

var chain

function setup() {

  engine = Engine.create()
  world = engine.world
  createCanvas(3000,600);
  
  ground = new Ground(1500,580,3000,30)

  box1 = new Box(900,100,70,70) 
  box2 = new Box(900,100,70,70)
  box3 = new Box(900,100,70,70)
  box4 = new Box(900,100,70,70)
  box5 = new Box(900,100,70,70)
  box6 = new Box(900,100,70,70)
  box7 = new Box(800,100,70,70)
  box8 = new Box(800,100,70,70)
  box9 = new Box(800,100,70,70)
  box10 = new Box(800,100,70,70)
  box11 = new Box(800,100,70,70)
  box12 = new Box(800,100,70,70)
  box13 = new Box(700,100,70,70)
  box14 = new Box(700,100,70,70)
  box15 = new Box(700,100,70,70)
  box16 = new Box(700,100,70,70)
  box17 = new Box(700,100,70,70)
  box18 = new Box(700,100,70,70)
  box19 = new Box(700,100,70,70)
  box20 = new Box(700,100,70,70)

  bob = new Bob()

  chain = new Chain(bob.body,{x:500,y:50})

  Engine.run(engine)
}

function draw() {
  background(180);
  ground.display();
  
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()

  bob.display()

  chain.display()
}

function mouseDragged(){

Matter.Body.setPosition(bob.body,{x: mouseX, y: mouseY})

}
