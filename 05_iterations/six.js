const coding = ["js","ruby","java","python","cpp"]


// const value = coding.forEach( (item)=>{
//     // console.log(item)
//     return item
// })
// console.log(value); // returns undefined

//FILTER
const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.filter((num)=>num>4 )  // it returns value;
// const newnums = mynums.filter((num)=>{
//     return num>4                                  // it gives empty array if return is not used
// } )  



const newnums = []
mynums.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
})
console.log(newnums)

