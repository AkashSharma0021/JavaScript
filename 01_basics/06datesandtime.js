// dates

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate)

 // let myCreatedDate = new Date(2026,0,25) // month starts from 0
  // let myCreatedDate = new Date(2026,0,25,5,3) // month starts from 0
let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth); // similaarly for day , full year etc ;

newDate.toLocaleString('default' , {
    weekday : "long"
    
})
