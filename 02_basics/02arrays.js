const marvel_heroes = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel_heroes.push(dc)
console.log(marvel_heroes) // array within a array [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] cosidered array as a element 
 // console.log(marvel_heroes[3][1]) // prints flash

//const allheroes = marvel_heroes.concat(dc) // it returns new array so it is important to concat two arrays in new array
// console.log(allheroes)

//spread operator

const newheroes = [...marvel_heroes,...dc]
console.log(newheroes)

const anotherArray = [1,2,3,[4,5,6],4,5,[6,[7,8,9],10]]
const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Akash"))
console.log(Array.from("Akash"))
console.log(Array.from({name : "Akash"})) // interesting case for interview


let score1 =100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))

