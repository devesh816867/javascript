const name="devesh"
const repoCount=50
//console.log(name+repoCount+"value")
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName= new String('DEVESHHC')

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('H'))

const newString= gameName.substring(0,4)
console.log(newString);

const anotherString= gameName.slice(0,4)
console.log(anotherString);

const newStringOne = "    devesh    "
console.log(newStringOne.trim())

const url="https://devesh.com/devesh%20sharma"
console.log(url.replace('%20','-'))

console.log(url.includes('devesh'))

//console.log(gameName.split('e'))