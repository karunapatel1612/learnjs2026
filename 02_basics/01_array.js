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
// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);// it will return the value 1 to 3-1 index of value but not return the 3 of indexth value
// console.log(myn1)
// console.log("B ", myArr)


const myn2 = myArr.splice(1, 3);  // it will return the indexth 1to 3 value 
// console.log("C", myArr)
// console.log(myn2)

let language = ['java', 'php', 'pyhthon'];
let db = ['mysql', 'mongodb', 'nosql']
let fontend = ['css', 'html', 'js']

// language.push(db);
// console.log(language);

// let data = language.concat(db); // only with two array
// console.log(data);

// let all_data = [...language, ...db, ...fontend] // more then 2 array
// console.log(all_data);

let another_Array = [1, 2, 3,[4, 5, 6], 7, [6, 7,[4, 5]]]
let real_another_array = another_Array.flat(Infinity);
// console.log(real_another_array)

// console.log(Array.isArray("Karuna")) // false
// console.log(Array.from("Karuna")) // [ 'K', 'a', 'r', 'u', 'n', 'a' ]
// console.log(Array.from(name: "Karuna")) // return error

let score1 = 100
let score2 =200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]








