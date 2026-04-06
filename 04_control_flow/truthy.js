/*

1. falsy values
=> false, 0, -0, BigInt 0N, "", null, undefined, NaN

2. truthy value
=> "0", 'false', " ", [], {}, function(){}

3. Nullish Coalescing Operator(??): null undefined
*/

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 100 // 10
// console.log(val1)