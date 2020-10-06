class Miner{
    constructor(x,y,width,height){
        var options = {
            restitution: 1,
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("miner.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}