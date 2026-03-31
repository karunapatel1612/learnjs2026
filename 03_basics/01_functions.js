

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
console.log(loginUserMessage());

