const marvelHeros=['thor','spidrman','ionman']
const dcHeros=['superman','flash','batman']

//marvelHeros.push(dcHeros)
//console.log(marvelHeros)
//console.log(marvelHeros[3][1])

const allHeros= marvelHeros.concat(dcHeros)
//console.log(allHeros)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const another_arr2=another_array.flat(Infinity)
console.log(another_arr2)



console.log(Array.isArray("devesh"))
console.log(Array.from("devesh"))
console.log(Array.from({name:"devesh"}))  //interesting


let sc1=100
let sc2=200
let sc3=300

console.log(Array.of(sc1,sc2,sc3))