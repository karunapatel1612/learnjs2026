const score = 400
// console.log(score); // 400
const balance = new Number(100);
// console.log(balance); //[Number: 100]
// console.log(balance.toString()); // 100
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00
const otherNum = 1123.5678
// console.log(otherNum.toPrecision(3)); // 1.12e+3
// console.log(otherNum.toPrecision(4)); // 1123
// console.log(otherNum.toPrecision(5)); // 1123.5
const hundred = 10000000
// console.log(hundred.toLocaleString()) // 10,000,000
// console.log(hundred.toLocaleString('en-IN')) // 1,00,00,000


//+++++++++++++++++++Maths+++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.90)); // 5
// console.log(Math.ceil(4.6));// 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.sqrt(9)); // 9
// console.log(Math.min(3, 5, 1, 56)); // 1
// console.log(Math.max(3, 5, 1, 56)); // 56
// console.log(Math.random()) // 0.7708007521174406 random value
console.log((Math.random()*10)+1) // 4.7512810031389066 random value
const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max -min +1))+ min)







