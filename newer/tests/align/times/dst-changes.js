// 1hr change march 12 -> back nov 5th
let toronto = {
  spring: [
    // spring
    [1678600800000, "2023-03-12T01:00:00.000", "America/Toronto"],
    [1678602000000, "2023-03-12T01:20:00.000", "America/Toronto"],
    [1678603200000, "2023-03-12T01:40:00.000", "America/Toronto"],
    //(skip 2pm)
    [1678604400000, "2023-03-12T03:00:00.000", "America/Toronto"],
    [1678605600000, "2023-03-12T03:20:00.000", "America/Toronto"],
    [1678606800000, "2023-03-12T03:40:00.000", "America/Toronto"],
  ],
  fall: [
    [1699156800000, "2023-11-05T00:00:00.000", "America/Toronto"],
    [1699158000000, "2023-11-05T00:20:00.000", "America/Toronto"],
    [1699159200000, "2023-11-05T00:40:00.000", "America/Toronto"],
    [1699160400000, "2023-11-05T01:00:00.000", "America/Toronto"],
    [1699161600000, "2023-11-05T01:20:00.000", "America/Toronto"],
    [1699162800000, "2023-11-05T01:40:00.000", "America/Toronto"],
    // (repeat 1am)
    [1699164000000, "2023-11-05T01:00:00.000", "America/Toronto"],
    [1699165200000, "2023-11-05T01:20:00.000", "America/Toronto"],
    [1699166400000, "2023-11-05T01:40:00.000", "America/Toronto"],
    [1699167600000, "2023-11-05T02:00:00.000", "America/Toronto"],
    [1699168800000, "2023-11-05T02:20:00.000", "America/Toronto"],
    [1699170000000, "2023-11-05T02:40:00.000", "America/Toronto"],
    [1699171200000, "2023-11-05T03:00:00.000", "America/Toronto"],
    [1699172400000, "2023-11-05T03:20:00.000", "America/Toronto"],
    [1699173600000, "2023-11-05T03:40:00.000", "America/Toronto"]
  ]

}
// march 27th 1am, oct 30th 2am
let lisbon = {
  spring: [
    [1648339200000, "2022-03-27T00:00:00.000", "Europe/Lisbon"],
    [1648340400000, "2022-03-27T00:20:00.000", "Europe/Lisbon"],
    [1648341600000, "2022-03-27T00:40:00.000", "Europe/Lisbon"],
    // (skip 1am)
    [1648342800000, "2022-03-27T02:00:00.000", "Europe/Lisbon"],
    [1648344000000, "2022-03-27T02:20:00.000", "Europe/Lisbon"],
    [1648345200000, "2022-03-27T02:40:00.000", "Europe/Lisbon"],
    [1648346400000, "2022-03-27T03:00:00.000", "Europe/Lisbon"],
    [1648347600000, "2022-03-27T03:20:00.000", "Europe/Lisbon"],
  ],
  fall: [
    [1667084400000, "2022-10-30T00:00:00.000", "Europe/Lisbon"],
    [1667085600000, "2022-10-30T00:20:00.000", "Europe/Lisbon"],
    [1667086800000, "2022-10-30T00:40:00.000", "Europe/Lisbon"],
    [1667088000000, "2022-10-30T01:00:00.000", "Europe/Lisbon"],
    [1667089200000, "2022-10-30T01:20:00.000", "Europe/Lisbon"],
    [1667090400000, "2022-10-30T01:40:00.000", "Europe/Lisbon"],
    // (repeat 1am)
    [1667091600000, "2022-10-30T01:00:00.000", "Europe/Lisbon"],
    [1667092800000, "2022-10-30T01:20:00.000", "Europe/Lisbon"],
    [1667094000000, "2022-10-30T01:40:00.000", "Europe/Lisbon"],
    [1667095200000, "2022-10-30T02:00:00.000", "Europe/Lisbon"],
    [1667096400000, "2022-10-30T02:20:00.000", "Europe/Lisbon"],
    [1667097600000, "2022-10-30T02:40:00.000", "Europe/Lisbon"],
    [1667098800000, "2022-10-30T03:00:00.000", "Europe/Lisbon"],
    [1667100000000, "2022-10-30T03:20:00.000", "Europe/Lisbon"],
  ]
}

let melbourne = {
  spring: [
    [1270305000000, "2010-04-04T01:30:00.000", "Australia/Melbourne"],
    [1270306200000, "2010-04-04T01:50:00.000", "Australia/Melbourne"],
    [1270307400000, "2010-04-04T02:10:00.000", "Australia/Melbourne"],
    [1270308600000, "2010-04-04T02:30:00.000", "Australia/Melbourne"],
    [1270309800000, "2010-04-04T02:50:00.000", "Australia/Melbourne"],
    // repeat 2am
    [1270311000000, "2010-04-04T02:10:00.000", "Australia/Melbourne"],
    [1270312200000, "2010-04-04T02:30:00.000", "Australia/Melbourne"],
    [1270313400000, "2010-04-04T02:50:00.000", "Australia/Melbourne"],
    [1270314600000, "2010-04-04T03:10:00.000", "Australia/Melbourne"],
    [1270315800000, "2010-04-04T03:30:00.000", "Australia/Melbourne"],
    [1270317000000, "2010-04-04T03:50:00.000", "Australia/Melbourne"],
    [1270318200000, "2010-04-04T04:10:00.000", "Australia/Melbourne"],
  ],
  fall: [
    [1286028600000, "2010-10-03T00:10:00.000", "Australia/Melbourne"],
    [1286029800000, "2010-10-03T00:30:00.000", "Australia/Melbourne"],
    [1286031000000, "2010-10-03T00:50:00.000", "Australia/Melbourne"],
    [1286032200000, "2010-10-03T01:10:00.000", "Australia/Melbourne"],
    [1286033400000, "2010-10-03T01:30:00.000", "Australia/Melbourne"],
    [1286034600000, "2010-10-03T01:50:00.000", "Australia/Melbourne"],
    // (skip 2am)
    [1286035800000, "2010-10-03T03:10:00.000", "Australia/Melbourne"],
    [1286037000000, "2010-10-03T03:30:00.000", "Australia/Melbourne"],
    [1286038200000, "2010-10-03T03:50:00.000", "Australia/Melbourne"],
    [1286039400000, "2010-10-03T04:10:00.000", "Australia/Melbourne"]
  ]
}
export { toronto, lisbon, melbourne }