// ARRAY declaration
const myArr = [0,1,2,3,4,]
const myHero = ["Akash","Dad"]
const myArr2 = new Array(1,2,3,4);


console.log(myArr[0])
// Array methods 
myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(9)  // at the first
console.log(myArr)

myArr.shift()  // remove from first

console.log(myArr)

console.log(myArr.includes(9)) // boolean
console.log(myArr.indexOf(9)) 

const newArr = myArr.join()
console.log(myArr)
console.log(newArr) // convert to string
console.log(typeof newArr)

// slice , splice 

console.log("A",myArr)

const myn1 = myArr.slice(1,3) // doesnt include 3
console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3) // it includes 3 but also modifies the array and the array becomes [0,4,6]
console.log(myn2)
console.log("C",myArr)




