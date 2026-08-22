//Immediately invoked function expression  (turant execute krwana hai)

(function chai(){                   //named iife
    console.log(`DB CONNECTED`);
})
() ; // execution call and requires ;to end

( (name)=> {                             // unnamed or arrow
    console.log(`DB CONNECTED@ ${name}`)
})
('Akash');
