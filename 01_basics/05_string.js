const name = "Karuna"
const repocount = 50
// console.log(name + repocount+" Value"); // old version
// console.log(`Hello My name is ${name} and my repo count is ${repocount}`); // new way to print string "backtricts"

const gameName = new String('Karuna Ptel')
// console.log(gameName[0]); //K
// console.log(gameName.__proto__);
// console.log(gameName.length); // 6
// console.log(gameName.toUpperCase()); // KARUNA PTEL
// console.log(gameName.charAt((2))); // r
// console.log(gameName.indexOf(('t'))); // 8
// console.log(gameName.indexOf(('a'))); // 1
const newString = gameName.substring(0, 4)
// console.log(newString); // Karu
const anotherStr = gameName.slice(0, 9)
// console.log(anotherStr); // Karuna Pt

const newStr = " Karuna@gmail.com   "
// console.log(newStr); //  Karuna@gmail.com   
// console.log(newStr.trim()); // Karuna@gmail.com

const url = "https://karuna.com/karunapatel%singh";
//  console.log(url.replace('patel%', '-')); // https://karuna.com/karuna-singh

// console.log(url.includes('karuna')) // true
// console.log(url.includes('sunder')) // false

const filename = new String("Karuna_Patel-PHP_Developer-12/3/2026")
console.log(filename.split('-')); // [ 'Karuna_Patel', 'PHP_Developer', '12/3/2026' ]











