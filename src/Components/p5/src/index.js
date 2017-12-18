'use strict'

import Circle from './Circle'
import background from '../../../assets/Images/background.png'

export default function sketch(p) {

    let circles = []
    let font = null;
    let img;
    let width_size=0;

    p.setup = () => {
        font = 'Georgia'
        img = p.loadImage(background);
        width_size=window.innerWidth;
        p.createCanvas(window.innerWidth, window.innerHeight)

    }
    function circles_length() {
        if(width_size<430){
            return 50
        }
        return 500
    }

    setInterval(()=> {
        if(circles.length<circles_length()){
               let y = getRandomArbitrary(1, p.height - 1)
               createCircle(y)
           }
        }, 100);

    p.draw = () => {
        p.background(32, 37, 48, 95);
        // p.background(img,95);
        circlesCycle()
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

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min
    }

    p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight)
        circles = []
    }

}
