const myArr = [0, 1,2, 3, 4, 5]
// console.log(myArr);

const myArr2 = new Array("karuna", "patel", "manish", "Singh");
// console.log(myArr2.length) // 4
// **************** Array Method******************
// myArr.push(67);
// myArr.push(68); // add an elemnt in the last of array
// myArr.pop(); // remove the last elemnet from array

// myArr.unshift(9);//add the value in the start of array
// myArr.shift() // remove the elemntfrom the begining
// myArr.unshift(99);

// console.log(myArr.includes(9)); // check that elemt exist in array or not : false

// console.log(myArr.indexOf(4)); // if the value exist in array then return the index no. else -1

const newArr = myArr.join();
// console.log(myArr); // 0,1,3,4
// console.log(typeof newArr); // string

// slice , splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);// it will return the value 1 to 3-1 index of value but not return the 3 of indexth value
console.log(myn1)
console.log("B ", myArr)


const myn2 = myArr.splice(1, 3);  // it will return the indexth 1to 3 value 
// console.log("C", myArr)
// console.log(myn2)





