function filterSalaries(...salaries) {
    let newSalary =[]
    for (salary of salaries) {
        if (salary < 4000) {
            salary += 500
        }
        else if(salary >= 4000){
            salary -=200
        }
        newSalary.push(salary)
    }
    return newSalary
}
console.log(filterSalaries(1000,2000,3000,4000,5000,6000,7000))