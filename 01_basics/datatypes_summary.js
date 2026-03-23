// 1. Primitive(call by value)
// 1.1  7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id===anotherId); // false;
const bigNumber = 3768375837873838n
// 2. Reference Tupe(Non Primitive)
//2.1 Array, Objects,Functions

const heros = ["SHAKTIMAN", "naagraj", "doga"]
let myObj = {
    name: "Karuna",
    age:"24",
};
const myFunc = function(){
    console.log("Hello world");
}

// console.log(typeof  myFunc);
// console.log(typeof  myObj);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Type Of memory: Stack(primitive), Heap(Non-Primitive)
let abcName = "teytywquwyuwyruiqw"
let anotername = abcName
anotername = "abc1";
console.log(anotername); //abc1
console.log(abcName); //teytywquwyuwyruiqw

let user = {
    name:"karuna patel",
    email:"karuna@gmail.com"
}

let user2 = user
user2.email = "nisha@gmail.com"
console.log(user2.email); //nisha@gmail.com
console.log(user.email); //nisha@gmail.com


