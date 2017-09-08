import p5 from 'p5'
class Vehicle {

    constructor(app, x, y) {
        this.pos = app.createVector(app.random(app.width), app.random(app.height));
        this.target = app.createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.acc = app.createVector();
        this.r = 8;
        this.maxspeed = 10;
        this.maxforce = 1;
    }


    behaviors(app) {
        let arrive = this.arrive(this.target);
        let mouse = app.createVector(app.mouseX, app.mouseY);
        let flee = this.flee(mouse);

        arrive.mult(1);
        flee.mult(5);

        this.applyForce(arrive);
        this.applyForce(flee);
    }

    applyForce(f) {
        this.acc.add(f);
    }

    update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
    }

    show (app) {
        app.stroke(255);
        app.strokeWeight(this.r);
        app.point(this.pos.x, this.pos.y);
    }

    arrive  (target) {
        let desired = p5.Vector.sub(target, this.pos);
        let d = desired.mag();
        let speed = this.maxspeed;
        if (d < 100) {
            speed = map(d, 0, 100, 0, this.maxspeed);
        }
        desired.setMag(speed);
        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxforce);
        return steer;
    }

    flee (app,target) {
        let desired = p5.Vector.sub(target, this.pos);
        let d = desired.mag();
        if (d < 50) {
            desired.setMag(this.maxspeed);
            desired.mult(-1);
            let steer = p5.Vector.sub(desired, this.vel);
            steer.limit(this.maxforce);
            return steer;
        } else {
            return app.createVector(0, 0);
        }
    }
}

export default Vehicle







