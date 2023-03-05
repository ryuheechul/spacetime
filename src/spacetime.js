import parse from './01-one/parse/index.js'
import methods from './01-one/api/index.js'
import world from './world.js'


class SpaceTime {
  constructor(input, tz) {
    let res = parse(input, tz)
    //the holy UNIX moment
    this._epoch = res.epoch
    //the IANA code for the current timezone
    this.tz = res.tz
    this.isSpacetime = true
    this.started = false
    this.world = world
  }
  get epoch() {
    if (!this.started && this.started !== 0) {
      return this._epoch
    }
    return this._epoch
  }
}

// builder/factory
SpaceTime.prototype._from = function (input, tz) {
  let s = new SpaceTime(input, tz || this.tz)
  s.started = this.started
  s.world = this.world
  return s
}
Object.assign(SpaceTime.prototype, methods)

// add method aliases
const aliases = [
  ['hours', 'hour'],
  ['minutes', 'minute'],
  ['seconds', 'second'],
  ['minus', 'subtract'],
  ['plus', 'add'],
]
aliases.forEach(a => {
  SpaceTime.prototype[a[0]] = SpaceTime.prototype[a[1]]
})


export default SpaceTime