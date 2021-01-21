class Ground {
    constructor(){
        var ground_options= {
            isStatic= true
        }
        
        this.ground= Bodies.rectangle(700,1000,900,20,options)
        
        World.add(world,this.ground)
    }
    display(){
        var pos= this.body.position
        rectMode(CENTER)
        fill("white")
        rect(pos.x,pos.y,900,20)
        
    }
}