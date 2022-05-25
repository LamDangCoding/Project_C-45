class Bullet{
    constructor(x,y, width, height) {
        this.x = x
        this.y = y
        this.width = 10
        this.height =  50
        this.image = loadImage("./assets/bullet.png")

        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body)
    }

    remove(index) {
        Matter.World.remove(world, this.body)
        delete bullets(index)
    }

    display() {
        var pos = this.body.positon
        push()
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.height)
        pop()
    }
}   