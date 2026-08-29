class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`)
    }
    static createID(){
        return '123'
    }
}
const akash = new User("akash")
// console.log(akash.createID())

class teacher extends User {
    constructor(username , email){
          super(username)
          this.email=email
    }
}
const iPhone = new teacher("Iphone","i@phone.com")
iPhone.logMe();
console.log(iPhone.createID())