const isNumber = val => {
  return typeof val === 'number' && isFinite(val)
}

// this method is replaced in /two
const parseTz = function (input, world) {
  let { zones, config } = world

  // shim-together a timezone from a numeric offset
  if (isNumber(input) === true) {
    let n = input
    if (n === 0) {
      return 'Etc/GMT'
    }
    if (n < 0) {
      return `Etc/GMT+${Math.abs(n)}`//reversed
    }
    return `Etc/GMT${n * -1}`
  }

  if (input && zones.hasOwnProperty(input)) {
    return input
  }
  if (input === 'z' || input === 'Z') {
    return 'Etc/GMT'
  }
  if (config.throwUnknownTz) {
    console.error(`Unknown timezone: '${input}'`)
    throw new Error(`Spacetime: Unknown timezone`);
  }

  return null
}
export default parseTz