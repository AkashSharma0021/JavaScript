const user = {
    username : "Akash",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log("Got user details")
        // console.log(`username : ${username}`)  this gives userundefined as we didnt used this 
        console.log(this);
    }

}
console.log(user.username);
console.log(user.getUserDetails());


// const promiseOne = new Promise()
// const date = new Date()   // here new is the constructor function 

function User(username , loginCount , isLoggedIn){
    this.username =  username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

   return this  // it is implicitly defined so not necessary to write return 
}

// const UserOne = User("Akash",12,true)
// const UserTwo = User("Aashu",11,false)
// console.log(UserOne)  // it will print the information of UserTwo as it overwrites the first one so we use new keyword

const UserOne = new User("Akash",12,true) 
const UserTwo = new User("Aashu",11,false)
console.log(UserOne.constructor)
console.log(UserOne) 
console.log(UserTwo) 


