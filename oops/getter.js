class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}akash`
    }
    set password(value){
        this._password = value
    }
}
const akash = new User("akash@google.com","abc")
console.log(akash.password)
console.log(akash.email)