import spacetime from './src/01-one/index.js'
// import { DateTime } from "luxon";
// import old from './old/src/index.js'


// 'Asia/Riyadh'
// let a = spacetime('2023-01-01')//.minus(0, 'days')
// let b = old('2023-01-01')//.minus(0, 'days')


let s = spacetime('1999-03-28T21:42:00.000', 'Etc/GMT+132')
console.log(s.hour())


// let a = spacetime('March 28, 1999 20:42:00')
// a = a.add(45, 'months')
// console.log(a.iso())