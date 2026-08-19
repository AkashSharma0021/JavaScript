//
// singleton : const tinderUser = new Object()
const tinderUser = {}
     tinderUser.id = "12025"
     tinderUser.name = "Sammy"
     tinderUser.isLoggedIn = false

     console.log(tinderUser)

     const regularUser = {
        email : "someone@gmail.com",
        fullName : {
            userFullName :{
                firstName : "Akash",
                lastName : "Sharma"
            }
        }
     }
     console.log(regularUser.fullName.userFullName.firstName)

     const obj1 = {1: "a",2:"b"}
     const obj2 = {3:"a",4:"b"}
     const obj3 = {5:"a",6:"b"}


     const obj4 = Object.assign({},obj1,obj2,obj4)
     console.log(obj4)

     const obj5 = {...obj1,...obj2}
     console.log(obj5)

     console.log(tinderUser);
     console.log(Object.keys(tinderUser))
     console.log(Object.values(tinderUser))
     console.log(Object.entries(tinderUser)) 
     console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true





