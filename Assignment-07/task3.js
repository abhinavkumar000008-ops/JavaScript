// Name: Abhinav | Roll No: BCS2025447 H | Assignment 7
function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}

Student.prototype.result = function () {
  return this.marks >= 40 ? "Pass" : "Fail";
};

const asha = new Student("Asha", 88);
console.log(asha.result());
