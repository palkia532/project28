class mango{
    constructor(bodyA,bodyB){
        var options={
            isStatic=true,
            resitution=0,
            friction:1
        }
        this.mango=Constraint.create(options);
        World.add(world,this.mango);
    }

    display(){
        var bodyA=this.mango.bodyA.positionX
        var bodyB=this.mango.body.positionY
        strkeWeight(2);
        line(bodyA.x,bodyA.y,bodyB.x,bodyB.y);

    }
}