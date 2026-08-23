const myobject = {
    js : 'javascript',
    cpp : 'c++',
    swift : "swift by apple"
}
for(const key in myobject){
    console.log(`${key} shortcut is for ${myobject[key]}`)
}

const programming = ["js","cpp","py","c"]
for(const key in programming){
    console.log(key)    // for in returns key value like 0,1,2,3,4
}                           
for(const key in programming){
    console.log(programming[key])    // returns value of arr
}                


