let a =300
if(true){
      let a =10
      const b =20
      var c =30
      console.log("Inner : ", a)
}



    console.log(a) // it takes the value of c from the loop so it is not a good practice to use as if out side the loop we hace declared another value than it may differ it

// nested scope

function one(){
    const profilename  = "Akash"

    function two(){
        const website = "youtube"
        console.log(profilename) // can be accessed
        
    }
    //console.log(website) // cant be accessed
    two()
    }
    one()

    if(true){
        const name = "Akash"
        if(name==="Akash"){
            const website = " yahoo"
            console.log(name+website);
        }
        // console.log(website); // doesnt get access
    }
    // console.log(name) // doesnt get access

    //*****************************interesting***************************** */
    addone(5)
    function addone(num){
        return num+1

    }
    
    const addtwo = function(num){
        return num+2
    }
    addtwo(3)
