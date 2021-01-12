class Tree{
constructor(x,y){
 var options = {
    isStatic : true
 }
this.body = Bodies.rectangle(x,y,50,50,options)
this.image = loadImage("images/tree.png");
this.width= 50;
this.height = 50;
World.add(world,this.body)
}
display(){
 push()
translate(this.body.position.x,this.body.position.y)
angleMode(RADIANS)
imageMode(CENTER)
image(this.image,0,0,500,700)
pop()
}

}













