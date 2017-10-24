'use strict'
import Hexa from './Hexa'
import Circle from './Circle'
import p5 from 'p5'
import path from 'path'

export default function sketch(p) {

  let hexas = []
  let circles = []
  let font=null;

  p.setup = () => {
    font = 'Georgia'
    p.createCanvas(window.innerWidth, window.innerHeight)
    for (let i = 0; i < 500; i++) {
      let y = getRandomArbitrary(1, p.height - 1)
      createCircle(y)
    }
  }

  p.draw = () => {
    p.background(32,37,48,95);
    circlesCycle()
  }
  function circlesHexas() {
    p.noStroke()
    hexas.forEach(function (hexa, i) {
      hexa.draw(p)
    })
  }

  function circlesCycle() {
    p.noStroke()
    circles.forEach(function (circle, i) {
      circle.draw(p)
    })
  }

  function createCircle(y) {
    let x = getRandomArbitrary(1, p.width - 1)
    let size = getRandomArbitrary(0.75, 3)
    let timeVisible = p.ceil(getRandomArbitrary(600, 300))
    let timeColor = p.ceil(getRandomArbitrary(600, 3600))
    //  let col = p.color(0, 196, 191)
    let r = 255
    let g = 255
    let b = 255
    let circle = new Circle(x, y, size,timeVisible,timeColor,r,g,b)
    circles.push(circle)
  }

  function createHexas(y) {
    let x = getRandomArbitrary(1, p.width - 1)
    let hexa = new Hexa(x, y, getRandomArbitrary(0.25, 3))
    hexas.push(hexa)
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
  }

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight)
  }

}
