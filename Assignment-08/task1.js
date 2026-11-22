// Name: Abhinav | Roll No: BCS2025447 H | Assignment 8
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hi, I am " + this.name;
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}

const anita = new Teacher("Anita", "Maths");
console.log(anita.greet());
