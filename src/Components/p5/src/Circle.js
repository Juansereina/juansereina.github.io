class Circle {
    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.size = size
        this.velocity = this.getRandomArbitrary(0.2, 0.5)
        this.opacity = this.getRandomArbitrary(50, 255)
    }
    draw(app) {
        app.fill(255,this.opacity)
        app.ellipse(this.x, this.y, this.size, this.size)
    }
    move() {
        this.y -= this.velocity
        if (this.y < 0) return true
    }
    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}
export default Circle