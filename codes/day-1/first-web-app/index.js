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
