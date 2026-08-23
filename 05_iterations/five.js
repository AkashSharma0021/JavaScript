// for each loop
const coding = ["js","ruby","java","python","cp"]
coding.forEach( function (item){                 // function(item) is a call back function     
    console.log(item)
})

//  coding.forEach((item)=>{                    // we can also use arrow function
//     console.log(item);
// })

const mycoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "c++",
        languageFileName : "cpp"
    }
]
mycoding.forEach( (item)=>{
    console.log(item.languageName)
})
