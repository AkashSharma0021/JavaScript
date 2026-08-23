// if statement 
const temperature = 41
if(temperature<50){
    console.log("executed")
}
else{
    console.log("temperature is greater than 50")
}
// >,<,>=,<=,!=,==,===,!==

const score = 200
if(score>100){
    const power = "fly"
    console.log(`user power : ${power}`);

}
// console.log(`user power : ${power}`);  cant be excessed but not if there is var 


// short hand notation 
const balance = 1000
if(balance > 500) console.log("test"),console.log("test2");  // unreadable

// nesting
if(balance <  500 ){
      console.log("less than 500")
}
else if(balance < 750){
    console.log('less than 750')
}
else{
    console.log("less than 1200")
}

const userLoggedIn = true
const debitcard = true
const fromGoogle = false
const fromEmail = true
if(userLoggedIn && debitcard && fromGoogle){
    console.log("allow to purchase")
}
if(fromGoogle || fromEmail){
    console.log("log in")
}



