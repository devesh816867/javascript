//Primitive
//7 types: String, Number,Boolean,null, Undefined,Symbol,BigInt

/*const score= 100
const isLoggedin = false
const outsideTemp= null
let userEmail

const id = Symbol('123')
const bigNumber = 247446378963364383n

//Reference(Non Primitive)
//Array, Objects, Functions

const heros= ["hulk","ironman","thor"]
let myOb={
    name:"Devesh",
    age: 22
}

const muyFunction= function(){
    console.log("Hello World")
}*/

//Stack(primitive), heap(non primitive)

let myYoutubeName="H4Handsome"
let anotherName= myYoutubeName
anotherName= "Handsome"
console.log(myYoutubeName)
console.log(anotherName)

let userOne={
    email:"devesh@gmail.com"
}
let userTwo= userOne
userTwo.email="dev@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)