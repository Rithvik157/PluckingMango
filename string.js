class String {
    constructor(bodyA,pointB){
        var options ={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.5,
            length : 10
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.sling)
    }
attatch(body){
    this.sling.bodyA = body
}
fly(){
    this.sling.bodyA = null;
}
display(){strokeWeight(3);
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y) }}
