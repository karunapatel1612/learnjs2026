const tinderUser = new Object() // siglton object
tinderUser.id = "12abc"
tinderUser.name = "Jac"
tinderUser.isLoggedIN = false
// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userName:{
            firstname:"Harry",
            lastname:"Roy",
        }
    }
}

// console.log(regularUser)
const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}
const obj4 = {
    5:"a",
    6:"b"
}
// const obj3 = {obj1, obj2}
// console.log(obj3)

// const obj3 = Object.assign({},obj1, obj2, obj4)
// console.log(obj3)

// const obj3 = {...obj1,...obj2, ...obj4}
// console.log(obj3)

const user = [
    {
        id:1,
        name:"karuna"
    },
    {
        id:2,
        name:"maneesh"
    },
    {
        id:2,
        name:"navin"
    }
]
// console.log(user[1].name)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) // data type will be array
// console.log(Object.values(tinderUser)) 
// console.log(Object.entries(tinderUser)) 
console.log(tinderUser.hasOwnProperty('isLoggedIN')) // chaeck that value is exist or not




