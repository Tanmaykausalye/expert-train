class Bob{

constructor(){

var moptions={

density : 1.2,
frictionAir : 0.005

}


this.body = Bodies.circle(300,300,50,moptions)
this.radius = 50

World.add(world, this.body)


}

display(){

var pos = this.body.position

push()
fill("yellow")
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,this.radius,this.radius)
pop()
}


}