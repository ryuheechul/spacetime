import test from 'tape'
import { getYear, getStart } from '../../src/01-one/compute/_lib/yearStart.js'

// jan 1 utc
let years = [
  ['1970', 0],
  ['1971', 31536000000],
  ['1972', 63072000000],
  ['1973', 94694400000],
  ['1974', 126230400000],
  ['1975', 157766400000],
  ['1976', 189302400000],
  ['1977', 220924800000],
  ['1978', 252460800000],
  ['1979', 283996800000],
  ['1980', 315532800000],
  ['1981', 347155200000],
  ['1982', 378691200000],
  ['1983', 410227200000],
  ['1984', 441763200000],
  ['1985', 473385600000],
  ['1986', 504921600000],
  ['1987', 536457600000],
  ['1988', 567993600000],
  ['1989', 599616000000],
  ['1990', 631152000000],
  ['1991', 662688000000],
  ['1992', 694224000000],
  ['1993', 725846400000],
  ['1994', 757382400000],
  ['1995', 788918400000],
  ['1996', 820454400000],
  ['1997', 852076800000],
  ['1998', 883612800000],
  ['1999', 915148800000],
  ['2000', 946684800000],
  ['2001', 978307200000],
  ['2002', 1009843200000],
  ['2003', 1041379200000],
  ['2004', 1072915200000],
  ['2005', 1104537600000],
  ['2006', 1136073600000],
  ['2007', 1167609600000],
  ['2008', 1199145600000],
  ['2009', 1230768000000],
  ['2010', 1262304000000],
  ['2011', 1293840000000],
  ['2012', 1325376000000],
  ['2013', 1356998400000],
  ['2014', 1388534400000],
  ['2015', 1420070400000],
  ['2016', 1451606400000],
  ['2017', 1483228800000],
  ['2018', 1514764800000],
  ['2019', 1546300800000],
  ['2020', 1577836800000],
  ['2021', 1609459200000],
  ['2022', 1640995200000],
  ['2023', 1672531200000],
  ['2024', 1704067200000],
  ['2025', 1735689600000],
  ['2026', 1767225600000],
  ['2027', 1798761600000],
  ['2028', 1830297600000],
  ['2029', 1861920000000],
  ['2030', 1893456000000],
]

test('get jan-1 epochs', (t) => {
  years.forEach(a => {
    let year = Number(a[0])
    t.equal(getStart(year), a[1], '[getEpoch] ' + year)
  })
  t.end()
})

test('get jan-1 epochs', (t) => {
  years.forEach(a => {
    let epoch = a[1] + 50000 //+50s
    t.equal(getYear(epoch).year, Number(a[0]), '[getYear] ' + a[0])
  })
  t.end()
})


