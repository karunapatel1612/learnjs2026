const user = {
    name:"Karan",
    email:"kran@gmail.com",
    welcomeMsg:function(){
        console.log(`Welcome ${this.name} to the Dashboard!`)
        console.log(this)
    }
}
// user.welcomeMsg();
// user.name = "Rahul"
// user.welcomeMsg()

// function chay(){
//     let username ="karuna"
//     console.log(this)
// }
// chay()
// const chai = ()=>{
//     let username = "naman"
//     console.log(this)
// }
// chai() // {}

// const addTwo = (num1, num2)=>{
//     return num1+ num2 // explisit return
// }


// const addTwo = (num1, num2)=>   num1+ num2
const addTwo = (num1, num2)=>  ( num1+ num2) // implicit return




console.log(addTwo(3, 4))