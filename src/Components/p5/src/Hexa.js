class Hexa {
    constructor(x, y, size) {
       this.x = 200
        this.y = 200
        this.size = size
        this.velocity = this.getRandomArbitrary(0.2, 0.5)
        this.opacity = this.getRandomArbitrary(50, 255)
    }
    draw(app) {

let gs = 44




app.fill(255)
      app.beginShape();
   for(let i=0;i<6;i++){
     let angle = i * 2 * app.PI / 6;
     app.vertex(this.x + gs*app.cos(angle),this.y + gs*app.sin(angle));
   }
   app.endShape(app.CLOSE);

    }
    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}
export default Hexa
