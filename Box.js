class Box{

constructor(x,y,width,height){

var toptions={

restitution : 0.8,
density : 0.04,
friction : 1

}

this.body = Bodies.rectangle(x,y,width,height,toptions)
this.height = height
this.width = width

World.add(world, this.body)

}

display(){

var pos = this.body.position
var angle  = this.body.angle

push()

translate(pos.x,pos.y)
rotate(angle)
strokeWeight(4)
stroke("green")
fill("pink")
rectMode(CENTER)
rect(0,0,this.width,this.height)

pop()

}
} 


