import Logic from './logic';

export default function sketch(app) {
  let log;
  app.setup = () => {
    app.createCanvas(window.innerWidth, window.innerHeight);
    log = new Logic();
  };
  app.draw = () => {
    app.background(32, 37, 48, 95);
    log.drawCircles(app);
  };
  app.windowResized = () => {
    app.resizeCanvas(window.innerWidth, window.innerHeight);
    log.clear();
  };
  setInterval(() => { if (log) log.create(app); }, 100);
}
