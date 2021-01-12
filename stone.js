  class Stone{
    constructor(x,y){
     var options = {
        isStatic : false,
        restitution : 0,
        friction : 1,
        density :1.2
     }
    this.body = Bodies.rectangle(x,y,35,35,options)
    this.image = loadImage("images/stone.png");
    this.width= 35
    this.height = 35
    World.add(world,this.body)
    }
    display(){
     push()
    translate(this.body.position.x,this.body.position.y);
    angleMode(RADIANS);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop()
    }
    
    }