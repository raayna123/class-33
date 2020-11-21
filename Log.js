//creating log class[it is a child class of the base class]
class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    //setting an angle for the body using the matter.js library
    Matter.Body.setAngle(this.body, angle);
  }
}