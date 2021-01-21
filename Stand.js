class Stand {
    constructor(){
        var options= {
            isStatic= true
        }
        
        this.ground= Bodies.rectangle(450,390,900,20,options)
        
        World.add(world,this.ground)
    }
    display(){
        var pos= this.body.position
        rectMode(CENTER)
        fill("white")
        rect(pos.x,pos.y,900,20)
        
    }
}