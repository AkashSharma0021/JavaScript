


function sayMyName(){
       console.log("a");
       console.log("k");
       console.log("a");
       console.log("s");
}
sayMyName()

// function addTwoNumbers(number1 , number2){   // here number1 and number2 are parameters
//     console.log(number1+number2)
// }
function addTwoNumbers(number1 , number2){   // here number1 and number2 are parameters
    let result = number1 + number2
    return result  // also return number1+number2
}
const result =  addTwoNumbers(3,8) // here 3 and null are arguments
console.log("result:" ,  result)

function loginUserMessage(username){                  //we can bydefault pass username = "sam "but it will overwrite if function call has a valid argument ot it will print sam 
    if(!username){                                    // if(username===undefined)
        console.log("Please enter a valid username")
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("AKash"))  // if i dont pass any value i n function than it will return undefined
console.log(loginUserMessage())




