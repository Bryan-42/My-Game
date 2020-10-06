class Ore{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.image = loadImage("Ore" + Math.round(random(1,3)) + ".png");
        this.image.scale = 0.5;
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        pop();
        for(var i = 0; i<800; i = i + 40){
            var IMG = this.image;
            image(IMG,0,i,this.width,this.height);
            image(IMG,i,0,this.width,this.height);
        }
    }
}