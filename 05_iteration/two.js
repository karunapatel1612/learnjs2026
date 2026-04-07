const obj = {
    name:"Karuna",
    email:"karuna@gmal.com",
    mobile:"6478563784"
}

for (const key in obj) {
   console.log(`${key} shortcut is for ${obj[key]}`); 
}

const arr = ['java', 'php', 'python', 'nodejss']
for(const key in arr){
    console.log(arr[key])
}
