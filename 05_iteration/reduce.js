const myNum = [1, 2,3];
// const myTotal = myNum.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and current value ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNum.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal)