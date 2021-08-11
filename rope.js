class rope{
    constructor(body1,body2, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            length: 400,
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY},
            
        }
            this.rope= Constraint.create(options),
            World.add(world,this.rope)}
   
   
        display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        var positionC = pointB.x + this.offsetX;
        var positionD = pointB.y + this.offsetY;
        line(pointA.x,pointA.y,positionC,positionD);


    }
        
    
}