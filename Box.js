class Box{
    constructor(x,y,color){
        var options = {
            'restitution': 0.4,
            'friction': 0,
        }
        this.body = Bodies.rectangle(x,y,30,40,options);
        World.add(world,this.body);
        this.color = color;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        fill(this.color);
        rect(0,0,30,40);
        pop();
    }
}