class Thrower {

    constructor(body1,point){
        var options={
            'bodyA': body1,
            'pointB': point,
            'length': 30,
            'stiffness':0.016,
        }
    
        this.THRow = Constraint.create(options)
    
        this.pointB = point
        World.add(world,this.THRow)
    }
fly(){
    this.THRow.bodyA = null
}
attach(body1){
    this.THRow.bodyA = body1
}
}