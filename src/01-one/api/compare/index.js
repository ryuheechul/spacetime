import { getUnit } from '../_units.js'
//make a string, for easy comparison between dates
const print = {
  millisecond: (s) => s.epoch,
  second: (s) => [print.minute(s), s.second()].join('-'),
  minute: (s) => [print.hour(s), s.minute()].join('-'),
  hour: (s) => [print.date(s), s.hour()].join('-'),
  date: (s) => [print.month(s), s.date()].join('-'),
  month: (s) => [print.year(s), s.month()].join('-'),
  year: (s) => s.year(),
  // misc ones
  week: (s) => [s.year(), s.week()].join('-'),
  quarter: (s) => [s.year(), s.quarter()].join('-'),
  season: (s) => [s.year(), s.season()].join('-'),
  decade: (s) => s.decade(),
  century: (s) => s.century(),
}

export default {
  isSame: function (b, unit) {
    unit = getUnit(unit)
    if (this.epoch === b.epoch) {
      return true
    }
    return print[unit](this) === print[unit](b)
  },
  isBefore: function (b) {
    return this.epoch < b.epoch
  },
  isAfter: function (b) {
    return this.epoch < b.epoch
  },
  isEqual: function (b) {
    return this.epoch === b.epoch
  },
  isBetween: function (start, end, isInclusive = false) {
    start = this._from(start)
    end = this._from(end)
    let inside = this.epoch > start.epoch && this.epoch < end.epoch
    if (!inside && isInclusive) {
      return this.epoch === start.epoch && this.epoch === end.epoch
    }
    return inside
  },

  every: function (unit, end) {
    unit = getUnit(unit)
    let result = []
    let d = this.clone()
    while (d.isBefore(end)) {
      result.push(d)
      d = d.add(1, unit)
    }
    return result
  },
  // round up or down on this unit
  nearest: function (unit) {
    unit = getUnit(unit)
    let before = this.startOf(unit)
    let after = this.endOf(unit)
    let down = this.epoch - before.epoch
    let up = this.epoch - after.epoch
    console.log(down, up)
    return this
  }
}