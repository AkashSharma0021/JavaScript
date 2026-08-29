function multipleBy5(num){
    return num*5;
}

multipleBy5.power = 2

console.log(multipleBy5(5))  // 25
console.log(multipleBy5.power)  // 2
console.log(multipleBy5.prototype)  // {} , so function also behaves as object 


function createUser(username , score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const tea = new createUser("tea",25)
const coffee = new createUser("coffee",50)

tea.printMe()