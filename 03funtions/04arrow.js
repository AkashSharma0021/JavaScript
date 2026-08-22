const user = {
    username : "akash",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`)
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()
console.log(this);// it refers to empty in this state and in browser it shows window

function chai(){
    let username = "akash"
    console.log(this.username);
}
chai()

const code = ()=>{
    let username = "akash"
    console.log(this);
}
code()

const addtwo = (num1,num2) => {
    return num1+num2           // explicict return
}
console.log(addtwo(3,4))

const multwo = (num1,num2) =>  (num1*num2 )// implicit return 
console.log(multwo(3,4))

const subtwo = (num1,num2) =>  ({username : "Akash"} )// implicit return 
console.log(subtwo(7,4))



