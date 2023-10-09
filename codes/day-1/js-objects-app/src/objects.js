const anilObject = {
    name: 'Anil Kumar',
    id: 1,
    salary: 1000,
    print: function () {
        return `
        Name: ${this.name},
        Id:${this.id},
        Salary:${this.salary}
        `
    }
}

//constructor function
/*
function person(idVal, nameVal, salarayVal) {
    var x = 100
    this.name = nameVal
    this.id = idVal
    this.salary = salarayVal
    this.print = function () {
        return `
        Name: ${this.name},
        Id:${this.id},
        Salary:${this.salary}
        `
    }
    //return this
}
*/

class Person {
    constructor(idVal, nameVal, salarayVal) {
        this.name = nameVal
        this.id = idVal
        this.salary = salarayVal
    }
    print() {
        return `
        Name: ${this.name},
        Id:${this.id},
        Salary:${this.salary}
        `
    }
}

class Trainer extends Person {
    constructor(idVal, nameVal, salarayVal, subjectVal) {
        super(idVal, nameVal, salarayVal)
        this.subject = subjectVal
    }
    print() {
        return `
        ${super.print()},
        Subject:${this.subject}
        `
    }
}

//const anilPerson = new Person(1, 'anil kumar', 1000)
const anilPerson = new Trainer(1, 'anil kumar', 1000, 'JS')
console.log(anilPerson.name)
console.log(anilPerson['salary'])
console.log(anilPerson.print())

anilPerson.location = 'Chennai'
console.log(anilPerson)