const useremail = []
if(useremail){
    console.log("Got user email");
}
else{
    console.log("dont have user email")
}

// falsy value : false , 0 , -0 ,BigInt 0n , "" , null , undefined , NaN
// truthy value : true , [] , "0" , 'false' , " " , {} , function(){}

// if(Array.length === 0 ){
    //    console.log(" empty array")
// }
 //  Nullish Coalessing Operator(??): null undefined
let val1;
val1 = 5??10
val1 = null ?? 10
console.log(val1)


// terniary operator

// condition ? true : false
const price = 90
price>=90 ? console.log("more than 90") : console.log("less than 90")