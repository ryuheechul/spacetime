class ProgrammableTimer {

  constructor(hertz, callback) {

    this.target = performance.now();     // target time for the next frame
    this.interval = 1 / hertz * 1000;    // the milliseconds between ticks
    this.callback = callback;
    this.stopped = false;
    this.frame = 0;

    this.tick(this);
  }

  tick(self) {

    if (self.stopped) return;

    const currentTime = performance.now();
    const currentTarget = self.target;
    const currentInterval = (self.target += self.interval) - currentTime;

    setTimeout(self.tick, currentInterval, self);
    self.callback(self.frame++, currentTime, currentTarget, self);
  }

  stop() {
    this.stopped = true;
    return this.frame
  }

}
let c = new ProgrammableTimer(2, () => { console.log('tick') })

