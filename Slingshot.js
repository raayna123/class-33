//creating slingShot class[creating a constraint between a body and a point]
class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        //created a constraint
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    //function attach[attaching the bird back to the slingShot]
    attach(body){
        this.sling.bodyA = body;
    }
    //function fly[detaching the bird from the sling so that it flies]
    fly(){
        this.sling.bodyA = null;
    }
    //function display
    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        //if statement
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //pushing the new settings
            push();
            
            stroke(48,22,8);
            //if statement for if pointA>x < 220 
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            //or otherwise what should happen
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            //going back to original settings
            pop();
        }
    }
    
}