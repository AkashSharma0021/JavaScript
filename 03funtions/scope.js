let a =300
if(true){
let a =10
const b =20
var c =30
console.log("Inner : ", a)
}



console.log(a) // it takes the value of c from the loop so it is not a good practice to use as if out side the loop we hace declared another value than it may differ it
