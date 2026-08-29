class User {
    constructor (usernmae,email,password){
        this.usernmae = usernmae;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return`${this.password}abc`
    }
    changeusername(){
        return `${this.usernmae.toUpperCase()}`
    }
}
const chai = new User("akash","akash@gmail.com","123")
console.log(chai.encryptPassword())
console.log(chai.changeusername())

//behind the scene

function User(username,email,password){
        this.usernmae = usernmae;
        this.email = email;
        this.password = password;
}

User.prototype.encryptPassword = function(){
    return`${this.password}abc`
}

const tea = User("tea","tea@google.com","456")

console.log(tea.encryptPassword())