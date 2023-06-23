abstract class Employee {
  public name: string;
  public age: number;
  public salary: number;
  public tasks: string[];

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.salary = 0;
    this.tasks = [];
  }
  public work(): void {
    const currentTask = this.tasks.shift();
    console.log(this.name + currentTask);
  }

  public collectSalary(): void {
    console.log(`${this.name} received ${this.getSalary()} this month.`);
  }

  public getSalary(): number {
    return this.salary;
  }
}

class Junior extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    this.tasks = [`${name} is working on a simple task`]
  }
}

class Senior extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    this.tasks = [
      `${name} is working on a complicated task.`,
      `${name} is taking time off work.`,
      `${name} is supervising junior workers.`,
    ];
  }
}

class Manager extends Employee {
    public divident: number;

    constructor(name: string, age: number){
        super(name, age);
        this.tasks = [
            `${name} scheduled a meeting.`,
            `${name} is preparing a quarterly report.`
        ];
    }

    getSalary(): number {
        return this.salary + this.divident
    }
}

const junior = new Junior('Atanas', 23);

console.log(junior.getSalary())