// Name: Abhinav | Roll No: BCS2025447 H | Assignment 12
function repeatAction(times, action) {
  for (let round = 1; round <= times; round++) {
    action(round);
  }
}

repeatAction(3, (round) => console.log("Round " + round));
