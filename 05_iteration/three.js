// [{}, {}, {}]
// ["", "", ""]

// const arr = [1, 3, 5, 6, 2, 4]
// for (const num of arr) {
//      console.log(num)
// }

// const greeting = "Hello Karuna";
// for (const greet of greeting) {
//     if(greet == " "){
//         continue
//     }
//     console.log(`Each char is ${greet}`)
    
// }

// Maps : The map holds key-value pairs and remembers the original insertion order of key  (only hold the unique value)

const map = new Map()
map.set("state", "UP")
map.set("name", "Karuna Patel")
map.set("Email", "karunapatel@gmail.com")
map.set("state", "UP")
// console.log(map)

for(const [key, value] of map){
    // console.log(key, ":-", value)
}


