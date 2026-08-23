// *****************************REDUCE****************************************\\
const myarr = [1,2,3,4,5]

// const mytotal = myarr.reduce(function(acc,cv){
//     console.log(`acc : ${acc} and cv : ${cv}`)
//        return acc+cv
// },0)

//arrow functio
const mytotal = myarr.reduce((acc,cv)=>acc+cv,0)
console.log(mytotal)

const course = [
    {
        course : "js",
        price : 5000
    },
    {
        course : "py",
        price : 6000
    },
    {
        course : "cpp",
        price : 7000
    },
    {
        course : "c",
        price : 7000
    },
]

const totalprice = course.reduce((acc,item)=>acc+item.price,0)
console.log(totalprice)