// for of loop

const arr = [1,2,3,4,5]
for (const val of arr) {
    console.log(val)
}

const greeting = "Hello World"
for(const greet of greeting){
    console.log(`char is ${greet}`)
}

//Maps

const map = new Map()
map.set("IN","INDIA")
map.set("USA","AMERICA")
map.set("FR","FRANCE")

console.log(map)
for(const [key,value] of map){
    console.log(key ,':-',value)
}

const myobject = {
    'game1' : "NFS",
    'game2' : 'Spiderman'
}

