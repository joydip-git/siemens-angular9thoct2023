//class, constructor, super, extends
//const keyword
//templated string `${}`
//object destructuring
//ES6 module format (import/export statements)
//object destructuring
//spread operator

//import { <type> } from './....'

//import { addValues, subtractValues } from "./utility";
////{ addValues: addValues, subtractValues:subtractValues}
const anilObject = {
    name: 'anil',
    id: 1,
    friends: [{
        name: 'sunil',
        location: 'bangalore'
    }, {
        name: 'ramesh',
        location: 'chennai'
    }],
    salary: 1000,
    projects: ['CITA', 'SAS']
}
//const fName = anilObject.friends[1].name
//console.log(fName)

const { friends: [, { name: fName }] } = anilObject
console.log(fName)
//object destructuring
//const { salary:salary, id:id } = anilObject
const salary = anilObject.salary
const id = anilObject.id

//array destructuring
const numbers = [1, 2, 3, 4, 5, 6]
//const x = numbers[1], const y =numbers[3], const z = numbers[5]
const [, x, , y] = numbers
console.log(x, y)

//spread operator
const copyOfAnil = {
    ...anilObject,
    name: 'anil kumar'
}
const copyOfNumbers = [...numbers, 10, 20]

