const name = "Akash"
const repocount = 50
//console.log(name + repocount + "value");
console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('Akash-Sh');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString)

const anotherString = gameName.slice(-8,2);
console.log(anotherString);

const newStringOne = "  Akash   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://akash.com/akash%20sharma"
console.log(url.replace('%20','-'));
console.log(url.includes('akash'));
console.log(gameName.split('-'))
