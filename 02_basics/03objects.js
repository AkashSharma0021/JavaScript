// singleton 

// object literals
//Object.create

const mySym = Symbol("key1")

const JsUser = {
    name : "Akash",
    age : 18,
    [mySym] : "myKey1",
    email:"akash@google.com",
    isLoggedIn : false,
    lastLoginDays : ["MOnday","Tuesday"]

}
console.log(JsUser.email) // this fails if we write in object like "email" : "akash@google.com"
console.log(JsUser["email"]) // we use "email " with " " as by default the properties of object are stored in string type
console.log(JsUser[mySym]) 

// Object.freeze(JsUser) // doesnt let modify the object 

JsUser.email = "akash@yahoo.com"

console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hell js user")
}
console.log(JsUser.greeting())


JsUser.greetingTwo = function(){
    console.log(`Hell js user , ${this.name}`)
}
console.log(JsUser.greetingTwo())
