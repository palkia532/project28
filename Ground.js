class Ground{
    constructor(bodyA,bodyB){
        var options={
            isStatic=false,
            resitution=0,
            friction:1,
            density:1.2
        }
        this.Ground=Constraint.create(options);
        World.add(world,this.Ground);
    }

    display(){
        var bodyA=this.Ground.bodyA.positionX
        var bodyB=this.Ground.body.positionY
        strkeWeight(2);
        line(bodyA.x,bodyA.y,bodyB.x,bodyB.y);

    }
}