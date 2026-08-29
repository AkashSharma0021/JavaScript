let myname = "Akash"
let lastname = "Sharma"
//  console.log(myname.trueLength)

let myHero = ["thor","spiderman"]
let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spidey power is ${this.spiderman}`)
    }
}

Object.prototype.Akash = function(){
    console.log(`Akash is present is all object`)
}

Array.prototype.heyakash = function(){
    console.log(`akash is hero`)
}
// heroPower.Akash()
myHero.Akash()
myHero.heyakash()
// heroPower.heyakash() // it has power only for array , not to others


// **********INHERITANCE******************

const User = {
    name : "chai",
    email : "chai@google.com"
}
const teacher = {
    makeVideo : true
}

const teacherSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignnent : 'JS assignment ',
    fullTime : true ,
    __proto__ : teacherSupport
}
// teacher.__proto__ = user  // old approach

// modern syntax

Object.setPrototypeOf(teacherSupport,teacher)

let anotherusernmae = "    chaiaurcode   "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    
    console.log(`true length is ${this.trim().length}`);
}

anotherusernmae.trueLength();
"Akash".trueLength()
"IceCream".trueLength()