// singleton
// Object.create

// object literals
const mySym = Symbol("key1")
const JsUser = {
    name:"Karuna",
    "full name": "Karuna Patel",
    email:"kauna@gmail.com",
    mobile:98899764562,
    [mySym]:"myKey1",
    isLoggedIn : false,
    lastLoginDays: ["monday", "Saturaday"],
    age:24,
}
// console.log(JsUser[mySym]) // to access symbol
// console.log(JsUser.name)
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
JsUser.email = "karunapatel442@gmail.com"
// Object.freeze(JsUser);
JsUser.email = "karunapatel@gmail.com"

// console.log(JsUser.email)
// console.log(JsUser)
JsUser.greeting = function(){
    console.log("Hello Karuna")
}
// console.log(JsUser);
// console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`)
}

// console.log(JsUser.greeting2());



