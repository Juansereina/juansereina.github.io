'use strict'
import Hexa from './Hexa'
import Circle from './Circle'
import background from '../../../assets/Images/background.png'

export default function sketch(p) {

    let hexas = []
    let circles = []
    let font = null;
    let img;

    p.setup = () => {
        font = 'Georgia'
        img = p.loadImage(background);
        p.createCanvas(window.innerWidth, window.innerHeight)

    }

    setInterval(
         ()=> {
           if(circles.length<500){
               let y = getRandomArbitrary(1, p.height - 1)
               createCircle(y)
           }
        }, 100);

    p.draw = () => {
        p.background(32, 37, 48, 95);
        //   p.background(img,95);
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
        let circle = new Circle(p, x, y)
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
