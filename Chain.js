class  Chain{

constructor(bodyA, pointB){

var doptions={

bodyA : bodyA,
pointB : pointB,
stiffness : 1.2,
length : 250 

}


 this.chain = Constraint.create(doptions) 

World.add(world , this.chain)

}

display(){

var point1 = this.chain.bodyA.position
var point2 = this.chain.pointB

strokeWeight(3)
line(point1.x,point1.y,point2.x,point2.y)

}

}