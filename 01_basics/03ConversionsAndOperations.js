let score = '33abc'

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
//NaN not a number 
// if score = null output 0;
// if score = undefined  output NaN
// if score =true output 1 if true and 0 in false
// if score "akash" as it cannot be converted to number console.log(valueINNUmber)==NaN

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn);
// 1=> true 0=>false " "=>false "akash"=>true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber );