'use strict'
import Circle from './Circle'
import p5 from 'p5'
import path from 'path'



opentype.load( 'build/AvenirLTStd-Light.otf', function(err, font) {


 //

    if (err) {
       console.log(err)
    } else {
        console.log('working.. ')
    }
});


export default function sketch(p) {

    // const URL = 'https://images.unsplash.com/photo-1496361751588-bdd9a3fcdd6f?dpr=1&auto=format&fit=crop&w=1500&h=1004&q=80&cs=tinysrgb&crop=&bg='
    const URL = 'http://wallppr.net/wp-content/uploads/2016/10/Phu-Quoc-Island-Sunrise.jpg'
    let img
    let circles = []
    let font=null;


    p.setup = () => {
        font = 'Georgia'
        p.createCanvas(p.windowWidth, p.windowHeight)
        p.loadImage(URL, pic => {
            img = pic, p.redraw()
        }, loadImageErrorOverride)
        for (let i = 0; i < 1000; i++) {
            let y = getRandomArbitrary(1, p.height - 1)
            createCircle(y)
        }
    }

    p.draw = () => {
      //  p.textFont("Georgia");
       background()

        prueba()

    }

    function prueba() {
        p.textFont(font)
        p.textSize(25)

        p.text('train',100,100)
      //  let points = p5.textToPoints('train',100,100)
        //console.log(points)

    }

    function background() {
        if (img)
        // p.image(img,0,0,p.windowWidth, p.windowHeight)
            p.background(img || 70)
        p.fill(0,100)
        p.rect(0,0,p.windowWidth,p.windowHeight)
        circlesCycle()
    }

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
    }

    setInterval(() => {
        let y = p.height
        if (circles.length < 1500) createCircle(y)
    }, 100)

    function createCircle(y) {
        let x = getRandomArbitrary(1, p.width - 1)
        let circle = new Circle(x, y, getRandomArbitrary(0.25, 3))
        circles.push(circle)
    }

    function circlesCycle() {
        p.noStroke()
        circles.forEach(function (circle, i) {
            circle.draw(p)
            if (circle.move()) {
                circles.splice(i, 1)
            }
        })
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min
    }

    function loadImageErrorOverride(errEvt) {
        const pic = errEvt.target
        pic.crossOrigin = null, pic.src = pic.src
    }
}