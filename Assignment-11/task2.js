// Name: Abhinav | Roll No: BCS2025447 H | Assignment 11
function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
