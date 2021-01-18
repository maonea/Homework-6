const allSalaries = [];

for (let i = 0; i < 3; i++) {
    const salary = prompt("What is your salary?");
    const salaryTransform = parseInt(salary);
    allSalaries.push(salaryTransform);
}

console.log(allSalaries);

let allSalariesSum = 0;

for (let salary of allSalaries) {
    allSalariesSum += salary;
}
console.log(allSalariesSum);
console.log(allSalaries.length);

const salaryAverage = allSalariesSum / allSalaries.length;

console.log(salaryAverage);

const aboveAverage = [];

for (let i = 0; i < allSalaries.length; i++) {
    if (allSalaries[i] > salaryAverage) {
        aboveAverage.push(allSalaries[i]);
    }
}
if (aboveAverage.length === 0) {
    console.log(`None of the salaries above the average.`);
} else {
    console.log(`${aboveAverage.length} salaries are above the average.`);
}



