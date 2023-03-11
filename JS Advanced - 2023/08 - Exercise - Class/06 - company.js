class Company {
    constructor() {
        this.department = {}
    }

    addEmployee(name, salary, position, department) {
        let arr = [name, salary, position, department]
        if (arr.includes('') || arr.includes(undefined) || arr.includes(null) || salary < 0) {
            throw new Error('Invalid input!')
        } else {
            if (!this.department.hasOwnProperty(department)) {
                this.department[department] = []
            }
            this.department[department].push({ name, salary, position })
            return `New employee is hired. Name: ${name}. Position: ${position}`
        }
    };

    bestDepartment() {
        for (const key in this.department) {
            let sum = 0;
            for (const currentDepartment in this.department[key]) {
                sum += this.department[key][currentDepartment].salary
            }
            let average = (sum / this.department[key].length).toFixed(2)
            this.department[key].push(Number(average).toFixed(2))
        }
        let sortedDepartmentArr = Object.entries(this.department).sort((a, b) => b[1][2] - a[1][2])
        let bestDepartment = `Best Department is: ${sortedDepartmentArr[0][0]}`
        let averageSalaryFinal = `Average salary: ${sortedDepartmentArr[0][1].pop()}`;
        let sortedEmployees = Object.entries(sortedDepartmentArr[0][1]).sort((a, b) => b[1].salary - a[1].salary === 0 ? a[1].name.localeCompare(b[1].name) : b[1].salary - a[1].salary)

        let employeesList = [];

        for (const key of sortedEmployees) {
            employeesList.push(`${key[1].name} ${key[1].salary} ${key[1].position}`)
        }
        employeesList.join('\n')
        return `${bestDepartment}\n${averageSalaryFinal}\n${employeesList.join('\n')}`
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());







