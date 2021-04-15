class stone{
    constructor(bodyA,bodyB){
        var options={
            isStatic=false,
            resitution=0,
            friction:1,
            density:1.2
        }
        this.stone=Constraint.create(options);
        World.add(world,this.stone);
    }

    display(){
        var bodyA=this.stone.bodyA.positionX
        var bodyB=this.stone.body.positionY
        strkeWeight(2);
        line(bodyA.x,bodyA.y,bodyB.x,bodyB.y);

    }

}