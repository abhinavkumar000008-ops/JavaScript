// Name: Abhinav | Roll No: BCS2025447 H | Assignment 12
function applyTwice(fn, value) {
  return fn(fn(value));
}

function addTen(n) {
  return n + 10;
}

console.log(applyTwice(addTen, 5));
