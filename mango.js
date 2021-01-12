class Mango{
    constructor(x,y){
        var options ={
            isStatic : true,
            restution : 0,
            friction : 1,
            density : 1.2
        }
        this.body = Bodies.rectangle(x,y,10,10,options);
        this.image = loadImage("images/mango.png");
        this.width = 10;
        this.height = 10;
        World.add(world,this.body);
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }    

}