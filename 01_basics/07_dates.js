let myDate = new Date()
// console.log(myDate) // 2026-03-23T13:04:19.
// console.log(myDate.toString()) // Mon Mar 23 2026 18:35:10 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString())// Mon Mar 23 2026
// console.log(myDate.toLocaleString()) // 3/23/2026, 6:36:17 PM
// console.log(typeof myDate) // object

let myCreateDate = new Date(2023, 0, 23) // (Y M D)  In js months stat from 0
// console.log(myCreateDate) // 2023-01-22T18:30:00.000Z
// console.log(myCreateDate.toDateString()) // Mon Jan 23 2023

let myCreateDateTime = new Date(2023, 0, 23, 5, 3) // (Y M D)  In js months stat from 0
// console.log(myCreateDateTime.toLocaleString()) // 1/23/2023, 5:03:00 AM
let myCreateDate1  = new Date("2023-01-14") 
// console.log(myCreateDate1.toLocaleString()) // 1/14/2023, 5:30:00 AM

// ++++++++++++++++++Timestamp++++++++++++++++++++++
let myTimeStamp = Date.now();
// console.log(myTimeStamp); // value in milisecond like : 1774289306705
// console.log(myCreateDate1.getTime()); // 1673654400000 in milisecond
// console.log(Math.floor(Date.now()/1000)) // 1774290552 in second
let newDate = new Date();
// console.log(newDate); // 2026-03-23T18:30:21.181Z
// console.log(newDate.getMonth()); //2
// console.log(newDate.getDate()) //24
// console.log(newDate.getFullYear()) // 2026
newDate.toLocaleString('default', {
    weekday:"long",
})

