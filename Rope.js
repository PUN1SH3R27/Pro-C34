class Rope {
    constructor(FirstBody,pointB){
        var options= {
    bodyA: FirstBody,
    pointB: pointB,
    length:300,
    stiffness:0.2
    }
    this.slingshot= Matter.Constraint.create(options)
    this.pointB= pointB
    World.add(myWorld,this.slingshot)
    
    }
    attach(body){
        this.slingshot.bodyA= body
   
   
       }
    display(){
        if(this.slingshot.bodyA) {
        var pointA = this.slingshot.bodyA.position
       // var pointB= this.slingshot.bodyB.position
       push()
       stroke("#00FFFF")
       strokeWeight("4")
    line( pointA.x, pointA.y, this.pointB.x, this.pointB.y  )}
}
}
