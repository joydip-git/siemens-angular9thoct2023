//import
import { Developer } from "./models/developer";
import { Hr } from "./models/hr";

//create array to store employees
const employees = []

//create some sample employee objects
const anilDeveloper = new Developer(1, "joydip", 1000, 2000, 3000, 4000)
const dineshDeveloper = new Developer(4, "dinesh", 1500, 2500, 3500, 4500)
const sunilHr = new Hr(3, "anil", 2000, 3000, 4000, 5000)
const kiranHr = new Hr(2, "kiran", 1000, 2000, 2100, 3100)

//add the sample employees in the array
employees.push(anilDeveloper, dineshDeveloper, sunilHr, kiranHr)

console.log('\nall employees\n')
//iterate through the array and calculate and print the salary
for (const emp of employees) {
    const salaryInfo = `${emp.name} got salary of ${emp.calculateSalary()}`
    console.log(salaryInfo)
}

//sort the employees based on the name of the employee
employees.sort(
    function (emp1, emp2) {
        return emp1
            .name
            .toLocaleLowerCase()
            .localeCompare(emp2.name.toLocaleLowerCase())
    }
)
console.log('\nemployees sorted by name\n')
employees
    .forEach(
        function (emp) {
            console.log(`${emp.name}:${emp.calculateSalary()}`)
        }
    )

//filter the employees, whose salary is more than 10000
const filteredEmployees =
    employees.filter(
        function (emp) {
            return emp.calculateSalary() > 10000
        }
    )
console.log('\nemployees with salary more than 10000\n')
filteredEmployees.forEach(
    function (emp) {
        console.log(`${emp.name}:${emp.calculateSalary()}`)
    }
)