// Name: Abhinav | Roll No: BCS2025447 H | Assignment 14
const id = setTimeout(() => {
  console.log("Not shown");
}, 1000);

clearTimeout(id);
console.log("Cancelled");
