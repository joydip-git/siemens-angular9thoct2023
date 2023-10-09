//console.log('welcome to JS')

//losely typed variables
var message = 'welcome to JS'
var numValue = 100
var floatValue = 12.34
var boolValue = true

console.log(message, typeof message)
console.log(numValue, typeof numValue)
console.log(floatValue, typeof floatValue)
console.log(boolValue, typeof boolValue)

message = 123
console.log(message, typeof message)

const x = 100
//x = 200
console.log(x)

//
var joydipObject = {
    //value properties
    name: 'joydip',
    isTrainer: true,
    id: 1,
    salary: 1000,

    //functional properties
    print: function () {
        return this.name + ' ' + this.id + ' ' + this.salary + ' ' + (this.isTrainer ? 'trainer' : 'trainee')
    }
}

//using dot operator (.)
console.log(joydipObject.name)
//using indexer [prop-name]
console.log(joydipObject['salary'])
const info = joydipObject.print()
console.log(info)

console.log(typeof joydipObject)

joydipObject.name = 'joy'

//extending the object
joydipObject.location = 'Bangalore'
joydipObject['department'] = 'EDU'
joydipObject.sayHello = function () {
    console.log('hello to ' + joydipObject.name)
}

console.log(joydipObject)

joydipObject.sayHello()

var data
console.log(data, typeof data)

//if(data) => if (data != undefined)

var res = data + 10
console.log(res, typeof res)

try {
    var divRes = 10 / 0
    if (divRes == Infinity) {
        var err = new Error('divisor can not be zero')
        throw err
    }
    console.log(divRes, typeof divRes)
} catch (e) {
    console.log(e)
}

// === (strict equality) and !== (strict inequality)
//if(a==b) => the value of a and b are same or not
//if(a===b) => the data type and value of a and b are same or not

//if(a!=b) => the value of a and b are different or not
//if(a !== b) => the data type and value of a and b are different or not

//functions in JS

console.log(sayHi('anil')) //<-- functions written using declaration can be called before the function
//function declaration
function sayHi(name) {
    return "Hi " + name
}
console.log(sayHi('sunil'))

//sayBye('joydip') <-- functions written using expression can't be called before the function
//function expression (inline function)
var sayBye = function (name) {
    console.log("Bye " + name)
}
sayBye('joydip')

//array in JS
var numbers = [10, 20, 30, 40]
//var numbers = new Array(10, 20, 30, 40)

numbers.push(50, 60)
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

console.log('\nafter deletion\n')
numbers.splice(1, 2)
for (var val of numbers) {
    console.log(val)
}

console.log('\nafter replacement\n')
numbers.splice(2, 2, 500, 600)
for (var index in numbers) {
    console.log(numbers[index])
}

console.log('\ncopy of values\n')
var copy = numbers.slice(0, 2)
for (const num of copy) {
    console.log(num)
}

console.log('\nafter adding at the beginning\n')
numbers.unshift(100, 200)
for (const index in numbers) {
    console.log(numbers[index])
}

//filter, sort, map, find, findIndex, reduce etc.


