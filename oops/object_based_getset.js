const User = {
    _email : 'akash@google.com',
    _password : "abc123",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    }
}

const akash = Object.create(User)
console.log(akash.email)