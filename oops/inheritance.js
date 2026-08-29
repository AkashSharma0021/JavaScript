class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends User {
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password

    }
    
    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }

}

const chai = new teacher("akash","akash@google.com","123")
chai.addCourse()
chai.logMe()

const coffee = new User("Akash")
coffee.logMe()
console.log(chai===coffee)
console.log(chai instanceof teacher)
console.log(coffee instanceof teacher)
