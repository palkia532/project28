class tree{
    constructor(bodyA,bodyB){
        var options={
            isStatic=false,
            resitution=0,
            friction:1,
            density:1.2
        }
        this.tree=Constraint.create(options);
        World.add(world,this.tree);
    }

    display(){
        var bodyA=this.tree.bodyA.positionX
        var bodyB=this.tree.body.positionY
        strkeWeight(2);
        line(bodyA.x,bodyA.y,bodyB.x,bodyB.y);

    }

}