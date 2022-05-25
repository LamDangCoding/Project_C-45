class Player{
    constructor(x,y,width,height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.image = loadImage("./assets/player.png")

        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height, options)
        World.add(world, this.body)
    }



    display() {
        var pos = this.body.positon
        push()
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.height)
        pop()
    }
    
}