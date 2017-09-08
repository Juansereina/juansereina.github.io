
class TextCirlces {

    constructor (){
        this.font=null;
        this.vehicles = [];
    }

}

export default TextCirlces




function preload() {

}

function setup() {


    var points = font.textToPoints('train', 100, 200, 192, {
        sampleFactor: 0.25
    });

    for (var i = 0; i < points.length; i++) {
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
        // stroke(255);
        // strokeWeight(8);
        // point(pt.x, pt.y);
    }
}

function draw() {
    background(51);
    for (var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}