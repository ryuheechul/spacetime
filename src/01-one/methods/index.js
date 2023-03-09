import getDay from './compute/getDay.js'
import parse from './parse/index.js'
import parseTz from './timezone/parseTz.js'
import fallbackTz from './timezone/fallbackTz.js'
import { monthLen, yearStart, getEpoch } from './compute/index.js'


export default {
  // from https://www.timeanddate.com/date/leapyear.html
  isLeapYear: (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0),

  getDay: (cal) => getDay(cal.year, cal.month, cal.date),

  // parse input string into epoch
  parse,

  // determine timezone
  parseTz,
  fallbackTz,

  yearStart,
  getEpoch,
}