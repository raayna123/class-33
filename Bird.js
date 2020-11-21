//creating bird class[it is a child class of the base class]
class Bird extends BaseClass {
  constructor(x,y){
    //super is used to transfer all the properties from the base class
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    //making an array
    this.trajectory =[];
  }

  display() {
   
    //super.display is used to inheret all the properties used in the base class
    super.display();

    //if statement for when the smoke should get formed
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   
    //for loop to make the image at the positions
    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
