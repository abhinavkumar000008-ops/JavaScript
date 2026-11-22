// Name: Abhinav | Roll No: BCS2025447 H | Assignment 14
let count = 0;

const timer = setInterval(() => {
  count++;
  console.log("Tick " + count);
  if (count === 3) {
    clearInterval(timer);
  }
}, 200);
