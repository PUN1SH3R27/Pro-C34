class RedBox {
    constructor(x, y, width, height) {
      var options = {
          isStatic: false,
          'restitution':0.8,
          'friction':0.8,
          'density':20
      }
      this.body = Bodies.rectangle(x, y, width, height, options, {isStatic: false});
      this.width = width;
      this.height = height;
      console.log(y)
      World.add(myWorld, this.body);
      
    }
      display(){
       
          var pos =this.body.position;
          var angle= this.body.angle
          push()
          translate(pos.x,pos.y);
          rotate(angle)
          rotate(this.body.angle);
          rectMode(CENTER);
          fill("Red");
          stroke("black")
          strokeWeight("4")
          rect(0, 0, this.width, this.height);
          pop()
        
          
        
        
      }
    };