const score = 400
const balance =  new Number(100)


console.log(score);
console.log(balance);


console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 123.8989
console.log(otherNumber.toPrecision(3)); // gives 123 and we toPrecision(4)=> 123.8

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// *********************************MATHS*******************************//
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(3.4));
console.log(Math.ceil(3.2)); // 4
console.log(Math.floor(3.9)); // 3
console.log(Math.min(4,3,2,8,));
console.log(Math.random()) // value is between 0 to 1
console.log(Math.floor(Math.random()*10)+1) // value is between 1 to 10

const min =10
const max =20

console.log(Math.floor(Math.random() * (max-min+1)) + min)




