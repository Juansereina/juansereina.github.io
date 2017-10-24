class Circle {
  constructor(x, y, size, timeVisible, timeColor, r,g,b) {
    this.x = x
    this.y = y
    this.size = size
    this.tempoSize = size
    this.velocity = this.getRandomArbitrary(0.1, 0.5)
    this.opacity = this.getRandomArbitrary(50, 255)
    this.visible=true
    this.changeColor=true
    this.timeVisible = timeVisible
    this.timeColor = timeColor
    this.r=r
    this.g=g
    this.b=b
    this.dif =this.getRandomArbitrary(1, 30)
  }
  draw(app) {
    app.fill(this.r,this.g, this.b,this.opacity)
    let posX = this.x
    let posY = this.y
    posX=posX+app.map(app.mouseX, 0,app.width,0,this.dif)
    app.ellipse(posX, posY, this.size, this.size)
    if(this.move())this.y=app.height
    this.changeEffect()
    this.timeEffects(app)
  }
  move() {
    this.y -= this.velocity
    if (this.y < 0) return true
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
  }

  changeEffect(){
    if(this.visible && this.opacity>-1){
      this.opacity--
      if(this.size>=0)this.size-=0.01
    }else{
      this.opacity++
      if(this.size<=this.tempoSize)this.size+=0.01
    }

    if(this.changeColor){
      if(this.r<255)this.r++
      if(this.g<255)this.g++
      if(this.b<255)this.b++
    }else{
      if(this.r>0)this.r--
      if(this.g>239)this.g--
      if(this.b>240)this.b--
    }
  }

  timeEffects  (app){
    if(app.frameCount%this.timeColor===0){
      this.changeColor=!this.changeColor
    }
    if(app.frameCount%this.timeVisible===0){
      this.visible=!this.visible
    }
  }




}
export default Circle
