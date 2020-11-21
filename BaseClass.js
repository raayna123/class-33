//created a base class[base class is a parent class]
class BaseClass{
  //passing the values to the object from the constructor
    constructor(x, y, width, height, angle) {
        
      //creating variable options[it is in json format]
      var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //creating the body
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //loading the image for the body
        this.image = loadImage("sprites/base.png");
        //adding the body to the World
        World.add(world, this.body);
      }
      //function display[in which format we wnat to display the body]
      display(){
        var angle = this.body.angle;
        //pushing the new settings to the body
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        //removes the new settings[goes back to original settings]
        pop();
      }
}