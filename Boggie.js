class Hero{
    constructor(x,y,w,h){
var options= {
    density: 1,
    frictionAir: 1
}
this.body= Bodies.rectangle(x,y,w,h,options);
this.w = w;
this.h=h;
this.image=loadImage("images/Iron-Man-PNG-Picture.png");
World.add(myWorld,this.body);
Matter.Body.setMass(this.body,this.body.mass*5);

    }
    show(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
        
    }
}

