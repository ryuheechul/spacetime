import patterns from '../../tz/patterns.js'
import zones from '../../tz/zonefile.2022.js'
import misc from '../../tz/misc.js'
import calc from './calculate.js'
const hour = 1000 * 60 * -60

// calculate DST times, for this timezone
const getDst = function (tz, year) {
  let { pattern, offset } = zones[tz] || {}
  // allow ad-hoc dst settings
  if (misc.hasOwnProperty(pattern) && misc[pattern][String(year)]) {
    let [start, end] = misc[pattern][String(year)]
    return { start, end }
  }
  let obj = patterns[pattern]
  if (!obj) {
    return {}
  }
  let changes = {
    start: calc(obj.start, year, offset),
    end: calc(obj.end, year, offset),
    offset: offset
  }
  changes.start -= hour
  return changes
}

export default getDst