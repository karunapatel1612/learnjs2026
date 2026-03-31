

function sayMyName(){
console.log("K")
console.log("A")
console.log("R")
console.log("U")
console.log("N")
console.log("A")
}
// sayMyName()
// function addTwoNumber(number1, number2){
//     console.log(number1+number2);
// }

// addTwoNumber(10,20)

function addTwoNumber(number1, number2){
    let result = number1 +number2;
    return result
}

const result = addTwoNumber(2, 5)
// console.log("Result ", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter  username");
        return 
    }
    return `${username} just logged in!`
}
// console.log(loginUserMessage("Karuna"));
// console.log(loginUserMessage());

// function calculationCardPrice(...num1){ // ...num is rest operator
//     return num1
// }
// console.log(calculationCardPrice(100, 200, 300, 400)); // [ 100, 200, 300, 400 ]

function calculationCardPrice2(val1, val2,...num1){ // ...num is rest operator
    return num1
}

// console.log(calculationCardPrice2(100, 200, 300, 400)); // [ 300, 400 ]


const userData =  {
    name:"Karunna Patel",
    email:"karuna@gmail.com",
    mobile:8767564570
}

function userLogin(anyobject){
    // console.log(`${anyobject.name} has been logged in with ${anyobject.email}`)
}

userLogin(userData)