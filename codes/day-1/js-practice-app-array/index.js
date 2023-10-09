function sortElements(arr, fnRef) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            var compRes = fnRef(arr[i], arr[j])
            if (compRes > 0) {
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}

function filterElements(inputArr, fnRef) {
    const result = []
    for (const val of inputArr) {
        const isTrue = fnRef(val)
        if (isTrue)
            result.push(val)
    }
    return result
}

const numbers = [1, 3, 2, 6, 4, 8, 7, 0, 9, 5]

console.log("\nEven numbers\n")
function isEven(num) {
    return num % 2 == 0 ? true : false
}
//const evenNumbers = filterElements(numbers, isEven)
const evenNumbers = numbers.filter(isEven)
for (const num of evenNumbers) {
    console.log(num)
}

console.log("\nOdd numbers\n")
const isOdd = function (num) {
    return num % 2 != 0
}
//const oddNumbers = filterElements(numbers, isOdd)
const oddNumbers = numbers.filter(isOdd)
for (const num of oddNumbers) {
    console.log(num)
}

console.log("\nnumbers greater than 5\n")
// const greaterNumbers = filterElements(
//     numbers,
//     function (num) {
//         return num > 5
//     }
// )
const greaterNumbers = numbers.filter(
    function (num) {
        return num > 5
    }
)
for (const num of greaterNumbers) {
    console.log(num)
}

console.log("\nnumbers less than 5\n")
// const lesserNumbers = filterElements(
//     numbers,
//     (num) => num < 5
// )
const lesserNumbers = numbers.filter(
    (num) => num < 5
)
for (const num of lesserNumbers) {
    console.log(num)
}
/*
function compareValues(a, b) {
    return b - a
}
//sortElements(numbers, compareValues)
numbers.sort(compareValues)
for (const num of numbers) {
    console.log(num)
}



var names = ['sunil', 'Joydip', 'anil']
function compareNames(first, second) {
    return second.toLocaleLowerCase().localeCompare(first.toLocaleLowerCase())
}
//sortElements(names, compareNames)
names.sort(compareNames)
for (const name of names) {
    console.log(name)
}
*/




