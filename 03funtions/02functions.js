function calculateCartPrice(val1,val2,...num1) {             //  ... rest operator and spread operator
    return num1

}
console.log(calculateCartPrice(200,400,500))


const user = {
    username : "Akash",
    price : 199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobject(user)

const newArray = [200,300,500,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray))